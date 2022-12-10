//getting all the saved elements and storing them on the website

//for photos I have stored .src attribute of the photo and set them on the webpage saveforlater.html
const photo0 = localStorage.getItem("main-photo");
document.getElementById('photo1').setAttribute("src", photo0);

const article1 = localStorage.getItem("main-article");
document.getElementById('main-article').innerHTML = article1;

const photo1 = localStorage.getItem("photo-banana1");
document.getElementById('photo2').setAttribute("src", photo1);

const photo2 = localStorage.getItem("photo-banana2");
document.getElementById('photo3').setAttribute("src", photo2);

const photo3 = localStorage.getItem("photo-pumpkin1");
document.getElementById('photo4').setAttribute("src", photo3);

const photo4 = localStorage.getItem("photo-pumpkin2");
document.getElementById('photo5').setAttribute("src", photo4);;

const article2 = localStorage.getItem("article-banana");
document.getElementById('article-banana').innerHTML = article2;

const article3 = localStorage.getItem("article-pumpkin");
document.getElementById('article-pumpkin').innerHTML = article3;