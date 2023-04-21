<template>

    <div id="dialog-msg-employee">
        <div id="content-msg">
            <div id="content-error-title">
                <strong>{{title}}</strong>
                <label id="btn-close" @click="onClose()">x</label>
            </div>
            <div class="list">
                <!-- <div class="icon"></div> -->
                <div id="list-error-employee">{{text}}</div>
            </div>
            <div class="btn">
                <button id="btn-dong" @click="onClose()">Đóng</button>
                <button id="btn-khong-luu" @click="onNoSave()">Không lưu</button>
                <button id="btn-luu" @click="onSave()">Lưu</button>
            </div>
        </div>
    </div>

</template>

<script>

export default {
  name: 'NotificationActSave',
  components: {
  },
  props: ["title", "text"],
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
        this.$emit("onCloseMsg");
    },

     /**
     * Mô tả: Lưu thông tin
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    onSave() {
        this.$emit("onSaveEmployee");
    },

     /**
     * Mô tả: Không lưu thông tin
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    onNoSave() {
        this.$emit("onNoSaveEmployee");
    },

  },
}
</script>

<style>
#dialog-msg-employee{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(4,20,52, 0.5);
    z-index: 999;

}

#dialog-msg-employee #content-msg{
    position: absolute;
    height: 173px;
    width: 416px;
    background: #FFFFFF;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 24px;
    border-radius: 4px;
    box-sizing: border-box;
}

#dialog-msg-employee #content-msg #content-error-title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

#dialog-msg-employee #content-msg #content-error-title strong{
    font-size: 20px;
}

#dialog-msg-employee #content-msg #content-error-title label{
    font-size: 20px;
}

#dialog-msg-employee #content-msg #content-error-title label:hover{
    cursor: pointer;
}

#dialog-msg-employee #content-msg .list{
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}

#dialog-msg-employee #content-msg .list .icon{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -598px -463px;
    width: 36px;
	height: 37px;
    margin-right: 16px
}

#dialog-msg-employee #content-msg #list-error-employee{
    margin-top: 8px;
}

#dialog-msg-employee #content-msg #list-error-employee p{
    margin-top: 0px;
    margin-bottom: 8px;
}

#dialog-msg-employee #content-msg .btn{
    display: flex;
    justify-content: right;
}

#dialog-msg-employee #content-msg #btn-dong{
    height: 36px;
    width: 80px;
    border: 1px solid #E0E0E0;
    border-radius: 3px;
    background-color: #FFFFFF;
    color: #212121;
    font-size: 14px;
}

#dialog-msg-employee #content-msg #btn-dong:hover{
    cursor: pointer;
}

#dialog-msg-employee #content-msg #btn-dong:focus{
    border: 1px solid #50B83C;
}

#dialog-msg-employee #content-msg #btn-khong-luu{
    height: 36px;
    width: 95px;
    border: 1px solid #E0E0E0;
    border-radius: 3px;
    background-color: #FFFFFF;
    color: #212121;
    font-size: 14px;
    margin-left: 8px;
}

#dialog-msg-employee #content-msg #btn-khong-luu:hover{
    cursor: pointer;
}

#dialog-msg-employee #content-msg #btn-khong-luu:focus{
    border: 1px solid #50B83C;
}

#dialog-msg-employee #content-msg #btn-luu{
    height: 36px;
    width: 80px;
    border: 1px solid #E0E0E0;
    border-radius: 3px;
    background-color: #50B83C;
    color: #FFFFFF;
    font-size: 14px;
    margin-left: 8px;
}

#dialog-msg-employee #content-msg #btn-luu:hover{
    cursor: pointer;
}

#dialog-msg-employee #content-msg #btn-luu:focus{
    border: 1px solid #50B83C;
}


</style>
