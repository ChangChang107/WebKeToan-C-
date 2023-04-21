<template>

    <div class="menu-item">
        <div class="menu-icon icon-tongquan"></div>
        <div class="menu-text">{{text}}</div>
    </div>

</template>

<script>

export default {
  name: 'ItemMenu',
  components: {
  },
  props: {
        text: {
        type: String
        },
        iconPosition: {
        type: String
        },
    },
}
</script>

<style>
.menu-item{
    display: flex;
    align-items: center;
    height: 44px;
    width: 100%;
    margin-bottom: 4px;
    padding-left: 12px;
}

.menu-item:hover{
    background: rgb(167,196,255,0.16);
    cursor: pointer;
}

.menu-item .menu-icon{
    margin-right: 12px;
}

.menu-item .menu-icon.icon-tongquan{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -33px -1630px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -32px -1721px;
    width: 18px;
	height: 20px;
    background-color: #869AB8;
}

.menu-item .menu-text{
    font-size: 14px;
    color: #869AB8;
}

</style>