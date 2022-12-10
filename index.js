//index.html scripts
//functions for "save for later buttons"
const photo = document.getElementById("main-photo").src;
const article = document.getElementById("main-article").textContent;
function save() {
    localStorage.setItem('main-photo', photo);
    
    alert("Number of items saved for later: " + localStorage.length);
};

function save2() {
    localStorage.setItem('main-article', article);
   
    alert("Number of items saved for later: " + localStorage.length);
};

//event Listener for a comment section and adding comments as an li object of ul.
const submit = document.getElementById("submit");
const comment = document.getElementById('comment');

submit.addEventListener('click', function(e) {
    
    const commentValue = comment.value;

    const li = document.createElement("li");
    const br = document.createElement("br");
    const text = document.createTextNode(commentValue);
    li.appendChild(text);
    document.getElementById("comments").appendChild(li);
    document.getElementById("comments").appendChild(br);

    
});