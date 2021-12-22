import { LightningElement, wire } from 'lwc';
import { registerListener,fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';


export default class Subscriber extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    message;
    userDetails = {};

    connectedCallback(){

        registerListener("sendMessage",this.displayMessage,this);


    }
    displayMessage(gotMessage){
        this.message = gotMessage;
    }
    displayMessageData(detail){
        this.userDetails = JSON.parse(JSON.stringify(detail));
        console.log("## =",this.userDetails)
        console.log("@%% = ",this.userDetails.firstname);
    }
    handleSubscribe(){
        registerListener("sendUserInfo",this.displayMessageData,this);


    }
    handleSendToPublisher(){
        alert("kk");
        var data = {
            name:"kavya",
            email:"kk@gmail.com",
            number:12121212
        }
        console.log("###$$= ",data );
        fireEvent(this.pageRef,"sendtopublisher",data);
    }

}