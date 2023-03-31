<template>
  <div class="hello">
    <button v-on:click="reload();" id="btn-reload">Reload</button>
    <div><img id="imagem-raposa" alt="Raposa"></div>
  </div>
</template>
<script>
import '/src/service/findFox.js'
import FoxReload from '/src/service/findFox'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    reload(){
      FoxReload.reloadFox()
    }
  },
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
