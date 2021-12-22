import { LightningElement,api } from 'lwc';
import projectStatus from '@salesforce/apex/ProjectControllerLWC.projectStatus'

export default class ProjectStatusComponent extends LightningElement {
    currentStatus = '';

    @api recordId;

    connectedCallback(){
        console.log("kk",this.recordId);
                    projectStatus({
                        projectId: this.recordId
            }).then(result => {
                        console.log('result', result.Status__c);
                        this.currentStatus = result.Status__c;

            }).catch(error => {
                        console.log(error);
            });
    }

    steps = [
        { label: 'New', value: 'New' },
        { label: 'Planning', value: 'Planning' },
        { label: 'Construction', value: 'Construction' },
        { label: 'Deployment', value: 'Deployment' },
        { label: 'Signoff', value: 'Signoff' },
    ];
}