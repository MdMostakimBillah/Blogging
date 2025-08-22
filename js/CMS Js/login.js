let iconbutton = document.querySelector('.visiton-icon');
let passwordLogin = document.querySelector('[type="password"]');

let darkMode = document.querySelector('.darkMode');
let bgDark = document.querySelector('.bgDark');
let body = document.querySelector('body');

// password show and hide 
iconbutton.onclick = () =>{

    if(passwordLogin.type === 'password'){
        passwordLogin.type = 'text';
        iconbutton.querySelector('i').style.color = "gray";
    }else{
        passwordLogin.type = 'password';
        iconbutton.querySelector('i').style.color = "#181818";
    }
}

// dark mode 
darkMode.addEventListener('click', () => {
    bgDark.classList.toggle('darkmodeStart');
    body.classList.toggle('dark-theme');
    if(body.classList.contains('dark-theme')){
        document.querySelector('.logo h1 a').style.color = "#ffffff";
    }else{
        document.querySelector('.logo h1 a').style.color = "#000000";
    }
})