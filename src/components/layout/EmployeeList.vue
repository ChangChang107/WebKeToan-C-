<template>
    <div class="page-content">
        <div class="page-header">
            <div class="page-title">Nhân viên</div>
            <div class="btn">
                <button class="btnAdd" id="btn-add" @click="btnAddOnClick()">
                    <div class="icon"></div>
                    <div class="text">Thêm mới</div>
                </button>
                <!-- <button class="btn-3cham"></button> -->
            </div>
        </div>
        <div class="page-grid">
            <div class="page-toolbar">
                <div class="page-toolbar-left">
                    <input type="text" class="find icon-search" placeholder="Tìm kiếm trong danh sách">
                    <div v-if="check != ''" class="select">
                        <p class="number-selected">Đã chọn</p>
                        <p class="unselected" @click="unSelected()"> bỏ chọn</p>
                        <div class="action1" @click="clickDeleteItemsSelect()">
                            <div class="icon"></div>
                            <p class="text">Xóa</p>
                        </div>
                    </div>
                </div>
                <div class="page-toolbar-right">
                    <!-- <MInput v-model="username" 
                    :placeholder="enterUsername"
                    ref="username"
                    :required="true"></MInput> -->
                    <TheDropdown textSelect = "Chọn công ty" :items="companies"></TheDropdown>
                    <div class="btn-icon">
                        <button class="btn-fill"></button>
                    </div>
                    <div class="btn-icon">
                    <button class="btn-setting"></button>
                    </div>
                </div>  
            </div>
            <div class="m-table-cover">
                <table class="m-table" id="tbEmployeeList"> 
                    <thead>
                        <tr>
                            <th style="width: 35px;">
                                <input type="checkbox" value="" v-model="selectAll">
                            </th>
                            <th class="text-align-left" model-name="EmployeeCode" style="width: 155px;">MÃ NHÂN VIÊN</th>
                            <th class="text-align-left" model-name="FullName" style="width: 200px;">TÊN NHÂN VIÊN</th>
                            <th class="text-align-left" model-name="GenderName" style="width: 120px;">GIỚI TÍNH</th>
                            <th class="text-align-center" model-name="DateOfBirth" style="width: 120px;">NGÀY SINH</th>
                            <th class="text-align-right" model-name="IdentityNumber" style="width: 130px;">SỐ CMND</th>
                            <th class="text-align-left" model-name="PositionName" style="width: 150px;">CHỨC DANH</th>
                            <th class="text-align-left" model-name="DepartmentName" style="width: 220px;">TÊN ĐƠN VỊ</th>
                            <th class="text-align-right" model-name="" style="width: 130px;">SỐ TÀI KHOẢN</th>
                            <th class="text-align-left" model-name="" style="width: 160px;">TÊN NGÂN HÀNG</th>
                            <th class="text-align-left" model-name="" style="width: 230px;">CHI NHÁNH TK NGÂN HÀNG</th>
                            <!-- <th model-name="" style="width: 150px;">CHỨC NĂNG</th> -->

                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                        v-for="employee in listEmployee" 
                        :key = "employee.EmployeeId" 
                        @dblclick="$events => rowOnDblClick(employee)">
                            <td class="text-align-center">
                                <input type="checkbox" :value="employee.EmployeeId" v-model="check"></td>
                            <td class="text-align-left">{{employee.EmployeeCode}}</td>
                            <td class="text-align-left">{{employee.FullName}}</td>
                            <td class="text-align-left">{{employee.GenderName}}</td>
                            <td class="text-align-center">{{ formatDate(employee.DateOfBirth) }}</td>
                            <td class="text-align-right">{{employee.IdentityNumber}}</td>
                            <td class="text-align-left">{{employee.PositionName}}</td>
                            <td class="text-align-left">{{employee.DepartmentName}}</td>
                            <td class="text-align-right"></td>
                            <td class="text-align-left"></td>
                            <td class="text-align-left"></td>
                            <!-- <td class="chucnang">
                                <div class="group-icon">
                                    <div class="icon-edit"></div>
                                    <div class="icon-etc"></div>
                                </div>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="m-pagging">
                        <div class="m-pagging-left">Tổng: {{listEmployee.length}}</div>
                <div class="m-pagging-right">
                    <div class="number-page">
                        <p>Số bản ghi/trang: </p>
                        <div class="page-select">
                            <select name="" id="">
                                <option value="">10</option>
                                <option value="">15</option>
                                <option value="">20</option>
                                <option value="">25</option>
                            </select>
                        </div>
                    </div>
                    <div class="current-page">1 - {{listEmployee.length}} bản ghi</div>
                    <div class="icon">
                        <div class="prev"></div>
                        <div class="next"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <DialogEmployee 
    :receiveListEmployee="listEmployee"
    :employeeItem = "employeeSelected"
    :formMode="dialogFormMode"
    v-if="showDialog" 
    @onCloseDialog="$event => showDialog = false"></DialogEmployee>

    <NotificationActDelete
    :title="deleteEmployeeMsgTitle"
    v-if="showDeleteMsg"
    :text = "deleteEmployeeMsg"
    @onCloseMsg="$event => showDeleteMsg = false"
    @onDeleteEmployee="$event => deleteEmployee()"
    @onCancelDeleteEmployee="$event => cancelDeleteEmployee()"
    ></NotificationActDelete>


</template>

<script>
import DialogEmployee from '../base/DialogEmployee.vue';
import TheDropdown from '../base/dropdown/TheDropdown.vue';
import MISAEnum from '@/helpers/enum';
import axiosClient from '@/api/base';
import NotificationActDelete from '../base/NotificationActDelete.vue';

export default {
  name: 'EmployeeList',
  components: {
    TheDropdown,
    DialogEmployee,
    NotificationActDelete,
  },

  created(){
    // Lấy danh sách nhân viên
    this.getEmployee();
  },

  data() {
    return{
        companies: MISAEnum.Companies,
        check:[],
        selectAll: false,
        showSelect: false,
        showDialog: false,
        listEmployee : [],
        employeeSelected: {},
        dialogFormMode: MISAEnum.FormMode.Add,
        deleteEmployeeMsgTitle: "",
        showDeleteMsg: false,
        deleteEmployeeMsg: MISAEnum.deleteMessage.content,
    }
  },

  methods: {
     /**
     * Mô tả: Hàm hiển thị form thông tin nhân viên khi bấm vào nút thêm mới
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    btnAddOnClick(){
        // Hiển thị form 
        this.showDialog = true;
        // Lưu lại giá trị để biết đang thực hiện việc thêm nhân viên
        this.dialogFormMode = MISAEnum.FormMode.Add;
    },
    
     /**
     * Mô tả: Hàm hiển thị form sửa thông tin nhân viên khi double click vào bản ghi 
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    rowOnDblClick(employee) {
        console.log(employee)
        // Hiển thị form thông tin
        this.showDialog = true;
        // Gán lại thông tin nhân viên ở bản ghi mình đã double click
        this.employeeSelected = employee;
        // Lưu lại giá trị để biết đang thực hiện việc sửa thông tin nhân viên
        this.dialogFormMode = MISAEnum.FormMode.Update;
    },
    
     /**
     * Mô tả: Hàm định dạng lại ngày tháng năm
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    formatDate(date) {
        try {
            date = new Date(date);
            let dateValue = date.getDate();
            let monthValue = date.getMonth();
            let yearValue = date.getFullYear();
            return `${dateValue}/${monthValue+1}/${yearValue}`;
        } catch (error) {
            console.log(error)
        }
    },

     /**
     * Mô tả: Chọn tất cả bản ghi
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    selectAllEmployee() {
        if(this.selectAll){
            for(let employee of this.listEmployee) {
                this.addElementInArray(employee.EmployeeId, this.check);
                this.selectAll = false;
            }
        } 
    },

     /**
     * Mô tả: Hàm xóa các bản ghi đã chọn
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 30/2/2023
     */
    clickDeleteItemsSelect(){
        this.showDeleteMsg = true;
    },

     /**
     * Mô tả: Xóa các bản ghi được chọn
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    deleteEmployee(){
        // Duyệt các bản ghi trong mảng các bản ghi được chọn
        for(let item of this.check) {
            // Xóa các bản ghi
            axiosClient.delete(`/employees/${item}`)
                .then(res => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        // Xóa các bản ghi vừa bị xóa trong mảng
        this.deleteAllElementInArray(this.check);
        //reload lại dữ liệu
        this.getEmployee();
        this.showDeleteMsg = false;
        

    },

     /**
     * Mô tả: Hủy bỏ việc xóa 
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    cancelDeleteEmployee(){
        this.showDeleteMsg = false;
        this.unSelected();
    },

     /**
     * Mô tả: Bỏ chọn các bản ghi
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    unSelected() {
        this.deleteAllElementInArray(this.check);
    },

     /**
     * Mô tả: Hàm lấy danh sách nhân viên
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    getEmployee() {
        // Gọi api để lấy danh sách nhân viên
        axiosClient.get("/employees")
            .then(res => {
                this.listEmployee = res.data;
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error)
            })
    },

     /**
     * Mô tả: Thêm mới một phần tử vào mảng
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    addElementInArray(element, array){
        array.push(element);
    },

     /**
     * Mô tả: Xóa tất cả các phần tử trong một mảng
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    deleteAllElementInArray(array){
        array.length = 0;
    },
  },

}

</script>

<style>
.page-content{
    width: 100%;;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 8px;
    padding-top: 8px;
    background: #EEEFF1;
    box-sizing: border-box;
}

@font-face {
    font-family: Roboto Bold;
    src: url("../../assets/fonts/Roboto-Bold.ttf")
}

.page-content .page-header{
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    margin-bottom: 16px;
    margin-top: 8px;
    justify-content: space-between;
}

.page-content .page-header .page-title{
    font-family: Roboto Bold;
    font-size: 24px;
    color: #1F1F20;
}

.page-content .page-header .btn{
    display: flex;
}

.page-content .page-header .btn .btnAdd{
    display: flex;
    align-items: center;
    height: 36px;
    width: 116px;
    padding: 10px 13px 9px 8px;
    background: #50B83C;
    border: none;
    border-radius: 4px;
    margin-right: 12px;
}

.page-content .page-header .btn .btnAdd:hover{
    cursor: pointer;
}

.page-content .page-header .btn .btnAdd:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.page-content .page-header .btn .btnAdd .icon{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -801px -313px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -801px -313px;
    width: 14px;
	height: 14px;
    background-color: #FFFFFF;
    margin-right: 8px;
}

.page-content .page-header .btn .btnAdd .text{
    font-family: Roboto Medium;
    font-size: 14px;
    color: #FFFFFF;
}

.page-content .page-header .btn .btn-3cham{
    height: 36px;
    width: 36px;
    background: #FFFFFF;
    border: none;
    border-radius: 4px;
}

.page-grid{
    position: relative;
    height: calc(100% - 128px);
    width: 100%;
    background: white;
    border-radius: 4px;
}

.page-grid .m-table-cover{
    width: 1600px;
    height: 659px;
    overflow: scroll;
}

.page-grid .m-table-cover .m-table{
    font-family: Roboto;
    font-size: 14px;
    width: 1800px;
    height: 659px;
    border-collapse: collapse;
}

.page-grid .m-table th{
    font-family: Roboto Bold;
    font-size: 14px;
    background: #F5F5F5;
    position: sticky;
    top: -0.02px;;
    padding-left: 16px;
    padding-right: 16px;
}


.page-grid .m-table td,th{
    height: 48px;
    border: 1px solid #E0E0E0ed;
}

.page-grid .m-table td{
    padding-left: 16px;
    padding-right: 16px;
}

.page-grid .m-table tr:hover{
    background: #F2F2F2;
    cursor: pointer;
}

tbody tr .chucnang {
    position: relative;
}

tbody tr .chucnang .group-icon{
    display: flex;
    align-items: center;
}

tbody tr .chucnang .group-icon .icon-edit{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -1658px -90px;
    width: 20px;
	height: 20px;
    margin-right: 8px;
    border-radius: 50%;

}

tbody tr .chucnang .group-icon .icon-etc{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -568px -30px;
    width: 24px;
	height: 24px;
    border-radius: 50%;

}

.page-toolbar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    padding-right: 20px;
}

.page-toolbar .page-toolbar-left{
    display: flex;
    align-items: center;
    height: 36px;
    width: auto;
    padding-left: 16px;
}

.page-toolbar .page-toolbar-left input{
    background-position: 12px center;
    height: 100%;
    width: 280px;
    border: 1px solid #E0E1E4;
    padding-left: 36px;
    border-radius: 4px;
    font-size: 14px;

}

.page-toolbar .page-toolbar-left input:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.page-toolbar .page-toolbar-left .select{
    display: flex;
    margin-left: 36px;
    align-items: center;
}

.page-toolbar .page-toolbar-left .select .number-selected{
    width: 63px;
    margin-right: 16px;
    font-size: 14px;
}

.page-toolbar .page-toolbar-left .select .unselected{
    width: 51px;
    margin-right: 25px;
    font-size: 14px;
    color: #E61D1D;
}

.page-toolbar .page-toolbar-left .select .unselected:hover{
    cursor: pointer;
}

.page-toolbar .page-toolbar-left .select .action1{
    display: flex;
    align-items: center;
    font-size: 14px;
    width: 108px;
    height: 36px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    color: #E61D1D;

}

.page-toolbar .page-toolbar-left .select .action1:hover{
    cursor: pointer;
    border: 1px solid #E61D1D;
}

.page-toolbar .page-toolbar-left .select .action1 .icon{
    -webkit-mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -464px -313px;
    mask: url("../../assets/img/Sprites.64af8f61.svg") no-repeat -464px -313px;
    width: 15px;
	height: 15px;
    background-color: #E61D1D;
    margin-right: 12px;
    margin-left: 7px;
}

.page-toolbar .page-toolbar-left .select .action1 .text{
    
}

.icon-search{
    background: url("../../assets/img/search.png") no-repeat;
    background-size: 16px;
}

.page-toolbar .page-toolbar-right{
    display: flex;
}

.page-toolbar .page-toolbar-right sellect{
    height: 36px;
    width: 260px;
}

.page-toolbar .page-toolbar-right .btn-icon{
    display: none;
    height: 36px;
    width: 36px;
    border: 1px solid #E0E1E4;
    margin-left: 12px;
    border-radius: 4px;
}

.page-toolbar .page-toolbar-right .btn-icon:hover{
    cursor: pointer;
}

.page-toolbar .page-toolbar-right .btn-fill{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -1602px -91px;
    width: 20px;
	height: 19px;
    border: none;
    margin-left: 8px;
    margin-top: 10px;
}

.page-toolbar .page-toolbar-right .btn-fill:hover{
    cursor: pointer;
}

.page-toolbar .page-toolbar-right .btn-setting{
    background: url('../../assets/img/Sprites.64af8f61.svg') no-repeat -676px -30px;
    width: 23px;
	height: 24px;
    border: none;
    margin-left: 7px;
    margin-top: 7px;
}

.page-toolbar .page-toolbar-right .btn-setting:hover{
    cursor: pointer;
}

.m-pagging{
    position: absolute;
    bottom: 0px;
    display: flex;
    height: 48px;
    width: calc(100% - 32px);
    border: 1px solid #E0E0E0ed;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    justify-content: space-between;
    font-family: Roboto;
    font-size: 14px;
}

.m-pagging .m-pagging-left{
    
}

.m-pagging .m-pagging-right{
    display: flex;
    align-items: center;
}

.m-pagging .m-pagging-right .number-page{
    display: flex;
    align-items: center;
    margin-right: 16px;
}

.m-pagging .m-pagging-right .number-page .page-select select{
    border: none;
}

.m-pagging .m-pagging-right .number-page .page-select select:focus{
    outline: none !important;
    border: 1px solid #FFFFFF;
}

.m-pagging .m-pagging-right .current-page{
    margin-right: 16px;
}

.m-pagging .m-pagging-right .icon{
    background: purple;
    width: 24px;
}

.m-pagging .m-pagging-right .icon .prev{

}

.m-pagging .m-pagging-right .icon .next{
    
}

.text-align-center {
    text-align: center;
}

.text-align-left{
    text-align: left;
}

.text-align-right{
    text-align: right;
}

.min-with-35px{
    min-width: 35px;
}

input[type="checkbox"]:checked{
    background-color: #50B83C;
}
</style>