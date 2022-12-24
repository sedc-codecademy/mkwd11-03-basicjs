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

})