<template>
    <div class="toast-message">
        <div class="left">
            <div class="toast-message__content__icon">
                <i :class="classIcon" style="color: #50b83c;"></i>
            </div>
            <div class="toast-message__content__text">
                <span style="color: #50b83c;">{{ textMsg }}</span>
                <span>{{ content }}</span>
            </div>
        </div>
        <div class="right">
            <a href="">{{ action }}</a>
            <span>x</span>
        </div>
    </div>
</template>

<script>


export default {
    name: 'ToastMessage',
    props: ["textMsg","content", "classIcon", "action"],
    data() {
        return {
        }
    },
}
</script>

<style scoped>
.toast-message{
    /* position: fixed; */
    bottom: 35px;
    right: 20px;
    width: auto;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 18px 19px 16px;
    box-sizing: border-box;
    z-index: 9999;
    background: #FFFFFF;
    border-radius: 4px;
    filter: drop-shadow(20px 0px 3px rgba(0,0,0,0.078));

    position: absolute;
    animation-name: example;
    animation-duration: 1s;
}

@keyframes example {
from  { right:20; bottom:0px;}
 to  { right:20px; bottom:35px;}
}


.toast-message .left{
    display: flex;
    align-items: center;
    margin-right: 40px;
}

.toast-message .left .toast-message__content__icon{
    margin-right: 10px;
}

.toast-message .left .toast-message__content__text{
    display: flex;
    align-items: center;
}

.toast-message .left .toast-message__content__text span{
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-right: 3px;
}

.toast-message .right{
    display: flex;
    align-items: center;
}

.toast-message .right a{
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    margin-right: 16px;
    /* margin-left: 50px; */
}

.toast-message .right span{
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    cursor: pointer;
}

</style>