<template>

    <div id="dialog-msg-delete-employee">
        <div id="content-msg-delete">
            <div id="content-error-title">
                <strong>{{title}}</strong>
                <label id="btn-close" @click="onClose()">x</label>
            </div>
            <div class="list">
                <!-- <div class="icon"></div> -->
                <div id="list-error-employee">{{text}}</div>
            </div>
            <div class="btn">
                <button id="btn-huy-bo" @click="onCancelDelete()">Hủy bỏ</button>
                <button id="btn-xoa" @click="onDelete()">Xóa</button>
            </div>
        </div>
    </div>

</template>

<script>

export default {
  name: 'NotificationActDelete',
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
    onCancelDelete() {
        this.$emit("onCancelDeleteEmployee");
    },

     /**
     * Mô tả: Không lưu thông tin
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    onDelete() {
        this.$emit("onDeleteEmployee");
    },

  },
}
</script>

<style>
#dialog-msg-delete-employee{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(4,20,52, 0.5);
    z-index: 999;

}

#dialog-msg-delete-employee #content-msg-delete{
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

#dialog-msg-delete-employee #content-msg-delete #content-error-title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

#dialog-msg-delete-employee #content-msg-delete #content-error-title strong{
    font-size: 20px;
}

#dialog-msg-delete-employee #content-msg-delete #content-error-title label{
    font-size: 20px;
}

#dialog-msg-delete-employee #content-msg-delete #content-error-title label:hover{
    cursor: pointer;
}

#dialog-msg-delete-employee #content-msg-delete .list{
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}

#dialog-msg-delete-employee #content-msg-delete .list .icon{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -598px -463px;
    width: 36px;
	height: 37px;
    margin-right: 16px
}

#dialog-msg-delete-employee #content-msg-delete #list-error-employee{
    margin-top: 8px;
}

#dialog-msg-delete-employee #content-msg-delete #list-error-employee p{
    margin-top: 0px;
    margin-bottom: 8px;
}

#dialog-msg-delete-employee #content-msg-delete .btn{
    display: flex;
    justify-content: right;
}

#dialog-msg-delete-employee #content-msg-delete #btn-huy-bo{
    height: 36px;
    width: 80px;
    border: 1px solid #E0E0E0;
    border-radius: 3px;
    background-color: #FFFFFF;
    color: #212121;
    font-size: 14px;
}

#dialog-msg-delete-employee #content-msg-delete #btn-huy-bo:hover{
    cursor: pointer;
}

#dialog-msg-delete-employee #content-msg-delete #btn-xoa{
    height: 36px;
    width: 80px;
    border: 1px solid #E0E0E0;
    border-radius: 3px;
    background-color: #DE3617;
    color: #FFFFFF;
    font-size: 14px;
    margin-left: 8px;
}

#dialog-msg-delete-employee #content-msg-delete #btn-xoa:hover{
    cursor: pointer;
}



</style>
