function EnglishChange(){
    document.getElementById("signin-heading").innerHTML = "Sign-In";
    document.getElementById("signin-label").innerHTML = "User account";
    document.getElementById("password-label").innerHTML = "User password";
    document.getElementById("signin-btn").innerHTML = "Confirm";
    document.getElementById("signin-link-or").innerHTML = "Or";
    document.getElementById("sign-up").innerHTML = "You don't have account ?";
    document.getElementById("signup-link").innerHTML = " Sign Up";
    document.getElementById("forgot-password").innerHTML = " Forgot Password ?";
    document.getElementById("logo-text").innerHTML = "Click the logo to see more about us";
    document.getElementById("tab-title").innerHTML = "GORO | Sign-in";
    document.getElementById("show-password-text").innerHTML = "Show password";



}

function VietnameseChange(){
    document.getElementById("signin-heading").innerHTML = "Đăng nhập";
    document.getElementById("signin-label").innerHTML = "Tài Khoản";
    document.getElementById("password-label").innerHTML = "Mật Khẩu";
    document.getElementById("signin-btn").innerHTML = "Xác Nhận";
    document.getElementById("signin-link-or").innerHTML = "Hoặc";
    document.getElementById("sign-up").innerHTML = "Bạn chưa có tài khoản ?";
    document.getElementById("signup-link").innerHTML = " Đăng kí";
    document.getElementById("logo-text").innerHTML = "Bấm vào logo để xem thêm về chúng tôi";
    document.getElementById("forgot-password").innerHTML = "Quên mật khẩu ?";
    document.getElementById("tab-title").innerHTML = "GORO | Đăng Nhập";
    document.getElementById("show-password-text").innerHTML = "Hiển thị mật khẩu";


}

function JapaneseChange(){
    document.getElementById("signin-heading").innerHTML = "サイン";
    document.getElementById("signin-label").innerHTML = "アカウント";
    document.getElementById("password-label").innerHTML = "パスワード";
    document.getElementById("signin-btn").innerHTML = "確認";
    document.getElementById("signin-link-or").innerHTML = "または";
    document.getElementById("sign-up").innerHTML = "アカウントまだありません?";
    document.getElementById("signup-link").innerHTML = " 登録";
    document.getElementById("forgot-password").innerHTML = "パスワードを忘れた方?";
    document.getElementById("logo-text").innerHTML = "私たちについて知りたければ、ロゴをクリック";
    document.getElementById("tab-title").innerHTML = "GORO | サイン";
    document.getElementById("show-password-text").innerHTML = "パスワードを表示";
    document.getElementById("signin-heading").style.fontSize = "30px";
    document.getElementById("signin-heading").style.marginBottom="20px";

}
 function ShowPassword(){
    document.getElementById("hidden-icon").style.zIndex = "1";
    document.getElementById("user-password").type = "text";
}

 function HidePassword(){
    document.getElementById("hidden-icon").style.zIndex = "3";
    document.getElementById("user-password").type = "password";
}

