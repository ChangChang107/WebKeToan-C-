<template>
    <div class="navbar">
        <div class="menu">
            <router-link to='/overview' class="menu-item">
                <div class="menu-icon icon-tongquan"></div>
                <div class="menu-text">Tổng quan</div>
            </router-link>
            <div class="menu-item">
                <div class="menu-icon icon-tienmat"></div>
                <div class="menu-text">Tiền mặt</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-tiengui"></div>
                <div class="menu-text">Tiền gửi</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-muahang"></div>
                <div class="menu-text">Mua hàng</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-banhang"></div>
                <div class="menu-text">Bán hàng</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-quanlyhoadon"></div>
                <div class="menu-text">Quản lý hóa đơn</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-kho"></div>
                <div class="menu-text">Kho</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-congcudungcu"></div>
                <div class="menu-text">Công cụ dụng cụ</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-taisancodinh"></div>
                <div class="menu-text">Tài sản cố định</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-thue"></div>
                <div class="menu-text">Thuế</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-giathanh"></div>
                <div class="menu-text">Giá thành</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-tonghop"></div>
                <div class="menu-text">Tổng hợp</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-ngansach"></div>
                <div class="menu-text">Ngân sách</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-baocao"></div>
                <div class="menu-text">Báo cáo</div>
            </div>
            <div class="menu-item">
                <div class="menu-icon icon-phantichtaichinh"></div>
                <div class="menu-text">Phân tích tài chính </div>
            </div>
        </div>
        <div class="navbar-reduce">
            <div class="icon"></div>
            <div class="text">Thu gọn</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TheNavbar',
  components: {
  }
}
</script>

<style>
.navbar {
    position: relative;
    height: 100%;
    width: 200px;
    background: #041434;
    font-family: Roboto Medium;
    font-size: 14px;
}

.navbar .navbar-reduce{
    display: flex;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    bottom: 0px;
    height: 44px;
    width: 100%;
    padding-left: 24px;
    border-top: 1px solid #213553;
}

.navbar .navbar-reduce .icon{
    height: 24px;
    width:24px;
    background: #FFFFFF;
    margin-right: 16px;
}

.navbar .navbar-reduce .text{
    font-size: 14px;;
    color: #869AB8
}

.navbar .menu{
    height: 100%;
    width: 200px;
    flex-shrink: 0;
    box-sizing: border-box;
    padding-top: 24px;
    padding-left: 12px;
    padding-right: 12px;
}

.menu-item{
    display: flex;
    align-items: center;
    height: 44px;
    width: 100%;
    margin-bottom: 4px;
    padding-left: 12px;
    text-decoration: none;
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

.menu-item .menu-icon.icon-tienmat{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -78px -1631px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -78px -1631px;
    width: 14px;
	height: 18px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-tiengui{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -121px -1633px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -121px -1633px;
    width: 16px;
	height: 16px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-muahang{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -165px -1632px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -165px -1632px;
    width: 16px;
	height: 18px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-banhang{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -165px -1632px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -165px -1632px;
    width: 16px;
	height: 18px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-quanlyhoadon{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -254px -1632px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -254px -1632px;
    width: 14px;
	height: 17px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-kho{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -294px -1632px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -294px -1632px;
    width: 18px;
	height: 17px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-congcudungcu{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -339px -1633px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -339px -1633px;
    width: 18px;
	height: 17px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-taisancodinh{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat  -382px -1632px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -382px -1632px;
    width: 17px;
	height: 18px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-thue{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat  -427px -1634px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -427px -1634px;
    width: 16px;
	height: 16px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-giathanh{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat  -471px -1633px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -471px -1633px;
    width: 17px;
	height: 17px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-tonghop{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat  -514px -1632px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -514px -1632px;
    width: 16px;
	height: 18px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-ngansach{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat  -382px -1664px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -382px -1664px;
    width: 16px;
	height: 16px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-baocao{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat  -552px -1636px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -552px -1636px;
    width: 14px;
	height: 13px;
    background-color: #869AB8;
}

.menu-item .menu-icon.icon-phantichtaichinh{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat  -207px -1667px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -207px -1667px;
    width: 17px;
	height: 14px;
    background-color: #869AB8;
}

.menu-item .menu-text{
    font-size: 14px;
    color: #869AB8;
}





</style>