const colors= ["green","red","aliceblue","maroon","purple","silver","lime","olive","teal","bisque","coral","linen","plum","tan","peru"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
//get random number between 0-3 (since array have 4 values)

    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}


























