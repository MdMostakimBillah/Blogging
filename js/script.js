let nav = document.querySelector('nav');
let logoColor = document.querySelector(".logo h1 a span");
let searchInput = document.querySelector(".searchOption form input");
let searchIcon = document.querySelector("nav .nav-Wraper .searchOption i");
// let mainWidth = document.querySelector('.main-wight');


let darkMode = document.querySelector('.darkMode');
let bgDark = document.querySelector('.bgDark');
let body = document.querySelector('body');


// sticky navbar script 
window.onscroll = () =>{

    let whiteColorLogo = document.getElementById('logo');

    // sticky navbar color function here 
    let stickyNavbar = function(){
        nav.classList.add('stickyNavBar');
        logoColor.style.color = "#4B9E37";
        searchInput.style.border = 1 + "px solid #d1d1d1";
        nav.style.boxShadow = "0px -1px 5px #0000002e";
        searchIcon.style.backgroundColor = "#4B9E37";
    }

    // sticky remove navbar color function here
    let stickyRemove = function(){
        nav.classList.remove('stickyNavBar');
        logoColor.style.color = "#ffffff";
        searchInput.style.border = "none";
        nav.style.boxShadow = "none";
        searchIcon.style.backgroundColor = "#3f7e44";
    }

    // dark theme condition 
    if(window.pageYOffset <= 0){
        whiteColorLogo.style.color = "#000000";
        document.querySelector('.searchOption form input').style.backgroundColor = "#ffffff";
    }

    // natigation sticky 
    if(window.pageYOffset > 350){
        // dark theme condition 
        if(body.classList.contains('dark-theme')){
            whiteColorLogo.style.color = "#ffffff";
        }
        stickyNavbar();
        
    }else if(window.pageYOffset <= 0){
        stickyRemove();
    }

    // small screen nav bar 
    if(window.screen.width <= "676"){
        if(window.pageYOffset > 10){
            stickyNavbar();
            if(body.classList.contains('dark-theme')){
                whiteColorLogo.style.color = "#ffffff";
            }
        }
    }
}

// let body = document.body;
// let lastScroll = 0;
// window.onscroll = () => {
//     let currentScroll = window.pageYOffset;

//     if(currentScroll >= lastScroll || currentScroll == 0){
//         nav.classList.remove('stickyNavBar');
//         logoColor.style.color = "#ffffff";
//         searchInput.style.border = "none";
//         nav.style.boxShadow = "none";
//         searchIcon.style.backgroundColor = "#3f7e44";
//     }else{
//         nav.classList.add('stickyNavBar');
//         logoColor.style.color = "#4B9E37";
//         searchInput.style.border = 1 + "px solid #d1d1d1";
//         nav.style.boxShadow = "0px -1px 5px #0000002e";
//         searchIcon.style.backgroundColor = "#4B9E37";
//     }

//     lastScroll = currentScroll;
// }




// darkmode script 

darkMode.addEventListener('click', () => {
    bgDark.classList.toggle('darkmodeStart');
    body.classList.toggle('dark-theme');

    let logo = document.getElementById('logo');
    let darkmodeInput = document.querySelector('.searchOption form input');
    if(body.classList.contains('dark-theme')){ 
        //if darkmode on
        darkmodeInput.style.backgroundColor = "#ffffff";

        if(nav.classList.contains('stickyNavBar')){ 
            //if darkmode on && navbar sticky
            logo.style.color = "#ffffff";
        }
    }else if(nav.classList.contains('stickyNavBar')){ 
        //if only navbar sticky but lighmode
        logo.style.color = "#000000";
    }else{ //other wise
        logo.style.color = "#000000";
        document.querySelector('#logo span').style.color = "#ffffff";
    }

    //all p font weight operation
    let viewPagePtag = document.querySelectorAll('.contentBlogging p');
    let viewPageLi = document.querySelectorAll('.contentBlogging li');
    if(body.classList.contains('dark-theme')){
        //when theme become dark all p tags weight ligh
        viewPagePtag.forEach((tag)=>{
            tag.style.fontWeight = "400";
        });
        viewPageLi.forEach((tag)=>{
            tag.style.fontWeight = "400";
        });
    }else{ 
        //when theme become dark all p tags weight some bold
        viewPagePtag.forEach((tag)=>{
            tag.style.fontWeight = "500";
        });
        viewPageLi.forEach((tag)=>{
            tag.style.fontWeight = "500";
        });
    }
})

