// console.log($);

$("#sendRequest").on('click', function() {
    console.log("Hey from button");
    
    // let ajaxParameters = {
    //     url: "",
    //     method: "GET",
    //     success: function() {

    //     },
    //     error: function() {

    //     }
    // }

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
        success: function(result) {
            console.log(result);
        },
        error: function(error) {
            
        }
    });
});

