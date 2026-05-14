// ---- block scope ----

function blockScope() {

    const message = "hello developer";

    if (true) {
        const message = "how are you";
        console.log(message);
    }
    console.log(message);
}
blockScope();

// ------ variable declaration ------

//i can't able to this i must initialized const variable value at the time of declaration

const k = 45;

console.log(k);


// ----- variable priority -----

// const -> let -> var



const person = { name: "kalpesh", age: 20 };

person.name = "krishna";

console.log(person);

