import { LightningElement,wire } from 'lwc';
import { registerListener,fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';



export default class SubscriberInvoicePubsub extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    getdata;
    hideShow;
    total=0;
    
    connectedCallback(){

        registerListener("sendData",this.displayMessage,this);


    }

    handleInputCheck(e){
        this.hideShow = e.target.checked;
       // console.log("$%$%",e.target.checked);
        fireEvent(this.pageRef,"sendDataToPublisher",this.getdata);
        fireEvent(this.pageRef,"hideShow",this.hideShow);
    }
   

   

    displayMessage(allData){
        console.log("@$$ = ",allData);
        this.total=0;
        this.getdata = [...allData ];
      //  console.log("getdata = ",this.getdata);
      //  console.log("total@ = ",this.getdata[0].amount);
       // console.log("length = ",this.getdata.length);

        var i;
        for (i = 0; i < this.getdata.length; i++) {  //loop through the array

           // console.log("working",this.getdata[i].amount);
            this.total += parseInt(this.getdata[i].amount);  //Do the math!
        }
       // console.log("total amount = ",this.total);
    }

}