// ============================================
// ROYAL TOUCH - JavaScript Functionality
// ============================================

// ============================================
// DATA
// ============================================

const products = [
    {
        id: 1,
        name: 'الجبسنبورد',
        description: 'جبسنبورد بجودة عالية بألوان متعددة (أخضر، أحمر، أبيض)',
        image: 'images/gypsum-board-hero.jpg',
        icon: '📦',
        items: ['جبسنبورد أخضر', 'جبسنبورد أحمر', 'جبسنبورد أبيض'],
    },
    {
        id: 2,
        name: 'بدائل الرخام',
        description: 'بدائل رخام فاخرة وأنيقة بتشطيبات احترافية',
        image: 'images/marble-alternatives-hero.jpg',
        icon: '🎨',
        items: ['رخام صناعي', 'بلاط ديكوري', 'ألواح زخرفية'],
    },
    {
        id: 3,
        name: 'بدائل الخشب',
        description: 'خشب صناعي وألواح خشبية بتصاميم عصرية',
        image: 'images/wood-alternatives-hero.jpg',
        icon: '🔨',
        items: ['ألواح خشبية', 'قشرة خشب', 'لامينيت ديكوري'],
    },
    {
        id: 4,
        name: 'ورق الجدران',
        description: 'تشكيلة واسعة من ورق الجدران الحديث والكلاسيكي',
        image: 'images/wallpaper-hero.jpg',
        icon: '🖼️',
        items: ['ورق جدران عصري', 'ورق جدران كلاسيكي', 'ورق جدران ثلاثي الأبعاد'],
    },
    {
        id: 5,
        name: 'الحديد اوميغا',
        description: 'تثبيت وتنظيم الهيكل بالكامل',
        image: 'images/decorative-iron-hero.jpg',
        icon: '',
        items: [ 'ممتاز للاسقف','سهل التركيب', 'خفيف'],
    },
];

const branches = [
    {
        id: 1,
        name: 'المقر الرئيسي',
        city: 'بورتسودان',
        address: 'بورتسودان',
        phone: '+249',
        email: 'info@touch-royal.com',
        hours: 'السبت - الخميس: 8:00 - 17:00',
        featured: true,
    },
    {
        id: 2,
        name: 'فرع الخرطوم',
        city: 'الخرطوم',
        address: 'الخرطوم',
        phone: '+249',
        email: 'khartoum@touch-royal.com',
        hours: 'السبت - الخميس: 8:00 - 17:00',
        featured: false,
    },
    {
        id: 3,
        name: 'فرع مدني',
        city: 'مدني',
        address: 'شارع السوق - مدني',
        phone: '+249',
        email: 'madani@touch-royal.sd',
        hours: 'السبت - الخميس: 8:00 - 17:00',
        featured: false,
    },
    {
        id: 4,
        name: 'فرع عطبرة',
        city: 'عطبرة',
        address: 'حي الصناعة - عطبرة',
        phone: '+249',
        email: 'atbara@touch-royal.com',
        hours: 'السبت - الخميس: 8:00 - 17:00',
        featured: false,
    },
    {
        id: 5,
        name: 'فرع دنقلا',
        city: 'دنقلا',
        address: 'شارع الجمهورية - دنقلا',
        phone: '+249',
        email: 'dongola@touch-royal.com',
        hours: 'السبت - الخميس: 8:00 - 17:00',
        featured: false,
    },
];

const management = [
    {
        id: 1,
        name: 'مختار علي احمد بشاره',
        position: 'رئيس مجلس الإدارة',
        image: 'images/member-1.jpg',
        colorClass: 'gold',
    },
    {
        id: 2,
        name: 'الطيب عبد الرحمن عبد الرحيم',
        position: 'المدير التنفيذي',
        image: 'images/member-2.jpg',
        colorClass: 'blue',
    },
    {
        id: 3,
        name: 'د / مجاهد مختار علي احمد',
        position: 'مدير التسويق',
        image: 'images/member-3.jpg',
        colorClass: 'purple',
    },
];


// ============================================
// UTILITY FUNCTIONS
// ============================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
    }
}

function closeMenu() {
    const navbarMenu = document.getElementById('navbarMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    navbarMenu.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let itemsHTML = '';
        product.items.forEach(item => {
            itemsHTML += `<div class="product-item">${item}</div>`;
        });
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <div class="product-header">
                    <div class="product-icon">${product.icon}</div>
                    <h3 class="product-name">${product.name}</h3>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-items">
                    ${itemsHTML}
                </div>
                <button class="product-btn">تفاصيل أكثر</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

function renderBranches() {
    const branchesGrid = document.getElementById('branchesGrid');
    
    branches.forEach(branch => {
        const branchCard = document.createElement('div');
        branchCard.className = `branch-card ${branch.featured ? 'featured' : ''}`;
        
        branchCard.innerHTML = `
            <div class="branch-header">
                <div class="branch-icon">📍</div>
                <div class="branch-header-text">
                    <h3>${branch.name}</h3>
                    <p>${branch.city}</p>
                </div>
            </div>
            <div class="branch-content">
                <div class="branch-item">
                    <div class="branch-item-icon">📍</div>
                    <div class="branch-item-text">
                        <h4>العنوان</h4>
                        <p>${branch.address}</p>
                    </div>
                </div>
                <div class="branch-item">
                    <div class="branch-item-icon">📞</div>
                    <div class="branch-item-text">
                        <h4>الهاتف</h4>
                        <a href="tel:${branch.phone}">${branch.phone}</a>
                    </div>
                </div>
                <div class="branch-item">
                    <div class="branch-item-icon">✉️</div>
                    <div class="branch-item-text">
                        <h4>البريد الإلكتروني</h4>
                        <a href="mailto:${branch.email}">${branch.email}</a>
                    </div>
                </div>
                <div class="branch-item">
                    <div class="branch-item-icon">🕐</div>
                    <div class="branch-item-text">
                        <h4>ساعات العمل</h4>
                        <p>${branch.hours}</p>
                    </div>
                </div>
                <button class="branch-btn">تواصل معنا</button>
            </div>
        `;
        
        branchesGrid.appendChild(branchCard);
    });
}

function renderManagement() {
    const managementGrid = document.getElementById('managementGrid');
    
    management.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        
        memberCard.innerHTML = `
            <div class="member-header ${member.colorClass}">
                ${member.icon}
            </div>
            <div class="member-content">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-position">${member.position}</p>
                <p class="member-description">متخصص في مجال الديكور والتسويق مع خبرة عملية واسعة</p>
            </div>
        `;
        
        managementGrid.appendChild(memberCard);
    });
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Render all sections
    renderProducts();
    renderBranches();
    renderManagement();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navbarMenu = document.getElementById('navbarMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
        };
        
        console.log('Form submitted:', formData);
        alert('شكراً لتواصلك معنا! سنرد عليك قريباً.');
        
        contactForm.reset();
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    closeMenu();
                }
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.product-card, .branch-card, .member-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// ============================================
// HELPER FUNCTIONS
// ============================================
function renderManagement() {
    const managementGrid = document.getElementById('managementGrid');
    
    management.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        
        memberCard.innerHTML = `
            <div class="member-image-container ${member.colorClass}">
                <img src="${member.image}" alt="${member.name}" class="member-image">
                <div class="member-overlay"></div>
            </div>
            <div class="member-content">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-position">${member.position}</p>
                <p class="member-description">متخصص في مجال الديكور والتسويق مع خبرة عملية واسعة</p>
            </div>
        `;
        
        managementGrid.appendChild(memberCard);
    });
}

// Prevent default behavior for placeholder buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('product-btn') || 
        e.target.classList.contains('branch-btn') ||
        e.target.classList.contains('btn-outline')) {
        if (e.target.classList.contains('btn-outline')) {
            scrollToSection('contact');
        }
    }
});
// WhatsApp Business Number
const WHATSAPP_NUMBER = '249183333333'; // بدون + أو 00

// دالة إرسال إلى WhatsApp
function sendToWhatsApp(formData) {
    // بناء الرسالة
    const message = `
*طلب عرض سعر من رويال تاتش*

👤 الاسم: ${formData.name}
📞 الهاتف: ${formData.phone}
${formData.email ? `📧 البريد: ${formData.email}` : ''}

🛍️ المنتج المطلوب: ${formData.product}
📦 الكمية: ${formData.quantity}

${formData.details ? `📝 تفاصيل إضافية:\n${formData.details}` : ''}

---
تم الإرسال من موقع رويال تاتش للديكور
    `.trim();

    // ترميز الرسالة
    const encodedMessage = encodeURIComponent(message);
    
    // رابط WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // فتح WhatsApp
    window.open(whatsappUrl, '_blank');
}

// معالج النموذج
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            product: document.getElementById('product').value,
            quantity: document.getElementById('quantity').value,
            details: document.getElementById('details').value,
        };
        
        // التحقق من البيانات
        if (!formData.name || !formData.phone || !formData.product || !formData.quantity) {
            alert('الرجاء ملء جميع الحقول المطلوبة');
            return;
        }
        
        // إرسال إلى WhatsApp
        sendToWhatsApp(formData);
        
        // إعادة تعيين النموذج
        quoteForm.reset();
        
        // رسالة تأكيد
        setTimeout(() => {
            alert('تم فتح WhatsApp! الرجاء إرسال الرسالة.');
        }, 500);
    });
});
