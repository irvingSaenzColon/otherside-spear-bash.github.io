// HTML Elements
const burgerButton = document.getElementById('burger-button');
const wrapper = document.getElementById('wrapper');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOptions = document.querySelectorAll('section#mobile-menu>ul>li>a');

console.log(mobileOptions);

// Event Listener
window.addEventListener('load', onLoad);
burgerButton.addEventListener('click', onOpenMobileMenu);

// Load Function
function onLoad(event){
    [...mobileOptions].forEach(function(option){
        option.addEventListener('click', onClickMobileMenu);
    });
}

// Click Functions
function onOpenMobileMenu(event){
    const button = event.target.closest('button');

    if(wrapper.classList.contains('inactive')){
        wrapperShow()
        .then(function(){
            mobilMenuShow();
        });
    }else{
        mobilMenuHide()
        .then(function(){
            wrapperHide();
        });
        
    }
}

function onClickMobileMenu(event){
    if(wrapper.classList.contains('inactive')){
        wrapperShow()
        .then(function(){
            mobilMenuShow();
        });
    }else{
        mobilMenuHide()
        .then(function(){
            wrapperHide();
        });
        
    }
}

// Animations function
function wrapperShow(){
    return new Promise(function(resolve, reject){
        if(wrapper.classList.contains('inactive'))
            wrapper.classList.remove('inactive')

        wrapper.classList.add('wrapper--fade-in')
        setTimeout(function(){
            wrapper.classList.remove('wrapper--fade-in');
            resolve(true);
        }, 250);
    });
}

function wrapperHide(){
    return new Promise(function(resolve, reject){
        wrapper.classList.add('wrapper--fade-out');
        setTimeout(function(){
            wrapper.classList.remove('wrapper--fade-out')
            wrapper.classList.add('inactive');
            resolve(true);
        }, 250);
    });
}

function mobilMenuShow(){
    return new Promise(function(resolve, reject){
        if(mobileMenu.classList.contains('inactive'))
            mobileMenu.classList.remove('inactive');

        mobileMenu.classList.add('wrapper__aside--in');

        setTimeout(function(){
            mobileMenu.classList.remove('wrapper__aside--in')
            resolve(true);
        }, 250);
    });
}

function mobilMenuHide(){
    return new Promise(function(resolve, reject){
        
        mobileMenu.classList.add('wrapper__aside--out');
        setTimeout(function(){
            mobileMenu.classList.add('inactive')
            mobileMenu.classList.remove('wrapper__aside--out')
            resolve(true);
        }, 250);
    });
}