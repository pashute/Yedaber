/*
 * File: app/store/ContactsStore.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Wiztalk.store.ContactsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.contactsStore',
    requires: [
        'Wiztalk.model.Contact'
    ],

    config: {
        model: 'Wiztalk.model.Contact',
        storeId: 'contactsStore',
        proxy: {
            type: 'rest',
            actionMethods: {
                create: contactsCreate(operation, callback, scope) ,
                read: contactsRead(operation, callback, scope),
                update: contactsUpdate(operation, callback, scope),
                destroy: contactsDestroy(operation, callback, scope)
            }
        }
    }
});

function contactsCreate(operation, callback, scope) {
                        // do nothing ... meanwhile
}

function contactsRead(operation, callback, scope){
    var thisProxy = this;
    navigator.contacts.find(
        ['id', 'name', 'emails', 'phoneNumbers', 'addresses'],
        function(deviceContacts) {
            //loop over deviceContacts and create Contact model instances
            var contacts = [];
            for (var i = 0; i < deviceContacts.length; i++) {
                var deviceContact = deviceContacts[ i ];
                var contact = new thisProxy.model({
                    id: deviceContact.id,
                    givenName: deviceContact.name.givenName,
                    familyName: deviceContact.name.familyName,
                    emails: deviceContact.emails,
                    phoneNumbers: deviceContact.phoneNumbers
                });
                contact.deviceContact = deviceContact;
                contacts.push(contact);
            }

            //return model instances in a result set
            operation.resultSet = new Ext.data.ResultSet({
                records: contacts,
                total  : contacts.length,
                loaded : true
            });

            //announce success
            operation.setSuccessful();
            operation.setCompleted();

            //finish with callback
            if (typeof callback == "function") {
                callback.call(scope || thisProxy, operation);
            }
        },
        function (e) {
            console.log('Error fetching contacts');
        },
        {multiple: true}
    );
}

function contactsUpdate(operation, callback, scope){

    operation.setStarted();

    //put model data back into deviceContact
    var deviceContact = operation.records[0].deviceContact;
    var contact = operation.records[0].data;
    deviceContact.name.givenName = contact.givenName;
    deviceContact.name.familyName = contact.familyName;

    //save back via PhoneGap
    var thisProxy = this;
    deviceContact.save(function() {
        //announce success
        operation.setCompleted();
        operation.setSuccessful();

        //finish with callback
        if (typeof callback == 'function') {
            callback.call(scope || thisProxy, operation);
        }
    });
}


function contactsDestroy(operation, callback, scope){
     // seek and destroy !!
}