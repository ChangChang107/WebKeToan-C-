<template>
    <div class="header">
        <div class="header-left">
            <div class="sidebar"></div>
            <router-link to="/" class="logo">
                <div class="icon"></div>
                <div class="text">Kế Toán</div>
            </router-link>
        </div>
        <div class="header-right">
            <div class="icon-setting"></div>
            <div class="icon-ring"></div>
            <div class="icon-dauhoi"></div>
            <div class="icon-3cham"></div>
            <div class="avt"></div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TheHeader',
  components: {

  }
}
</script>

<style>
@font-face {
    font-family: Roboto Bold;
    src: url("../../assets/fonts/Roboto-Bold.ttf")
}

.header{
    display: flex;
    position: relative;
    height: 56px;
    width: 100%;
    box-sizing: border-box;
}

.header .header-left{
    display: flex;
    width: 200px;
    height: 100%;
    flex-shrink: 0;
    align-items: center;
    padding-left: 16px;
    box-sizing: border-box;
}

.header .header-left .sidebar{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -1157px -32px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -1157px -32px;
    width: 16px;
	height: 16px;
    background: black;
    flex-shrink: 0;
    margin-right: 16px
}

.header .header-left .sidebar:hover{
    cursor: pointer;
}

.header .header-left .logo{
    display: flex;
    align-items: center;
    text-decoration: none;
}

.header .header-left .logo:hover{
    cursor: pointer;
}

.header .header-left .logo .icon{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -1232px -1015px;
    width: 44px;
	height: 45px;
    skill: 0.8%;
    margin-right: 8px
}

.header .header-left .logo .text{
    font-size: 28px;
    font-family: Roboto Bold;
}

.header .header-right{
    position: absolute;
    display: flex;
    align-items: center;
    right: 0;
    height: 100%;
}

.header .header-right .icon-setting{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -676px -30px;
    width: 23px;
	height: 24px;
    margin-right: 26px
}

.header .header-right .icon-setting:hover{
    cursor: pointer;
}

.header .header-right .icon-ring{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -788px -30px;
    width: 22px;
	height: 25px;
    margin-right: 26px
}

.header .header-right .icon-ring:hover{
    cursor: pointer;
}

.header .header-right .icon-dauhoi{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -732px -31px;
    width: 22px;
	height: 22px;
    margin-right: 26px
}

.header .header-right .icon-dauhoi:hover{
    cursor: pointer;
}

.header .header-right .icon-3cham{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -568px -30px;
    width: 24px;
	height: 24px;
    margin-right: 26px
}

.header .header-right .icon-3cham:hover{
    cursor: pointer;
}

.header .header-right .avt{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -352px -894px;
    width: 32px;
	height: 32px;
    margin-right: 16px;
    border-radius: 50%;
}

.header .header-right .avt:hover{
    cursor: pointer;
}
</style>