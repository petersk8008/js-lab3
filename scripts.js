// JAVASCRIPT ADDRESS BOOK LAB PART 1
// Task: Build an object-oriented console address book application.
//     The AddressBook class:
// Properties
// ● contacts: an empty array..
//     Methods
// ● add(name, email, phone, relation): Makes a new Contact instance and adds it to
// this AddressBook’s contacts.
// ● delete(name): Removes a contact based on the provided name.
// ● print(): Logs each element of the contacts array to the console.
//     The Contact class:
// The class has a name, email, phone, and relation property. All four can be set by passing
// them into the constructor.
//     Build Specifications:
//     1. Create the AddressBook and Contact classes.
// 2. Create one instance of AddressBook called addressBook.
// 3. Call the addressBook’s add method for each member of your immediate family.
// 4. Call the addressBook’s delete method at least once.
// 5. Call the addressBook’s print method at least once.

class Contact {
    constructor (name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    };

}

class AddressBook {
    constructor() {
        this.contacts = [];

    };
    add(name, email, phone, relation){
        const newContact = new Contact(name, email, phone, relation);
        this.contacts.push(newContact);
    };
    delete(name) {
        //removes contact based on provided name
        const index = this.contacts.findIndex((contact) => {
            console.log(contact);
            return contact.name === name;
        });
        if (index >= 0) {
            this.contacts.splice(index, 1);
        }
    };

    print() {
        this.contacts.forEach((value) => {
            console.log(value);
        })
    };
}
const newAddressBook = new AddressBook();
newAddressBook.add("Kody Peters", "222@gmail.com", "9893073434", "self");
newAddressBook.add("Jody Peters", "111@gmail.com", "9893075434", "father");
newAddressBook.add("Pamela Peters", "333@gmail.com", "9893072334", "mother");
newAddressBook.add("Taylor Peters", "444@gmail.com", "9892387392", "sister");
newAddressBook.print();
newAddressBook.delete("Pamela Peters");
newAddressBook.print();