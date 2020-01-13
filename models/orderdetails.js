export class OrderDetails {
    constructor (){
        this.OrderId =0;
        this.CustomerName="";
        this.EmployeeName="";
        this.OrderDate = new Date();
        this.RequiredDate = new Date();
        this.ShippedDate = new Date();
        this.ShipperName="";
        this.Freight=0;        
        this.ShipName="";
        this.ShipAddress="";
        this.ShipCity="";
        this.ShipPostalCode="";
        this.ShipCountry="";
    }
}