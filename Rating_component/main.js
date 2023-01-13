let ratings = 0;
let scores = document.querySelectorAll(".score");
const thanks = document.querySelector("#thanks");
const rate = document.querySelector("#rate");
let submit = document.querySelector("#sub");
let num=document.querySelector('#no_rating')

scores.forEach((element) => {
  element.addEventListener("click", score);
});
function score() {
  let index = this.id;
  ratings = index;
  console.log(ratings);
  if (document.querySelector(".scoreActive")) {
    scores.forEach((element) => {
      element.classList.remove("scoreActive");
    });
  }
  for (let i = 0; i < index; i++) {
    scores[i].classList.add("scoreActive");
  }
}

submit.addEventListener("click", next);
function next() {
rate.classList.add('hide');
thanks.classList.remove('hide');
num.innerHTML=`you selected ${ratings} out of 5`;
}
