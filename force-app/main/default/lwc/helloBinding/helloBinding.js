import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {

    fieldList = ['firstName'];
    get fields() {
        return this.fieldList;
    }
}