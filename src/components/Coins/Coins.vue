<template>
  <div>
    <h1>Coins price</h1>
    <p><b>Name: {{ coin.name }}</b></p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Coins',
  data () {
    return {
      coin: {}
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
      axios.get('https://api.coinmarketcap.com/v1/ticker/' + this.$route.params.id + '/')
        .then((response) => {
          this.coin = response.data[0]
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
