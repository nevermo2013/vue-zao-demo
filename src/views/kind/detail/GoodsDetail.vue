<template>
  <div class="goods-detail-main">
    <div class="header-bar">
      <span class="icon icon-back" @click="$router.go(-1)"></span>
      <p class="title">商品详情</p>
      <span class="icon icon-share"></span>
      <span class="icon icon-cart"></span>
    </div>
    <div class="type-bar">
        <span class="tab-text" :class="{active:tabType==0}">详情</span>
        <span class="tab-text"  :class="{active:tabType==1}">评价</span>
    </div>
    <my-goods class="goods-com"></my-goods>
    <my-comments class="comments-com"></my-comments>
  </div>
</template>
<script>
import MyGoods from './components/Goods.vue'
import MyComments from './components/Comments.vue'
export default {
    name: 'goodsDetail',
    components:{
        MyGoods,
        MyComments
    },
    data(){
        return {
            tabType: 0
        }
    }
};
</script>
<style scoped lang="scss">
.goods-detail-main {
  .header-bar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 44px;
    background-color: #fff;
    z-index: 999;
    .title {
      text-align: center;
      line-height: 44px;
      font-size: 18px;
      color: #010e0d;
    }
    .icon {
      position: absolute;
      display: block;
      height: 100%;
      width: 44px;
      background: no-repeat center;
      background-size: 20px 20px;
      &.icon-back {
        left: 16px;
        top: 0;
        background-image: url("../../../assets/imgs/icons/arr-l.png");
      }
      &.icon-share {
        right: 56px;
        top: 0;
        background-image: url("../../../assets/imgs/icons/share.png");
      }
      &.icon-cart {
        right: 16px;
        top: 0;
        background-image: url("../../../assets/imgs/icons/cart.png");
      }
    }
  }
  .type-bar{
      position: fixed;
      width: 100%;
      height: 44px;
      left: 0;
      top: 44px;
      text-align: center;
          z-index: 999;
          background-color: #fff;
      .tab-text{
          display: inline-block;
          font-size: 16px;
          color: #999;
          padding: 0 26px;
              line-height: 44px;
          &.active{
              color: #1C4B47;
          }
      }
  }
  .goods-com,
  .comments-com{
      width: 346px;
      margin: 0 auto;
      margin-top: 100px;
  }
}
</style>


