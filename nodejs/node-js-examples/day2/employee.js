export class Employee {
    constructor(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
    display() { 
        return `ID=${this.id},NAME=${this.name},PHONE=${this.phone}`;
    }
}