const click= document.querySelector(".click");
const clicked= document.querySelector(".clicked");
click.addEventListener("click" , () => {
    clicked.innerText= "clicked";
});