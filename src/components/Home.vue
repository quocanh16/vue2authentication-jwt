<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Get a Quote Design!</h1>
    <button class="btn btn-primary" v-on:click="getQuote()">Get a Quote</button>
    <div class="quote-area" v-if="quote">
      <h2><b>{{ quote.title }}</b></h2>
      <h2><blockquote v-html="quote.content"></blockquote></h2>
    </div>
  </div>
</template>
<script>
import auth from '../auth'
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      quote: []
    }
  },
  created () {
    this.getQuote()
  },
  watch: {
    '$route': 'getQuote'
  },
  methods: {
    getQuote () {
      axios.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', {
      })
        .then((response) => {
          this.quote = response.data[0]
        })
        .catch((error) => console.log(error))
    }
  },
  route: {
    beforeEnter () {
      return auth.user.authenticated
    }
  }
}
</script>
