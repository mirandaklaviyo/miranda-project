const button = document.querySelector(".button")

var els = document.querySelectorAll('.hidden')
// var imagesone = document.querySelectorAll('.clicknot1')
// var images = document.querySelectorAll('.clicknot')


const restartbutton = document.querySelector(".restartbutton")
const resultsbutton = document.querySelector(".getresults")

const resultsheader = document.querySelector(".resultsheader")
const resultscontent = document.querySelector(".resultscontent")
const quizheader = document.querySelector(".quizheader")
const quizheadercontent = document.querySelector(".quizheadercontent")

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

resultsbutton.addEventListener('click', () => {
        for (var i = 0; i < els.length; i++) {
          els[i].classList.add('hidden')
        }
        restartbutton.style.display = 'block'
        resultsbutton.style.display = 'none'

        console.log(newscore)
        
        quizheadercontent.innerText = ""
        quizheader.innerText = ""

        if(newscore <= 3) {
            resultsheader.innerText = "You like dark and stormy!";
            resultscontent.innerText = "When choosing a coffee shop, you prefer the dark toned decor, warm atmosphere, and quiet indulgence. You look for the soft leather couch and adjacent tree stump coffee table to set your latte down on. You value a good pastry selection and light music. You may be visiting alone, but the baristas are there to keep you company.";
        } else if (newscore <= 6) {
            resultsheader.innerText = "You like clean lines and minimal design!";
            resultscontent.innerText = "When choosing a coffee shop, you prefer a clean aesthetic over character. You rarely stay at the coffee shop too long. Instead, you just like to get your drink, finish it promptly, and go on with your day so other patrons can sit in one of the few seats available.";
        } else if (newscore <= 9) {
            resultsheader.innerText = "You like warm and cozy vibes!";
            resultscontent.innerText = "Your prefered coffee shop boasts greenery, candles, and lots of places to sit. Here you may stay for hours sipping a hot tea while reading a book or working on a laptop. The staff know you by name, as this is your new WFH spot. The pastries are divine, so you'll have breakfast, lunch, and dinner all in one place.";
        } else {
            resultsheader.innerText = "You like funky spots!";
            resultscontent.innerText = "Hello 4";
        }
})

restartbutton.addEventListener('click', () => {
    // window.location.reload()
    // button.style.display = 'block'
    // restartbutton.style.display = 'none'
    // resultsbutton.style.display = 'none'
    _removeClasses()
    for (var i = 0; i < els.length; i++) {
        els[i].classList.remove('clicknot1')
      }
    for (var i = 0; i < els.length; i++) {
        els[i].classList.remove('clicknot')
      }
    // for (var i = 0; i < imagesone.length; i++) {
    //     imagesone[i].classList.remove('clicknot1')
    //   }
    // for (var i = 0; i < images.length; i++) {
    //     images[i].classList.remove('clicknot')
    //   }  
    score = 0
    newscore = 0
    resultsheader.innerText = ""
    resultscontent.innerText = ""
    quizheader.innerText = "What kind of coffee shop are you?"
    quizheadercontent.innerText = "Take the quiz to see what kind of coffee shop YOU are!"
})




// resultsbutton.addEventListener('click', () => {
//     restartbutton.style.display = 'block'
//     resultsbutton.style.display = 'none'

//     console.log(newscore)
//     // if(newscore <= 3) {
//     //     let div = document.createElement('div')
//     //     div.classList.add('resultstyle')
//     //     header.appendChild(div)
//     //     div.innerText("Hello")
//     // }

// })


// resultsbutton.addEventListener('click', _addClasses) 
//     function _addClasses() {
//         for (var i = 0; i < els.length; i++) {
//           els[i].classList.add('hidden')
//         }
// }

// resultsbutton.addEventListener('click', () => {
//     restartbutton.style.display = 'block'
//     resultsbutton.style.display = 'none'

//     console.log(newscore)
//     // if(newscore <= 3) {
//     //     let div = document.createElement('div')
    //     div.classList.add('resultstyle')
    //     header.appendChild(div)
    //     div.innerText("Hello")
    // }

// })


// restartbutton.addEventListener('click', _addClasses) 
//     function _addClasses() {
//         for (var i = 0; i < els.length; i++) {
//           els[i].classList.add('hidden')
//         }
// }




OneImage1.addEventListener('click', () => {
    newscore = score += 1
    console.log(newscore)
})

OneImage1.addEventListener('click', _addClasses11) 
    function _addClasses11() {
        OneImage1.classList.add('clicknot1')
        OneImage2.classList.add('clicknot')
        OneImage3.classList.add('clicknot')
        OneImage4.classList.add('clicknot')

}

OneImage2.addEventListener('click', () => {
    newscore = score += 2
    console.log(newscore)
})

OneImage2.addEventListener('click', _addClasses12) 
    function _addClasses12() {
        OneImage1.classList.add('clicknot')
        OneImage2.classList.add('clicknot1')
        OneImage3.classList.add('clicknot')
        OneImage4.classList.add('clicknot')

}



OneImage3.addEventListener('click', () => {
    newscore = score += 3
    console.log(newscore)
})

OneImage3.addEventListener('click', _addClasses13) 
    function _addClasses13() {
        OneImage1.classList.add('clicknot')
        OneImage2.classList.add('clicknot')
        OneImage3.classList.add('clicknot1')
        OneImage4.classList.add('clicknot')

}


OneImage4.addEventListener('click', () => {
    newscore = score += 4
    console.log(newscore)
})

OneImage4.addEventListener('click', _addClasses14) 
    function _addClasses14() {
        OneImage1.classList.add('clicknot')
        OneImage2.classList.add('clicknot')
        OneImage3.classList.add('clicknot')
        OneImage4.classList.add('clicknot1')

}


TwoImage1.addEventListener('click', () => {
    newscore = score += 2
    console.log(newscore)
})

TwoImage1.addEventListener('click', _addClasses21) 
    function _addClasses21() {
        TwoImage1.classList.add('clicknot1')
        TwoImage2.classList.add('clicknot')
        TwoImage3.classList.add('clicknot')
        TwoImage4.classList.add('clicknot')

}


TwoImage2.addEventListener('click', () => {
    newscore = score += 3
    console.log(newscore)
})

TwoImage2.addEventListener('click', _addClasses22) 
    function _addClasses22() {
        TwoImage1.classList.add('clicknot')
        TwoImage2.classList.add('clicknot1')
        TwoImage3.classList.add('clicknot')
        TwoImage4.classList.add('clicknot')

}

TwoImage3.addEventListener('click', () => {
    newscore = score += 1
    console.log(newscore)
})

TwoImage3.addEventListener('click', _addClasses23) 
    function _addClasses23() {
        TwoImage1.classList.add('clicknot')
        TwoImage2.classList.add('clicknot')
        TwoImage3.classList.add('clicknot1')
        TwoImage4.classList.add('clicknot')

}

TwoImage4.addEventListener('click', () => {
    newscore = score += 4
    console.log(newscore)
})

TwoImage4.addEventListener('click', _addClasses24) 
    function _addClasses24() {
        TwoImage1.classList.add('clicknot')
        TwoImage2.classList.add('clicknot')
        TwoImage3.classList.add('clicknot')
        TwoImage4.classList.add('clicknot1')

}

ThreeImage1.addEventListener('click', () => {
    newscore = score += 1
    console.log(newscore)
})

ThreeImage1.addEventListener('click', _addClasses31) 
    function _addClasses31() {
        ThreeImage1.classList.add('clicknot1')
        ThreeImage2.classList.add('clicknot')
        ThreeImage3.classList.add('clicknot')
        ThreeImage4.classList.add('clicknot')

}

ThreeImage2.addEventListener('click', () => {
    newscore = score += 4
    console.log(newscore)
})

ThreeImage2.addEventListener('click', _addClasses32) 
    function _addClasses32() {
        ThreeImage1.classList.add('clicknot')
        ThreeImage2.classList.add('clicknot1')
        ThreeImage3.classList.add('clicknot')
        ThreeImage4.classList.add('clicknot')

}

ThreeImage3.addEventListener('click', () => {
    newscore = score += 2
    console.log(newscore)
})

ThreeImage3.addEventListener('click', _addClasses33) 
    function _addClasses33() {
        ThreeImage1.classList.add('clicknot')
        ThreeImage2.classList.add('clicknot')
        ThreeImage3.classList.add('clicknot1')
        ThreeImage4.classList.add('clicknot')

}

ThreeImage4.addEventListener('click', () => {
    newscore = score += 3
    console.log(newscore)
})

ThreeImage4.addEventListener('click', _addClasses34) 
    function _addClasses34() {
        ThreeImage1.classList.add('clicknot')
        ThreeImage2.classList.add('clicknot')
        ThreeImage3.classList.add('clicknot')
        ThreeImage4.classList.add('clicknot1')

}