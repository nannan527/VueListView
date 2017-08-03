<style scoped lang="less">
    a{ display: block;
        &:hover { text-decoration: none;}
    }
    .product-item {position:relative;width: 280px; height:357px;}

    .product-item__img {width:280px; height:280px;display:flex;justify-content:center;align-items:center;
         img[lazy=loading] {width:50px; height:50px;}
         img[lazy=loaded] {max-width: 100%;}
    }

    .product-item__quickview { position:absolute; top:230px; left:50%; margin-left: -75px;  width: 150px; height:30px; line-height: 30px; text-align: center; border: 1px solid #FCCA86;color:#E5DAC7; font-size: 12px; background: rgba(0,0,0,.41);}

    .product-item__title {font-size: 18px; color:#887C6B; display: block; padding:15px 0 5px;}

    .product-item__price {text-align: right; color:#BEA882; font-size: 20px;
    }
</style>


<template>
    <div class="product-item">
        <a href="javascript:;">
            <div class="product-item__img">
                <img v-lazy='imgPUrl + prodItem.ImageUrl+"?w=350&h=350"'>
            </div>
            <h3 class="product-item__title">{{prodItem.FamilyName}}</h3>
            <div class="product-item__price">
                <!-- <span class="product-item__price--original">$797.44</span> -->
                <span class="product-item__price--sale">${{prodItem.MinPrice}}</span>
            </div>
        </a>
        <a href="javascript:;" class="product-item__quickview">Quick View</a>
    </div>
</template>



<script type="text/javascript">
import { mapState } from 'vuex'

//图片地址
import { imgPUrl } from '../tools/url'

export default {
    name: 'productItemComponent',
    props: ['prodItem'],
    data() {
        return {
            imgPUrl:imgPUrl
        }
    }
}
</script>
