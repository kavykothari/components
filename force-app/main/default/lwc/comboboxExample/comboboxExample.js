import { LightningElement } from 'lwc';

export default class ComboboxExample extends LightningElement {
    selectedCity = "";
    selectedState = "";
    selectedCountry = "";

    get countryOptions() {
        return [
            {label : 'India', value : 'india'},
            {label : 'Australia', value : 'australia'},
            {label : 'Japan', value : 'japan'}
        ]
    }
    handleCountryChange(e) {
        this.selectedCountry = e.detail.value;
    }
   
   

    get stateOptions() {
        if(this.selectedCountry=="india"){
            return [
                {label : 'Rajasthan', value : 'rajasthan'},
                {label : 'Karnataka', value : 'karnataka'},
                {label : 'Madhya Pradesh', value : 'MP'}
            ]
        }
        else if(this.selectedCountry=="australia"){
            return [
                {label : 'Queensland', value : 'queensland'},
                {label : 'Western Australia', value : 'western Australia'},
                {label : 'south australia', value : 'south australia'}
            ]
        }
        else if(this.selectedCountry=="japan"){
            return [
                {label : 'Hokkaido', value : 'hokkaido'},
                {label : 'Tohoku', value : 'tohoku'},
                {label : 'Kanto', value : 'kanto'}
            ]
        }
        
    }
    handleStateChange(e) {
        this.selectedState = e.detail.value;
    }

    get citysOption() {

         if(this.selectedState=="rajasthan"){
            return [
                {label : 'Udaipur', value : 'udaipur'},
                {label : 'Delhi', value : 'delhi'},
                {label : 'Jaipur', value : 'jaipur'}
            ]
        }
        else if(this.selectedState=="karnataka"){
            return [
                {label : 'Bengaluru', value : 'bengaluru'},
                {label : 'Mysuru', value : 'mysuru'},
                {label : 'Kalaburagi', value : 'kalaburagi'}
            ]
        }

        else if(this.selectedState=="Madhya Pradesh"){
            return [
                {label : 'Indore', value : 'indore'},
                {label : 'Bhopal', value : 'bhopal'},
                {label : 'Jabalpur', value : 'jabalpur'}
            ]
        }
    }
        
    handleCityChange(e){
        this.selectedCity = e.detail.value;
    }


   
}