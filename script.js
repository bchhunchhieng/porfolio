//DOM Element

const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const feedsPage = document.querySelector('.feeds-page');
const btnTop = document.querySelector('.btn-top');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFomrBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const wrapperDisplay = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
//******************************************************** */
//******************************************************** */

const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
}


middleContent.addEventListener('click', e => {
    if (e.target.classList[1] === 'main-btn') {
        goToLoginPage();
    }

})

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.user-password');

    if ((inputUserInfo.value !== '') && (inputPassword.value !== '')) {
        mainPage.style.display = 'none';
        feedsPage.style.display = 'block';
    } else {
        goToLoginPage();
        loginModal.style.display = 'block';
    }
})

//login page
modalX.addEventListener('click', () => {
    // modalX.style.display = 'none';
    loginModal.style.display = 'none';
})

loginFomrBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-info');
    const loginUserPassword = document.querySelector('.login-password');

    if (loginUserInfo.value !== '' && loginUserPassword.value !== '') {
        loginPage.style.display = 'none';
        feedsPage.style.display = 'block';
    } else {
        loginModal.style.display = 'block';
    }

})

// News feed page
//Post modal

postBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalWrapper.classList.add('wrapper-display');
})

const changOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
}

postModalX.addEventListener('click', () => {
    modal.style.display = 'none';
    modalWrapper.classList.remove('wrapper-display');

    if (modalInput.value !== '') {
        modalInput.value = '';
        changOpacity(.5);
    }
})

modalInput.addEventListener('keypress', (e) => {
    if (e.target.value !== "") {
        changOpacity(1);
    }
})

modalInput.addEventListener('blur', (e) => {
    if (e.target.value === '') {
        changOpacity(.5);
    }
})

//sidebar
user.addEventListener('click', () => {
    // when user click, it will move back of side bar that we hide it to the right, and let it move back to its position or the left with 30rem again, to do that we have to create a new css class called sidebar-display in call it in this arrow function
    sidebar.classList.add('sidebar-display');
    wrapperDisplay.classList.add('sidebarWrapperDisplay');
})

xBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    wrapperDisplay.classList.remove('sidebarWrapperDisplay');
})

//dark mode
const darkElement1 = document.querySelectorAll('.dark-mode-1'); //when we use querySelectorAll it mean that it select all the class or multiple nodes in DOM element of HTML so, when we call for it in js we need to make an array to store it
const darkElement2 = document.querySelectorAll('.dark-mode-2');
const lightText = document.querySelectorAll('.light-text');
const border = document.querySelectorAll('.border');


toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    // now we transform nodes list of querySelectorAll above to an array
    Array.from(darkElement1).map((darkEl1) => darkEl1.classList.toggle('dark-1'));
    /*darkElement1 represent first item in array above*/
    // we could use for loop to change all the array here to dark background, but for conviniences to work with array in js we use (map) instead
    Array.from(darkElement2).map(darkEl2 => darkEl2.classList.toggle('dark-2'));
    Array.from(lightText).map(lightText => lightText.classList.toggle('light'));
    Array.from(border).map(border => border.classList.toggle('border-color'));
})


//end of dark mode