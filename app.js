/*Interactive Rating Component for Frontend Mentor*/

// all spans that hold a rating
const ratings = document.querySelectorAll(".card-rating span");
// submit button
const submitBtn = document.querySelector(".card-ratings_btn");
// Initial section to choose a rating
const ratingSection = document.querySelector(".card-ratings");
// Thank you section to show after submission
const submitSection = document.querySelector(".card-submit");
// span to show rating choice on thank you section
const showRate = document.querySelector("#rating");

let rate = null;

/* If a rating is clicked, adds a class of "checked" to change the background of the span 
and capture selection in a variable. Checks to see if another span has a "checked" 
class and removes it.*/

ratings.forEach(function (rating) {
  rating.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const selected = e.target;
    selected.classList.add("checked");

    rate = e.target.innerText;
  });
});

/*On submit, checks to see if there is a valid rate. 
If so, "hidden" class is toggled on both sections and rate is shown on thank you screen. */
submitBtn.addEventListener("click", (e) => {
  if (rate) {
    showRate.innerText = rate;
    ratingSection.classList.add("hidden");
    submitSection.classList.remove("hidden");
  }
});
