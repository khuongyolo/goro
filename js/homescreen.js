// START Phan user button drop down menu
function DisplayUserOption() {
    var userMenu = document.getElementById("user-menu-container");
    var arrowIcon = document.getElementById("arrow-icon");
    userMenu.style.display = "block";
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


// An hien menu language trong navbar - start
//? This code is for animating details
//? of summary component and slightly modified
//? https://css-tricks.com/how-to-animate-the-
//? details-element-using-waapi/

class Accordion {
    constructor(el) {
      this.el = el;
      this.summary = el.querySelector("summary");
      this.content = el.querySelector(".language-content");
      this.expandIcon = this.summary.querySelector(".expand-icon");
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.summary.addEventListener("click", (e) => this.onClick(e));
    }


    onClick(e) {
      e.preventDefault();
      this.el.style.overflow = "hidden";
  
      if (this.isClosing || !this.el.open) {
        this.open();
      } else if (this.isExpanding || this.el.open) {
        this.shrink();
      }
    }
  
    shrink() {
      this.isClosing = true;
  
      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${this.summary.offsetHeight}px`;
  
      if (this.animation) {
        this.animation.cancel();
      }
  
      this.animation = this.el.animate(
        {
          height: [startHeight, endHeight],
        },
        {
          duration: 280,
          easing: "ease-out",
        }
      );
  
      this.animation.onfinish = () => {
        this.expandIcon.setAttribute("src", "assets/plus.svg");
        return this.onAnimationFinish(false);
      };
      this.animation.oncancel = () => {
        this.expandIcon.setAttribute("src", "assets/plus.svg");
        return (this.isClosing = false);
      };
    }
  
    open() {
      this.el.style.height = `${this.el.offsetHeight}px`;
      this.el.open = true;
      window.requestAnimationFrame(() => this.expand());
    }
  
    expand() {
      this.isExpanding = true;
  
      const startHeight = `${this.el.offsetHeight}px`;
      const endHeight = `${
        this.summary.offsetHeight + this.content.offsetHeight
      }px`;
  
      if (this.animation) {
        this.animation.cancel();
      }
  
      this.animation = this.el.animate(
        {
          height: [startHeight, endHeight],
        },
        {
          duration: 280,
          easing: "ease-out",
        }
      );
  
      this.animation.onfinish = () => {
        this.expandIcon.setAttribute("src", "assets/minus.svg");
        return this.onAnimationFinish(true);
      };
      this.animation.oncancel = () => {
        this.expandIcon.setAttribute("src", "assets/minus.svg");
        return (this.isExpanding = false);
      };
    }
  
    onAnimationFinish(open) {
      this.el.open = open;
      this.animation = null;
      this.isClosing = false;
      this.isExpanding = false;
      this.el.style.height = this.el.style.overflow = "";
    }
  }
  
  document.querySelectorAll("details").forEach((el) => {
    new Accordion(el);
  });

// An hien menu language trong navbar - end



// // START Phan button va dots cua advertisement 
// let list = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let dots = document.querySelectorAll('.slider .dots li');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');

// let active = 0;
// let lengItems = items.length - 1;

// next.onclick = function (){
//     if(active + 1 > lengItems){
//         active = 0;
//     }else{
//         active = active + 1;
//     }
//     reloadSlider();
// }

// prev.onclick = function(){
//     if(active -1 < 0){
//         active = lengItems;
//     }else{
//         active = active - 1;
//     }
//     reloadSlider();
// }

// let refreshSlider = setInterval(()=>{next.click()},5000);

// function reloadSlider (){
//     let checkLeft = items[active].offsetLeft;
//     list.style.left = -checkLeft + 'px';

//     let lastActiveDot = document.querySelector('.slider .dots li.active');
//     lastActiveDot.classList.remove('active');
//     dots[active].classList.add('active');
//     clearInterval(refreshSlider);
//     refreshSlider = setInterval(()=> {next.click()},5000)
// } 
  
// dots.forEach((li, key) => {
//     li.addEventListener('click', function() {
//         active = key;
//         reloadSlider();
//     });
// });

// // Hàm xử lý thanh cuộn category (KHONG SU DUNG NUA)

// const tabs = document.querySelectorAll(".category-slider ul li a");
// const rightArrow = document.querySelector(".category-slider .right-arrow svg");
// const leftArrow = document.querySelector(".category-slider .left-arrow svg");
// const tabsList = document.querySelector(".category-slider ul");
// const leftArrowContainer = document.querySelector(".category-slider .left-arrow");
// const rightArrowContainer = document.querySelector(".category-slider .right-arrow");


// const removeAllActiveClasses = () => {
//     tabs.forEach(tab => {
//         tab.classList.remove("category-active");
//     })
// }

// tabs.forEach(tab => {
//     tab.addEventListener("click",() => {
//         removeAllActiveClasses();
//         tab.classList.add("category-active");
//     })
// });

// const manageIcons = () => {
//     if (tabsList.scrollLeft >= 20){
//         leftArrowContainer.classList.add("category-active");
//     } else{
//         leftArrowContainer.classList.remove("category-active");
//     }

//     let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;

//     if(tabsList.scrollLeft >= maxScrollValue) {
//         rightArrowContainer.classList.remove("category-active");
//     } else {
//         rightArrowContainer.classList.add("category-active")
//     }
// }

// const shiftValue = window.innerWidth < 1025 ? 760 : 650; 
// // < 1025px, 760: ipad, 650: PC 
// rightArrow.addEventListener("click",() => {
//     tabsList.scrollLeft += shiftValue;
//     manageIcons();
// });

// leftArrow.addEventListener("click",() => {
//     tabsList.scrollLeft -= shiftValue;
//     manageIcons();
// });

// tabsList.addEventListener("scroll", manageIcons);



// // Hàm xử lý thanh cuộn store (KHONG SU DUNG NUA)

// const tabs2 = document.querySelectorAll(".store-slider ul li a");
// const rightArrow2 = document.querySelector(".store-right-arrow svg");
// const leftArrow2 = document.querySelector(".store-left-arrow svg");
// const tabsList2 = document.querySelector(".store-slider ul");
// const leftArrowContainer2 = document.querySelector(".store-left-arrow");
// const rightArrowContainer2 = document.querySelector(".store-right-arrow");


// const removeAllActiveClasses2 = () => {
//     tabs2.forEach(tab => {
//         tab.classList.remove("store-active");
//     })
// }

// tabs2.forEach(tab => {
//     tab.addEventListener("click",() => {
//         removeAllActiveClasses();
//         tab.classList.add("store-active");
//     })
// });

// const manageIcons2 = () => {
//     if (tabsList2.scrollLeft >=20){
//         leftArrowContainer2.classList.add("store-active");
//     } else{
//         leftArrowContainer2.classList.remove("store-active");
//     }

//     let maxScrollValue = tabsList2.scrollWidth - tabsList2.clientWidth -20;
//     console.log("scroll width: ", tabsList2.scrollWidth);
//     console.log("client width: ", tabsList2.clientWidth);

// }

// rightArrow2.addEventListener("click",() => {
//     tabsList2.scrollLeft += 600;
//     manageIcons()
// })

// leftArrow2.addEventListener("click",() => {
//     tabsList2.scrollLeft -= 600;
//     manageIcons()
// })

// tabsList2.addEventListener("scroll", manageIcons);





// // Hàm xử lý sự kiện vuốt trên điện thoại (KHONG SU DUNG NUA)
// function handleTouchDrag() {
//     let isDragging = false;
//     let startX, endX;
//     let initialLeft;

//     list.addEventListener('touchstart', (e) => {
//         isDragging = true;
//         startX = e.touches[0].pageX - list.offsetLeft;
//         initialLeft = list.offsetLeft;
//     });

//     list.addEventListener('touchmove', (e) => {
//         if (!isDragging) return;
//         e.preventDefault();

//         endX = e.touches[0].pageX - list.offsetLeft;
//         const move = endX - startX;
//         list.style.left = `${initialLeft + move}px`;
//     });

//     list.addEventListener('touchend', () => {
//         isDragging = false;
//         const move = endX - startX;
//         if (move < -50) {
//             next.click();
//         } else if (move > 50) {
//             prev.click();
//         } else {
//             reloadSlider();
//         }
//     });
// }

// // Sử dụng hàm handleTouchDrag() cho sự kiện vuốt trên điện thoại
// handleTouchDrag();

// WEATHER PART

let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');
let main = document.querySelector('main-wth-widget');

form.addEventListener('submit', (event) => {
 event.preventDefault(); // Ngăn chặn hành vi mặc định của biểu mẫu
    if (valueSearch.value !== '') {
        searchWeather();
    }
})

let id = '9505fd1df737e20152fbd78cdb289b6a'; // Thay YOUR_API_KEY bằng API key của bạn
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.cod == 200) {
                city.querySelector("figcaption").innerText = data.name;
                city.querySelector('img').src = 'https://flagsapi.com/'+data.sys.country+'/shiny/32.png';

                temperature.querySelector('img').src='http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
                temperature.querySelector('figcaption span').innerText = data.main.temp;
                description.innerText = data.weather[0].description;
                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure;
            }else{
                alert('Your search may have some problems or name of the city does not exist');
                setTimeout(() => {
                    main.classList.remove('error');
                },1000);
            }

        })
}
const initApp1 = () => {
    valueSearch.value = 'Koshigaya';
    searchWeather();
}

initApp1();

// PHAN CART

let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');
let HideCart = document.querySelector('.close-cart-icon');
let CloseCart = document.querySelector('.close');
let listProductHTML = document.querySelector('.product-container');

let listProducts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

HideCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

CloseCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
