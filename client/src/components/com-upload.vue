<template>
<v-container>
  <v-form>
    <input type="file" id="image">
  </v-form>
  <button type="button" class="btn btn-success elevation-9" @click="Upload">Upload</button>
</v-container>
</template>

<script>
const $http = 'http://35.197.135.159/'

import axios from 'axios'

export default {
  
  methods: {
    Upload () {
      let token = localStorage.getItem('token') 
      console.log(token)

      let fileInput = document.querySelector('#image');

      let formData = new FormData()

      formData.append('image', fileInput.files[0])

      let url = $http + 'image'

      axios
        .post(url, formData, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          console.log('berhasil:',response)
          this.$router.push('/')
        })
        .catch(error => {
          console.log('ini kenapa ya????',error)
        })
    }
  }
}
</script>
