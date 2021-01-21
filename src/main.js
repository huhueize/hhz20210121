import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'


// const  proceed = {
//   install(){
//     alert(("这是一条slert"))
//   }
// }
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    num:10,
    Num:0
  },
  mutations:{
    increment(state){
      state.num--;
    },
    increment3(state){
      state.num=state.num-2;
    },
    increment4(state){
      state.num=state.num-state.Num;
    }


  }
  // actions:{
  //   increment2(action){
  //     setTimeout(() =>{
  //       action.commit('increment')
  //     },500);
  //   }
  // }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
