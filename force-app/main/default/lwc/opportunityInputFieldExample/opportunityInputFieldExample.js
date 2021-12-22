import { LightningElement, api ,wire } from 'lwc';
import getRecords from '@salesforce/apex/oppControllerLWC.getRecords';
import updateOpportunity from '@salesforce/apex/oppControllerLWC.updateOpportunity';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';

export default class OpportunityInputFieldExample extends LightningElement {

    @api recordId;
    @api objectApiName;
    name;
    wireList;
    closeDate;
    stage;

    @wire(getRecords) accList(result) {
        this.wireList = result;
    }


    connectedCallback(){
        console.log("yes loaded",this.recordId);
        getRecords({oppid : this.recordId}).then(result=>{
            console.log("@@",result);
            this.name=result.Name;
            this.closeDate=result.CloseDate;
            this.stage=result.StageName;

            console.log('name',this.name);

        }).catch(error=>{
            console.log(error);
        });
        
    }
    updateButton(){
    // alert("kk");
        console.log("values",this.template.querySelectorAll(".ForInput"));
    var inputAllValues=this.template.querySelectorAll(".ForInput");
    //console.log("@#",inputAllValues);
    var data ={
        Id : this.recordId,
    Name:inputAllValues[0].value,
    CloseDate:inputAllValues[1].value,
    StageName:inputAllValues[2].value
    }
    //console.log("!@! = ",data.Name);
    updateOpportunity({opp : data}).then(result=>{
        this.showToast();
        return refreshApex(this.wireList);

    //    alert("Updated");
    console.log("result = ",result);

    }).catch(error=>{
    console.log("error = ",error);
    });
}

     get stageOption() {
            return [
                {label : 'Qualification', value : 'Qualification'},
                {label : 'Needs Analysis', value : 'Needs Analysis'},
                {label : 'Value Proposition', value : 'Value Proposition'},
                {label : 'Id. Decision Makers', value : 'Id. Decision Makers'},
                {label : 'Perception Analysis', value : 'Perception Analysis'},
                {label : 'Proposal/Price Quote', value : 'Proposal/Price Quote'},
                {label : 'Negotiation/Review', value : 'Negotiation/Review'},
                {label : 'Closed Won', value : 'Closed Won'},
                {label : 'Closed Lost', value : 'Closed Lost'}

            ]
        }
        showToast() {
            const event = new ShowToastEvent({
                title: 'Updation Done',
                message: 'Updated Successfully.',

            });
            this.dispatchEvent(event);
            //refreshApex(this.wireList);
        }
}