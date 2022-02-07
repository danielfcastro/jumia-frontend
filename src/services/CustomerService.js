import axios from 'axios'

const CUSTOMER_API_BASE_URL = "http://127.0.0.1:8080/v1/customers";

class CustomerService{

    getCustomers(page){
        return axios.get(CUSTOMER_API_BASE_URL)+'?page=${page}&size=10&sort=id,asc';
    }

}

export default new CustomerService()