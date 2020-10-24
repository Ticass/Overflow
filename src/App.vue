<template>
  <div id="game">
    <Overview>
    </Overview>
  </div>
</template>

<script>

import Overview from './components/Overview';

export default {
  name: 'App',
  components: {
    Overview
  },
  methods: {
    hacking(){
      //Hack
    },
    loop() {
      //Game Loop
      requestAnimationFrame(this.loop)
    }
  },

  created() {
    this.loop()
    window.addEventListener('keypress', this.hacking);
  },
  destroyed() {
    window.removeEventListener('keypress', this.hacking);
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Times New Roman', sans-serif;
}
</style>
