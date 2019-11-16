// import Vue from 'vue'


new Vue({
  el: "#adaugaConcurs",
  data: {
    name: '',
    runde: '',
    serii: '',
    echipe: '',
    echipeserie: '',
    parola: '',
    items: [],
    exists: null
  },
  methods: {
    addItem () {
      // this.checkIfExists()
      if (!this.exists) {
      	this.items.push({'id': '', 'categorie': document.getElementById('categoriee').value })

        console.log(this.items);
      }
    },
    checkIfExists(itemId) {
      this.exists = this.items.some((item) => {
      	return item.id === itemId
      })
    },
    adaugaConcurs: function () {

            this.$http.post('/adauga-concurs', 
                { name: this.name, 
                  runde: this.runde,
                  serii: this.serii,
                  echipe: this.echipe,
                  echipeserie: this.echipeserie,
                  parola: this.parola,
                  items: this.items}).then(function (response) {

                    location.href  = '/adauga-concurs';


            }, function (response) {
                console.log('response');
                // this.response.username = username;
                // this.response.password = password;
                // console.log(username);
                // console.log(password);
                // swal({
                //     title: response.data.title,
                //     text: response.data.message,
                //     type: "error",
                //     confirmButtonColor: "#DD6B55",
                // });

              });
     }
  }
})

