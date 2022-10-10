window.onload = pageLoad;

function pageLoad(){
    var gb = document.getElementById("b_pj");
    gb.onclick = back;
}
function back(){
    location.href ="index.html";
}