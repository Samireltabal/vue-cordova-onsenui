<template id="app">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Title</div>
    </v-ons-toolbar>

    <p style="text-align: center">
      <v-ons-button @click="$ons.notification.alert('Hello World!')">
        Click me!
      </v-ons-button>
    </p>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="location.reload(true)">Reload debug</button>
    </div>
    <router-view/>
  </v-ons-page>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Vue from 'vue'
export default {
  mounted() {
    Vue.cordova.on('deviceready', () => {
      alert(Vue.cordova.device.uuid)
      Vue.cordova.geolocation.getCurrentPosition((position) => {
      alert('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
    }, (error) => {
      alert('FAILED Error #' + error.code + ' ' + error.message)
    }, {
      timeout: 1000,
      enableHighAccuracy: true
    })
    });
    
    
  }
}
</script>