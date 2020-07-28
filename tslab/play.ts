// var age: number = "Too Old"
// console.log(age)

// function printPerson (name:string, age:number) {
//     console.log(`Name: ${name} age: ${age}`)
// }

// printPerson("Billy", 8)

// printPerson(8, "Billy")

class Product {
    title: string;
    price: number;
    id: number;

    constructor(id: number) {
        this.id = id
    }

    printDetails() {
        console.log(`Title: ${this.title}`)
        console.log(`ID: ${this.id}`)
        console.log(`Price: ${this.price}`)
    }
}

class Tour extends Product implements Bookable, Cancelable {
    duration: string;
    availableDates: [Date];
    cancelationFee: number;

    constructor(id: number, duration: string) {
        super(id);

        this.duration = duration
    }

    printDetails() {
        super.printDetails()

        console.log(`Duration: ${this.duration}`)
    }
}

// function test(p: Product) {
//     p.printDetails()
// }

var t = new Tour(1, "8 hours")

t.title = "Trip to the Taj Mahal"
t.price = 1200.00

//test(t)

interface Bookable {
    availableDates: [Date]
}

interface Cancelable {
    cancelationFee: number
}

/* class Tour extends Product implements Bookable, Cancelable {

        duration: string;
        availableDates: [Date];
        cancelationFee: number;
    
        constructor(id: number, duration: string) {
            super(id);
    
            this.duration = duration
        }
    
        printDetails() {
            super.printDetails()
    
            console.log(`Duration: ${this.duration}`)
        }
    } */
    
    function test(p: Product) {
        p.printDetails()
    }

class Dining extends Tour {
    cuisine: string;
    childPrice: number;

    constructor(id: number, duration: string, cuisine: string, childPrice: number) {
        super(id, duration);

        this.cuisine = cuisine
        this.childPrice = childPrice
    }

    printDetails() {
        super.printDetails()
        console.log(`Cuisine: ${this.cuisine}`)
        console.log(`Child Price: ${this.childPrice}`)
    }
}

// var d = new Dining(1, "8 hours", "Indian", 5)
// d.title = "Trip to Germany"
// d.price = 2500

// test(d)

function cancelBooking(c: Cancelable) {
    console.log("Canceling booking. Charges: %d", c.cancelationFee)
}

function cancelBooking2<T extends Cancelable & Product> (c: T) {
    console.log("Canceling : %s (%d)", c.title, c.id)
    console.log("Price: %d", c.price)
    console.log("Cancelation fee: %d", c.cancelationFee)
    console.log("Total Refund: %d", c.price - c.cancelationFee)
}

var t = new Tour(1, "8 hours")

t.title = "Trip to Germany"
t.price = 2500.00
t.cancelationFee  = 100.00

//cancelBooking(t)
// cancelBooking2(t)

/* interface ConfigOption {
    directory: string 
    file: string
    maxSize?: number
}

function configSomething(op: ConfigOption) {
    op.maxSize = op.maxSize || 1024

    console.log("Directory: %s", op.directory)
    console.log("File: %s", op.file)
    console.log("Max size: %s", op.maxSize)
} */
interface ConfigOption {
    directory: string 
    path: string
    maxSize?: number
}

function configSomething(op: ConfigOption) {
    op.maxSize = op.maxSize || 1024

    console.log("Directory: %s", op.directory)
    console.log("File: %s", op.path)
    console.log("Max size: %s", op.maxSize)
}

/* configSomething({
    directory: "/dir1",
    file: "persons.json"
}) */

configSomething({
    directory: "/dir1",
    path: "persons.json"
})

