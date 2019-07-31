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


function handleSubmit(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const phone = event.target[2].value;
    const relation = event.target[3].value;

    newAddressBook.add(name, email, phone, relation);
    newAddressBook.display();

}

function handleDelete(event) {

    if (!event.target.classList.contains('delete-btn')) return;

    newAddressBook.contacts.splice(Number(event.target.attributes[0].value), 1);
    newAddressBook.display();
}

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

    //
    add(name, email, phone, relation){
        const newContact = new Contact(name, email, phone, relation);
        this.contacts.push(newContact);


    };
    deleteAt(name) {
        //removes contact based on provided name
        //declared variable index. Index is used to find the index of the item we are trying to delete
        //this.contacts refers to our array of contacts. We set variable contact in the predicate of findIndex
        //findIndex goes through our contacts array and returns
        const index = this.contacts.findIndex((contact) => {
            return contact.name === name;
        });
        if (index >= 0) {
            this.contacts.splice(index, 1);
        }
        this.display();

    };

    print() {
        this.contacts.forEach((value) => {
            console.log(value);
        })
    };

    display() {
        //update the DOM to display all the contacts from the AddressBook
        document.querySelector(".info-container").innerHTML = "";
        // const infoContainer = document.querySelector('.info-container');
        this.contacts.forEach((person, index) => {
            const div = document.createElement('div');
            div.classList.add("resultContainer");
            div.innerHTML = `
            <p>Name: ${person.name}</p>
            <p>Email: ${person.email}</p>
            <p>Phone: ${person.phone}</p>
            <p>Relation: ${person.relation}</p>
            <button index=${index} class="delete-btn"><i class="fas fa-trash"></i></button>
        `;
            document.querySelector('.info-container').append(div);
        });
    }
}

const newAddressBook = new AddressBook();
const infoContainer = document.querySelector(".info-container");
document.querySelector("form").addEventListener("submit", handleSubmit);
infoContainer.addEventListener("click", handleDelete);

newAddressBook.add("Kody Peters", "222@gmail.com", "9893073434", "self");
newAddressBook.add("Jody Peters", "111@gmail.com", "9893075434", "father");
newAddressBook.add("Pamela Peters", "333@gmail.com", "9893072334", "mother");
newAddressBook.add("Taylor Peters", "444@gmail.com", "9892387392", "sister");
newAddressBook.display();








// newAddressBook.print();
// newAddressBook.delete("Pamela Peters");
// newAddressBook.print();