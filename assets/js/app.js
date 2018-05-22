window.onload = function () {    
    var btn = document.getElementById("botton-change");
    var txt = document.getElementById("paragraph");
    var btn2 = document.getElementById("magic");
    var txt2 = document.getElementById("text");

    btn.addEventListener("click", function() {
        txt.innerHTML = "<h2>Git y Github TE AMAMOS</h2>";
    //txt2.innerHTML = " ";
    txt2.classList.add("disappear");
    })
    btn2.addEventListener("click", function () {

    })
}