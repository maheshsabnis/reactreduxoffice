import React, {useState,useEffect} from 'react'
import { HttpService } from '../httpservice/utilityService';
 
function EffectWithAjaxComponent() {
    const serv = new HttpService();
    const [products, updateProducts] =useState([]);
    const getData=()=>{

    }
    const postData=()=>{

    }

    useEffect(() => {
       
         serv.getData().then(resp=>{
            console.log(JSON.stringify(resp));
            updateProducts([...products, resp]);
        });
    },[])

    return (
        <div>
            <input type="button" value="Get Data"/>
            <input type="button" value="Post Data"/>
        </div>
    )
}

export default EffectWithAjaxComponent;
