
callall();

function callall(){
    sizemain("headercontent",0);
    text("headertitlespan",0.1);
    mobileheader();
    sizemain("content",4);
}

window.onresize = callall;

function sizemain(id,padding){
    var x = document.getElementById(id);
    if((window.screen.width / window.screen.height)>=(11/9)){
        x.style.width = ((window.screen.height/9)*11) + "px";
    }
    else{
        x.style.width = (100-padding) + "vw";
    }
}

function textresize (fontwidth,fontheight,element) {
    var x = document.getElementsByClassName(element);
    if(document.documentElement.clientWidth > document.documentElement.clientHeight){

        for (var i = 0; i < x.length; i++) {
            var y = x[i];
            y.style.fontSize = fontwidth;
        }
    }
    else{

        for (var i = 0; i < x.length; i++) {
            var y = x[i];
            y.style.fontSize = fontheight;
        }
    }
}

function text (id,add) {
    var x = document.getElementById(id);
    var y = x.parentElement;
    x.style.fontSize = "1vh";
    var z = 0;
    while(x.offsetHeight < y.offsetHeight){
        z = z + add;
        x.style.fontSize = z + "em";
        console.log("test");
    }
}

function mobileheader () {
    if((document.documentElement.clientWidth / document.documentElement.clientHeight)<(4/3)){
        console.log("mobile");
        document.getElementById("mobileheader").style.display = "inline-block";
        document.getElementById("headermenu").style.display = "none";
        document.getElementById("leftheader").style.width = "100%";
        document.getElementById("rightheader").style.width = "100%";       
        document.getElementById("leftheader").style.height = "13vh";
        document.getElementById("rightheader").style.height = "13vh";   
        document.getElementById("logo").style.height = "12vh";
        document.getElementById("logo").style.width = "auto"; 
        document.getElementById("logo").style.paddingTop = "0";
        document.getElementById("homeimage").style.width = "99%";
        document.getElementById("homeimage").style.marginRight = "0";
        document.getElementById("homecontent").style.width = "92%";
    }
    else{
        console.log("not");
        document.getElementById("mobileheader").style.display = "none";
        document.getElementById("headermenu").style.display = "inline-block";  
        document.getElementById("leftheader").style.width = "33%";
        document.getElementById("rightheader").style.width = "67%";       
        document.getElementById("leftheader").style.height = "100%";
        document.getElementById("rightheader").style.height = "100%";         
        document.getElementById("logo").style.height = "auto";
        document.getElementById("logo").style.width = "80%";
        document.getElementById("logo").style.paddingTop = "2vh";
        document.getElementById("homeimage").style.width = "37%";
        document.getElementById("homeimage").style.marginRight = "-2%";
        document.getElementById("homecontent").style.width = "55%";
    }
}

