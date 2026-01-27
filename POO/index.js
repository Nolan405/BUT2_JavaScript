function User(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this. access = ["val1", "val2", "val3"];

    this.toString = function() {
        return "Vous etes " + this.prenom + " " + this.nom + ", vous avez " + this.age + " ans";
    }

    this.hasAccessOf = function(val) {
        return this.access.includes(val);
    }
}

User.prototype.hasAccessOf2 = function(val) {
    return this.access.includes(val);
}

let Raph = new User("Brousseau", "Raphaël", 19);
console.log(Raph.toString());
console.log(Raph.hasAccessOf("val2"))
console.log(Raph.hasAccessOf2("val2"))





function Person() {
    this.whoIs = function () {
    return `${this.firstname} ${this.lastname}`;
    }
}

function Client(firstname, lastname) {
    this.__proto__ = new Person();
    this.firstname = firstname;
    this.lastname = lastname;
}

console.log(new Client('moi', 'moi'));

