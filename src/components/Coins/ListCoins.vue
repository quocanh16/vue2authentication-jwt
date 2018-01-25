<template>
  <div>
    <h1>List Coins</h1>
    <ul>
      <li v-for='(coin, index) in coins' :key='index'>
        <p><router-link :to="{ name: 'Coins', params: { id: coin.name }}"><b>Name: {{ coin.name }}</b></router-link></p>
        <p>Symbol: {{ coin.symbol }}</p>
        <p>Price (USD): {{ coin.price_usd }}</p>
      </li>
    </ul>
  </div>
</template>
<script >

import axios from 'axios'
export default {
  name: 'ListCoins',
  data () {
    return {
      coins: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      axios.get('https://api.coinmarketcap.com/v1/ticker/')
        .then((response) => {
          this.coins = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
