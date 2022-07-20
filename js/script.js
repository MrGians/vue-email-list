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
    randomEmail: "",
    emails: [],
  },
  computed: {
    getEmailList() {
      for (let i = 1; i <= 10; i++) {
        this.emails.push(this.randomEmail);
        console.log(this.randomEmail);
      }
    },
  },
  methods: {
    getRandomEmail() {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) => {
        this.randomEmail = response.data.response;
        console.log(response.data.response);
        console.log(this.randomEmail);
      });
    },
  },
});
