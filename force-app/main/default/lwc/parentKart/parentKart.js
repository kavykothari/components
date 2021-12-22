import {  LightningElement } from 'lwc';

export default class ParentKart extends LightningElement {
    checkBoxValues=[];
    checkValue;
    demo = [];
    d2;
    d3;
    xyz;

    selectCheckBox = [
        {label : 'Yamaha', value : 'yamaha'},
        {label : 'Royal Enfield', value : 'royalEnfield'},
        {label : 'Bajaj Pulsar 150', value : 'bajajPulsar150'}
    ];

    handleCheckBox(e){        
        this.checkBoxValues = [];
        this.checkBoxValues.push(e.detail.value);
        this.template.querySelector(".childKartComponent").getInfo({detail : this.checkBoxValues})

    }
}