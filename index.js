const bg = [
    "rgb(10, 0, 33)",
    "rgb(255, 255, 255)"
];

function toggleBg() {
    if (document.body.style.backgroundColor = bg[0]) {
            document.body.style.backgroundColor = bg[1]
    }
    else {
        document.body.style.backgroundColor = bg[0]
    };
    
    
};

document.getElementById('btn').addEventListener("click", alert(bg[0]));