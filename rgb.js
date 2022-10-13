const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let rgbColor = "rgb(";
    for (let i = 0; i < 3; i++) {
        if (i === 2) {
            rgbColor += Math.floor(Math.random() * 256) + ")";
        } else {
            rgbColor += Math.floor(Math.random() * 256) + ",";
        }
    }
    document.body.style.backgroundColor = rgbColor;
    color.textContent = rgbColor;
})