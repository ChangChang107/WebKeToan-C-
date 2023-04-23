import API from '@/helpers/api';
import axios from 'axios';

export default class BaseService{
    controller;
    constructor(controller){
        this.controller = controller;
    }

     /**
     * Mô tả: Lấy tất cả bản ghi
     * @param: 
     * return: Danh sách các bản ghi
     * Created by: nttrang
     * Created date: 12/04/2023
     */
    async getAll(){
        try{
            return (await axios.get(`${API.BaseUrl}/${this.controller}`)).data;
        }catch(err){
            console.log(err);
        }
    }

     /**
     * Mô tả: Lấy danh sách nhân viên theo trang
     * @param: 
     * return: Danh sách các bản ghi
     * Created by: nttrang
     * Created date: 21/04/2023
     */
    async getPaging(pageIndex, pageSize){
        try{
            return (await axios.get(`${API.BaseUrl}/${this.controller}/pagging?pageIndex=${pageIndex}&pageSize=${pageSize}`)).data;
        }catch(err){
            console.log(err);
        }
    }

     /**
     * Mô tả: Lấy bản ghi theo id
     * @param: id
     * return: Bản ghi cần lấy
     * Created by: nttrang
     * Created date: 12/04/2023
     */
    async getById(id){
        try {
            return (await axios.get(`${API.BaseUrl}/${this.controller}/${id}`)).data;
        } catch (error) {
            console.log(error);
        }
    }

     /**
     * Mô tả: Xóa một bản ghi theo id
     * @param: id
     * return: 
     * Created by: nttrang
     * Created date: 12/04/2023
     */
    //  async deleteById(id){
    //     try {
    //         return (await axios.delete(`${API.BaseUrl}/${this.controller}`,{
    //             data: {
    //                 id: id
    //             }
    //         }));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

     /**
     * Mô tả: Xóa nhiều bản ghi theo các id
     * @param: ids
     * return: 
     * Created by: nttrang
     * Created date: 12/04/2023
     */
    async deleteByIds(ids){
        try {
            return (await axios.delete(`${API.BaseUrl}/${this.controller}`, {
                headers: {
                    'Content-Type': 'application/json'
                  },
                data: ids
            }));
        } catch (error) {
            console.log(error);
        }
    }

     /**
     * Mô tả: Sửa thông tin một bản ghi theo id
     * @param: id, record
     * return: 
     * Created by: nttrang
     * Created date: 12/04/2023
     */
    async update(record){ 
        try {
            return (await axios.put(`${API.BaseUrl}/${this.controller}`, record)).data;
        } catch (error) {
            console.log(error);
        }
    }

     /**
     * Mô tả: Thêm mới một bản ghi
     * @param: record
     * return: 
     * Created by: nttrang
     * Created date: 12/04/2023
     */
    async add(record){
        try {
            return (await axios.post(`${API.BaseUrl}/${this.controller}`, record)).data;
        } catch (error) {
            console.log(error);
        }
    }
    
}