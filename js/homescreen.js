// START Phan user button drop down menu
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



// input data food

const yourData = ['Aji Quick Bun Bo Hue Soup Base Good For 4 5 Portions 59gr',
'Bạch Tuộc Đông Lạnh Gói 500g',
'Bánh Bon Sợi Thịt Gà',
'Bánh Bon Sốt Kem',
'Bánh Bột Lọc Tôm 500g',
'Bánh Cáy Làng Nguyễn Thái Bình',
'Bánh Chả Bảo Minh',
'Bánh Chả Dừa',
'Bánh Chocopie Hộp Gồm 12 Gói',
'Bánh Đa Cua Ăn Liền 1 Gói',
'Bánh Đa Nem Làng Chiều',
'Bánh Dẻo Cốm Đậu Xanh',
'Bánh Gấu Kem Sữa Phú Cường 170g',
'Bánh Kem Xốp Hải Châu Gói 170g',
'Bánh Phở Tươi 200g',
'Bánh Phồng Tôm Bích Chi',
'Bánh Phồng Tôm Bích Chi 200g',
'Bánh Pía',
'Bánh Pía Chay Tân Huê Viên Gói 500g Không Trứng',
'Bánh Pò Quẩy',
'Bánh Quẩy Chiên Giòn Việt Nam Túi 12 Cái',
'Bánh Quế Cosy Vị Lá Dứa',
'Bánh Quế Cosy Vị Socola',
'Bánh Quế Cosy Vị Xoài',
'Bánh Quy Cosy Kinh Đô',
'Bánh Sotile Vị Dâu',
'Bánh Sotile Vị Lá Dứa',
'Bánh Tráng Gỏi Cuốn Duy Anh 400g',
'Bánh Tráng Mè Đen Duy Anh',
'Bánh Tráng Rế',
'Bánh Tráng Siêu Mỏng Để Cuốn Không Nhúng Nước 120g',
'Bánh Trứng Tipo',
'Bắp Giò Heo Rút Xương Nguyên Chiếc',
'Bắp Heo Hun Khói 0 6kg 0 8kg',
'Bắp Heo Nguyên Chiếc 1 2 1 5kg',
'Bắp Non Nguyên Trái Kome 425g',
'Bat Bao Lotus Sweet Soup 365gr',
'Beef Flavour Pho Vifon 60gr',
'Bim Bim Hương Bò Hằng Đại',
'Bơ Thực Vật Margarine Tường An',
'Bò Viên 200g',
'Bột Báng',
'Bột Đậu Xanh Uống Liền',
'Bột Nghệ',
'Bột Ngọt Aji No Moto 454g',
'Bột Sắn Dây',
'Bột Sương Sáo',
'Bột Tẩm Khô Aji Quick Gói 42g',
'Bún Bò Huế Duy Anh 300g',
'Bun Rieu Cua',
'Bún Tươi Duy Anh',
'Bún Tươi Safoco Gói 300g',
'Cá Ba Sa Cắt Khúc Túi 500g',
'Cá Ba Sa Phi Lê Đông Lạnh Gói 500g',
'Cá Chép 1kg 1 3kg',
'Cá Chỉ Vàng 200g',
'Cá Diêu Hồng Đông Lạnh 1 1kg 1 5kg',
'Cá Lóc Cắt Khúc Đông Lạnh Khay 500g',
'Cá Nục 1 Nắng 500g',
'Cà Pháo Dầm Tôm Trung Thành',
'Cà Pháo Muối Tâm Đức',
'Cà Phê G7 Cappuccino Hazelnut',
'Cá Rô Phi Đông Lạnh 550g 700g',
'Cá Trắm Cắt Khúc Đông Lạnh 500g',
'Cá Trê Nguyên Con 0 6kg',
'Cá Viên Ngon Cau Tre',
'Cafe Phố 1 Hộp',
'Cánh Gà Ủ Muối Loại Đặc Biệt 600g',
'Chả Cá Thác Lác Xay Túi 200g',
'Chả Cá Thu Chiên 200g',
'Chả Cá Vietnamdeli',
'Chả Giò Duy Anh Túi 400g',
'Chả Giò Rế 1 Hộp',
'Chả Lụa Deli',
'Chả Mực Vietnamdeli',
'Chả Quế Deli 1 Cái',
'Chân Gà Rút Xương Túi Hút Chân Không 800g',
'Chân Gà Ủ Muối Loại Đặc Biệt',
'Chân Giò Heo Cắt Khúc 1kg',
'Chao Bông Mai 170g',
'Chè Đỗ Đen Đậu Đen Đóng Lon Ăn Liền Hiệu Minh Trung',
'Chè Dừa Dầm',
'Chè Dưỡng Nhan',
'Chè Nếp Cẩm',
'Chè Nếp Cẩm 240gr',
'Chè Sầu Thái',
'Chicken Flavour Pho Vifon 60gr',
'Cocacola Chai Sành 190ml',
'Coconut Caramel120ml',
'Coconut Milk Chaokoh 400ml',
'Cơm Cháy Tiến Vua',
'Cơm Cháy Tiến Vua',
'Combo 4 Vị Bánh Cosy',
'Combo Lẩu 10 In 1 500g',
'Cua Đồng Xay 300g',
'Cung Đình Lẩu Tôm Chua 30gói',
'Dạ Dày Lợn Bao Tử 500g',
'Đậu Đen Xanh Lòng Việt Nam 500g',
'Dầu Điều Nguyên Chất 100ml',
'Dầu Hào Maggi',
'Đậu Phộng Cốt Dừa Tân Tân',
'Đậu Xanh Không Vỏ',
'Dồi Sụn Nướng Than Hoa Vietcook',
'Dồi Tiết Khay 500g',
'Dracontomelon Sweetened 365gr',
'Dried Satay Chilli 100gr',
'Dưa Chua Muối Sẵn 0 5kg',
'Dừa Sấy',
'Duc Hai Salt And Chili Powder 100gr',
'Đùi Vịt Thái Nguyên Trước 2kg',
'Dung Dịch Vệ Sinh Phụ Nữ Dạ Hương',
'Đuôi Bò Nhật 1kg',
'Ếch Đông Lạnh 500g',
'Fermented Cold Rice 150gr',
'Fish And Pork Marinade 80gr',
'Fresh Bamboo Shoots 500g',
'G7 Instant Coffee 3 In 1 20 Sachets X 16 Gr',
'Gà Dai Nguyên Con',
'Gà Mềm 1 3 1 5kg',
'Gia Vị Hoàn Chỉnh Cá Kho Riềng Knor',
'Gia Vị Hoàn Chỉnh Thịt Kho Tàu',
'Gia Vị Lẩu Thái Aji Quick',
'Gia Vị Nêm Phở Bò Aji Quick Gói 57g',
'Gia Vị Tần Gà Trung Hạnh',
'Giấm Gạo',
'Giò Bì Deli',
'Giò Bì Vietcook500g',
'Giò Bò Deli 450g Chả Bò',
'Giò Bò Vietcook',
'Giò Nấm Loại Đặc Biệt',
'Giò Sống Mọc 450gm',
'Giò Tai Deli',
'Giò Tai Vietcook',
'Giò Xào 500g',
'Glutinous Rice Flour Tai Ky 400g',
'Hành Phi Hộp 100g',
'Hành Tim Thái',
'Hảo Hảo Chua Cay Thùng 30 Gói',
'Hạt Hướng Dương Vị Nguyên Bản',
'Hạt Mắc Khén Rừng',
'Hạt Màu Điều',
'Hạt Nêm Thịt Thăn Xương Ống Tủy Knorr 400g',
'Hạt Tiêu Bắc Xay',
'Hot And Sour Shrimp Hao Hao 75gr',
'Hủ Tiếu Gõ Sài Gòn Khô',
'Hủ Tiếu Nam Vang 1 Gói',
'Hue Style Instant Vermicelli With Beef Flavour 65gr',
'Kem Đánh Răng P S 123',
'Kẹo Alpenliebe Vị Muối Ớt',
'Kẹo Đậu Đỏ Haiha',
'Kẹo Dẻo Bắp',
'Kẹo Dừa Sữa Dứa',
'Kẹo Dynamite Vị Bạc Hà Nhân Socola',
'Kẹo Nho Đen Hải Hà',
'Khô Bò Miếng',
'Khô Bò Sợi 300g',
'Khô Cá Mối Việt Nam',
'Khô Cá Trê',
'Khô Gà Lá Chanh',
'Khoai Lang Kén',
'Khuân Xôi Phúc Lộc Thọ',
'Kokomi Thái Chua Cay 1 Thùng',
'Lá Chanh Đông Lạnh 50g',
'Lá Lốt Không Cành',
'Lạc Viên 500g',
'Lạp Xưởng Vietcook',
'Lốc Gồm 4 Hộp Sữa Bắp Non',
'Lòng Non Làm Sạch Túi 1kg',
'Lươn Cắt Khúc Bỏ Đầu',
'Lương Khô',
'Mắm Cá Sặn Ngọc Liên 430g',
'Mắm Nêm Ngon Pha Sẵn Thuận Phát Chai 250ml',
'Mắm Ruốc Huế 200g',
'Mắm Tôm Bắc Hiệu Tâm Đức',
'Mămg Dầm Ớt Mắc Mật',
'Măng Chua Phúc Vinh 300g',
'Măng Dầm Vietcook',
'Me Thái Cục 350g',
'Mì Khoai Tây Cung Đình Hương Vị Bò Hầm Thùng 30 Gói',
'Mì Quảng Truyền Thống Kome',
'Mì Siukay Hải Sản',
'Mì Siukay Hải Sản Túi 4 Gói',
'Mì Xào Hảo Hảo Vị Tôm Xào Chua Ngọt Gói 75g',
'Miến Dong 200g',
'Mít Sấy Khô',
'Mít Thái Đông Lạnh Việt Nam 500g',
'Mix Thái',
'Mộc Nhĩ 50gm',
'Móng Giò Cắt Khúc 1kg',
'Mực Bento Thái Lan Dây 12 Gói',
'Mực Khô Quất Lâm Túi 1 Con',
'Muối Bột Canh Hải Châu',
'Muối Chẩm Chéo 250g',
'Muối Chấm Hảo Hảo',
'Muối Chanh Tây Ninh',
'Muối Chua Cay Đức Hải 100g',
'Muối Ớt Tây Ninh',
'Muối Sấy Ngọc Yến',
'Mỳ 3 Miền Chua Cay Set5goi',
'Mỳ 3 Miền Cua Cay 1thùng',
'Mỳ Khoai Tây Cung Đình Sườn Hầm Ngũ Quả 30goi',
'Mỳ Kokomi Chua Cay',
'Mỳ Lẩu Thái Chua Cay Set 5gói',
'Mỳ Lẩu Thái Chua Cay Thùng 30 Gói',
'Mỳ Quả G Duy Anh',
'Mỳ Tôm Chua Cay A One',
'Mỳ Tôm Chua Cay Zum Zum 1 Gói',
'Mỳ Tomyun Lẩu Thái Chua Cay 5goi',
'Mỳ Zum Zum Chua Cay Kẩu Thai 30ggoi',
'Nabati Socola Set 10 Túi',
'Nấm Hương Khô 50g',
'Nầm Lợn Nhật 1kg',
'Nem Chua Rán',
'Nem Chua Thanh Hoá Maison 260g',
'Ngô Nếp Bắp Nếp Hút Chân Không Theo Từng Trái',
'Ngô Nếp Cay',
'Ngũ Cốc Dinh Dưỡng',
'Ngũ Vị Hương Combo 3 Gói 3gam',
'Nhãn Lồng Hưng Yên Đông Lạnh 500g',
'Nước Dừa Lon Fuco Có Cơm Dừa 350ml',
'Nước Dừa Thái Đóng Chai',
'Nước Dừa Vico Hộp 1 Lít',
'Nước Dùng Hoàn Chỉnh Lẩu Thái Barona',
'Nước Mắm Cao Cấp Vị Xưa Barona 500ml',
'Nước Mắm Nam Ngư 750ml',
'Nước Mắm Thái Lan Hiệu Tiparos',
'Nước Màu Dừa Để Kho Cá Kho Thịt',
'Nước Tăng Lực 247 Vị Cafe Chai 330ml',
'Nước Tương Chim Su Tỏi Ớt 330ml',
'Nước Tương Maggi Đậm Đặc 700ml',
'Nước Tương Tam Thái Tử Nhất Ca',
'Nước Uống Tăng Lực Number One 1',
'Nước Yến Ngân Nhĩ',
'Ốc Bươu 500g',
'Ốc Nhồi Ống Nứa',
'Omachi Potato Noodles With Stewed Beef Flavor 80gr',
'Omachi Potato Noodles With Stewed Beef Flavor 80gr×5bags',
'Omachi Potato Noodles With Stewed Pork Ribs In Penta Fruit Flavor 80gr',
'Omachi Sườn Hầm Ngũ Quả',
'Omachi Sườn Hầm Ngũ Quả 5 Gói',
'Omachi Tôm Chua Cay 1 Thùng',
'Omachi Tôm Chua Cay 5goi',
'Omachi Xốt Bò Hầm 1 Thùng',
'Ớt Đông Lạnh 250g',
'Passion Fruit Juice Drink Anuta 330ml',
'Patê Cầu Đò Quan Nam Định',
'Pate Cột Đèn Hải Phòng',
'Phở Bò Cung Đình 10 Gói',
'Phở Gà Ăn Liền Acecook Gói 68g',
'Phở Khô Vina Bích Chi Gói 400g',
'Phồng Tôm Sa Giang Túi',
'Pinatsu Vị Nước Cốt Dừa',
'Potato Noodles Cung Dinh Spice Sour Shrimp Hotpot Flavor 85gr',
'Potato Noodles Cung Dinh Stewed Beef 77gr',
'Potato Noodles Cung Dinh Stewed Sparerib With 5 Fruits Flavor 80gr',
'Potato Noodles With Hot Sour Shirmp Flavour Omachi 80gr',
'Prepared Fish Sauce 290ml',
'Quả Sấu Đông Lạnh 300g',
'Red Bull Thái Lan 250ml Red Bull 250ml',
'Rice Flour 400gr',
'Rice Noodles 500gr',
'Riềng Xay Sẵn',
'Ruốc Thịt Lợn 300g Chà Bông Heo',
'Ruột Gấc',
'Sa Tế Tôm Xo Hũ Nhựa',
'Sả Tươi 500g',
'Sấu Nguyên Quả Ướp Đường',
'Sầu Riêng',
'Sauce For Char Siu 80gr',
'Sauce For Lemongrass Grilled Meat Barona 80gr',
'Sét 10 Gói Đậu Phộng Cốt Dừa Tân Tân',
'Set Bắp Đuôi Giả Cầy 1kg',
'Set Lòng Dồi Đủ Lón 1kg',
'Set Móng Giò Giả Cầy 1kg',
'Set Nhộng Tằm Lá Chanh 500g',
'Sét Tăm Cay 3 Gói',
'Set Vịt Giả Cầy 1kg',
'Shrimp Satay 170gr',
'Sốt Thái Chấm Xoài',
'Sốt Thịt Nướng Ngũ Vị Barona',
'Sting Nhân Sâm Đỏ',
'Sứa Ăn Liền',
'Sữa Đặc Ông Thọ Hộp Giấy 320g',
'Sữa Đậu Nành Nguyên Chất 200ml',
'Sữa Fami Nguyên Thùng 36 Hộp X 200ml',
'Sữa Milo Lốc 4 Hộp',
'Sữa Milo Uống Liền 15 Gói Nhỏ',
'Sữa Nuti Vị Cam',
'Sữa Trái Cây Nutifood Vị Dâu Chai 300ml',
'Sườn Già Heo 1kg',
'Sweet Sour Sauce For Spare Ribs Barona 80gr',
'Tabati Vị Pho Mai Set 10 Túi',
'Tai Lợn 1kg',
'Tamarind Juice Drink Anuta 330ml',
'Tapioca Starch 400gr',
'Thính Gạo',
'Thịt Ba Chỉ Heo Có Da 1kg',
'Thịt Bắp Bò 1kg',
'Thịt Diềm Dải Heo 1kg',
'Thịt Gà Zai Cắt Túi 1kg',
'Tim Lợn Đông Lạnh 1kg',
'Tổ Ong Bò Túi 1kg',
'Tỏi Ngâm Dấm Ớt Giòn Không Xanh 600g',
'Tôm Khô Biển 100g',
'Tôm Viên Chiên Đông Lạnh 250g',
'Top Coco Coconut Cracker 150g',
'Trà Ôlong',
'Trà Xanh 0 Độ Chai 455ml',
'Trà Xanh C2',
'Tràng Heo Dồi Trường',
'Tương Đen Phở Cholimex',
'Tương Ớt Chin Su 250g',
'Tương Ớt Chinsu 500g',
'Tương Ớt Vifon 500ml',
'Vải Thiều Đông Lạnh 500g',
'Viên Gia Vị Lẩu Thái',
'Viên Hải Sản Rau Củ Gói 200g',
'Viên Sủi Plusssz Gold Max Vị Cam Bổ Sung Vitamin Và Khoáng Chất Cho Cơ Thể 20 Viên',
'Vietnamese Crispy Pancake Mix 400gr',
'Vietnamese Steamed Rice Roll Mix 400gr',
'Vifon Soup Powder 200gr',
'Vịt Cắt Sẵn Túi 1kg',
'Vịt Nguyên Con Đông Lạnh Thái Lan 1 6kg 1 8kg',
'Vịt Quay Chặt Sẵn Nửa Con Kèm Nước Chấm',
'Vỏ Bánh Ram Hà Tĩnh 200g',
'Winter Melon Wax Gourd Tea Wonderfarm 310ml',
'Xào Sả Ớt Barona',
'Xoài Cát Chu 1kg',
'Xốt Gia Vị Canh Chua Barona',
'Xốt Gia Vị Hoàn Chỉnh Bò Kho',
'Xốt Gia Vị Hoàn Chỉnh Cá Thịt Kho',
'Xốt Gia Vị Hoàn Chỉnh Nướng Muối Ớt',
'Xốt Rang Me Cholimex',
'Xốt Thịt Kho Tàu Barona',
'Xúc Xích Ăn Liền Cp Red',
'Xúc Xích Đức Gói 500g',
'Xúc Xích Vietcook',
'Xương Sống Heo 1kg',];
const searchInput = document.getElementById('searchInput');
const suggestionList = document.getElementById('suggestionList');

function showSuggestions() {
  const inputValue = searchInput.value.toLowerCase();
  // Perform logic to filter suggestions based on your data
  const filteredSuggestions = yourData.filter(item => item.toLowerCase().startsWith(inputValue.toLowerCase()));

  // Display filtered suggestions
  renderSuggestions(filteredSuggestions);
}

function renderSuggestions(suggestions) {
  suggestionList.innerHTML = '';
  suggestions.forEach(suggestion => {
    const li = document.createElement('li');
    li.textContent = suggestion;
    li.addEventListener('click', () => {
      searchInput.value = suggestion;
      suggestionList.innerHTML = '';
    });
    suggestionList.appendChild(li);
  });
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
          duration: 250,
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
          duration: 250,
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
                temperature.querySelector('figcaption span').innerText = Math.floor(data.main.temp);
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

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

HideCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

CloseCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
