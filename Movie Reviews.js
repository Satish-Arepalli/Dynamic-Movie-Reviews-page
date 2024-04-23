let reviewsContainerEl = document.getElementById("reviewsContainer");

let btnEl = document.getElementById("addBtn");
btnEl.onclick = function() {
    let titleInputEl = document.getElementById("titleInput");
    let movieTitle = titleInputEl.value;

    if (movieTitle === "") {
        alert("Please enter a movie title");
        return;
    }

    let reviewTextareaEl = document.getElementById("reviewTextarea");
    let movieReview = reviewTextareaEl.value;

    let movieTitleEl = document.createElement("p");
    movieTitleEl.textContent = "Movie Title: " + movieTitle;
    movieTitleEl.classList.add("movie-title");
    reviewsContainerEl.appendChild(movieTitleEl);

    let movieReviewEl = document.createElement("p");
    movieReviewEl.textContent = "Review: " + movieReview;
    reviewsContainerEl.appendChild(movieReviewEl);

    titleInputEl.value = "";
    reviewTextareaEl.value = "";
}