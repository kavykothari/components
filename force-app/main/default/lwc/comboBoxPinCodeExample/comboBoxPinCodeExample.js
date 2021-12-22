import { LightningElement } from 'lwc';

export default class ComboBoxPinCodeExample extends LightningElement {
    getcountry ='';
	check;
	check1;
	PinValue;
	getstate ='';
	getcity ='';
	pincode ='';
	stateOption=[];
	cityOption=[];
	data={
		"India":{

		    "Rajasthan":{

		        "Ajmer":"305001",
		        "Jaipur":'300230',
		        "Udaipur":'342443'
		    },
		    "UP":{

		        "Kanpur":'12345',
		        "Lucknow":'233333',
		        "Gorkhpur":'23444'
		        },
		    "Delhi":{

		        "Palam":'110077',
		        "Rajiv chowk":'110078',
		        "Karol garh":'277382'
		    }
		},
		"Australia":{

		    "New South Wales":{

		        "Syndey":'110076',
		        "NewCastle":'110076',
		        "Wollen":'1100456'
		    },
		    "Queensland":{

		        "Brisbane":'233333'	  ,
		       "Gold Coast":'233333',
		        "Caims":'233333'
		    },
		    "Victoria":{

		        "Melbourne":'233333',	  
		        "Geelong":'233333',
		        "Ballana":'233333'
		        },
	  
		},
		"United States":{

		    "Florida":{

		        "Miami":'233333',
		        "Orlando":'233333',	  
		        "Tamper":'233333'	  
		    },
		    "California":{

		        "Los Angeles":'233333',
		        "San franciso":'233333',
		        "San diago":'233333'
		    },
		    "Texas":{

		        "Houston":'233333',
		        "Austlin":'233333',
		        "Dallas":'233333'
		    }
		}
	}

	get countryArr (){
       			 let countryname = Object.keys(this.data);
        			let countryioption=[]
        			for (var index = 0; index < countryname.length; index++) {
				 let countryname1= {
               				 "label" : countryname[index],
                				"value" : countryname[index]
              				 }
			 countryioption.push(countryname1)			 
			}
		return countryioption;
	}

	 StateArr(){
        		let statename = Object.keys(this.data[this.getcountry]);
        		this.stateOption=[];
	
       		 for (let index = 0; index < statename.length; index++) {
			let statename1= {
               			"label" : statename[index],
				"value" : statename[index]
               			}
			   this.stateOption.push(statename1)
			}
		//return this.stateOption;
	}

	 CityArr(){
		let cityname = Object.keys(this.data[this.getcountry][this.getstate]);
		this.cityOption=[];
		for (let index = 0; index < cityname.length; index++) {
					let cityname1= {
		"label" : cityname[index],
		"value" : cityname[index]
		}
				this.cityOption.push(cityname1)
				}
			//return cityOption;
		}
	 pinCode (){
			this.PinValue=this.data[this.getcountry][this.getstate][this.getcity];			
	}

	handleCountry(event) {
			this.getcountry = event.target.value;
			this.StateArr();
			
		}
	handleState(event) {
		  this.getstate = event.target.value;
		  this.CityArr();
	}
	handlecity(event) {
		this.getcity = event.target.value;
		this.pinCode();
 	 }
	
}