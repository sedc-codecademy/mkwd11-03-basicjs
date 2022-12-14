// new Date().getFullYear() // how to get the current year

function calculateAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    return age;
}

function calculateAge2(birthYear) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    return age;
}

function calculateAge3(birthYear, currentYear = new Date().getFullYear()) {
    let age = currentYear - birthYear;
    return age;
}

console.log(calculateAge(1987, 2008));
console.log(calculateAge2(1987));
console.log(calculateAge3(1987));