/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// array created containing quotes that will be randomly pulled
var quotes = [
  {
    quote: 'It is during our darkest moments that we must focus to see the light.',
    source: 'Aristotle',
    tag: 'Philosopher'
  },
  {
    quote:'Try to be a rainbow in someone\'s cloud.',
    source:'Maya Angelou',
    tag:'Literature'
  },
  {
    quote:'Nothing is impossible, the word itself says "I\'m possible".',
    source:'Audrey Hepburn',
    tag:'Television'
  },
  {
    quote:'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
    source:'Robert Louis Stevenson',
    citation:'BrainyQuote.com',
    tag:'Literature'
  },
  {
    quote:'One of the most beautiful qualities of true friendship is to understand and to be understood.',
    source:'Lucius Annaeus Seneca',
    tag:'Philosopher'
  },
];


  //this function allows quotes to be randomly selected from the array
function getRandomQuote (array) {
  var randomQuote = array[ Math.floor(Math.random() * array.length)];
  return randomQuote;

}

/***
this function allows quotes to be passed as argument, while also allowing our html
string to be made. 'If' statement allows info. to be inserted if its present

***/
function printQuote () {
  var random = getRandomQuote(quotes);
  var message = "";
      message += '<p class= "quote">' + random.quote + '</p>'
      message += '<p class="source">' + random.source
      if (random.citation){
          message += '<span class= "citation">' + random.citation + '</span>';
      }
      if (random.year){
          message += '<span class= "year">' + random.year + '</span>';
      }
      if (random.tag){
          message += '<span class= "tag">, ' +  random.tag + '</span';
      } + '</p>'
  document.getElementById('quote-box').innerHTML = message;

  document.body.style.backgroundColor = rgbColorPicker();

}

//function created to generate random color for background, Treehouse(Refactor Challenge)
function randomNumber256() {
  return Math.floor(Math.random() * 256);
}

//finishes function right above to complete background color change, Treehouse(Refactor Challenge)
function rgbColorPicker() {
  return `rgb(${randomNumber256()},${randomNumber256()},${randomNumber256()})`;
}

function loadQuote(rgbColorPicker){


}


// this sets the quote to change every 4 seconds
setInterval(printQuote,4000);
/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
