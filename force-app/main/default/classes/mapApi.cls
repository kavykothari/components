public with sharing class mapApi {
 
        public static Http http = new Http();
        public static HTTPResponse response;
        public static HttpRequest request;
        public string recievedDistance;
     
        public class NewRouteStation {
            public String name {get; set;}
            
        }
     
        @AuraEnabled
        public static string sendDeatil(string source) {
            System.debug('data here = '+source);
           // let det = source.toString();
            //System.debug('det = '+det);
            request = new HttpRequest();
            request.setMethod('GET');
            request.setEndpoint('callout:destOrg/services/apexrest/Route_Station__c/'+source);
            response = http.send(request); 
            System.debug('!@'+response.getBody());
            return response.getBody();
        }
     
}
