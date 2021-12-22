import { LightningElement } from 'lwc';

export default class RadioExample extends LightningElement {

    get statusOptions() {
        return [
            {label : 'Active', value : 'active'},
            {label : 'Inactive', value : 'inactive'},
            {label : 'Complete', value : 'complete'}
        ]
    }

    selectedStatus = "active";

    handleStatus(e) {
        this.selectedStatus = e.detail.value;
    }
}