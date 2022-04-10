const tabs = document.querySelectorAll('.tabcontent__item'),
    tabsParent = document.querySelector('.tabcontent__items'),
    slideContent = document.querySelectorAll('.slider__content__item'),
    clearMail = document.querySelector('.clearmail');



function hideTabContent() {
    slideContent.forEach(item => {
        item.classList.remove("show")
    })

    tabs.forEach(item => {
        item.classList.remove("tabcontent__item_active")
    })
}

function showTabContent(i = 0) {
    slideContent[i].classList.add("show", "fade")
    tabs[i].classList.add("tabcontent__item_active")
}

hideTabContent()
showTabContent()

tabsParent.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains('tabcontent__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }

})


// Очищаем поле формы mail

function clearResult() {
    document.getElementById("email").value = ''
}

clearMail.addEventListener('click', e => {
    e.preventDefault();
    clearResult()
});

//



// Плавный header
const onScrollHeader = () => {

    const header = document.querySelector('.header')

    let prevScroll = window.pageYOffset,
        currentScroll

    window.addEventListener('scroll', () => {

        currentScroll = window.pageYOffset

        const headerHidden = () => header.classList.contains('header_hidden')

        if (currentScroll > prevScroll && !headerHidden()) {
            header.classList.add('header_hidden')
        }
        if (currentScroll < prevScroll && headerHidden()) {
            header.classList.remove('header_hidden')
        }

        prevScroll = currentScroll

    })
}
onScrollHeader()

//Количество товара в корзине

const plus = document.getElementById("plus"),
    minus = document.getElementById("minus"),
    itemsCount = document.getElementById("cart_count");
let icValue = itemsCount.textContent;



plus.addEventListener('click', e => {
    e.preventDefault();
    icValue++
    itemsCount.innerHTML = icValue;
})

minus.addEventListener('click', e => {
    e.preventDefault();
    icValue--;
    if (icValue <= 0) icValue = 1;
    itemsCount.innerHTML = icValue;
})

//

//Добавление товара в корзину

const addCart = document.querySelector('.right__content__cart__add'),
    addFavor = document.querySelector('.right__content__cart__favorites'),
    modal = document.querySelector('.modal'),
    modalContent = document.getElementById("modaltext"),
    itemName = document.getElementById("itemName").textContent;
modalContent.innerHTML = '';

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function openCartModal() {
    modalContent.innerHTML = ` Товар "${itemName}" в количестве ${icValue} шт. добавлен в Корзину`;
    openModal()
}

function openFavorModal() {
    modalContent.innerHTML = ` Товар "${itemName}"  добавлен в Избранное`;
    openModal()
}

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
    }
});

addCart.addEventListener('click', openCartModal);
addFavor.addEventListener('click', openFavorModal);

//Меню бургер

const burgerModal = document.querySelector('.header__modal__menu'),
    burgerBtn = document.getElementById("burger"),
    closeMod = document.getElementById("closeMod");
console.log(burgerBtn)

function closeBurgModal() {
    burgerModal.classList.add('hide');
    burgerModal.classList.remove('show');
}

function openBurgModal() {
    burgerModal.classList.add('show');
    burgerModal.classList.remove('hide');
    burgerModal.addEventListener('click', (e) => {
        if (e.target === burgerModal) {
            closeBurgModal();
        }
    });
}

burgerBtn.addEventListener('click', openBurgModal);
closeMod.addEventListener('click', closeBurgModal);