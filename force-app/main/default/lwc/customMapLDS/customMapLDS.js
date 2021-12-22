import { LightningElement, track, wire } from 'lwc';
import sendDeatil from '@salesforce/apex/mapApi.sendDeatil';

export default class CustomMapLDS extends LightningElement {
    example = true;
    distinationStation = '';
    currentStation = '';
    vehicleDetail = {};
    sourceDestinatonInfo = [];
    recievedDistance;
    showHide = true;
    
    handleCar() {
        var journeyData = this.template.querySelectorAll(".ForInput");
        this.currentStation = journeyData[0].value;
        this.distinationStation = journeyData[1].value;
        console.log('yes working');        
        this.vehicleDetail = {
            speed: 60,
            icon: 'utility:travel_and_places'
        };
        if(this.currentStation == '' || this.distinationStation == '') {
            this.showHide = false;
        } else {
        this.handleRouteStationData();
        this.showHide = true;
        }
    }
    handleTrain() {
        this.vehicleDetail = {
            speed: 80,
            icon: 'custom:custom36'
        };
        this.handleRouteStationData();
    }
    handleWalk() {
        this.vehicleDetail = {
            speed: 10,
            icon: 'utility:trail'
        };
        this.handleRouteStationData();
    }
    handleBike() {
        this.vehicleDetail = {
            speed: 20,
            icon: 'custom:custom80'
        };
        this.handleRouteStationData();
    }
    handleFlight() {
        this.vehicleDetail = {
            speed: 700,
            icon: 'custom:custom20'
        };
        this.handleRouteStationData();
    }
 
    handleRouteStationData(){
        var journeyData = this.template.querySelectorAll(".ForInput");
        this.currentStation = journeyData[0].value;
        this.distinationStation = journeyData[1].value;
        // console.log('current == ',this.currentStation);
        // console.log('distinationStation == ',this.distinationStation);       
        if(this.currentStation!='' && this.distinationStation!='') {
            this.sourceDestinatonInfo=[];
            this.sourceDestinatonInfo.push(this.currentStation);
            this.sourceDestinatonInfo.push(this.distinationStation);
            // console.log('see ==',this.sourceDestinatonInfo);
            let sourceDestinatonData = this.sourceDestinatonInfo.toString();
            //  console.log('converted into string == ',sourceDestinatonData);
         sendDeatil({source : sourceDestinatonData}).then(result=>{
             console.log("result = ",result);
            this.recievedDistance = JSON.parse(result);
            this.showHide = true;
            if(this.recievedDistance.length < 1) {
                this.showHide = false;
            } else {
                this.showHide = true;
                 console.log('button',this.vehicleDetail);
                     this.count=1;
                    this.template.querySelector(".child").getvehicleDetail(this.vehicleDetail);
                this.template.querySelector(".child").getValueFromParent(result);
            }
            // console.log("this.recievedDistance = ",this.recievedDistance);
            // console.log("this.recievedDistance = ",this.recievedDistance[0]);
        }).catch(error=>{
            console.log("error = ",error);
            }); 
        } else {
            this.showHide = false;
        }
    }       
}