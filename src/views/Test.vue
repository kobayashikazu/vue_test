<template>
  <div>
    <input v-model="keywords" placeholder="キーワード入力補助" required>
    <button v-on:click="call_api()">表示する</button>
     {{ info }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Test',
  data () {
      return{
      info: null,
      keywords:'',
    }
},

  methods:{
      call_api: function() {
          axios.get("/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=kazutaka-test-PRD-1f785c25d-35373895&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=harry%20potter%20phoenix")
          .then(response => (this.info = response.data))
      }

    }
}
</script>