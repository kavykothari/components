import { LightningElement,wire,track } from 'lwc';
import allContactList from '@salesforce/apex/ContactManagementControllerLWC.allContactList';

export default class ContactManagmentScreen extends LightningElement {
    userList;
    searchInput;
    temporaryUserList;

    searchInputWord(){
        this.searchInput = this.template.querySelector(".inputText").value.toLowerCase();
        console.log("see==",this.searchInput);
        this.searchFilter();
        console.log("se==",this.userList);
    }
    @wire(allContactList) getContactList({error,data}) {
        if (data) {
            this.userList = data;
            this.temporaryUserList = data;
            console.log(this.temporaryUserList);
        } else {
            console.log("##", error);
        }
    }

    searchFilter(){
        this.userList = [];
        this.searchInput = this.template.querySelector(".inputText").value.toLowerCase();
        //Check if Search Text Is Available In User List
        if (this.searchInput != '') {
            //console.log('kk2==',this.searchInput);
            this.nullRecords = false;
            this.userList = this.temporaryUserList.filter(item => {
                return item.Name.toLowerCase().includes(this.searchInput);
            })
        } else {
            this.userList = this.temporaryUserList;
        }
        if (this.userList.length == 0) {
            this.nullRecords = true;
        }
    }
}