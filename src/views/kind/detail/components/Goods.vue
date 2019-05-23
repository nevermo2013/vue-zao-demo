<template>
    <div class="goods-main">
        <swiper class="swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <!-- slides -->
                <swiper-slide v-for="(m,index) in imgs" :key="index">
                    <img :src="m" alt="">
                </swiper-slide>
            </swiper>
            <img style="width:100%;" :src="require('@/assets/imgs/kind/goods/bigImg.png')" alt="">
        
        <div class="mask">
            <div class="card">
                <div class="goods-info">
                    <img class="goods-img" :src="require('@/assets/imgs/kind/goods/m1.png')" alt="">
                    <div class="goods-text-info">
                        <p class="brand">ESSENCE</p>
                        <p class="title">女士Cozy圆领吊带性感睡衣</p>
                        <p class="price">¥229</p>
                        <p class="sale-count">剩下10件</p>
                    </div>
                    <div class="attr-item attr-color">
                        <p class="attr-name">
                            颜色
                        </p>
                        <div>

                        </div>
                    </div>
                     <div class="attr-item attr-size">
                        <p class="attr-name">
                            规格
                        </p>
                        <div>
                            
                        </div>
                    </div>
                    <div class="attr-item attr-count">
                        <p class="attr-name">
                            数量
                        </p>
                        <div>
                            
                        </div>
                    </div>

                    <button class="btn-primary">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'GoodsCom',
    data(){
        return {
            swiperOption: {
                slidesPerView: 1.2,
                centeredSlides: true,
            },
            imgs: [
                require('@/assets/imgs/kind/goods/m2.png'),
                require('@/assets/imgs/kind/goods/m3.png'),
                require('@/assets/imgs/kind/goods/m4.png')
            ]
        }
    },
    components:{
        swiper,
        swiperSlide,
    },
    methods:{
        callback(){

        }
    }
}
</script>
<style lang="scss" scoped>
        html,body{
            overflow: hidden;
        }
    .goods-main{
        overflow: auto;
        .mask{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.5);
                z-index: 1000;
            .card{
                position: absolute;
                left: 50%;
                bottom: 20px;
                width: 334px;
                padding: 20px;
                margin-left: -167px;
                box-sizing: border-box;
                background-color: #fff;
                border-radius: 8px;
            }
        }
    }
</style>


