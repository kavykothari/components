public with sharing class ContactManagementControllerLWC {
    public ContactManagementControllerLWC() {

    }
    @AuraEnabled(cacheable = true)
    public static List<User> allContactList( ){
        return [Select u.Id,u.Name, u.Email, u.SmallPhotoUrl, u.FullPhotoUrl From User u ];
    }
}
