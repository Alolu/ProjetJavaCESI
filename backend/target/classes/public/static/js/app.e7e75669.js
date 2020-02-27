(function(t){function e(e){for(var o,s,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],r[s]&&p.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(o=!1)}o&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},r={app:0},n=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("router-view")],1)],1)},n=[],s={name:"App",data(){return{}}},i=s,l=a("2877"),c=a("6544"),u=a.n(c),d=a("7496"),p=a("a75b"),h=Object(l["a"])(i,r,n,!1,null,null,null),f=h.exports;u()(h,{VApp:d["a"],VContent:p["a"]});var m=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{staticClass:"no-prin",attrs:{color:"white"}},[a("v-toolbar-title",[t._v("Clay Dashboard")]),a("div",{staticClass:"flex-grow-1"})],1),a("v-container",{staticClass:"no-prin"},[a("v-content",[a("section",[a("v-card",[a("v-card-title",[t._v("\n            Données des lots\n            "),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-text-field",t._g({attrs:{label:"Periode","prepend-icon":"event",readonly:""},model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}},o))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[a("v-date-picker",{attrs:{type:"month"},on:{input:function(e){t.menu2=!1}},model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}})],1),a("v-btn",{attrs:{href:"data:text/json;charset=utf-8,"+t.exportData(),download:"data-lots-"+t.selectedDate+".json",text:"",icon:""}},[a("v-icon",[t._v("mdi-download")])],1)],1),a("v-expansion-panels",{attrs:{multiple:"",accordion:"",value:[0]}},[a("v-expansion-panel",[a("v-expansion-panel-header",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"title"},[t._v("Tableau récapitulatif")]),a("v-expansion-panel-content",[a("v-row",[a("v-col",t._l(t.filtersLot,function(e,o){return a("v-chip",{key:o,attrs:{close:""},on:{"click:close":function(e){return t.del(o)}}},[t._v(t._s(o+":"+e))])}),1)],1),a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-file-input",{attrs:{accept:"application/JSON",label:"Importer des lots..."},on:{change:t.importData}})],1),a("v-spacer"),a("v-col",{attrs:{cols:"3"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Rechercher...","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{search:t.search,headers:t.headers,items:t.lotFilt,"items-per-page":5},scopedSlots:t._u([{key:"item.result",fn:function(e){var a=e.item;return[t._v(t._s(a.result))]}},{key:"item.quality",fn:function(e){var o=e.item;return[a("v-chip",{class:{red:"Low"==o.quality,"orange lighten-2":"Medium"==o.quality,green:"High"==o.quality},attrs:{"text-color":"white"},domProps:{textContent:t._s(o.quality)}})]}},{key:"item.performance",fn:function(e){var o=e.item;return[a("v-chip",{class:{red:"Low"==o.performance,"orange lighten-2":"Medium"==o.performance,green:"High"==o.performance},attrs:{"text-color":"white"},domProps:{textContent:t._s(o.performance)}})]}},{key:"item.color",fn:function(e){var o=e.item;return[a("v-chip",{class:o.color.toLowerCase()+" darken-1",attrs:{"text-color":"white"},domProps:{textContent:t._s(o.color)}})]}}])})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"title"},[t._v("Graphique récapitulatif")]),a("v-expansion-panel-content",[a("v-btn",{attrs:{text:"",icon:""},on:{click:t.print}},[a("v-icon",[t._v("print")])],1),a("v-tabs",{attrs:{grow:""}},[a("v-tab",[t._v("Qualité/Component")]),a("v-tab",[t._v("Qualité/Lot")]),a("v-tab",[t._v("Performance/Layout")]),a("v-tab-item",[a("GChart",{attrs:{type:"BarChart",data:t.getCompChartData(),options:t.chartOptions}})],1),a("v-tab-item",[a("GChart",{attrs:{type:"PieChart",data:t.getQualityPercentage()}})],1),a("v-tab-item",[a("GChart",{attrs:{type:"AreaChart",data:t.getPerfToLayout(),options:t.chartOptions}})],1)],1)],1)],1)],1)],1)],1)])],1),a("v-container",{staticClass:"prin"},[a("v-card",[a("v-card-title",[t._v("Comparatif Qualité/Component : "+t._s(t.selectedDate))]),a("v-card-text",[a("GChart",{attrs:{type:"BarChart",data:t.getCompChartData(),options:t.chartOptions}})],1),a("v-card-title",[t._v("Comparatif Qualité/Lots : "+t._s(t.selectedDate))]),a("v-card-text",[a("GChart",{attrs:{type:"PieChart",data:t.getQualityPercentage()}})],1),a("v-card-title",[t._v("Comparatif Performance/Layout : "+t._s(t.selectedDate))]),a("v-card-text",[a("GChart",{attrs:{type:"AreaChart",data:t.getPerfToLayout(),options:t.chartOptions}})],1)],1)],1)],1)},g=[],y=a("bc3a"),b=a.n(y),w=a("a925");o["default"].use(w["a"]);const C={en:{application:"Application",login:"Sign in",register:"Sign up",email:"Email",enterYourEmail:"Enter your email address",password:"Password",confirmPassword:"Confirm password",title:"Title",projectName:"Project name",companyName:"Company name",getStarted:"Get started",companyInfo:"Company info",contacts:"Contact us",remember:"Remember me?",forgotPassword:"Forgot password?",dontHaveAccount:"Dont' have an account?",haveAccount:"Already have an account?",emailRequired:"Email is required.",emailNotValid:"Email is not valid.",passwordRequired:"Password is required.",passwordFormat:"Password should contains min 8 characters including a number and a uppercase letter.",passwordMatch:"The password you entered don't match.",connectionLost:"The connection to the server has been lost.",sendPasswordUpdateEmail:"Send password update email",updatePassword:"Update password",returnToLogin:"Return to login",close:"Close",home:"Home",contact:"Contacts",logout:"Logout",language:"Language",success:"Success",error:"Error"},ru:{application:"Приложение",login:"Войти",register:"Создать аккаунт",email:"Почта",enterYourEmail:"Введите ваш адрес почты",password:"Пароль",confirmPassword:"Подтвердите пароль",title:"Заголовок",projectName:"Имя проекта",companyName:"Имя компании",getStarted:"Начать",companyInfo:"Информация",contacts:"Свяжитесь с нами",remember:"Запомнить меня?",forgotPassword:"Забыли пароль?",dontHaveAccount:"Еще нет аккаунта?",haveAccount:"Уже есть аккаунт?",emailRequired:"Введите свою почту.",emailNotValid:"Введите существующий адрес почты.",passwordRequired:"Введите пароль.",passwordFormat:"Пароль должен содержать минимум 8 символов включая цифру и заглавную букву.",passwordMatch:"Пароли не совпадают.",connectionLost:"Соединение с сервером разорвано.",sendPasswordUpdateEmail:"Отправить письмо для обновления пароля",updatePassword:"Обновить пароль",returnToLogin:"Вернуться на страницу входа",close:"Закрыть",home:"Домой",contact:"Контакты",logout:"Выйти",language:"Язык",success:"Успешно",error:"Ошибка"}},x=new w["a"]({locale:localStorage.getItem("locale")||navigator.language.split("-")[0],fallbackLocale:"en",messages:C});var L=x;const P=b.a.create({baseURL:"http://localhost:8080/api",params:{locale:L.locale},timeout:1e4});var _={getLots(){return P.get("/get/lots")},sendLot(t){return P.post("/post/lot",t,{"Content-type":"multipart/form-data"})}},V={data(){return{selectedDate:"2014-01",lots:[],lotFilt:[],filtersLot:{},menu2:"",search:"",headers:[{text:"#",align:"left",sortable:!1,value:"id"},{text:"Color",value:"color"},{text:"Timecode (ms)",value:"timecode"},{text:"Layout",value:"layout"},{text:"Pressure",value:"pressure"},{text:"Component",value:"component"},{text:"Quality",value:"quality"},{text:"Performance",value:"performance"},{text:"Result",value:"result"},{text:"Offset",value:"offset"},{text:"Date",value:"date"}],chartData:[["Machine","Quality","Performance"],["Yotis1",1e3,400],["Yotis2",1e3,400]],chartOptions:{chart:{title:"Performance des machines",subtitle:"Comparateur Qualite-Performance/Machine",theme:"maximized"}}}},methods:{async importData(t){if(!t)return!1;let e=new FormData;e.append("lotData",t),await _.sendLot(e);let a=await _.getLots();a=a.data.map(t=>{return t.color=t.colorbound,t.id=t.lot,delete t.colorbound,delete t.lot,t}),this.lots=a,this.lotFilt=this.monthBatch.filter(t=>{return Object.keys(this.filtersLot).every(e=>{return this.filtersLot[e].includes(t[e])})}),console.log(this.lots)},del(t){console.log(t),this.$delete(this.filtersLot,t),this.lotFilt=this.monthBatch.filter(t=>{return Object.keys(this.filtersLot).every(e=>{return this.filtersLot[e].includes(t[e])})})},exportData(){let t={month:this.selectedDate,lots:[]};return this.monthBatch.forEach(e=>{t.lots.push({lot:e.id,quality:e.quality,performance:e.performance,color:e.color,component:e.component})}),encodeURIComponent(JSON.stringify(t))},getCompChartData(){let t=[],e=[["Quality","High","Medium","Low"]],a=this.monthBatch;return a.forEach(e=>{t.includes(e.component)||t.push(e.component)}),t.sort(),t.forEach(t=>{let o=[t],r={High:0,Medium:0,Low:0},n=a.filter(e=>e.component==t);n.forEach(t=>{r[t.quality]++}),e.push(o.concat(Object.values(r)))}),e},getQualityPercentage(){let t={High:0,Medium:0,Low:0};return this.monthBatch.forEach(e=>t[e.quality]++),[["Quality","Percentage"],["High",t.High],["Medium",t.Medium],["Low",t.Low]]},getPerfToLayout(){let t=[["Layout","High","Medium","Low"]],e={};return this.monthBatch.forEach(t=>{e[t.layout]||(e[t.layout]={High:0,Medium:0,Low:0}),e[t.layout][t.performance]++}),Object.keys(e).forEach(a=>{t.push([a].concat(Object.values(e[a])))}),t},print(){window.print()}},async mounted(){document.title="Récapitulatif des lots";var t=await _.getLots();this.lots=t.data.map(t=>{return t.color=t.colorbound,t.id=t.lot,delete t.colorbound,delete t.lot,t}),this.lotFilt=this.lots},computed:{monthBatch(){let t=this.lots.filter(t=>t.date.includes(this.selectedDate));return this.lotFilt=t.filter(t=>{return Object.keys(this.filtersLot).every(e=>{return this.filtersLot[e].includes(t[e])})}),t}},watch:{search:function(t){let e=[];this.headers.forEach(t=>e.push(t.value));let a=t.split(":");2==a.length&&e.includes(a[0])&&" "==a[1].substr(-1)&&(this.filtersLot[a[0]]=a[1].slice(0,-1),this.search=""),this.lotFilt=this.monthBatch.filter(t=>{return Object.keys(this.filtersLot).every(e=>{return this.filtersLot[e].includes(t[e])})})}}},D=V,k=(a("5bf8"),a("8336")),O=a("b0af"),E=a("99d9"),T=a("cc20"),j=a("62ad"),S=a("a523"),M=a("8fea"),q=a("2e4b"),F=a("cd55"),H=a("49e2"),R=a("c865"),Q=a("0393"),B=a("23a7"),A=a("132d"),N=a("e449"),G=a("0fd9"),I=a("2fa4"),U=a("71a3"),J=a("c671"),Y=a("fe57"),$=a("8654"),z=a("71d9"),K=a("2a7f"),W=a("269a"),X=a.n(W),Z=a("5607"),tt=Object(l["a"])(D,v,g,!1,null,"4736fe58",null),et=tt.exports;u()(tt,{VBtn:k["a"],VCard:O["a"],VCardText:E["a"],VCardTitle:E["b"],VChip:T["a"],VCol:j["a"],VContainer:S["a"],VContent:p["a"],VDataTable:M["a"],VDatePicker:q["a"],VExpansionPanel:F["a"],VExpansionPanelContent:H["a"],VExpansionPanelHeader:R["a"],VExpansionPanels:Q["a"],VFileInput:B["a"],VIcon:A["a"],VMenu:N["a"],VRow:G["a"],VSpacer:I["a"],VTab:U["a"],VTabItem:J["a"],VTabs:Y["a"],VTextField:$["a"],VToolbar:z["a"],VToolbarTitle:K["a"]}),X()(tt,{Ripple:Z["a"]});var at=a("00e7"),ot=a.n(at);o["default"].use(m["a"]),o["default"].use(ot.a);const rt=new m["a"]({mode:"history",routes:[{path:"/",component:et},{path:"*",redirect:"/"}]});var nt=rt,st=a("2f62");o["default"].use(st["a"]);var it=new st["a"].Store({state:{},mutations:{},actions:{},getters:{}}),lt=a("ce5b"),ct=a.n(lt),ut=(a("bf40"),a("d48d"),a("f309"));o["default"].use(ut["a"]);var dt=new ut["a"]({icons:{iconfont:"mdi"}}),pt=a("cf18"),ht=a.n(pt),ft=a("d61f"),mt=a("1dce"),vt=a.n(mt),gt=a("cb43");o["default"].config.productionTip=!1,o["default"].use(ct.a),o["default"].use(ot.a),o["default"].use(vt.a),o["default"].use(ht.a.install),o["default"].use(ft["a"]),o["default"].use(gt["default"]);const yt={};new o["default"]({data:yt});new o["default"]({VueCookie:ot.a,router:nt,store:it,vuetify:dt,VueEasySession:ht.a,i18n:L,render:t=>t(f)}).$mount("#app")},"5bf8":function(t,e,a){"use strict";var o=a("fdfd"),r=a.n(o);r.a},fdfd:function(t,e,a){}});
//# sourceMappingURL=app.e7e75669.js.map