<template>
  <!-- <div> -->
    <v-layout style="margin:15px">
      <v-flex
          v-for="(item,index) in items"
          v-bind:key="index"
          xs12
          sm6
          md4
          class="elevation-5"
          style="margin:5px"
        >
        <v-card>
          <v-card-media src="https://storage.googleapis.com/happygram/knight-gundam2.jpg" height="300px"></v-card-media>
          <!-- <v-card-title primary-title> -->
            <div>
              <h3>{{item.name}}</h3>
              {{item.description}}
            </div>
          <!-- </v-card-title> -->
          <v-card-actions>
            <div >
              {{item.price | currency}}
            </div>
            <v-spacer/>
            <div :class="{ few: item.stock < 10, none: item.stock == 0}">
              Stock: {{item.stock}}
            </div>
            <button class="btn btn-success" @click="buy(item)" :disabled="item.stock == 0">Buy</button>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  <!-- </div> -->

</template>

<script>
import axios from 'axios'

const $http = 'http://35.197.135.159/'

export default {

  methods: {
    getPicture: function () {
      let url = $http + 'image'

      axios
        .get(url, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          console.log('berhasil:',response)
        })
        .catch(error => {
          console.log('ini kenapa ya????',error)
        })

        }
  },

  mounted: {
    // this.getPicture()
  }
}
</script>

<style scoped>
.few { color: rgb(243, 142, 10); }
.none { color: rgb(247, 4, 4); } 
</style>
