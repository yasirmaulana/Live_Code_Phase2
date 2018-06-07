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
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'items',
      'cart'
    ])
  },
  
  filters: {
    currency: function(value) {
      var formatter = Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
      })
      return formatter.format(value)
    }
  },

  methods: {
    buy: function(item) {
      var cartItem = this.getCartItem(item)

      if(cartItem != null) {
        cartItem.quantity++
      } else {
        let objItem = {
          name: item.name,
          price: item.price,
          quantity: 1
        }
        this.$store.dispatch('buyItem', objItem)
      }
      item.stock--
    },

    getCartItem: function(item) {
      for(var i = 0; i < this.cart.items.length; i++) {
        if(this.cart.items[i].id === item.id) {
          return this.cart.items[i]
        }
        return null
      }
    }
  }
}
</script>

<style scoped>
.few { color: rgb(243, 142, 10); }
.none { color: rgb(247, 4, 4); } 
</style>
