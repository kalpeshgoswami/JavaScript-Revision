//  ----- var is functional scope variable ---

function msg() {

    var message = "hello developer";

    console.log(message);

    if (true) {
        console.log("If condition:", message)
    }
}

msg();


// ----- var declaration -----

var play;


// ---- initialization ----

play = "God of war";

console.log("Initialization:-", play);


//  ------ Reinitialization -----

var play = "GTA 5";

console.log("After Reinitialization:-", play);