"use strict";
class AddressBook {
    constructor() {
      this.contacts = [];
    }
    add() {
      const inputs = document.querySelectorAll("input[type='text']");
      this.contacts.push(new Contact(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value));
      this.display();
    }
    deleteAt(index) {
      this.contacts.splice(index, 1);
      this.display();
    }
    display() {
      this.clear();
      let index = 0;

      for (let contact of this.contacts) {
        const listOfContacts = document.querySelector(".listOfContacts");
        const contactBox = document.createElement("section");
        contactBox.className = "box";
        document.querySelector(".listOfContacts").appendChild(contactBox);
        const name = document.createElement("p");
        const email = document.createElement("p");
        const phone = document.createElement("p");
        const relation = document.createElement("p");

        name.textContent = `Name: ${contact.name}`;
        email.textContent = `Email: ${contact.email}`;
        phone.textContent = `Phone: ${contact.phone}`;
        relation.textContent = `Relation: ${contact.relation}`;

        document.querySelector(".listOfContacts").lastElementChild.appendChild(name);
        document.querySelector(".listOfContacts").lastElementChild.appendChild(email);
        document.querySelector(".listOfContacts").lastElementChild.appendChild(phone);
        document.querySelector(".listOfContacts").lastElementChild.appendChild(relation);

        const deleteBtn = document.createElement("section");
        deleteBtn.className = "delete";
        deleteBtn.innerHTML = `<button onclick="book.deleteAt(${index});" class="list__btn" type="button"><i class="material-icons">delete</i></button>`;
        document.querySelector(".listOfContacts").lastElementChild.appendChild(deleteBtn);
        index++;
      }
    }
    clearList() {
      this.contacts = [];
    }
    clear() {
      document.querySelector(".listOfContacts").innerHTML = "";
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
book.add(new Contact("Megan", "megan@grandcircus.co", "111-222-3333", "friend"));
book.add(new Contact("Julie", "julie@grandcircus.co", "111-222-3333", "coworker"));
book.add(new Contact("Jon", "jon@grandcircus.co", "111-222-3333", "coworker"));