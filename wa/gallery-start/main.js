const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

function makeBig(){
    console.log(newImage.src);
}

/* Declaring the array of image filenames */
const pics = ["./images/pic1.png", "./images/pic2.png", "./images/pic3.png", "./images/pic4.png", "./images/pic5.png"];
/* Declaring the alternative text for each image file */
const alts = ["picture of me and arlo", "beach sunrise", "me sunrise", "hotel in punta cana", "me and maddie"];
/* Looping through images */
for(let i = 0; i<5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", ()=>{
        displayedImage.setAttribute('src', pics[i]);
        displayedImage.setAttribute('alt', alts[i]);
    })
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', ()=>{
const button = btn.getAttribute("class");
if(button == "dark"){
    btn.setAttribute("class","light");
    BigInt.textContent = "lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
} else{
    btn.setAttribute("class", "dark");
    btn.textContent = "darken"
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
}
})

