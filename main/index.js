
const rating = document.querySelector(".rating");
const ratingSelect = document.querySelector(".ratingPoint");
const ratingBtn = document.getElementById("btnSubmit")

rating.addEventListener("click", (e)=>{
  let numberRating = e.target.value;
  ratingSelect.innerText = numberRating;

  if(numberRating <= 5) {
    ratingBtn.addEventListener("click", ()=>{
      document.querySelector(".ratingState").style.display = "none";
      document.querySelector(".thanksState").style.display = "flex"; 
    });
  };
});