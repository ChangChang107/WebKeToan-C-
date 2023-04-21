
const MISAEnum = {
    Gender: {
        Male: 1,
        Female: 2,
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
    Companies: ["Công ty A", "Công ty B", "Công ty C", "Công ty D"],
}


export default MISAEnum;