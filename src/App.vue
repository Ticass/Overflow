<template>
  <div id="game">
    <Overview/>
    <Upgrades/>
  </div>
</template>

<script>

import Overview from './components/Overview';
import Upgrades from './components/Upgrades';

export default {
  name: 'App',
  components: {
    Overview,
    Upgrades
  },
  methods: {
    hacking(){
      this.$store.commit('incrementRam', this.$store.state.rpk);
    },
    loop() {
      //Game Loop
      this.levelManager();
      requestAnimationFrame(this.loop)
    },
    levelManager() {
      if (this.$store.getters.ramUntilLevelUp <= 0) {
        this.$store.commit('levelUp');
      }
    }
  },

  created() {
    this.loop(),
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
