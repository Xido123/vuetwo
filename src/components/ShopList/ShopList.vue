<template>
    <div>
        <div class="list-main" v-for=" (item,index)  in lists" v-bind:key="item">
            <div>
                {{ item }} {{index}}
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ShopList",
        data(){
           return {
               lists:[
                   '1',
                   '2',
                   '3',
                   '4'
               ]
           }
        }


    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
