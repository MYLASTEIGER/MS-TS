

interface Contact {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: number;
    phone: number;
    message(): string
}
let myInfo = {
     name: "Myla Steiger",
     street: "5886 Morrow Blackhawk Rd",
     city: "Morrow", 
     state: "OH", 
     zip: 45152, 
     phone: 5132938919,
     message: function() { 
        return "My name is " + this.name + 
               " and my address is " + this.street + ", " + this.city + ", " + this.state + ", " + this.zip + ". My phone number is "+ this.phone + "."
    }
}
function message(myInfo: Contact) {
    return myInfo.message();
}

console.log(message(myInfo))

