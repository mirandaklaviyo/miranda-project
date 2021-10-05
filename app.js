const button = document.querySelector(".button")

var els = document.querySelectorAll('.hidden')

const restartbutton = document.querySelector(".restartbutton")
const resultsbutton = document.querySelector(".getresults")


restartbutton.style.display = 'none'
resultsbutton.style.display = 'none'

button.addEventListener('click', _removeClasses)
function _removeClasses() {
  for (var i = 0; i < els.length; i++) {
    els[i].classList.remove('hidden')
  }
  resultsbutton.style.display = 'block'
  restartbutton.style.display = 'none'
  button.style.display = 'none'
}


resultsbutton.addEventListener('click', _addClasses) 
    function _addClasses() {
        for (var i = 0; i < els.length; i++) {
          els[i].classList.add('hidden')
        }
}

resultsbutton.addEventListener('click', () => {
    restartbutton.style.display = 'block'
    resultsbutton.style.display = 'none'

    console.log(newscore)
    // if(newscore <= 3) {
    //     let div = document.createElement('div')
    //     div.classList.add('resultstyle')
    //     header.appendChild(div)
    //     div.innerText("Hello")
    // }

})


restartbutton.addEventListener('click', _addClasses) 
    function _addClasses() {
        for (var i = 0; i < els.length; i++) {
          els[i].classList.add('hidden')
        }
}

restartbutton.addEventListener('click', () => {
    button.style.display = 'block'
    restartbutton.style.display = 'none'
    resultsbutton.style.display = 'none'
})



let score = 0
let newscore = 0

const OneImage1 = document.querySelector(".OneImage1")
const OneImage2 = document.querySelector(".OneImage2")
const OneImage3 = document.querySelector(".OneImage3")
const OneImage4 = document.querySelector(".OneImage4")

const TwoImage1 = document.querySelector(".TwoImage1")
const TwoImage2 = document.querySelector(".TwoImage2")
const TwoImage3 = document.querySelector(".TwoImage3")
const TwoImage4 = document.querySelector(".TwoImage4")

const ThreeImage1 = document.querySelector(".ThreeImage1")
const ThreeImage2 = document.querySelector(".ThreeImage2")
const ThreeImage3 = document.querySelector(".ThreeImage3")
const ThreeImage4 = document.querySelector(".ThreeImage4")

OneImage1.addEventListener('click', () => {
    newscore = score += 1
    console.log(newscore)
})

OneImage1.addEventListener('click', _addClasses2) 
    function _addClasses2() {
        OneImage1.classList.add('clicknot1')
        OneImage2.classList.add('clicknot')
        OneImage3.classList.add('clicknot')
        OneImage4.classList.add('clicknot')

}


OneImage2.addEventListener('click', () => {
    newscore = score += 2
    console.log(newscore)
})



OneImage3.addEventListener('click', () => {
    newscore = score += 3
    console.log(newscore)
})

OneImage4.addEventListener('click', () => {
    newscore = score += 4
    console.log(newscore)
})

TwoImage1.addEventListener('click', () => {
    newscore = score += 2
    console.log(newscore)
})

TwoImage2.addEventListener('click', () => {
    newscore = score += 3
    console.log(newscore)
})

TwoImage3.addEventListener('click', () => {
    newscore = score += 1
    console.log(newscore)
})

TwoImage4.addEventListener('click', () => {
    newscore = score += 4
    console.log(newscore)
})

ThreeImage1.addEventListener('click', () => {
    newscore = score += 1
    console.log(newscore)
})

ThreeImage2.addEventListener('click', () => {
    newscore = score += 4
    console.log(newscore)
})

ThreeImage3.addEventListener('click', () => {
    newscore = score += 2
    console.log(newscore)
})

ThreeImage4.addEventListener('click', () => {
    newscore = score += 3
    console.log(newscore)
})

