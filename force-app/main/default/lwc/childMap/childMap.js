import { LightningElement,api } from 'lwc';

export default class ChildMap extends LightningElement {
    iconName;
    speed;
    distance;
    hours;
    dataRecieve;
    userDetail = [];
    @api
    getvehicleDetail(data) {
       this.iconName = data.icon;
       this.speed = data.speed;
        console.log('icon name==',this.iconName);
        console.log('this.speed==',this.speed);
    }
    @api
    getValueFromParent(recievedata) {
        console.log('data',recievedata);
        this.dataRecieve = JSON.parse(recievedata);
        console.log('data',JSON.parse(recievedata));
         

        this.userDetail = [];
        for (var i in this.dataRecieve) {
            this.distance = this.dataRecieve[i].distanceOfRouteStation;
            this.hours=this.distance / (this.speed);   // 140 / 60 = 2.33
            this.userDetail = [...this.userDetail, {
                Route: this.dataRecieve[i].roadRoute,
                Distance: this.distance,
                Hour: Math.floor(this.hours), // 2.33 = 2 h
                Minutes: Math.floor((this.hours - Math.floor(this.hours)) * 60), // (2.33-2)*60 =19.3= 19 min
            }]
        }
       // console.log("user ata ===== ",this.userDetail)
    }
}