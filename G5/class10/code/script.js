console.log('test');


$(document).ready(function() {

    let g5 = {
        trainer: 'Panche Manaskov',
        assistant: 'Radmila Sokolovska',
        students: [
            'Boban',
            'Dragisha',
            'Mitko',
            'Hristina',
            'Tode',
            'Tanja'
        ],
        academy: 'Web Dev',
        course: 'basic js'
    }

    console.log(g5);

    // JSON.stringify converts JS objects to JSON (string)
    let jsonObject = JSON.stringify(g5);
    console.log(jsonObject);

    // JSON.parse converts JSON object to JS object
    let backToJson = JSON.parse(jsonObject);
    console.log(backToJson);

    // AJAX call

    let button = $('#btn').first();

    button.click(function() {
        const urlToGetData = 'https://jsonplaceholder.typicode.com/users'

        $.ajax({
            url: urlToGetData,
            success: function(result) {
                console.log('success!');
                console.log(result);
                // for (let user of result) {
                //     $('#userList').append(`<li>${user.username} - ${user.email}</li>`);
                // }
            },
            error: function() {
                console.log('An error has occurred!')
            }
        })
        .done(function(data) {
            // for (let user of data) {
            //     $('#userList').append(`<li>${user.username} - ${user.email}</li>`);
            // }
            showUser(data);
        })
    })

    let showUser = function(array) {
        for (let user of array) {
            $('#userList').append(`<li>${user.username} - ${user.email}</li>`);
        }
    }
    
    // let arrow = () => {
    //     console.log('hi');
    // }

    let fetchButton = $('#btnFetch').first();

    fetchButton.click(function() {
        let promise = fetch('https://jsonplaceholder.typicode.com/users');
        console.log(promise);

        promise
        .then(function(response) {
            console.log(response)
            return response.text();
        })
        .then(function(result) {
            console.log(result);

            let parsedResult = JSON.parse(result);
            console.log(parsedResult);

            for (let user of parsedResult) {
                $('#userListFetch').append(`<li>${user.name} - ${user.email}</li>`);
            }
        })
    })



})
