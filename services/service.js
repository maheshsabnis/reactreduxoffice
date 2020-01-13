import axios from 'axios';
import { Product } from '../models/product';


export class HttpService {
    constructor() {
        this.url = "https://apiapptrainingnewapp.azurewebsites.net/api/Products";
    }

    getData() {
        const resp = axios.get(this.url);
        return resp;
    }

    postData(prd) {
        const resp = axios.post(this.url, JSON.stringify(prd), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp;
    }

    putData(id, prd) {
        const resp = axios.put(`${this.url}/${id}`, JSON.stringify(prd), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp;
    }
    deleteData(id) {
        const resp = axios.put(`${this.url}/${id}`);
        return resp;
    }
}