<template>
    <div class="overview">
        <h3>Current Ram</h3>
        <div class="ram">{{ ram }}</div>
        <div class="rps"> Ram Per Second: {{ rps }}</div>
        <div class="level">Current Level: {{ level }}</div>
        <div class="next-level">Ram Until Next Level: {{ ramUntilLevelUp }}</div>
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

<style lang="scss">
.overview {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
}

    h3 {
        color: #222;
        font-size: 22px;
        font-weight: 400;
        margin-bottom: 15px;
    }
    
    .ram {
        width: 100%;
        min-width: 200px;
        max-width: fit-content;
        padding: 15px 25px;
        background-color: #28A484;
        border-radius: 8px;

        color: #FFF;
        font-size: 60px;
        font-weight: 900;
        text-align: center;
        margin-bottom: 30px;
    }

    .rps,
    .level,
    .next-level {
        margin-bottom: 15px;
        font-size: 18px;
        font-style: italic;
        text-align: center;
        

    }

</style>








