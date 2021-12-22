import { LightningElement } from 'lwc';

export default class CalculatorWIthColor extends LightningElement {
    isDisplay=false;
    first;
    second;
    third;
    name;
    color;
    label;

    handleCalculator(event){
        this.isDisplay=true;
        this.label= event.target.dataset.name;
        this.first = parseInt(this.template.querySelector('.first').value); 
        this.second = parseInt(this.template.querySelector('.second').value);

        if(this.label=="Sum"){
           this.color="color:blue";
        this.third = this.first+this.second;
        }
        else if(this.label=="Sub"){
            this.color="color:red";
            this.third = this.first-this.second;
        }
        else if(this.label=="Mul"){
            this.color="color:pink";
            this.third = this.first*this.second;
        }
        else if(this.label=="Divide"){
            this.color="color:yellow";
            this.third = this.first/this.second;
        }
        else if(this.label=="Mod"){
            this.color="color:grey";
            this.third = this.first%this.second;
        }
       
    }
   
}