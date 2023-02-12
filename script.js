let menuIcon = document.querySelector(".nav-btns strong");
let closeMenuIcon = document.querySelector(".menus-sm-header p");
// console.log(menuIcon);

function menusPopUp(val) {
    // menus-sm-header
    const smallScreenMenus = document.querySelector(".menus-for-small-screeen");
    smallScreenMenus.style = `transform: translateX(${val})`
}

menuIcon.onclick = function () {
    menusPopUp('0%')
    window.onscroll = function (e) {
        // alert("hii")
        // console.log(e.currentTarget);
        // console.log(e.currentTarget.scrollY == 0);
        // if (e.currentTarget.scrollY == 0) {
        //     return "";

        // }
    }
}
closeMenuIcon.onclick = function () {
    menusPopUp('100%')
}


AOS.init();