public  class oppControllerLWC {
    public oppControllerLWC() {
      
    }
    @AuraEnabled
    public static opportunity getRecords(ID oppid){
        return [select Id, Name, CloseDate, StageName from Opportunity where Id=: oppid];
    }

    @AuraEnabled
    public static void updateOpportunity(Opportunity opp){
        System.debug(opp);
        update opp; 
    }

}
