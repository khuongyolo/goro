

function DisplayUserOption() {
    var userMenu = document.getElementById("user-menu-container");
    userMenu.style.display = "block";
}

// Đặt biến để lưu trữ trạng thái hiện tại của menu (đã mở hay đã đóng)
var isMenuOpen = false;

// Hàm để ẩn menu
function HideUserOption() {
    var userMenu = document.getElementById("user-menu-container");
    
    // Thêm event listener để ẩn menu sau khi animation hoàn thành
    userMenu.addEventListener('animationend', function() {
        userMenu.style.display = "none";
        userMenu.style.animation = ""; // Reset animation
        document.querySelector('body').style.overflow = ''; // Hiển thị lại thanh cuộn
        isMenuOpen = false; // Cập nhật trạng thái menu thành đã đóng
    }, { once: true });

    userMenu.style.animation = "MoveOutRight 0.5s"; // Áp dụng animation để đóng menu
}

// Hàm để kiểm tra sự kiện nhấp chuột ngoài menu và ẩn menu nếu cần
function ClickOutsideMenu(event) {
    var userMenu = document.getElementById("user-menu-container");
    var targetElement = event.target;

    if (isMenuOpen && !userMenu.contains(targetElement)) {
        // Nếu menu đang mở và người dùng nhấp ngoài menu
        HideUserOption(); // Ẩn menu
    }
}

// Thêm sự kiện lắng nghe để kiểm tra nhấp chuột ngoài menu
document.addEventListener('click', ClickOutsideMenu);


    // if (screenWidth <= 768) { // Điều kiện cho màn hình điện thoại (thay đổi số liệu tùy theo yêu cầu)
    //     userMenu.addEventListener('animationend', function() {
    //         userMenu.style.display = "none";
    //         userMenu.style.animation = ""; // Reset animation
    //         document.querySelector('body').style.overflow = ''; // Hiển thị lại thanh cuộn
    //     }, { once: true });

    //     userMenu.style.animation = "MoveOutRight 0.6s"; // Áp dụng animation khi kích thước là điện thoại
    // }





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

