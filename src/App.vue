<template>

    <div class="app">
        <router-view/>

        <FooterGuide/>
    </div>
</template>

<script>
    import FooterGuide from "@/components/FooterGuide/FooterGuide";
    export default {
        name: "App",
        components:{
            FooterGuide
        }
    }
</script>

<style lang = "stylus" ref="stylesheet/stylus">
.app
    margin 0;
    padding 0;
    width 100%;
    height 100%
body,html
    width 100%
    height 100%

body,html,*
    margin: 0
    padding 0
</style>