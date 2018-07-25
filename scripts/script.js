"use strict";
class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        index = this.contacts.splice(prompt("What is the index of the contact you would like to delete?"), 1);
    }
    update(index) {
        index = this.contacts.splice(prompt("What is the index of the contact you would like to update?"), 1, new Contact(prompt("Name?"), prompt("Email?"), prompt("Phone?"), prompt("Relation?")));
    }
    print() {
        console.log(this.contacts);
    }
    deleteByName(name) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (name === this.contacts[i].name) {
                this.contacts.splice(i, 1);
            }
        }
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const book = new AddressBook();
book.add(new Contact("Nicole", "nicoleishot@yawhom.com", "419-867-5509", "wife"));
book.add(new Contact("Jim", "jimiscool@yawhom.com", "419-777-8989", "father"));
let runAddressBook = prompt(`Would you like to "add" a contact, "delete" a contact, "update" a contact, "print" your list of contacts, or "quit"?`);

while (true) {
    if (runAddressBook.toLowerCase() === "add") {
        book.add(new Contact(prompt("Name?"), prompt("Email?"), prompt("Phone?"), prompt("Relation?")));
        runAddressBook = prompt(`Would you like to "add" a contact, "delete" a contact, "update" a contact, "print" your list of contacts, or "quit"?`);
    } else if (runAddressBook.toLowerCase() === "delete") {
        let howDelete = prompt(`Would you like to delete by "index" or "name"?`);
        if (howDelete.toLowerCase() === "index") {
            book.deleteAt();
        } else if (howDelete.toLowerCase() === "name") {
            let name = prompt("What is the name of the contact you would like to delete? (CASE SPECIFIC)");
            book.deleteByName(name);
        } else {
            howDelete = prompt(`Would you like to delete by "index" or "name"?`);
        }
        runAddressBook = prompt(`Would you like to "add" a contact, "delete" a contact, "update" a contact, "print" your list of contacts, or "quit"?`);
    } else if (runAddressBook.toLowerCase() === "update") {
        book.update();
        runAddressBook = prompt(`Would you like to "add" a contact, "delete" a contact, "update" a contact, "print" your list of contacts, or "quit"?`);
    } else if (runAddressBook.toLowerCase() === "print") {
        book.print();
        runAddressBook = prompt(`Would you like to "add" a contact, "delete" a contact, "update" a contact, "print" your list of contacts, or "quit"?`);
    } else if (runAddressBook.toLowerCase() === "quit") {
        console.log(`You have quit`);
        break;
    } else {
        runAddressBook = prompt(`Would you like to "add" a contact, "delete" a contact, "update" a contact, "print" your list of contacts, or "quit"?`);
    }
}