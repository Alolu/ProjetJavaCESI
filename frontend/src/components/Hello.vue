<template>
  <div>
    <v-toolbar class="no-prin" color="white">
      <v-toolbar-title>Clay Dashboard</v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-toolbar>
    <v-container class="no-prin">
      <v-content>
        <section>
          <v-card>
            <v-card-title>
              Données des lots
              <v-spacer />
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="selectedDate"
                    label="Periode"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker type="month" v-model="selectedDate" @input="menu2 = false"></v-date-picker>
              </v-menu>
              <v-btn
                :href="'data:text/json;charset=utf-8,'+ exportData()"
                :download="'data-lots-'+selectedDate+'.json'"
                text
                icon
              >
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </v-card-title>
            <v-expansion-panels multiple accordion :value="[0]">
              <v-expansion-panel>
                <v-expansion-panel-header v-ripple class="title">Tableau récapitulatif</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col>
                      <v-chip
                          close
                          @click:close="del(ke)"
                          v-for="(fil,ke) in filtersLot"
                          :key="ke"
                        >{{ke+":"+fil}}</v-chip>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-file-input
                        accept="application/JSON"
                        label="Importer des lots..."
                        @change="importData"
                      />
                    </v-col>
                    <v-spacer />
                    <v-col cols="3">
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Rechercher..."
                        single-line
                        hide-details
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-data-table
                    :search="search"
                    :headers="headers"
                    :items="lotFilt"
                    :items-per-page="5"
                    class="elevation-1"
                  >
                    <template v-slot:item.result="{ item }">{{ item.result }}</template>
                    <template v-slot:item.quality="{ item }">
                      <v-chip
                        :class="{
                                red: item.quality == 'Low', 
                                'orange lighten-2': item.quality == 'Medium', 
                                green: item.quality == 'High'
                            }"
                        v-text="item.quality"
                        text-color="white"
                      />
                    </template>
                    <template v-slot:item.performance="{ item }">
                      <v-chip
                        :class="{
                                red: item.performance == 'Low', 
                                'orange lighten-2': item.performance == 'Medium', 
                                green: item.performance == 'High'
                            }"
                        v-text="item.performance"
                        text-color="white"
                      />
                    </template>
                    <template v-slot:item.color="{ item }">
                      <v-chip
                        :class="item.color.toLowerCase() + ' darken-1'"
                        v-text="item.color"
                        text-color="white"
                      />
                    </template>
                  </v-data-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header v-ripple class="title">Graphique récapitulatif</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-btn @click="print" text icon>
                    <v-icon>print</v-icon>
                  </v-btn>
                  <v-tabs grow>
                    <v-tab>Qualité/Component</v-tab>
                    <v-tab>Qualité/Lot</v-tab>
                    <v-tab>Performance/Layout</v-tab>
                    <v-tab-item>
                      <GChart type="BarChart" :data="getCompChartData()" :options="chartOptions" />
                    </v-tab-item>
                    <v-tab-item>
                      <GChart type="PieChart" :data="getQualityPercentage()" />
                    </v-tab-item>
                    <v-tab-item>
                      <GChart type="AreaChart" :data="getPerfToLayout()" :options="chartOptions" />
                    </v-tab-item>
                  </v-tabs>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </section>
      </v-content>
    </v-container>
    <v-container class="prin">
      <v-card>
        <v-card-title>Comparatif Qualité/Component : {{ selectedDate }}</v-card-title>
        <v-card-text>
          <GChart type="BarChart" :data="getCompChartData()" :options="chartOptions" />
        </v-card-text>
        <v-card-title>Comparatif Qualité/Lots : {{ selectedDate }}</v-card-title>
        <v-card-text>
          <GChart type="PieChart" :data="getQualityPercentage()" />
        </v-card-text>
        <v-card-title>Comparatif Performance/Layout : {{ selectedDate }}</v-card-title>
        <v-card-text>
          <GChart type="AreaChart" :data="getPerfToLayout()" :options="chartOptions" />
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import api from "./backend-api";
export default {
  data() {
    return {
      selectedDate: "2014-01",
      lots: [],
      lotFilt: [],
      filtersLot: {},
      menu2: "",
      search: "",
      headers: [
        {
          text: "#",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "Color", value: "color" },
        { text: "Timecode (ms)", value: "timecode" },
        { text: "Layout", value: "layout" },
        { text: "Pressure", value: "pressure" },
        { text: "Component", value: "component" },
        { text: "Quality", value: "quality" },
        { text: "Performance", value: "performance" },
        { text: "Result", value: "result" },
        { text: "Offset", value: "offset" },
        { text: "Date", value: "date" }
      ],
      chartData: [
        ["Machine", "Quality", "Performance"],
        ["Yotis1", 1000, 400],
        ["Yotis2", 1000, 400]
      ],
      chartOptions: {
        chart: { 
          title: "Performance des machines",
          subtitle: "Comparateur Qualite-Performance/Machine",
          theme: "maximized"
        }
      }
    };
  },
  methods: {
    async importData(file){
      if(!file) return false
      let fd = new FormData();
      fd.append('lotData', file)
      await api.sendLot(fd)
      let nlots = await api.getLots();
      nlots = nlots.data.map(x=>{
        x.color = x.colorbound
        x.id = x.lot
        delete x.colorbound
        delete x.lot 
        return x
      });
      this.lots = nlots
      this.lotFilt = this.monthBatch.filter(x => {
        return Object.keys(this.filtersLot).every(y => {
          return this.filtersLot[y].includes(x[y]);
        });
      });
      console.log(this.lots)
    },
    del(ke){
      console.log(ke)
      this.$delete(this.filtersLot,ke)
      this.lotFilt = this.monthBatch.filter(x => {
        return Object.keys(this.filtersLot).every(y => {
          return this.filtersLot[y].includes(x[y]);
        });
      });
    },
    exportData() {
      let dataExp = {
        month: this.selectedDate,
        lots: []
      };
      this.monthBatch.forEach(lot => {
        dataExp.lots.push({
          lot: lot.id,
          quality: lot.quality,
          performance: lot.performance,
          color: lot.color,
          component: lot.component
        });
      });
      return encodeURIComponent(JSON.stringify(dataExp));
    },
    getCompChartData() {
      let compList = [];
      let chartData = [["Quality", "High", "Medium", "Low"]];
      let batch = this.monthBatch;
      batch.forEach(lot => {
        if (!compList.includes(lot.component)) compList.push(lot.component);
      });

      compList.sort();
      compList.forEach(comp => {
        let compData = [comp];
        let qualList = {
          High: 0,
          Medium: 0,
          Low: 0
        };
        let compBatch = batch.filter(lot => lot.component == comp);
        compBatch.forEach(lot => {
          qualList[lot.quality]++;
        });
        chartData.push(compData.concat(Object.values(qualList)));
      });
      return chartData;
    },
    getQualityPercentage() {
      let rates = {
        High: 0,
        Medium: 0,
        Low: 0
      };
      this.monthBatch.forEach(lot => rates[lot.quality]++);
      return [
        ["Quality", "Percentage"],
        ["High", rates.High],
        ["Medium", rates.Medium],
        ["Low", rates.Low]
      ];
    },
    getPerfToLayout() {
      let chartData = [["Layout", "High", "Medium", "Low"]];
      let layoutList = {};
      this.monthBatch.forEach(lot => {
        if (!layoutList[lot.layout]) {
          layoutList[lot.layout] = {
            High: 0,
            Medium: 0,
            Low: 0
          };
        }
        layoutList[lot.layout][lot.performance]++;
      });

      Object.keys(layoutList).forEach(layout => {
        chartData.push([layout].concat(Object.values(layoutList[layout])));
      });

      return chartData;
    },
    print() {
      window.print();
    }
  },
  async mounted() { 
    document.title = "Récapitulatif des lots";
    var lot = await api.getLots();
    this.lots = lot.data.map(x=>{
      x.color = x.colorbound
      x.id = x.lot
      delete x.colorbound
      delete x.lot 
      return x
    });
    this.lotFilt = this.lots;
  },
  computed: {
    monthBatch() {
      let result = this.lots.filter(lot =>
        lot.date.includes(this.selectedDate)
      );
      this.lotFilt = result.filter(x => {
        return Object.keys(this.filtersLot).every(y => {
          return this.filtersLot[y].includes(x[y]);
        });
      });
      return result;
    }
  },
  watch: {
    search: function(val) {
      let modelList = [];
      this.headers.forEach(h => modelList.push(h.value));
      let pts = val.split(":");
      if (pts.length == 2 && modelList.includes(pts[0])) {
        if (pts[1].substr(-1) == " ") {
          this.filtersLot[pts[0]] = pts[1].slice(0, -1);
          this.search = "";
        }
      }

      this.lotFilt = this.monthBatch.filter(x => {
        return Object.keys(this.filtersLot).every(y => {
          return this.filtersLot[y].includes(x[y]);
        });
      });
    }
  }
};
</script>

<style scoped>
.prin {
  display: none;
}
@media print {
  .no-prin {
    display: none;
  }
  .prin {
    display: block;
  }
}
</style>
