// Получаем элементы DOM для практики 5
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const scrollTopButton = document.getElementById('scrollTop');

// Создаем оверлей для меню
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

// Функция открытия/закрытия меню
function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    // Переключаем состояния
    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    // Блокируем скролл при открытом меню
    document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
}

// Функция закрытия меню при клике на ссылку
function closeMenuOnLinkClick() {
    if (window.innerWidth <= 991) {
        toggleMenu();
    }
}

// Обработчики событий для меню
menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', closeMenuOnLinkClick);
});

// Кнопка "Наверх" - показываем/скрываем при скролле
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Прокрутка к началу страницы
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Закрытие меню при изменении размера окна (если стало шире)
window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        // Если меню открыто на мобильном, а окно увеличили
        if (mainNav.classList.contains('active')) {
            toggleMenu(); // Закрываем меню
        }
    }
});

// Изменение цвета шапки при скролле (существующий код)
const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});

// Существующий код для меню (оставляем для совместимости)
document.addEventListener('DOMContentLoaded', function() {
    const existingMenuToggle = document.querySelector('.menu-toggle');
    const existingNavList = document.querySelector('.nav__list');
    
    if (existingMenuToggle && existingNavList) {
        existingMenuToggle.addEventListener('click', function() {
            existingNavList.classList.toggle('nav__list--mobile');
            existingMenuToggle.classList.toggle('menu-toggle--active');
        });
    }
});