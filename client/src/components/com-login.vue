<template>
  <v-container>
    <v-form>
      <v-text-field v-model="email" label="E-mail" required ></v-text-field>
      <v-text-field v-model="name" label="name" required type="name"></v-text-field>
    </v-form>
    <button type="button" class="btn btn-success elevation-9" @click="login">log in</button>
  </v-container>
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'

const vhttp = 'http://35.197.135.159/'

export default {
  data() {
    return {
      email:null,
      name:null
    }
  },

  components: {
  },

  methods: {
    // valLogin: function () {
    //   let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //   let cekEmail = regEx.test(String(this.email).toLowerCase())
    //   if (this.email === '') {
    //     swal({
    //       icon: 'error',
    //       title: 'Oops',
    //       text: 'Email must be filled'
    //     })
    //     return false
    //   } else if (!cekEmail) {
    //     swal({
    //       icon: 'error',
    //       title: 'Oops',
    //       text: 'Email format is Wrong'
    //     })
    //     return false
    //   } else if (this.name === '') {
    //     swal({
    //       icon: 'error',
    //       title: 'Oops',
    //       text: 'name must be filled'
    //     })
    //     return false
    //   } else {
    //     return true
    //   }
    // },

    login () {
      // let cek = this.valLogin()
      let url = `${vhttp}request-token`
      
      // if (cek) {
        axios
          .post(url, {
            email: this.email,
            name: this.name
          })
          .then(response => {
            console.log(response)
            console.log(response.data.uuid)
            let token = response.data.uuid
  
            if (token) {
              localStorage.setItem('token', token)
            //   swal('Sign In', 'Sign Ip successfully', 'success')

            //   this.$store.dispatch('changeStLogin')
              this.$router.push('upload')
            }
          })
          .catch(error => {
            console.log(error)
            swal({
              icon: 'error',
              title: 'Oops',
              text: 'email or name is wrong'
            })
          })
      // }
    },
    

  }
}
</script>
