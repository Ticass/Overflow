<template>
    <div class="overview">
        <h3 class="ram">Current Ram: {{ ram }}</h3>
        <div class="jumbotron">
        <div class="rps"> Ram Per Second: {{ rps }}</div>
        <div class="level">Current Level: {{ level }}</div>
        <div class="next-level">Ram Until Next Level: {{ ramUntilLevelUp }}</div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'overview',
    computed: {
        ram () {
            return Math.round(this.$store.state.ram);
        },
        rps () {
            return (this.$store.state.rps).toFixed(1);
        },
        level () {
            return this.$store.state.player.level;
        },
        ramUntilLevelUp(){
            return this.$store.getters.ramUntilLevelUp;
        }

    }
}
</script>