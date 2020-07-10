<template>
   <div>
       <HeaderTop title="深圳">
           <span class="search" slot = "left">left</span>
           <span class="login" slot="right">right</span>
       </HeaderTop>
<!--       <Swiper></Swiper>-->
        <ShopList>

        </ShopList>
       home
   </div>
</template>

<script>

    import ShopList from "@/components/ShopList/ShopList";
    import HeaderTop from "@/components/HeaderTop/HeaderTop";
    export default {
        name: "MSite",
        components:{

            HeaderTop,
            ShopList
        },
        mounted () {
            //
            // new Swiper('.swiper-container',{
            //     loop:true,
            //     //分页器
            //     pagination:{
            //         el:'.swiper-pagination',
            //     }
            //
            // })
        }


    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
