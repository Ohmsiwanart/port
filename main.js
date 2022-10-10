window.onload = pageLoad;

function pageLoad(){
    var click = document.getElementById("pj");
    var A4 = document.getElementById("a4");
    var A5 = document.getElementById("a5");
	var A6 = document.getElementById("a6");
    var A7 = document.getElementById("a7");
    var face = document.getElementById("fb");
    var ins = document.getElementById("ig");
    var steam = document.getElementById("steam");
    click.onclick = next;
    A4.onclick = link4;
    A5.onclick = link5;
    A6.onclick = link6;
	A7.onclick = link7;
    face.onclick = linkfacebook;
    ins.onclick = linkinstagram;
    steam.onclick = linkfacebook;
}

function next(){
    location.href ="project.html";
}
function link4(){
    location.href ="https://ohmsiwanart.github.io/assignment4/recipe.html";
}
function link5(){
    location.href ="https://ohmsiwanart.github.io/assignment5/";
}
function link6(){
    location.href ="https://ohmsiwanart.github.io/html-a/register.html";
}
function link7(){
    location.href ="https://ohmsiwanart.github.io/assignment7/";
}

function linkfacebook(){
    location.href ="https://www.facebook.com/Ohmsiwanart/";
}
function linkinstagram(){
    location.href ="https://www.instagram.com/ohmsi__/";
}
function linksteam(){
    location.href ="https://steamcommunity.com/id/ohmsi/";
}




