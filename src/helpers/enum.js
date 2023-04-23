
const MISAEnum = {
    Gender: {
        Male: 1,
        Female: 2,
        Other: 0
    },
    FormMode: {
        Add: 0,
        Update: 1,
        Delete: 2,
    },
    Validate: {
        Title: "Dữ liệu không hợp lệ",
        duplicateCode: "Mã nhân viên đã tồn tại",
        EmployeeCode: "Mã nhân viên không được để trống",
        EmployeeName: "Họ và tên không được để trống",
        EmployeePosition: "Đơn vị không được để trống",
    } ,
    saveMessage: {
        title: "Dữ liệu đã bị thay đổi ",
        content: "Lưu lại những thay đổi?",
    },
    deleteMessage: {
        title: "Xóa tài liệu",
        content: "Các tài liệu bạn đang chọn sẽ bị xóa",
    },
    toastMessage: {
        Success: "Thành công!",
        addEmployeeSuccess: "Thông tin nhân viên mới đã được thêm",
        updateEmployeeSuccess: "Thông tin nhân viên đã được cập nhật",
        deleteEmployeeSuccess: "Thông tin nhân viên đã bị xóa",
        action: "Hoàn tác",
    },
    ClassIcon: {
        Success: "fa-sharp fa-solid fa-circle-check fa-xl",
        Faild: "fas fa-times-circle",
    },
    Companies: ["Công ty A", "Công ty B", "Công ty C", "Công ty D"],
}


export default MISAEnum;