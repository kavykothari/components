public with sharing class taskController {
    public taskController() {

    }
    @AuraEnabled
    public static List<Task> allTaskList(Id oppid){
        System.debug('see ++'+[select id, WhoId, ActivityDate, whatId, Subject, Status, AccountId, OwnerId, priority from task where OwnerId =: oppid]);
        return [select id, WhoId, ActivityDate, whatId, Subject, Status, AccountId, OwnerId, priority from task where OwnerId =: oppid];
    }
    
    @AuraEnabled
    public static void deleteTasks(Id oppid){
        System.debug('kkk'+oppid);
        delete [Select Id From Task Where Id =: oppid limit 1];
        //delete t;
    }
}
