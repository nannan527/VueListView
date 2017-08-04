<style lang="less">
* {
    box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
    margin: 0;
    padding: 0;
}

body,
button,
input,
select,
textarea {
    font-size: 13px;
    font-family: ~'"Lato Light", Cormorant Garamond, times, serif;';
    line-height: 1.5;
    letter-spacing: .5px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
}

address,
cite,
dfn,
em,
var {
    font-style: normal;
}

code,
kbd,
pre,
samp {
    font-family: courier new, courier, monospace;
}

ul,
ol {
    list-style: none;
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

sup {
    vertical-align: text-top;
}

sub {
    vertical-align: text-bottom;
}

legend {
    color: #000;
}

fieldset,
img {
    border: 0;
}

button,
input,
select,
textarea {
    font-size: 100%;
    &:focus {
        outline: none;
    }
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}



/* 清除浮动 */

.clearfix:after {
    display: table;
    height: 0;
    line-height: 0;
    clear: both;
    content: "";
}

.fl {
    float: left;
}

.fr {
    float: right;
}



/* layout */

.wrap {
    display: flex;
    flex-wrap: nowrap;
}



/* 整体布局 */

body,
html {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

body {
    background: #0f0f0f;
}

header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

header+main {
    top: 45px;
}

svg {
    pointer-events: none;
}



/* IE禁止缩放 */

html {
    -ms-touch-action: pan-y;
    /* set for IE */
    touch-action: pan-y;
    /* set for Edge */
}

#app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}



/* 滚动 */

.wrap--scroll {
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: 100%;
}



/* 图片 */

img {
    display: block;
    overflow: hidden;
}



/* 公用fade 动画 */

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s linear;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}



/* 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸 */

 ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: #2F3235;
}



/* 定义滚动条轨道 内阴影+圆角 */

 ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #2F3235;
}



/* 定义滑块 内阴影+圆角 */

 ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #8A8D94;
}
</style>

<template>
    <div id="app">
        <product-list-component />
    </div>
</template>

<script>
//组建引用
import productListComponent from './components/productListComponent'

export default {
    name: 'app',
    components: { productListComponent }
}
</script>

