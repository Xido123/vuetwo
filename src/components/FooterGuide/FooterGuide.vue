<template>
    <div  class="footer-main" >

        <div class="footer-item" v-for=" (item,index) in menu" v-bind:key = item.id>
            <div><img :src="item.icon" alt="" style="width: 30px;height: 30px"> </div>

            <div class="footer-title" :class="{on:item[1]=== $route.path}" @click="go(index)"> {{item.name}} </div>
        </div>

    </div>

</template>

<script>


    export default {
        name: "FooterGuide",

        data(){
            return {
                menu:[
                    {
                        name:'主页',
                        path:'/home',
                        icon:require('./images/home.gif')
                    },
                    {
                        name:'搜索',
                        path:'/search',
                        icon:''
                    },
                    {
                        name:'订单',
                        path:'/order',
                        icon:''
                    },
                    {
                        name:'我的',
                        path:'/profile',
                        icon:''
                    }

                ]
            }
        },
        methods:{
             go(index){
                if(index == 0) {
                    this.$router.push('/home')
                }
                 if(index == 1) {
                     this.$router.push('/search')
                 }
                 if(index == 2) {
                     this.$router.push('/order')
                 }
                 if(index == 3) {

                     this.$router.push('/profile')
                 }

            }
        },

    }


</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer-main
     width: 100%
     height 60px
     position fixed
     top 100%
     transform translate(0,-100%);
     display flex
     border-top #454747 1px solid
.footer-item
     cursor pointer
     width 100px
     background-color #ffffff
     margin auto
     text-align center
.footer-item:hover
    color aliceblue
    background-color aqua
.footer-title
    font-size 13px

.on
    color #fff

</style>
