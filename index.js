/*
function toggleBg() {
    if (document.body.style.backgroundColor = "rgb(255, 255, 255)") {
            document.body.style.backgroundColor = "rgb(10, 0, 33)"
    }
    else {
        document.body.style.backgroundColor = "rgb(10, 0, 33)"
    };
};

document.getElementById('btn').addEventListener("click", () =>toggleBg());
*/

//More cheaper code... 😎🙂🥱😏
let background = document.querySelector('body'),
btn = document.querySelector('#btn');

btn.addEventListener('click', ()=> background.classList.toggle('dark-bg'));