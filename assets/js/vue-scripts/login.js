
//adauga categorie
    var app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: ''
    },
    methods: {
         login: function () {

            this.$http.post('/login', { username: this.username, password: this.password }).then(function (response) {

                    location.href  = '/login';


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


