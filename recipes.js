//recipes.html scripts
//getting items by ID to local storage so they can be displayed on the other webpage
const photoBanana = document.getElementById("photo-banana1").src;
const photoBanana1 = document.getElementById("photo-banana2").src;
const photoPumpkin = document.getElementById("photo-pumpkin1").src;
const photoPumpkin1 = document.getElementById("photo-pumpkin2").src;
const articleBanana = document.getElementById("article-banana").textContent;
const articlePumpkin = document.getElementById("article-pumpkin").textContent;

function save3() {
    localStorage.setItem('photo-banana1', photoBanana);
    
    alert("Number of items saved for later: " + localStorage.length);
};
function save4() {
    localStorage.setItem('photo-banana2', photoBanana1);

    alert("Number of items saved for later: " + localStorage.length);
};
function save5() {
    localStorage.setItem('photo-pumpkin1', photoPumpkin);
    
    alert("Number of items saved for later: " + localStorage.length);
};
function save6() {
    localStorage.setItem('photo-pumpkin2', photoPumpkin1);

    alert("Number of items saved for later: " + localStorage.length);
}; 
function save7() {
    localStorage.setItem('article-banana', articleBanana);
    
    alert("Number of items saved for later: " + localStorage.length);
};
function save8() {
    localStorage.setItem('article-pumpkin', articlePumpkin);

    alert("Number of items saved for later: " + localStorage.length);
} ;    
//Like button function that just changed styling after clicking

function button() {
    document.getElementById('like').style.backgroundColor = "red";
    document.getElementById('like').style.border = "none";
    document.getElementById('like').style.borderRadius = "5px";
    document.getElementById('like').style.padding = "15px";
};
function button1() {
    document.getElementById('like1').style.backgroundColor = "red";
    document.getElementById('like1').style.border = "none";
    document.getElementById('like1').style.borderRadius = "5px";
    document.getElementById('like1').style.padding = "15px";
};