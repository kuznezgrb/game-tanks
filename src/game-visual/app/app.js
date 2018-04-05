import './app.less';
//import Vue  from 'vue';

import Vue  from  '../../../node_modules/vue/dist/vue.js'; //'../../node_modules/vue/dist/vue.js';
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, 'http://localhost:3000/');

document.addEventListener('DOMContentLoaded', function(){
    const app = new Vue({
        el: '.game-window',
        sockets:{
            connect: function(){
                console.log('socket connected')
            },
            customEmit: function(val){
                console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
            }
        },
        data: {
            message: 'Hello, Singree!'
        },
        methods:{

        }
    });

});