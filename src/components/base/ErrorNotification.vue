<template>

    <div id="dialog-error-employee">
        <div id="content-error">
            <div id="content-error-title">
                <strong>{{title}}</strong>
                <label id="btn-close" @click="onClose()">x</label>
            </div>
            <div class="list">
                <div class="icon"></div>
                <div id="list-error-employee" v-html="addErrorText()"></div>
            </div>
            <button id="btn-accept" @click="onClose()">Đồng ý</button>
        </div>
    </div>

</template>

<script>

export default {
  name: 'ErrorNotification',
  components: {
  },
  props: ["title", "textError"],
  data() {
    return {
    }
  },
  methods: {
     /**
     * Mô tả: Đóng thông báo lỗi
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    onClose() {
        this.$emit("onCloseError");
    },

     /**
     * Mô tả: Thêm dòng lỗi vào thông báo
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 31/03/2023
     */
    addErrorText() {
        let s = "";
        for(let error of this.textError) {
            s = s + "<p>"+ error +"</p>";
        }
        return s;
    }

  },
}
</script>

<style>
#dialog-error-employee{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(4,20,52, 0.5);
    z-index: 999;

}

#dialog-error-employee #content-error{
    position: absolute;
    height: auto;
    width: auto;
    background: #FFFFFF;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 24px;
    border-radius: 4px;
}

#dialog-error-employee #content-error #content-error-title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

#dialog-error-employee #content-error #content-error-title strong{
    font-size: 20px;
}

#dialog-error-employee #content-error #content-error-title label{
    font-size: 20px;
}

#dialog-error-employee #content-error #content-error-title label:hover{
    cursor: pointer;
}

#dialog-error-employee #content-error .list{
    display: flex;
    align-items: center;
    margin-bottom: 14px;
}

#dialog-error-employee #content-error .list .icon{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -598px -463px;
    width: 36px;
	height: 37px;
    margin-right: 16px
}

#dialog-error-employee #content-error #list-error-employee{
    margin-top: 8px;
}

#dialog-error-employee #content-error #list-error-employee p{
    margin-top: 0px;
    margin-bottom: 8px;
}

#dialog-error-employee #content-error #btn-accept{
    height: 36px;
    width: 80px;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    background-color: #50B83C;
    color: #FFFFFF;
    font-size: 14px;
    margin-left: 241px;
}

#dialog-error-employee #content-error #btn-accept:hover{
    cursor: pointer;
}

</style>
