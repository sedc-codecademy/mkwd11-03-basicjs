let names = ["Bojan", "Ivan", "Tosho"];

for (let i = 0; i < names.length; i++) {
  //this is i+=1 or i=i+1
  console.log(`${i + 1}. ${names[i]}`); //this here is just i + 1
}

console.log("=============================");

let i = 1;
for (let name of names) {
  console.log(`${i}. ${name}`);
  i++;
}

let k = 0;
while (k <= 12) {
  console.log(k);
  k++;
}
