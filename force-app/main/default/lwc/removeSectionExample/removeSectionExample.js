import { LightningElement } from 'lwc';

export default class RemoveSectionExample extends LightningElement {
    name;
    email;
    phone;
    isDisplay = false;


    handelName(e){
        
        this.name = e.target.value;
        if(this.name){
            this.isDisplay = true;
        }else{
            this.isDisplay = false;
        }
        

        

    }
}