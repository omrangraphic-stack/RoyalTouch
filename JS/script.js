// Mobile Menu Toggle
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

// فتح وإغلاق المينيو
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
});

// إغلاق المينيو عند الضغط على أي رابط
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("open");
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Preloader
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.classList.add("loader-fade-out");
    }, 1000);
});


document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // الحصول على اسم المنتج من خاصية data-product
        const productName = this.getAttribute('data-product');
        
        // رقم الواتساب الخاص بالشركة (بدون أصفار أو علامة + في البداية)
        // قم بتغيير هذا الرقم لرقم شركتك الفعلي
        const phoneNumber = "249123456789"; 
        
        // نص الرسالة التلقائية
        const message = `مرحباً رويال تاتش، أود الاستفسار عن سعر منتج: (${productName}). أرجو تزويدي بالتفاصيل.`;
        
        // ترميز الرسالة لتعمل مع الروابط
        const encodedMessage = encodeURIComponent(message);
        
        // فتح رابط الواتساب
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    });
});
