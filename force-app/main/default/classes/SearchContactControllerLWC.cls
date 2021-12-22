public  class SearchContactControllerLWC {
    public SearchContactControllerLWC() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Contact> allContactList(){
        return [select Id, Name, Email, Account.Name, Phone, Type__c from Contact];
    }

    @AuraEnabled
    public static List<Contact> searchContactList(string textValue){
        return [SELECT Id, Name, Email, Account.Name, Phone, Type__c
        FROM Contact 
        where Name LIKE:'%'+ textValue +'%' or Email LIKE:'%'+ textValue +'%'];
    }
}
