// javascript object

let academy = {
    academyName: "SEDC", 
    subject: "JS Basic", 
    trainers: ["Tanja Stojanovska", "Jana Simjanovska"],
    numberOfStudents: 25,
    isRemote: true
}

//we pack the object in order to send it to server
//the client and server understand json format
let jsObjectToJSON = JSON.stringify(academy); // serialization
console.log(jsObjectToJSON);

//json string comes from server and has to be parsed
//from json string we get javascript object
let parsedJSON = JSON.parse(jsObjectToJSON);
console.log(parsedJSON);

console.log(parsedJSON.academyName);
