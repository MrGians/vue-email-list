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
