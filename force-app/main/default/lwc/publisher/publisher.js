import { LightningElement, wire } from 'lwc';
import { fireEvent,registerListener } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation'

export default class Publisher extends LightningElement {
    displayVal={};


    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener("sendtopublisher",this.displayFromSubscriber,this);
    }
    displayFromSubscriber(data){
        this.displayVal = data;
        console.log("hello",displayVal);
        console.log("name = ",displayVal.name);


    }

    handleSend(){
        fireEvent(this.pageRef,"sendMessage","Message from Publisher");
    }
    handleSendData(){
        var data = this.template.querySelectorAll(".forInput");
        var detail = {
            firstname : data[0].value,
            lastname : data[1].value,
            email : data[2].value,
            number : data[3].value
        }
        console.log("#$ = ",detail);
        fireEvent(this.pageRef,"sendUserInfo",detail);
     }
}