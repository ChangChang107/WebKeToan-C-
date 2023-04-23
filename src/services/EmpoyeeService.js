import API from '@/helpers/api';

import BaseService from "./base/BaseService";

import axios from 'axios';

export default class EmployeeService extends BaseService{
    constructor(){
        super('Employee');
    }

     /**
     * Mô tả: Lấy mã nhân viên mới
     * @param: 
     * return: mã nhân viên mới
     * Created by: nttrang
     * Created date: 17/04/2023
     */
    async getNewEmployeeCode(){
        try {
            return (await axios.get(`${API.BaseUrl}/${this.controller}/employeeCode`)).data;
            
        } catch (error) {
            console.log(error);
        }
    }

}