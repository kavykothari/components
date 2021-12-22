import { LightningElement } from 'lwc';

export default class ButtonExample extends LightningElement {
    isDisplay=false;
    name;
    email;
    number;
    data;
    handelSave(){
        this.name = this.template.querySelector('.name').value;
        this.email = this.template.querySelector('.email').value;
        this.number = this.template.querySelector('.number').value;
        if(this.name || this.email || this.number){
            this.isDisplay=true;

        }
        else{
            this.isDisplay=false;
        }
    }
        
    
}