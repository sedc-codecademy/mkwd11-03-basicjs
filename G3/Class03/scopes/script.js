

function printMessage() {
    let message = "Hello from SEDC!";
    console.log(message);
}

//printMessage();
// console.log(message); gives an error becouse it is not defined


let greeting = "Hello SEDC!"; // global scope

function printGreeting() {
    let greeting = "Happy Holidays!"; // local scope
    console.log(greeting);
}

//printGreeting();

let text = "This is a text in the global scope";

function printText() {
    console.log(text);
}

//printText();

let num = 30;

function printNum() {
    num = 50;
    console.log(num);
}

//printNum();

function badExample() {
    a = 10;
    console.log(a);
}

// badExample();


let number = 100;

function printNumber(num) {
    number = 1000;
    console.log(num)
}

// printNumber(number); // -> 100

// console.log(number); // -> 1000

let message2 = "SomeMessage";

function printMessage2(message2){
    message2 = "Something else";
    console.log(message2);
}

// printMessage2(message2);

let num1 = 1;
function test() {
    let num1 = 100;
    console.log(num1);

    let num2 = 9;
    function test2() {
        let num1 = 3;
        console.log(num1);

        function test3() {
            let num4 = 10;
            console.log(num2);
        }

        // console.log(num4); num4 is not defined in this scope
        test3();
    }

    test2();
}

test();
// // scopes that can be used
// // global
// function test() {
//     // scopes that can be used
//     // test, global
//     function test2() {
//         // scopes that can be used
//         // test2, test, global
//         function test3() {
//             // scopes that can be used
//             // test3, test2, test, global
//         }

//     }
// }



let trainer = "Trajan";
let doWeNeedAChange = true;

function changeTrainer() {
    let name = "";
    // onescope
    if(doWeNeedAChange) {
        if(doWeNeedAChange) {
            if(doWeNeedAChange){
                if(doWeNeedAChange){
                    console.log(trainer);
                    console.log(name);
                }
            }
        }
        name = "Todor";
        //second scope
    } else if(!doWeNeedAChange) {
        name = "Nikola";
        // third scope
    } else {
        name = "Bob";
        // fourt scope
    }

    console.log(name);
}

changeTrainer();