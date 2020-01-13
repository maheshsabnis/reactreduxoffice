import axios from 'axios';
import { Product } from './../datamodels/products';
export class HttpService {


    constructor() {
        this.url = "https://apiapptrainingnewapp.azurewebsites.net";
    }

    getData() {
        let resp = axios.get(`${this.url}/api/Products`);
        return resp;
    }

    postData(prd) {
        let resp = axios.post(`${this.url}/api/Products`, prd, {
            'Content-Type': 'application/json'
        });
        return resp;
    }
}