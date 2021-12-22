import { LightningElement } from 'lwc';

export default class CheckBoxExample extends LightningElement {
    hobbyOption=[];
    defaultHobbies=[];
    hobbiesOptions = [
        {label : 'Playing', value : 'playing'},
        {label : 'Reading', value : 'reading'},
        {label : 'Sleeping', value : 'sleeping'}
    ];

    handleHobbiesChange(e) {
        this.hobbyOption=[];
        console.log("##");
        this.defaultHobbies = e.detail.value;
    }
   
}