<template>

    <div class="m-dialog-infor-staff" id="m-dialog-infor-staff" style="display: ;">
        <form action="">
            <div class="infor-staff">
                <div class="infor-staff-title">
                    <div class="text">Thông tin nhân viên</div>
                    <div class="box">
                        <input 
                        type="checkbox"
                        property-name= "IsCustomer"
                        v-model="employee.isCustomer">
                        <p>Là khách hàng</p>
                    </div>
                    <div class="box">
                        <input type="checkbox" 
                        property-name= "IsEmployee"
                        v-model="employee.isEmployee">
                        <p>Là nhà cung cấp</p>
                    </div>
                    <div class="icon-close" id="icon-close" @click.prevent="btnCloseOnClick()">x</div>
                </div>
                <div class="infor-staff-content">
                    <div class="m-group-row">
                        <div class="m-row">
                            <div class="staff-id">
                                <label for="">Mã<span class="required">*</span></label>
                                <input 
                                type="text" 
                                tabindex="1"
                                ref="staffId"
                                id="staff-id" 
                                property-name= "EmployeeCode"
                                :class="{'error-border':invalidEmployeeCode}"
                                @blur="$event => onValidateEmployeeCode()"
                                v-model="employee.employeeCode"
                                class="input-staff-id">
                                <p class="error-info margin-0px">{{ errorEmployeeCode }}</p>
                            </div>
                            <div class="staff-name ">
                                <label for="">Tên<span class="required">*</span></label>
                                <input 
                                type="text" 
                                tabindex="2" 
                                id="staff-name" 
                                property-name= "FullName"
                                :class="{'error-border':invalidEmployeeName}"
                                @blur="$event => onValidateEmployeeName()"
                                v-model="employee.fullName"
                                class="input-staff-name">
                                <p class="error-info margin-0px">{{ errorEmployeeName }}</p>
                            </div>
                            <div class="staff-date">
                                <label for="">Ngày sinh</label>
                                <input 
                                tabindex="3"
                                property-name= "DateOfBirth"
                                v-model="employee.dateOfBirth"
                                type="date" id="staff-date" 
                                class="input-staff-date">
                            </div>
                            <div class="staff-sex">
                                <label for="">Giới tính</label>
                                <div class="select-sex">
                                    <input type="radio" 
                                    tabindex="4"
                                    :value= 'male'
                                    class="input-staff-female" 
                                    v-model="employee.gender">
                                    <label for="">Nam</label>
                                    <input 
                                    type="radio" 
                                    tabindex="5"
                                    :value= 'female'
                                    v-model="employee.gender"
                                    class="input-staff-male">
                                    <label for="">nữ</label>
                                    <input 
                                    tabindex="6"
                                    type="radio" 
                                    :value='other' 
                                    v-model="employee.gender"
                                    class="input-staff-other">
                                    <label for="">khác</label>
                                </div>
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="staff-position" id="staff-position">
                                <label for="">Đơn vị<span class="required">*</span></label>
                                <TheDropdown 
                                tabindex="7"
                                textSelect = "Chọn công ty" 
                                :items="listDepartmentCombobox" 
                                :itemSelected ="departmentName"
                                :isItemObject="true"
                                @sendItem="receiveItem"
                                :class="{'error-border':invalidEmployeePosition}"
                                @sendValidate="onValidateEmployeePosition"
                                ></TheDropdown>
                                <p class="error-info margin-0px">{{ errorEmployeePosition }}</p>
                            </div>
                            <div class="staff-cmnd">
                                <label for="">Số CMND</label>
                                <input 
                                tabindex="8"
                                type="text" 
                                class="input-staff-cmnd"
                                property-name= "IdentityNumber"
                                v-model="employee.identityNumber">
                            </div>
                            <div class="staff-cmnd-date">
                                <label for="">Ngày cấp</label>
                                <input 
                                tabindex="9"
                                type="date" 
                                class="input-staff-cmnd-date"
                                property-name= "IdentityDate"
                                v-model="employee.identityDate"
                                >
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="staff-job">
                                <label for="">Chức danh</label>
                                <input 
                                type="text" 
                                tabindex="10"
                                class="input-staff-job"
                                property-name= "PositionName"
                                v-model="employee.position">
                            </div>
                            <div class="staff-cmnd-place">
                                <label for="">Nơi cấp</label>
                                <input 
                                type="text" 
                                tabindex="11"
                                class="input-staff-cmnd-place"
                                property-name= "IdentityPlace"
                                v-model="employee.identityPlace">
                            </div>
                        </div>
                    </div>
                    <div class="m-group-row">
                        <div class="m-row">
                            <div class="staff-address">
                                <label for="">Địa chỉ</label>
                                <input 
                                tabindex="12"
                                type="text" 
                                class="input-staff-address"
                                property-name= "Address"
                                v-model="employee.address">
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="staff-mobile-number">
                                <label for="">ĐT di động</label>
                                <input 
                                type="text" 
                                tabindex="13"
                                class="input-staff-mobile-number"
                                property-name= "PhoneNumber"
                                v-model="employee.phoneNumber">
                            </div>
                            <div class="staff-landline-number">
                                <label for="">ĐT cố định</label>
                                <input 
                                tabindex="14"
                                type="text" 
                                class="input-staff-landline-number"
                                property-name="TelephoneNumber"
                                v-model="employee.telephoneNumber">
                            </div>
                            <div class="staff-email">
                                <label for="">Email</label>
                                <input 
                                type="text" 
                                tabindex="15"
                                class="input-staff-email"
                                property-name= "Email"
                                v-model="employee.email">
                            </div>
                        </div>
                        <div class="m-row">
                            <div class="staff-bank-number">
                                <label for="">Tài khoản ngân hàng   </label>
                                <input type="text" 
                                tabindex="16"
                                class="input-staff-bank-number"
                                property-name= "BankAccount"
                                v-model="employee.bankAcount"
                                >
                            </div>
                            <div class="staff-bank">
                                <label for="">Tên ngân hàng</label>
                                <input type="text" 
                                tabindex="17"
                                class="input-staff-bank"
                                property-name= "BankName"
                                v-model="employee.bankName"
                                >
                            </div>
                            <div class="staff-bank-place">
                                <label for="">Chi nhánh</label>
                                <input type="text" 
                                tabindex="18"
                                class="input-staff-bank-place"
                                property-name= "BankBranch"
                                v-model="employee.bankBranch"
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="group-btn">
                    <div class="group-btn-left">
                        <button tabindex="21" @click.prevent="btnSaveOnClick()">Hủy</button>
                    </div>
                    <div class="group-btn-right">
                        <button tabindex="19" class="btn-save" @click.prevent="btnSaveOnClick(false)">Cất</button>
                        <button tabindex="20" class="btn-add" id="btn-add-employee" @click.prevent="btnSaveOnClick(true)">Cất và Thêm</button>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <ErrorNotification
    :title="errorValidate"
    v-if="showErrorEmployee"
    :textError = "listErrorValidate"
    @onCloseError="$event => {showErrorEmployee = false; this.listErrorValidate.length = 0 }"></ErrorNotification>

    <NotificationActSave
    :title="saveEmployeeMsgTitle"
    v-if="showActionMessage"
    :text = "saveEmployeeMsg"
    @onCloseMsg="$event => showActionMessage = false"
    @onSaveEmployee="$event => btnSaveOnClick()"
    @onNoSaveEmployee="$event => noSaveEmployee()"
    ></NotificationActSave>



</template>

<script>
import MISAEnum from '@/helpers/enum';
import ErrorNotification from './ErrorNotification.vue'
import NotificationActSave from './NotificationActSave.vue';
import EmployeeService from '@/services/EmpoyeeService';


export default {
  name: 'DialogEmployee',
  props: ["employeeItem", "formMode","receiveListEmployee", "receiveListDepartment"],
  components: {
    ErrorNotification,
    NotificationActSave,
  },
  created() {
    this.displayForm();
    this.formatDate();
    this.getDepartmentComboboxs();
    this.getDepartmentName(this.employee.departmentId)
  },

  mounted() {
    // set focus cho input đầu tiên trong form
    this.setFirstFocus();
  },

  data() {
    return {

        true: true,
        false: false,
        employeeService: new EmployeeService(),

        // Tiêu đề của thông báo lỗi validate dữ liệu
        errorValidate: MISAEnum.Validate.Title,

        // Tiêu đề của thông báo thực hiện hành động lưu hay không lưu
        saveEmployeeMsgTitle: MISAEnum.saveMessage.title,
        saveEmployeeMsg: MISAEnum.saveMessage.content,
        
        // Mảng lưu các lỗi khi nhập thông tin
        listErrorValidate: [],

        // Các biến xác định có lỗi hay không
        invalidEmployeeCode: false,
        invalidEmployeeName: false,
        invalidEmployeePosition: false,

        // Các biến lưu thông báo lỗi nếu có
        errorEmployeeCode: "",
        errorEmployeeName: "",
        errorEmployeePosition: "",

        // Biến lưu thông tin giới tính
        male: MISAEnum.Gender.Male,
        female: MISAEnum.Gender.Female,
        other: MISAEnum.Gender.Other,

        // Biến lưu thông tin nhân viên vừa nhập vào form 
        dataGOC: null,

        // Biến xác định có hiển thị thông báo lỗi hay không
        showErrorEmployee: false,

        // Biến xác định có hiển thị thông báo thực hiện hành động sau khi sửa đổi dữ liệu hay không
        showActionMessage: false,

        // 
        employee: {},
        listDepartmentCombobox: [],
        departmentName: "",
    }
  },

  methods: {
     /**
     * Mô tả: KIểm tra form hiển thị là thêm mới hay sửa thông tin
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    displayForm(){
        // 1. Kiểm tra nếu form hiển thị với chức năng thêm nhân viên mói thì tự động tạo mã nhân viên
        if (this.formMode == MISAEnum.FormMode.Add) {
            // Lấy mã nhân viên mới
            this.employeeService.getNewEmployeeCode().then((res) => {
                this.employee.employeeCode = res;
                console.log(this.employee.employeeCode);
            }).catch((err) => {
                console.log(err);
            });
        } else {
        // 2. Nếu form hiện lên với chức năng sửa thông tin nhân viên thì lưu lại thông tin lên form
            // 2.1. Lưu lại data gốc
            this.dataGOC = JSON.stringify(this.employeeItem);
            // 2.2. gán thông tin vào để hiển thị 
            this.employee = JSON.parse(this.dataGOC);
        }
    },

     /**
     * Mô tả: Set focus cho ô nhập liệu đầu tiên trong form
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    setFirstFocus() {
        this.$refs.staffId.focus();
    },

     /**
     * Mô tả: 
     * @param: Nhân item trong combobox 
     * return: 
     * Created by: nttrang
     * Created date: 19/04/2023
     */
     receiveItem(e) {
        this.employee.departmentId = e;
      },

     /**
     * Mô tả: Hàm đóng form thông tin nhân viên
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    btnCloseOnClick(){
        // 1. kiểm tra trên form có sự thay đổi hay không nếu có thì hiển thị thông báo
        var newData = JSON.stringify(this.employee);
        if (newData != this.dataGOC){
            this.showActionMessage = true;
        } else {
            this.closeDialog();
        }
    },
     /**
     * Mô tả:  Hàm báo lỗi khi mã nhân viên nhập vào không hợp lệ
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    onValidateEmployeeCode() {
        // 1. lấy dữ liệu từ ô input
        const employeeCode = this.employee.employeeCode;
        // 2. kiểm tra nếu không có dữ liệu set border thành màu đỏ và hiển thị thông báo lỗi
        if(employeeCode == "" || employeeCode == undefined){
            // 2.1. Gán giá trị lỗi bằng true
            this.invalidEmployeeCode = true;
            // 2.2. Thêm thông tin lỗi để hiển thị cho người dùng
            this.errorEmployeeCode = MISAEnum.Validate.EmployeeCode;
            // 2.3. Thêm lỗi vào danh sách các lỗi để hiển thị
            this.addElementInArray(this.errorEmployeeCode, this.listErrorValidate)
            // this.listErrorValidate.push(this.errorEmployeeCode);
        } else{
        // 3. Nếu không có lỗi 
            // 3.1. Gán lại giá trị lỗi bằng false
            this.invalidEmployeeCode = false;
            // 3.2. Xóa thông tin lỗi
            this.errorEmployeeCode = "";
            // 3.3. Xóa lỗi khỏi danh sách nếu có
            this.listErrorValidate = this.deleteElementInArray(this.errorEmployeeCode, this.listErrorValidate);
        }

    },

     /**
     * Mô tả:  Hàm báo lỗi khi tên nhân viên nhập vào không hợp lệ
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    onValidateEmployeeName() {
        // 1. lấy dữ liệu từ ô input
        const employeeName = this.employee.fullName;
        // 2. kiểm tra nếu không có dữ liệu set border thành màu đỏ và hiển thị thông báo lỗi
        if(employeeName == "" || employeeName == undefined){
            // 2.1. Gán giá trị lỗi bằng true
            this.invalidEmployeeName = true;
            // 2.2. Thêm thông tin lỗi để hiển thị cho người dùng
            this.errorEmployeeName = MISAEnum.Validate.EmployeeName;
            // 2.3. Thêm lỗi vào danh sách các lỗi để hiển thị
            this.addElementInArray(this.errorEmployeeName, this.listErrorValidate)
            // this.listErrorValidate.push(this.errorEmployeeName);
        } else{
        // 3. Nếu không có lỗi 
            // 3.1. Gán lại giá trị lỗi bằng false
            this.invalidEmployeeName = false;
            // 3.2. Xóa thông tin lỗi
            this.errorEmployeeName = "";
            // 3.3. Xóa lỗi khỏi danh sách nếu có
            if(this.listErrorValidate != null)
            this.listErrorValidate = this.deleteElementInArray(this.errorEmployeeName, this.listErrorValidate);
        }
    },

     /**
     * Mô tả:  Hàm báo lỗi khi đơn vị nhập vào không hợp lệ
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    onValidateEmployeePosition(e) {
        const input = e;
        // 1. lấy dữ liệu từ ô input
        // const employeePosition = this.employee.departmentId;
        // 2. kiểm tra nếu không có dữ liệu set border thành màu đỏ và hiển thị thông báo lỗi
        if(input ==""){
            // 2.1. Gán giá trị lỗi bằng true
            this.invalidEmployeePosition = true;
            // 2.2. Thêm thông tin lỗi để hiển thị cho người dùng
            this.errorEmployeePosition = MISAEnum.Validate.EmployeePosition ;
            // 2.3. Thêm lỗi vào danh sách các lỗi để hiển thị
            this.addElementInArray(this.errorEmployeePosition, this.listErrorValidate)
            // this.listErrorValidate.push(this.errorEmployeePosition);
        } else{
        // 3. Nếu không có lỗi 
            // 3.1. Gán lại giá trị lỗi bằng false
            this.invalidEmployeePosition = false;
            // 3.2. Xóa thông tin lỗi
            this.errorEmployeePosition = "";
            // 3.3. Xóa lỗi khỏi danh sách nếu có
            if(this.listErrorValidate != null)
            this.listErrorValidate = this.deleteElementInArray(this.errorEmployeePosition, this.listErrorValidate);
        }
    },

    /**
     * Mô tả: Hàm định dạng lại ngày tháng năm
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
     formatDate() {
        try {
            let date = this.employee.dateOfBirth
                    date = new Date(date)
                    let dateValue = date.getDate()
                    let monthValue = date.getMonth()+1
                    let yearValue = date.getFullYear()
                    if(dateValue<10) dateValue =`0${dateValue}`
                    if(monthValue<10) monthValue=`0${monthValue}`
                    this.employee.dateOfBirth = `${yearValue}-${monthValue}-${dateValue}`
                    this.employee.identityDate = `${yearValue}-${monthValue}-${dateValue}`
        } catch (error) {
            console.log(error)
        }
    },

     /**
     * Mô tả: Hàm thực hiện thao tác sau khi nhập thông tin
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    btnSaveOnClick(isContinue) {
        // 1. Kiểm tra dữ liệu nhập vào đã hợp lệ hay chưa nếu lỗi thì hiển thị thông báo lỗi
        const check = this.checkDuplicateCode();
        console.log(check);
        if(this.invalidEmployeeCode || this.invalidEmployeeName || this.invalidEmployeePosition || check) {
            this.showActionMessage = false;
            this.showErrorEmployee = true;
        } else {
            //2. Nếu không có lỗi khi nhập thông tin thì hiển thị thông báo xác nhận lưu dữ liệu cho người dùng
            this.saveEmployee(isContinue);
        }

    },

     /**
     * Mô tả: Lưu dữ liệu
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    async saveEmployee(isContinue) {
        // Kiểm tra đang thực hiện thao tác thêm mới hay sửa bản ghi
        if(this.formMode == MISAEnum.FormMode.Add) {
            var newEmployee = this.employee;
            this.employeeService.add(newEmployee);
                    this.showActionMessage = false;
                    // Đóng form 
                    this.closeDialog();
                    // reload data
                    // this.reloadData();
                    this.$emit("showAddSuccessToast");
        } else {
            var newEmployeeUpdate = this.employee;
            this.employeeService.update(newEmployeeUpdate)
                    this.showActionMessage = false;
                    // Đóng form 
                    this.closeDialog();
                    // reload data
                    // this.reloadData();
                    // this.$emit("reloadEmployee");
                    this.$emit("showUpdateSuccessToast");
        }

        // Kiểm tra xem người dùng có muốn thêm mới tiep hay không
        if(isContinue) {
            this.closeDialog();
        } else {
            this.closeDialog();
        }
    },

     /**
     * Mô tả: Hàm thực hiện thao tác 1uay lại trang danh sách nhân viên và không lưu lại bản ghi 
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    noSaveEmployee() {
        this.showActionMessage = false;
        this.closeDialog();
        // this.$emit("onCloseDialog");

    },

     /**
     * Mô tả: Xóa 1 phần tử trong mảng khi biết giá trị của phần tử đó
     * @param: giá trị của phần tử cần xóa
     * return: mảng đã xóa
     * Created by: nttrang
     * Created date: 31/03/2023
     */
    deleteElementInArray(element, array) {
        const newArray = array.filter(item => item !== element)
        return newArray;
    },

     /**
     * Mô tả: Lấy tên đơn vị theo id
     * @param: id của đơn vị
     * return: tên đơn vị
     * Created by: nttrang
     * Created date: 17/04/2023
     */
     getDepartmentComboboxs() {
        for(let item of this.receiveListDepartment) {
            var newobject = {
                id: item.departmentId,
                name: item.departmentName
            };
            this.listDepartmentCombobox.push(newobject);
        }
        console.log(this.listDepartmentCombobox)
    },

     /**
     * Mô tả: Lấy tên đơn vị theo id
     * @param: id của đơn vị
     * return: tên đơn vị
     * Created by: nttrang
     * Created date: 17/04/2023
     */
     getDepartmentName(element) {
        if(this.formMode == MISAEnum.FormMode.Update) {
        const array = this.receiveListDepartment;
        for(let item of array) {
            if(item.departmentId == element){
                this.departmentName = item.departmentName;
            }
        }
        }
    },
  
    /**
     * Mô tả: Kiểm tra dữ liệu trùng
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    checkDuplicateCode() {
        const code = this.employee.employeeCode;
        const id = this.employee.employeeId;
        let isDuplicate = false;
        if(this.formMode == MISAEnum.FormMode.Add) {
            for(let item of this.receiveListEmployee) {
                if (item.employeeCode == code) {
                    isDuplicate = true;
                    this.addElementInArray(MISAEnum.Validate.duplicateCode, this.listErrorValidate)
                    // this.listErrorValidate.push(MISAEnum.Validate.duplicateCode);
                    }
            }
        } else {
            for(let item of this.receiveListEmployee) {
                if (item.employeeCode == code && item.employeeId != id) {
                    isDuplicate = true;
                    this.addElementInArray(MISAEnum.Validate.duplicateCode, this.listErrorValidate)
                    // this.listErrorValidate.push(MISAEnum.Validate.duplicateCode);
                    }
            }
        }
        return isDuplicate;
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
     * Mô tả: Đóng dialog
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    closeDialog(){
        this.$emit("onCloseDialog");
    },

     /**
     * Mô tả: Reload lại dữ liệu
     * @param: 
     * return: 
     * Created by: nttrang
     * Created date: 02/04/2023
     */
    reloadData() {
        location.reload();
    },
  },
}

</script>

<style >
.m-dialog-infor-staff{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(4,20,52, 0.3);
    z-index: 999;
}

.m-dialog-infor-staff .infor-staff{
    position: absolute;
    height: 736px;
    width: 1000px;
    background: #FFFFFF;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-left: 36px;
    padding-right: 36px;
    border-radius: 4px;
}

.infor-staff .infor-staff-title{
    position: relative;
    display: flex;
    align-items: center;
    height: 90px;
    width: 100%;
}

.infor-staff .infor-staff-title .text{
    display: flex;
    align-items: center;
    font-size: 24px;
    font-family: Roboto Bold;

}

.infor-staff .infor-staff-title .box{
    display: flex;
    align-items: center;
    margin-left: 16px;
    margin-right: 8px;
}

.infor-staff .infor-staff-title .box input{
    margin-right: 8px;
}

.infor-staff .infor-staff-title .box p{
    font-family: Roboto Medium;
    font-size: 14px;
}

.infor-staff .infor-staff-title .icon-close{
    position: absolute;
    right: 0;
    font-size: 24px;
}

.infor-staff .infor-staff-title .icon-close:hover{
    cursor: pointer;
}

.infor-staff .infor-staff-content{
    height: calc(100% - 180);
}

.infor-staff .infor-staff-content .m-group-row{
    height: calc(100%/2);
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 32px;
}

.infor-staff .infor-staff-content .m-group-row .m-row{
    display: flex;
    margin-bottom: 14px;
}

.infor-staff .infor-staff-content .m-group-row .m-row label{
    font-family: Roboto Medium;
    font-size: 14px;
}

.infor-staff .infor-staff-content .m-group-row .m-row input{
    box-sizing: border-box;
    margin-bottom: 8px;
    font-size: 14px;
    padding-left: 12px;
    font-family: Roboto;
    font-size: 14px;
}

.required{
    color: red;
    margin-left: 4px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-id{
    width: 220px;
    margin-right: 16px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-id .input-staff-id{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-id .input-staff-id:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-name{
    box-sizing: border-box;
    width: 285px;
    margin-right: 36px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-name .input-staff-name{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-name .input-staff-name:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-date{
    width: 183px;
    margin-right: 16px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-date .input-staff-date{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
    font-family: Roboto;
    font-size: 14px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-date .input-staff-date:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-sex{
    
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-sex .select-sex{
    display: flex;
    align-items: center;
    margin-top: 6px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-sex .select-sex input{
    height: 24px;
    width: 24px;
    margin-right: 8px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-sex .select-sex input:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-sex .select-sex label{
    margin-right: 16px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-position{
    width: 522px;
    margin-right: 36px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-position select{
    padding-left: 12px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-position .input-staff-position{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-position .input-staff-position:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-cmnd{
    width: 222px;
    margin-right: 16px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-cmnd .input-staff-cmnd{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-cmnd .input-staff-cmnd:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-cmnd-date{
    width: 183px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-cmnd-date .input-staff-cmnd-date{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
    font-family: Roboto;
    font-size: 14px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-cmnd-date .input-staff-cmnd-date:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-job{
    width: 522px;
    margin-right: 36px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-job .input-staff-job{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-job .input-staff-job:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-cmnd-place{
    width: 422px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-cmnd-place .input-staff-cmnd-place{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-cmnd-place .input-staff-cmnd-place:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-address{
    width: 981px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-address .input-staff-address{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-address .input-staff-address:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-mobile-number{
    width: 250px;
    margin-right: 16px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-mobile-number .input-staff-mobile-number{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-mobile-number .input-staff-mobile-number:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-landline-number{
    width: 250px;
    margin-right: 16px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-landline-number .input-staff-landline-number{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-landline-number .input-staff-landline-number:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-email{
    width: 250px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-email .input-staff-email{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-email .input-staff-email:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-bank-number{
    width: 250px;
    margin-right: 16px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-bank-number .input-staff-bank-number{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-bank-number .input-staff-bank-number:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-bank{
    width: 250px;
    margin-right: 16px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-bank .input-staff-bank{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-bank .input-staff-bank:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-bank-place{
    width: 250px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-bank-place .input-staff-bank-place{
    height: 36px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;  
    margin-top: 8px;
}

.infor-staff .infor-staff-content .m-group-row .m-row .staff-bank-place .input-staff-bank-place:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .group-btn{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    border-top: 1px solid #E0E0E0;
}

.infor-staff .group-btn .group-btn-left{
    height: 36px;
    width: 80px;
}

.infor-staff .group-btn .group-btn-left button{
    height: 100%;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
}

.infor-staff .group-btn .group-btn-left button:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .group-btn .group-btn-left button:hover{
    cursor: pointer;
}

.infor-staff .group-btn .group-btn-right{

}

.infor-staff .group-btn .group-btn-right .btn-save{
    height: 36px;
    width: 80px;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    margin-right: 16px;
}

.infor-staff .group-btn .group-btn-right .btn-save:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.infor-staff .group-btn .group-btn-right .btn-add{
    height: 36px;
    width: auto;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    background-color: #50B83C;
    color: #FFFFFF;
}   

.infor-staff .group-btn .group-btn-right .btn-add:focus{
    outline: none !important;
    border: 1px solid #50B83C;
}

.error-border{
    border: 1px solid #E61D1D !important;
    border-radius: 4px;
}

.error-info{
    color: #E61D1D !important;
    font-size: 12px;
}

.margin-0px {
    margin: 0px;
}

</style>
