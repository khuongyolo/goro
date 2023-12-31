

function DisplayUserOption() {
    var userMenu = document.getElementById("user-menu-container");
    userMenu.style.display = "block";
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

