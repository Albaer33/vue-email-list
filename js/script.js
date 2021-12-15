Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            randomEmails: []
        },
        methods: {
            getRandomEmails: function() {
                for(let i=0; i<10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        const serverRandomEmail = response.data.response;
                        this.randomEmails.push(serverRandomEmail);
                    });
                }
            }
        },
        created: function() {
            this.getRandomEmails();
        }
    }
);