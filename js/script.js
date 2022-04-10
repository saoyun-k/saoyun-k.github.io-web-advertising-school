const questionDropDown = document.querySelectorAll(".question__content__items.q-line");
const arrowRotate = document.querySelectorAll(".q-arrow");
  for (let i = 0; i < questionDropDown.length; i++ ) {
    questionDropDown[i].addEventListener("click", () => {
      questionDropDown[i].children[1].classList.toggle("active");
      arrowRotate[i].classList.toggle("action");
    })
  }



 