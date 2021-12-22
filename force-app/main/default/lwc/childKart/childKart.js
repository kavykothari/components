import { LightningElement, api } from 'lwc';

export default class ChildKart extends LightningElement {
    name;
    prices;
    bikeData;
    image;
    discription;
    hideShow;

    @api
    getInfo(detail){
        //console.log("detail = ",JSON.stringify(detail));
        console.log("detail2 = ",detail.detail);
        this.name = detail.detail;
        if(this.name==null){
            this.hideShow = false;

        }else{
            this.hideShow = true;
        }
       // console.log("name = ",this.name);
        //this.bikeData = this.bike[this.name].price;
        this.prices = this.bike[this.name].price;
        this.image = this.bike[this.name].picture;
        this.discription = this.bike[this.name].discription;

       // console.log("##",this.bikeData);
       // console.log("#+",this.prices);

    }


    bike = {
        "yamaha":{
            price: '19000',
            picture: 'https://media.zigcdn.com/media/content/2020/Oct/zigmalaysianr15-specification_720x540.jpg',
            discription : "The Yamaha R15 v3 has been quite a popular motorcycle across South East Asia and India. Usually, it is the foreign-spec model that first gets the updates, both mechanical and visual. This time around though, the recently launched Malaysian-spec bike has got the same set of new colours that first appeared on the Indian BS6 R15 v3."
        },
        "royalEnfield":{
            price: '107000',
            picture: 'https://media.zigcdn.com/media/content/2020/Sep/royal-enfield-meteor-350-abc-right-side-view_930x6201_720x540.jpg',
            discription : "Royal Enfield is an Indian multinational motorcycle manufacturing company headquartered in Chennai, Tamil Nadu, India. "
        },
        "bajajPulsar150":{
            price: '12000',
            picture: 'https://ic1.maxabout.us/autos/tw_india//B/2021/6/bajaj-pulsar-150-twin-disc-image.jpg',
            discription : "It’s been a slow burn so far but now things are really clicking into top gear as far as the launch of the Royal Enfield Meteor 350 is concerned. After brochure leaks last month showed us the 3 variants and 7 colour options that will be offered, fresh brochure images now give us information about the Meteor’s specifications."
        }

    };
}