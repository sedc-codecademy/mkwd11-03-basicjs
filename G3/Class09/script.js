// console.log($);

// AJAX with jqeury dom manipulation

// $("#sendRequest").on('click', function() {
//     console.log("Hey from button");
    
//     // let ajaxParameters = {
//     //     url: "",
//     //     method: "GET",
//     //     success: function() {

//     //     },
//     //     error: function() {

//     //     }
//     // }

//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/users",
//         method: "GET",
//         success: function(result) {
//             console.log(result);
//             listUsers(result);
//         },
//         error: function(error) {
//             console.log(error);
//         }
//     });
// });



// function listUsers(users) {
//     let html = '';
//     for(let user of users) {
//         html += `<li>Name of user: ${user.name} Company: ${user.company.name}</li>`;
//     }
//     $('#result').html(html);
// }


// FETCH with vanila js dom manipulation

function Employee(id, name, companyName) {
    this.id = id;
    this.name = name;
    this.companyName = companyName;

    this.showInfo = function() {
        return `Id: ${this.id} Name of user: ${this.name} Company: ${this.companyName}`
    }
}

document
    .getElementById('sendRequest')
    .addEventListener('click', function() {
        console.log("Hey from event");
        // fetch("https://jsonplaceholder.typicode.com/users")
        //         .then(response => {
        //             return response.json();
        //         }).then(data => {
        //             console.log(data);
        //         });

        // fetch("https://jsonplaceholder.typicode.com/users")
        //         .then(function(response) {
        //             return response.json();
        //         }).then(function(data) {
        //             console.log(data);
        //             let employees = parseUsersIntoEmployees(data);
        //             console.log(employees);
        //             listUsersWithFetch(employees);
        //         }).catch(function(error) {
        //             console.log(error);
        //             handleError();
        //         });

        // WITHOUT FUNCTIONS
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(function(response) {
                    return response.json();
            }).then(function(data) {
                    console.log(data);
                    let employees =[];
                    for(let user of data) {
                        let employee = new Employee(user.id, user.name, user.company.name);
                        employees.push(employee);
                    }
                    console.log(employees);
                    let html = '';
                    for(let employee of employees) {
                        html += `<li>${employee.showInfo()}</li>`;
                    }
                    document.getElementById('result').innerHTML = html;
            }).catch(function(error) {
                    console.log(error);
                    let html = `<li>Something has happend please try again later!</li>`;
                    document.getElementById('result').innerHTML = html;
            });
    });

function parseUsersIntoEmployees(users) {
    let employees =[];
    for(let user of users) {
        let employee = new Employee(user.id, user.name, user.company.name);
        employees.push(employee);
    }
    return employees;
}

function listUsersWithFetch(employees) {
    let html = '';
    for(let employee of employees) {
        html += `<li>${employee.showInfo()}</li>`;
    }
    document.getElementById('result').innerHTML = html;
}

function handleError() {
    let html = `<li>Something has happend please try again later!</li>`;
    document.getElementById('result').innerHTML = html;
}