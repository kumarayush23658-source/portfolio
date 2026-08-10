function showReview() {
    let movieName = document.getElementById("movieName").value;

    if (movieName === "") {
        alert("Please enter a movie name!");
    } else {
        alert("You selected: " + movieName);
    }
}