'use strict';
const btnReload = document.querySelector('.reload-button i');
const quoteText = document.querySelector('.text');

function randomQuote() {
  fetch('https://random-quotes-freeapi.vercel.app/api/random')
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerText = result.quote;
    });
}

btnReload.addEventListener('click', randomQuote);
