<template>
  <div class="cart">
    <v-container>
      <h1>Shopping Cart</h1><hr>
      <table class="table table-striped table-hover table-bordered">
        <tbody>
            <tr>
              <th>Item</th>
              <th>QTY</th>
              <th>Unit Price</th>
              <th>Total Price</th>
            </tr>
            <tr v-for="(item, index) in cart.items" v-bind:key="index">
              <td>{{item.name}}</td>
              <td>{{item.quantity}}</td>
              <td>{{item.price | currency}}</td>
              <td>{{item.quantity * item.price | currency}}</td>
            </tr>
            <tr>
              <th colspan="3"><span class="pull-right">Sub Total</span></th>
              <!-- <th>{{subTotCart}}</th> -->
            </tr>
            <tr>
              <th colspan="3"><span class="pull-right">Kurir</span></th>
              <th> 0</th>
            </tr>
            <tr>
              <th colspan="3"><span class="pull-right">Total</span></th>
              <th></th>
            </tr>
            <tr>
              <td>
                <router-link class="btn btn-primary" to="/">Continue Shopping</router-link>
              </td>
              <td colspan="3"><a href="#" class="pull-right btn btn-success">Checkout</a></td>
            </tr>
        </tbody>
      </table>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
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
}
</script>
