let mainNode = document.getElementById("main");
let whoNode = document.getElementById("who");
let whenNode = document.getElementById("when");
let whereNode = document.getElementById("where");
let buttonNode = document.getElementById("buttonGen");

buttonNode.addEventListener("click", () => {
  let storyNode = document.createElement("p");
  mainNode.append(storyNode);
  storyNode.textContent = `There was a hero named ${whoNode.value}. 
                            He lived in ${whereNode.value} 
                            in the times of ${whenNode.value}. 
                            It was a great hero indeed`  
})