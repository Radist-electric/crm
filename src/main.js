
import Vue from "vue";
import Vuelidate from 'vuelidate';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messageplugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader'
import firebase from 'firebase/app';
import "./registerServiceWorker";
import 'materialize-css/dist/js/materialize.min';
import 'firebase/auth';
import 'firebase/database';

Vue.use(messageplugin)
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB26kpCFaC9KjzOTYNwTVoj7I__0bTvMls",
  authDomain: "vue-crm-312c4.firebaseapp.com",
  databaseURL: "https://vue-crm-312c4.firebaseio.com",
  projectId: "vue-crm-312c4",
  storageBucket: "vue-crm-312c4.appspot.com",
  messagingSenderId: "95873904396",
  appId: "1:95873904396:web:efd7befecc2ea92cf3a329",
  measurementId: "G-B9N1ME9VXY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})
