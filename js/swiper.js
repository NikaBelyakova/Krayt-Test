new Swiper ('.image-slider', {
    // Навигация
    //Буллеты, текущее пололжение, прогресс-бар
    // pagination: {
    //     el: '.swiper-pagination',
    
       //Фракция
    //    type: 'fraction',
       // Кастомный вывод фракции
    //    renderFraction: function (currentClass, totalClass) {
    //        return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
    //    },
    
      /*
      //Прогрессбар
      type: 'progressbar'
      */
    // },

    //Скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        draggable: true,
        dragSize: '16px',
    },

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетакивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Переключение на слайд при клике на него
    slideToClickedSlide: true,

    //Навигация по хэшу
    hashNavigation: {
        //Отслеживать состояние
        watchState: true,
    },

    // Управление клавиатурой
    keyboard: {
        // Вкл/выкл
        enabled: true,
        // Вкл/выкл только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        // Вкл/выкл управление клавишами pageUp, pageDown
        pageUpDown: true,
    },
    
    /*
    // Управление колесом мыши
    mousewheel: {
        // Чувствительность колеса мыши
        sensivity: 1,
        // Класс объекта, на котором будет срабатывать прокрутка мышью
        eventsTarget: '.image-slider',
    },
    */

    // Автовысота
    autoHeight: true,

    // Количество слайдов для показа (можно указывать дробные числа)
    slidesPerView: 1,

    // Отключение функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    // spaceBetween: 10,

    // Колчисевто пролистываемых слайдов
    slidesPerGroup: 1,

    // Активный слайд по центру
    // centeredSlides: true,

    // Стартовый слайд
    initialSlide: 1,

    // Мультирядность
    // slidesPerColumn: 1,

    // Бесконечность (не оаботает со скроллом,несколькиими рядами и если slidesPerView: auto, то надо вручную добавить кроичество дублирующих слайдов - loopedSlides)
    loop: false,

    // Количество дуюлирующих слайдов
    // loopedSlides: 3,

    // Свободный режим
    freeMode: true,

    // Автопрокрутка
    /*
    autoplay: {
        // Пауза между прокруткой
        delay: 1000,
        // Закончить на последжнем слайде
        stopOnLastSlide: true,
        // Отключить поле ручного переключения
        disabledOnInteraction: false,
    }, */

    // Скорость переключения слайдов
    speed: 800,

    // Вертикальный слайдер
    // direction: 'vertical',


    // Эффекты переключения слайдов
    
    // Стандартный
    effect: 'slide',
    
    // Смена прозрачности
    // effect: 'fade',
    // Дополнение к fade
    // fadeEffect: {
    //     // Параллельная смена прозрачности
    //     crossFade: true,
    // },

    // Переворот
    // effect: 'flip',
    // flipEffect: {
        // Тень 
        // slideShadows: true,
        // Показ только активного слайда
        // limitRotation: true
    // },

    // Куб
    // effect:'cube',
    // cubeEffect: {
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // },

    // Эффект потока
    // effect: 'coverflow',
    // coverflowEffect: {
        // Угол
        // rotate: 20,
        // Наложение
        // stretch: 50,
        // Тень
        // slideShadows: true,
    // },


    // Брейкпоинты (адаптив)
    // Ширина экрана
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     480: {
    //         slidesPerView: 2,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //     },
    // },

    // Соотношение сторон (высота, делённая на ширину)
    // breakpoints: {
    //     '@0.75': {
    //         slidesPerView: 1,
    //     },
    //     '@1.00': {
    //         slidesPerView: 2,
    //     },
    //     '@1.50': {
    //         slidesPerView: 3,
    //     },
    // },


    // Отключить предзагрузку картинок
    preloadImages: false,
    // Lazy loading (подгрузка картинок)
    lazy: {
        // Подгружать на старте переключения файла
        loadOnTransitionStart: false,
        // Подгрудать пердыдущую и след картинки
        loadPrevNext: false,
    },
    // Слежка за видимымми файлами ВКЛЮЧАТЬ НАСТРОЙКИ СТОИТ ТОГДА, КОГДА slidesPerView = AUTO ИЛИ БОЛЬШЕ, ЧЕМ 1
    watchSlidesProgress: true,
    // Добавление класа видимым слайдам
    watchSlidesVisibility: true,

    // Зум картинки
    zoom: {
        // Максимальное увеличение
        maxRatio: 5,
        //  Минимальное увеличение
        minRatio: 1,
    },

    // Миниатюры (превью)
    // thumbs: {
    //     swiper: {
    //         el: '.image-mini-slider',
    //         slidesPerView:5,
    //     },
    // }

});
