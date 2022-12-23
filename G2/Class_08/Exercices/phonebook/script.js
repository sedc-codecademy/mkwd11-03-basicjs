let mainDiv = document.getElementById("main");
let selectedButton = document.getElementById("btn");
let inputPhone = document.getElementById("inpPhone");
let inputName = document.getElementById("inpName");


selectedButton.addEventListener("click", () => {
    let list = document.createElement("ul");
    let listPhone = document.createElement("li");
    let listName = document.createElement("li");

    if (inputName.value == "" || inputPhone.value == ""){
        alert("Please fill both fileds")
    }else {
        listPhone.textContent += inputPhone.value;
        listName.textContent += inputName.value;

        list.append(listPhone);
        list.append(listName);

        mainDiv.append(list);

    }

})
