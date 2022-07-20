// TRACCIA
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const emailList = new Vue({
  name: "emailList",
  el: "#root",
  data: {
    emails: [],
  },

  methods: {
    getRandomEmail() {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
        console.log(response.data.response);
        this.emails.push(response.data.response);
      });
    },
  },
  mounted() {
    for (let i = 1; i <= 10; i++) {
      this.getRandomEmail();
    }
  },
});
