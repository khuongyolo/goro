// START Phan user button drop down menu
function DisplayUserOption() {
    var userMenu = document.getElementById("user-menu-container");
    var languageMenu = document.getElementById("language");
    var arrowIcon = document.getElementById("arrow-icon");

    userMenu.style.display = "block";
    languageMenu.style.display = "none";
    arrowIcon.innerHTML = "&#9660;"
}


// Hàm để ẩn menu
function HideUserOption() {
    var userMenu = document.getElementById("user-menu-container");
    
    // Thêm event listener để ẩn menu sau khi animation hoàn thành
    userMenu.addEventListener('animationend', function() {
        userMenu.style.display = "none";
        userMenu.style.animation = ""; // Reset animation
        document.querySelector('body').style.overflow = ''; // Hiển thị lại thanh cuộn
    }, { once: true });

    userMenu.style.animation = "MoveOutScale 0.3s"; // Áp dụng animation để đóng menu

    var screenWidth = window.innerWidth;

    if (screenWidth <= 768) { // Điều kiện cho màn hình điện thoại (thay đổi số liệu tùy theo yêu cầu)
        userMenu.addEventListener('animationend', function() {
            userMenu.style.display = "none";
            userMenu.style.animation = ""; // Reset animation
            document.querySelector('body').style.overflow = ''; // Hiển thị lại thanh cuộn
        }, { once: true });

        userMenu.style.animation = "MoveOutRight 0.6s"; // Áp dụng animation khi kích thước là điện thoại
    }
}

function DisplayLanguageOption() {
    var languageMenu = document.getElementById("language");
    var arrowIcon = document.getElementById("arrow-icon");

    var languageMenuDisplay = window.getComputedStyle(languageMenu).getPropertyValue("display");

    if (languageMenuDisplay === "block") {
        languageMenu.style.display = "none";
        arrowIcon.innerHTML = "&#9660;"; // Mũi tên xuống khi ẩn menu
    } else {
        languageMenu.style.display = "block";
        arrowIcon.innerHTML = "&#9650;"; // Mũi tên lên khi hiển thị menu
    }
}

// END Phan user button drop down menu



// START Phan button va dots cua advertisement 
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengItems = items.length - 1;

next.onclick = function (){
    if(active + 1 > lengItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active -1 < 0){
        active = lengItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(()=>{next.click()},5000);

function reloadSlider (){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()},5000)
} 
  
dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadSlider();
    });
});

// Hàm xử lý thanh cuộn category (KHONG SU DUNG NUA)

const tabs = document.querySelectorAll(".category-slider ul li a");
const rightArrow = document.querySelector(".category-slider .right-arrow svg");
const leftArrow = document.querySelector(".category-slider .left-arrow svg");
const tabsList = document.querySelector(".category-slider ul");
const leftArrowContainer = document.querySelector(".category-slider .left-arrow");
const rightArrowContainer = document.querySelector(".category-slider .right-arrow");


const removeAllActiveClasses = () => {
    tabs.forEach(tab => {
        tab.classList.remove("category-active");
    })
}

tabs.forEach(tab => {
    tab.addEventListener("click",() => {
        removeAllActiveClasses();
        tab.classList.add("category-active");
    })
});

const manageIcons = () => {
    if (tabsList.scrollLeft >= 20){
        leftArrowContainer.classList.add("category-active");
    } else{
        leftArrowContainer.classList.remove("category-active");
    }

    let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;

    if(tabsList.scrollLeft >= maxScrollValue) {
        rightArrowContainer.classList.remove("category-active");
    } else {
        rightArrowContainer.classList.add("category-active")
    }
}

const shiftValue = window.innerWidth < 1025 ? 760 : 650; 
// < 1025px, 760: ipad, 650: PC 
rightArrow.addEventListener("click",() => {
    tabsList.scrollLeft += shiftValue;
    manageIcons();
});

leftArrow.addEventListener("click",() => {
    tabsList.scrollLeft -= shiftValue;
    manageIcons();
});

tabsList.addEventListener("scroll", manageIcons);



// Hàm xử lý thanh cuộn store (KHONG SU DUNG NUA)

const tabs2 = document.querySelectorAll(".store-slider ul li a");
const rightArrow2 = document.querySelector(".store-right-arrow svg");
const leftArrow2 = document.querySelector(".store-left-arrow svg");
const tabsList2 = document.querySelector(".store-slider ul");
const leftArrowContainer2 = document.querySelector(".store-left-arrow");
const rightArrowContainer2 = document.querySelector(".store-right-arrow");


const removeAllActiveClasses2 = () => {
    tabs2.forEach(tab => {
        tab.classList.remove("store-active");
    })
}

tabs2.forEach(tab => {
    tab.addEventListener("click",() => {
        removeAllActiveClasses();
        tab.classList.add("store-active");
    })
});

const manageIcons2 = () => {
    if (tabsList2.scrollLeft >=20){
        leftArrowContainer2.classList.add("store-active");
    } else{
        leftArrowContainer2.classList.remove("store-active");
    }

    let maxScrollValue = tabsList2.scrollWidth - tabsList2.clientWidth -20;
    console.log("scroll width: ", tabsList2.scrollWidth);
    console.log("client width: ", tabsList2.clientWidth);

}

rightArrow2.addEventListener("click",() => {
    tabsList2.scrollLeft += 600;
    manageIcons()
})

leftArrow2.addEventListener("click",() => {
    tabsList2.scrollLeft -= 600;
    manageIcons()
})

tabsList2.addEventListener("scroll", manageIcons);





// Hàm xử lý sự kiện vuốt trên điện thoại
function handleTouchDrag() {
    let isDragging = false;
    let startX, endX;
    let initialLeft;

    list.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - list.offsetLeft;
        initialLeft = list.offsetLeft;
    });

    list.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();

        endX = e.touches[0].pageX - list.offsetLeft;
        const move = endX - startX;
        list.style.left = `${initialLeft + move}px`;
    });

    list.addEventListener('touchend', () => {
        isDragging = false;
        const move = endX - startX;
        if (move < -50) {
            next.click();
        } else if (move > 50) {
            prev.click();
        } else {
            reloadSlider();
        }
    });
}

// Sử dụng hàm handleTouchDrag() cho sự kiện vuốt trên điện thoại
handleTouchDrag();




