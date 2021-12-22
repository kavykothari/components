import {LightningElement,wire} from 'lwc';
import allContactList from '@salesforce/apex/SearchContactControllerLWC.allContactList';
import searchContactList from '@salesforce/apex/SearchContactControllerLWC.searchContactList';

export default class searchContactLWC extends LightningElement {

    inputText;
    contactList = [];
    tempContaList = [];
    pageSize = '100';
    pageNumber;
    totalPages;
    noData = false;
    presentData = true;

    @wire(allContactList) getContactList({error,data}) {
        if (data) {
            this.contactList = data;
            this.pageNumber = 1;
            this.tempContaList = data;
            this.pagination();
        } else {
            console.log("##", error);
        }
    }
       
    get limitOptions() {
        return [
                {label: '5', value: '5'},
                {label: '10',value: '10'},
                {label: '15',value: '15'},
                {label: '20',value: '20'},
                {label: '100',value: '100'}
        ]
    };

    handelLimit(event) {
        this.pageSize = event.target.value;
        this.pageNumber = 1;
        this.pagination();
    }

    pagination() {
        let begin = (this.pageNumber - 1) * parseInt(this.pageSize);
        let end = parseInt(begin) + parseInt(this.pageSize);
        this.contactList = this.tempContaList.slice(begin, end);
        this.disableButtons;
    }

    handleNext() {
        this.pageNumber += 1;
        if(this.pageNumber <= this.totalPages) {
            this.pagination();
        }
    }

    handlePrevious() {
        this.pageNumber -= 1;
        if(this.pageNumber >= 1) {
            this.pagination();
        }else{
            this.disableButtons;
        }
    }

    handleFirst() {
        this.pageNumber = 1;
        this.pagination();
    }

    get disableButtons() {
        this.totalPages = Math.ceil(this.tempContaList.length / this.pageSize);
        let buttons = this.template.querySelectorAll("lightning-button");
        buttons.forEach(data => {
            if (data.label == "First" || data.label == "Previous") {
                if(this.pageNumber == 1) {
                    data.disabled = true;
                }else{
                    data.disabled = false;
                    }
            }  else if (data.label == "Next" || data.label == "Last") {
                if(this.pageNumber == this.totalPages){
                    data.disabled = true;
                }else{
                    data.disabled = false;
                    }
            } 
        });
    }

    handleLast() {
        this.pageNumber = this.totalPages;
        this.pagination();
    }

    handelSearchContact() {
        this.inputText = this.template.querySelector('.inputText').value;
        searchContactList({ textValue: this.inputText}).then(result => {
            this.tempContaList = result;
            this.pageNumber = 1;
            if (this.tempContaList.length == 0) {
                this.noData = true;
                this.presentData = false;
            } else {
                this.noData = false;
                this.presentData = true;
            }
            this.pagination();

        }).catch(error => {
            console.log('##', error);
        });

    }
}