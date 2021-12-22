import { LightningElement,wire } from 'lwc';
import { fireEvent,registerListener } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation'

export default class PublisherInvoicePubsub extends LightningElement {
    Qty=[];
    Product=[];
    Qty2=[];
    Product2=[];

    allData =[];
    amountOfProduct;
    amountOfProduct2;
    getedBackData;
    index=0;
    index2=0;
    hideShow;

    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener("sendDataToPublisher",this.displayDataOfSubscriber,this);
        registerListener("hideShow",this.handleHideShow,this);
    }

    handleHideShow(data){
        this.hideShow=data;
        console.log("hideshow = ",this.hideShow);
    }

    displayDataOfSubscriber(getdata){
        alert("yoo");
        this.getedBackData = [];
        console.log("++$$ = ",getdata);
        this.getedBackData = getdata;
        console.log("++$$2 = ",this.getedBackData);
       

    }


    handleAdd(){
        this.index++;
        this.amountOfProduct=parseInt(this.template.querySelector(".amountOfProduct").value)*parseInt(this.Qty);
        var detail = {
            qty : this.Qty,
            product: this.Product,
            amount : parseInt(this.amountOfProduct),
            indexOfProduct : this.index
        }
        console.log("@@2 = ",detail);
        this.allData.push(detail);
        //console.log("## = ",this.allData);
        //console.log("## = ",this.allData[0].qty);
        fireEvent(this.pageRef,"sendData",this.allData);
    }

    qtyOptions = [
        {label : '1', value : '1'},
        {label : '2', value : '2'},
        {label : '3', value : '3'}
    ];
    

    productOptions = [
        {label : 'Pen', value : 'pen'},
        {label : 'Rubber', value : 'rubber'},
        {label : 'Scale', value : 'scale'}
    ];
   

    handleQtyChange(e) {
        this.Qty = e.detail.value;
    }
    handleProductChange(e) {
        console.log("##");
        this.Product = e.detail.value;
    }

    sendAgainToSubscriber(){
        var qtyData = this.template.querySelectorAll(".forQtyInput");
        var productData = this.template.querySelectorAll(".forProductInput");
        var amountData = this.template.querySelectorAll(".forAmountInput");
        this.allData=[];

        //console.log("qtyData = ",qtyData.length);
       // console.log("productData = ",productData.length);

        //console.log("amountData = ",amountData.length);
        var i;
        for(i=0;i<qtyData.length;i++){
            var detail = {
                qty : qtyData[i].value,
                product:productData[i].value,
                amount : parseInt(amountData[i].value)*parseInt(qtyData[i].value),
                indexOfProduct : i+1
            }
            
            this.allData.push(detail);
        }

       
        console.log("allData = ",this.allData);
        //console.log("## = ",this.allData);
        //console.log("## = ",this.allData[0].qty);
        fireEvent(this.pageRef,"sendData",this.allData);

    }
    handleCancel(event){
        alert("hi");
      var rm = parseInt(event.target.dataset.index);
      console.log("rm",rm);
        console.log("this getedBackData = ",this.getedBackData);
        console.log("get data = ");       

        var qtyData = this.template.querySelectorAll(".forQtyInput");
        var productData = this.template.querySelectorAll(".forProductInput");
        var amountData = this.template.querySelectorAll(".forAmountInput");
        this.allData=[];
        console.log("qtyData.length",qtyData.length);

        var i;
        for(i=0;i<qtyData.length;i++){
            var detail = {
                qty : qtyData[i].value,
                product:productData[i].value,
                amount : parseInt(amountData[i].value),
                indexOfProduct : i+1
            }
            
            this.allData.push(detail);
        }
         
        
        console.log("@1 before = ",this.getedBackData);
        console.log("@2 total all  data = ",this.allData);

            console.log("@@## = ",this.allData.splice(rm, 1));
            var i;
            for(i=0;i<this.allData.length;i++){
                this.allData[i].indexOfProduct = i+1;
        }
        console.log("@1 after sr no assembling = ",this.allData);
            this.getedBackData = [];
            this.getedBackData = this.allData;
            
        this.displayDataOfSubscriber(this.getedBackData);
    
    }
}