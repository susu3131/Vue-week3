import {createApp} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

const apiUrl ="https://vue3-course-api.hexschool.io/"
const apiPath="susu3131"


createApp({
  data(){
    return{
      products:[ ],
      tempProduct:{ }
    }
  },
  methods: {
    getData(){
      const url = `${apiUrl}v2/api/${apiPath}/admin/products/all`
      axios.get(url)
        .then(res => this.products = res.data.products)
        .catch(err => console.log(err.data))
    },
    checkLogin(){
      const url = `${apiUrl}v2/api/user/check`
      axios.post(url)
        .then((res)=>console.log(res.data))
        .catch(err=> {
          alert(err.data.message)
          window.location='index.html'
        })
    }
  },
  mounted() {
    //驗證登入
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)restoken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common['Authorization'] = token;
    this.checkLogin();
    this.getData();
  }


}).mount('#app')