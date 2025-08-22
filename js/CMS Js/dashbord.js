let sidebarControler = document.querySelector('.side-list-control-bar');
let dashbord = document.querySelector('.aside-dashbord .logo h1');
let smallSidebarControl = document.querySelector('.aside-dashbord');

let mainAreaDashbord = document.querySelector('.main-area-dashbord');
let CrossButton = document.querySelector('.close-btn-dashbord');


let navBarShowAndHidden = function(){
    if(window.screen.width >= "1001"){
        smallSidebarControl.classList.toggle('small-sidebar-control');
        dashbord.classList.toggle('small-logo-dashbord');
    }else{
        smallSidebarControl.classList.toggle('dashbord-w-100');
        smallSidebarControl.classList.toggle('dashbord-content-w-50');
    }
}

sidebarControler.onclick = navBarShowAndHidden;
CrossButton.onclick = navBarShowAndHidden;


let dateFunction = function(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    // Set default value to current date
    let dataInput = document.querySelectorAll(".date-input-dashbord");
    dataInput.forEach((data) => {
        data.value = today;
    });
}
dateFunction();




