let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

//按按鈕之後的變化

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


// 購物頁面
// 加號
var x = 0
var y = 0
function plus(){
 x += 1;
 y = x;
 document.getElementById("quantity").innerText= parseInt(y);
}
//減號
function minus(){
 x -= 1;
 y = x;
 document.getElementById("quantity").innerText= parseInt(y);
}





