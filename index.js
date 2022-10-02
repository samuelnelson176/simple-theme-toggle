function toggleBg() {
    if (document.body.style.backgroundColor = "rgb(255, 255, 255)") {
            document.body.style.backgroundColor = "rgb(10, 0, 33)"
    }
    else {
        document.body.style.backgroundColor = "rgb(10, 0, 33)"
    };
};

document.getElementById('btn').addEventListener("click", () =>toggleBg());
