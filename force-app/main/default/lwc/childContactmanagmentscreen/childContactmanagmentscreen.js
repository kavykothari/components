import { LightningElement,api,wire,track } from 'lwc';
import allTaskList from '@salesforce/apex/taskController.allTaskList';
import deleteTasks from '@salesforce/apex/taskController.deleteTasks';


export default class ChildContactmanagmentscreen extends LightningElement {
    @api mydata;
    @api userid;
    deleteTaskId;
    taskId;
    @track isModalOpen = false;

    connectedCallback(){
        console.log("@@==",this.mydata);
    }
    
    showTasksDetails(event){
        this.userid = event.target.value;
        console.log("see button data == ", this.userid);
        allTaskList({oppid : this.userid}).then(result=>{
            console.log("@@",result);
            this.taskId = result;
            console.log("@@",result);
        }).catch(error=>{
            console.log(error);
        });
        if(this.taskId.length <1) {
            this.isModalOpen = false;
        }else {
            this.isModalOpen = true;
        }
        

    }

    deleteTask(event) {
        this.deleteTaskId = event.target.value;
        console.log("see button data == ",this.deleteTaskId);    

        deleteTasks({oppid : this.deleteTaskId}).then(result=>{
           this.showTasksDetails();
    }


    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }

}

