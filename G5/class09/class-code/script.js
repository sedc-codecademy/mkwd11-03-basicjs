console.log('hello');

$(document).ready(function() {
    let allElements = $('*');
    console.log(allElements);

    let firstTitle = $('#firstTitle');
    console.log(firstTitle);

    let elementsByClassName = $('.innerWraper');
    console.log(elementsByClassName);

    let elementsByTagName = $('p');
    console.log(elementsByTagName);

    let firstParagph = $('p:first');
    console.log(firstParagph);

    let lastParagph = $('p:last');
    console.log(lastParagph);

    let firstChild = $(".innerWraper :first-child");
    let secondChild = $(".innerWraper :nth-child(2)");
    let lastChild = $(".innerWraper :last-child");

    console.log(firstChild);
    console.log(secondChild);
    console.log(lastChild);
    console.log(firstChild.text());

    let inputValue = $('input').first().val();
    console.log(inputValue);

    changedInputValue = $('input').first().val('something');
    // console.log(changedInputValue);

    // getting and setting html content with jquery
    $('.emptyDiv').first().html('<p>I am a paragraph generarate from Jquery</p>');
    console.log($('.emptyDiv').first().html())

    // adding content before and after an element
    $('h1').first().before('<p>New p tag before the h1</p>');
    $('h1').first().after('<p>New p tag after the h1</p>');

    // changing style with jquery
    elementsByClassName.first().css('color', 'blue');
    elementsByClassName.last().css({'color': 'red','font-weight': 'bold', 'background-color': 'green'});

    // Events in Jquery

    let button = $('#btn').first();

    // button.on('click', function() {
    //     alert('Hello from Jquery');
    // })

    button.click(function() {
        alert('I am the simplest event handler');
    });
})