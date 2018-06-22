<template>
  <div id="app">
  		<Alert />
        <router-view />
  </div>
</template>

<script>
import Alert from './components/alert/alert'
export default {
  name: 'App',
  data() {
  	return {
  	}
  },
  components: {
  	Alert
  }
}
</script>

<style>
</style>
