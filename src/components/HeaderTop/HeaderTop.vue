<template>
    <header class="header">
        <slot name = "left">0</slot>
        <span class="header_title">
            <span class="header-title">{{title}}</span>

        </span>
       <slot name = "right">
           >
       </slot>
    </header>

</template>

<script>
    export default {
        name: "HeaderTop",
        props:{
            title:String
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
