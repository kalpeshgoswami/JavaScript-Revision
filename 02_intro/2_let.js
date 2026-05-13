
// ---- let is blockScope variable ----

function blockScope() {

    if (true) {
        let message = "good morning"

        console.log("blockScope", message)
    }
}
blockScope()

// ---- declaration ----

let car;

// ---- initialization ----

car = "Porsche";

console.log(car)

// ---- override ----

car = "Ferrari ";

console.log("override", car)