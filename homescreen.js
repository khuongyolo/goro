// Trạng thái ban đầu: ẩn thanh cuộn
document.querySelector('body').style.overflow = 'hidden';

function DisplayUserOption() {
    var userMenu = document.getElementById("user-menu-container");
    userMenu.style.display = "block";
}

function HideUserOption() {
    var userMenu = document.getElementById("user-menu-container");
    
    // Thêm event listener để ẩn phần tử sau khi animation hoàn thành
    userMenu.addEventListener('animationend', function() {
        userMenu.style.display = "none";
        userMenu.style.animation = ""; // Reset animation
        
        // Khi menu đã ẩn, hiển thị lại thanh cuộn
        document.querySelector('body').style.overflow = '';
    }, { once: true });

    userMenu.style.animation = "MoveOutTop 0.3s";
}
