import * as React from "react";
import { useState, useEffect } from "react";
import { HttpService } from "../services/service";
import { Product } from "../models/product";
import TableComponentContext from "./tablecomponentContext";
import { DataContext } from './datacontext';

const UseEffectAjaxComponent = () => {
    const serv = new HttpService();
    const Manufacturers = ["IBM", "HP", "Parle", "Bajaj", "Phillipse", "Golden"];
    const Categories = ["Electronics", "Electrical", "Food"];
    const [product, updateProduct] = useState({
        ProductRowId: 0,
        ProductId: "",
        ProductName: "",
        Manufacturer: "",
        CategoryName: "",
        Description: "",
        BasePrice: 0
    });
    const [products, add] = useState([]);
    const clear = () => {
        updateProduct({
            ProductRowId: 0,
            ProductId: "",
            ProductName: "",
            Manufacturer: "",
            CategoryName: "",
            Description: "",
            BasePrice: 0
        });
    };
    const save = () => {
        // make the post request
        serv.postData(product).then((value) => {
            add([
                ...products,
                value.data
            ]);
        });
        // add([
        //   ...products,
        //   {
        //     ProductRowId: product.ProductRowId,
        //     ProductId: product.ProductId,
        //     ProductName: product.ProductName,
        //     Manufacturer: product.Manufacturer,
        //     CategoryName: product.CategoryName,
        //     Description: product.Description,
        //     BasePrice: product.BasePrice
        //   }
        // ]);
    };
    // alternative to ComponentDidMount in  React 16.8 
    useEffect(() => {
        serv.getData().then((value) => {
            add(value.data);
        });
    }, []);
    return ( <
        div className = "container" >
        <
        table className = "table table-bordered table-striped" >
        <
        tbody >
        <
        tr >
        <
        td >
        <
        div className = "form-group" >
        <
        label htmlFor = "ProductRowId" > Product Row Id < /label> <
        input type = "text"
        className = "form-control"
        value = { product.ProductRowId }
        onChange = {
            evt =>
            updateProduct({
                ...product,
                ProductRowId: parseInt(evt.target.value)
            })
        }
        /> <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "ProductId" > Product Id < /label> <
        input type = "text"
        className = "form-control"
        value = { product.ProductId }
        onChange = {
            evt =>
            updateProduct({...product, ProductId: evt.target.value })
        }
        /> <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "ProductName" > Product Name < /label> <
        input type = "text"
        className = "form-control"
        value = { product.ProductName }
        onChange = {
            evt =>
            updateProduct({...product, ProductName: evt.target.value })
        }
        /> <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "Manufacturer" > Manufacturer < /label> <
        select className = "form-control"
        value = { product.Manufacturer }
        onChange = {
            evt =>
            updateProduct({
                ...product,
                Manufacturer: evt.target.value
            })
        } >
        <
        option > Select Manufacturer < /option> {
            Manufacturers.map((m, i) => ( <
                option key = { i } > { m } < /option>
            ))
        } <
        /select> <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "CategoryName" > Category Name < /label> <
        select className = "form-control"
        value = { product.CategoryName }
        onChange = {
            evt =>
            updateProduct({
                ...product,
                CategoryName: evt.target.value
            })
        } >
        <
        option > Select Category < /option> {
            Categories.map((c, i) => ( <
                option key = { i } > { c } < /option>
            ))
        } <
        /select> <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "Description" > Description < /label> <
        input type = "text"
        className = "form-control"
        value = { product.Description }
        onChange = {
            evt =>
            updateProduct({...product, Description: evt.target.value })
        }
        /> <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "BasePrice" > Base Price < /label> <
        input type = "text"
        className = "form-control"
        value = { product.BasePrice }
        onChange = {
            evt =>
            updateProduct({
                ...product,
                BasePrice: parseInt(evt.target.value)
            })
        }
        /> <
        /div> <
        div className = "form-group" >
        <
        input type = "button"
        value = "New"
        className = "btn btn-warning"
        onClick = { clear }
        /> <
        input type = "button"
        value = "Save"
        className = "btn btn-success"
        onClick = { save }
        /> <
        /div> <
        /td> <
        td >
        <
        DataContext.Provider value = {
            { products, updateProduct } } >
        <
        TableComponentContext / >
        <
        /DataContext.Provider> <
        /td> <
        /tr> <
        /tbody> <
        /table> <
        /div>
    );
};

export default UseEffectAjaxComponent;