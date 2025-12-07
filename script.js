let words = [
    "مطور متكامل",
    "مطور واجهات أمامية",
    "مطور واجهات خلفية"
];

let i = 0;

function changeText() {
    document.getElementById("changing-text").textContent = words[i];
    i = (i + 1) % words.length;
}

setInterval(changeText, 2000);
changeText();




