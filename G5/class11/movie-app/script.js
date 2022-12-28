// ***************** GENERATE MOVIES *****************

let movieName = document.getElementById("movieName");
let releaseDate = document.getElementById("releaseDate");
let genre = document.getElementById("genre");
let movieForm = document.getElementsByTagName("form")[0];
let errMsg = document.getElementById("errMsg");
let moviesResult = document.getElementById("moviesResult");

let moviesDB = [];

function Movie(name, releaseDate, genre) {
  this.movieName = name;
  this.movieReleaseDate = releaseDate;
  this.movieGenre = genre;

  this.movieInfo = function () {
    return `Movie name is ${this.movieName}, and genre is ${this.movieGenre}`;
  };
}

function generateMovie(movieName, movieReleaseDate, movieGenre) {
  if (areInputsInvalid(movieName, movieReleaseDate, movieGenre)) {
    toggleErrorMessage(errMsg, true);
    return;
  }
  toggleErrorMessage(errMsg, false);

  let movieToBeAdded = new Movie(movieName, movieReleaseDate, movieGenre);
  if (movieToBeAdded) {
    moviesDB.push(movieToBeAdded);
  }
}

function areInputsInvalid(movieName, movieReleaseDate, movieGenre) {
  return !movieName || !movieReleaseDate || !movieGenre;
}

function toggleErrorMessage(errorElement, hasError) {
  if (hasError) {
    errorElement.style.display = "block";
    errorElement.style.color = "red";
    errorElement.innerText = "Please Enter all inputs";
  } else {
    errorElement.style.display = "none";
    errorElement.style.color = "black";
    errorElement.innerText = "";
  }
}

movieForm.addEventListener("submit", function (event) {
  event.preventDefault();
  generateMovie(movieName.value, releaseDate.value, genre.value);
  console.log(moviesDB);
  movieName.value = "";
  releaseDate.value = "";
  genre.value = "";

  if (moviesDB.length) {
    printMovies(moviesResult, moviesDB);
  }
});

function printMovies(elementToPrint, moviesArr) {
  elementToPrint.innerHTML = "";

  let table = document.createElement("table");
  table.style.border = "1px solid green";
  table.style.width = "400px";

  table.innerHTML = `
        <thead>
            <td>Movie Name</td>
            <td>Movie release date</td>
            <td>Movie Genre</td>

        </thead>
    `;

  for (let i = 0; i < moviesArr.length; i++) {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `
            <td>${moviesArr[i].movieName}</td>
            <td>${moviesArr[i].movieReleaseDate}</td>
            <td>${moviesArr[i].movieGenre}</td>

        `;
    table.appendChild(tableRow);
  }

  elementToPrint.appendChild(table);
}