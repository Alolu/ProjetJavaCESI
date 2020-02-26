import axios from 'axios'
import i18n from '@/plugins/i18n';

const AXIOS = axios.create({
    baseURL: `http://localhost:8080/api`,
    params: {
        locale: i18n.locale
    },
    timeout: 10000
});

export default {

    getLots() {
        return AXIOS.get("/get/lots");
    },

    sendLot(data) {
        return AXIOS.post("/post/lot",data,{
            'Content-type': 'multipart/form-data'
        })
    }
}


