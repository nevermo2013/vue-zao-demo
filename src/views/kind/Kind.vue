<template>
    <div class="kind-main">
        <div class="header-bar">
            <span class="search">

            </span>
            <p class="title">
                ZAOWU 造物
            </p>
            <a href="javascript:;" class="chat">

            </a>
            <a href="javascript:;" class="cart">
                
            </a>
        </div>
        <div class="kind-block-list">

         <kind-block  :active.sync="showKinds" :id="index" :kind="kind" v-for="(kind,index) in kinds" :key ="kind.ename"></kind-block>
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
import KindBlock from './components/KindBlock.vue'
export default {
    name: 'Kind',
    components:{
        KindBlock
    },
    data(){
        return {
            kinds:[
                {
                    cname: '创意',
                    ename: 'changyi',
                    img: require('@/assets/imgs/kind/goods1.png'),
                    subKinds:[
                        {
                            cname:'全部',
                            id: Math.random()
                        },
                        {
                            cname:'睡衣',
                            id: Math.random()
                        },
                        {
                            cname:'浴袍',
                            id: Math.random()
                        },
                        {
                            cname:'其他',
                            id: Math.random()
                        },
                    ]
                },
                {
                    cname: '家居',
                    ename: 'jiaju',
                    img: require('@/assets/imgs/kind/goods2.png'),
                    subKinds:[
                        {
                            cname:'全部',
                            id: Math.random()
                        },
                        {
                            cname:'睡衣',
                            id: Math.random()
                        },
                        {
                            cname:'浴袍',
                            id: Math.random()
                        },
                        {
                            cname:'其他',
                            id: Math.random()
                        },
                    ]
                },
                {
                    cname: '服饰',
                    ename: 'fushi',
                    img: require('@/assets/imgs/kind/goods3.png'),
                    subKinds:[
                        {
                            cname:'全部',
                            id: Math.random()
                        },
                        {
                            cname:'睡衣',
                            id: Math.random()
                        },
                        {
                            cname:'浴袍',
                            id: Math.random()
                        },
                        {
                            cname:'其他',
                            id: Math.random()
                        },
                    ]
                },
                {
                    cname: '香氛',
                    ename: 'xiangfen',
                    img: require('@/assets/imgs/kind/goods4.png')
                },
                {
                    cname: '配饰',
                    ename: 'peishi',
                    img: require('@/assets/imgs/kind/goods5.png')
                },
                {
                    cname: '创意',
                    ename: 'changyi2',
                    img: require('@/assets/imgs/kind/goods1.png')
                },
                {
                    cname: '家居',
                    ename: 'jiaju2',
                    img: require('@/assets/imgs/kind/goods2.png')
                },

            ],
            showKinds:-1,
        }
    }


}
</script>
<style scoped lang="scss">
    .header-bar{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 40px;
        background-color: #f5f5f5;
        z-index: 999;
        .search,.chat,.cart{
            position: absolute;
            left: 16px;
            top: 10px;
            width: 20px;
            height: 20px;
            background: url(../../assets/imgs/icons/search.png) no-repeat center;
            background-size: cover;
        }
        .title{
            font-size: 20px;
            color: #000;
            line-height: 40px;
            text-align: center;
            margin: 0 auto;
        }
        .chat{
            left: auto;
            right: 60px;
            background-image: url(../../assets/imgs/icons/chat.png);
        }
        .cart{
            left: auto;
            right: 20px;
            background-image: url(../../assets/imgs/icons/cart.png);
        }
    }
    .kind-block-list{
        width: 100%;
        margin-top: 50px;
    }
</style>

