
function nextPage(number) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + number).classList.add("active");
}

const music = document.getElementById("music");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("span");

    heart.className = "heart";
    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
}

setInterval(createHeart, 500);

function showPhoto(number) {

    const picture = document.getElementById("pic" + number);

    const photoBox = picture.parentElement;

    if (photoBox.classList.contains("show")) {
        photoBox.classList.remove("show");
    } else {
        photoBox.classList.add("show");
    }

}
