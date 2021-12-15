Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
        },
        methods: {
        },
        created: function(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        }
    }
);