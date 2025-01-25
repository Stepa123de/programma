const content = document.getElementById('info')
content.style.display = 'none'
const dictionary = {
    1 : "",
    2 : "Ника Самофракийская (II век до н.э.) — шедевр эллинистической скульптуры, изображающий богиню победы. Автор неизвестен. Найдена на острове Самофракия в 1863 году, сейчас находится в Лувре. Символизирует триумф и движение.",
    3 : "Архип Куинджи, «Лунная ночь на Днепре» (1880) — одна из самых известных картин русского художника. Работа поражает мастерством передачи лунного света и атмосферы ночи. Хранится в Государственном Русском музее в Санкт-Петербурге.",
    4 : "Казимир Малевич, «Чёрный квадрат» (1915) — культовая работа в истории искусства, символ супрематизма. Картина представляет собой чёрный квадрат на белом фоне, ставший манифестом отказа от традиционных форм и поиска новых смыслов. Хранится в Третьяковской галерее в Москве.",
    5 : "Казимир Малевич, «Автопортрет» (или «Художник») (1933) — работа, созданная в поздний период творчества Малевича. На картине изображён сам художник в стиле, сочетающем элементы реализма и абстракции. Картина отражает его философские размышления о роли художника и искусства. Находится в коллекции Государственного Русского музея в Санкт-Петербурге.",
    6 : "Нико Пиросмани, «Рыбак в красной рубашке» — работа грузинского художника-самоучки, созданная в начале XX века. Картина выполнена в характерном для Пиросмани наивном стиле, с яркими красками и простыми формами. На ней изображён рыбак в красной рубашке, что символизирует связь человека с природой и повседневной жизнью. Работа находится в коллекции Национального музея Грузии в Тбилиси.",
    7 : "Пабло Пикассо, «Девочка на шаре» (1905) — одна из ключевых работ «розового периода» творчества художника. На картине изображена хрупкая девочка, балансирующая на шаре, и мощная фигура мужчины рядом. Контраст между ними символизирует противопоставление нежности и силы. Картина хранится в Государственном музее изобразительных искусств имени А.С. Пушкина в Москве.",
    8 : "Пабло Пикассо, «Любительница абсента» (1901) — работа, созданная в «голубой период» творчества художника. На картине изображена одинокая женщина, погружённая в меланхолию, с бокалом абсента перед ней. Работа отражает темы одиночества и человеческих страданий. Картина находится в Государственном Эрмитаже в Санкт-Петербурге.",
    9 : "Андрей Попов, «Вынос мозга» — современная сатирическая картина, созданная российским художником. Работа известна своим острым социальным подтекстом и ироничным изображением бюрократии и абсурдных ситуаций. Картина стала популярной благодаря узнаваемому стилю Попова, сочетающему юмор и критику. Точное местонахождение оригинала может варьироваться, так как работы Попова часто выставляются на различных выставках и аукционах.",
    10 : "Рене Магритт, «Влюблённые» (1928) — одна из самых известных работ бельгийского художника-сюрреалиста. На картине изображены двое людей с головами, покрытыми белой тканью, что создаёт атмосферу загадочности и отчуждения. Работа исследует темы любви, коммуникации и скрытых эмоций. Картина находится в коллекции Музея современного искусства (MoMA) в Нью-Йорке.",
    11 : "Фрида Кало, «Две Фриды» (1939) — одна из самых известных работ мексиканской художницы. На картине изображены две версии самой Фриды: одна в традиционной мексиканской одежде, другая — в европейском платье. Они соединены сердцами, символизируя внутренний конфликт и двойственность её личности. Картина находится в коллекции Музея современного искусства в Мехико.",
    12 : "Семейное фото: четыре поколения, 1900-е — уникальный исторический снимок, запечатлевший представителей четырёх поколений одной семьи. Такие фотографии были популярны в начале XX века и служили важным документом, сохраняющим память о предках. На снимке можно увидеть традиционную одежду, причёски и атмосферу того времени, что делает его ценным источником для изучения быта и культуры эпохи. Подобные фотографии часто хранятся в семейных архивах или музеях.",
    13 : "Китайский дракон — один из главных символов китайской культуры, олицетворяющий силу, мудрость, удачу и власть над стихиями. В отличие от западных драконов, китайский дракон изображается как благожелательное существо с длинным змеевидным телом, покрытым чешуёй, без крыльев, но с способностью летать. Он часто ассоциируется с водой, дождём и императорской властью. Дракон занимает центральное место в мифологии, искусстве и праздниках Китая, таких как Фестиваль драконьих лодок.",
    14 : "Абрам Архипов, «Женщина в красном» (1920-е годы) — яркая работа русского художника, представителя реализма. На картине изображена крестьянка в красном сарафане, что подчёркивает её силу, жизнерадостность и связь с народной культурой. Картина находится в коллекции Государственной Третьяковской галереи в Москве.",
    15 : "Филипп Малявин, «Вихрь» (1906) — одна из самых выразительных работ художника, написанная в стиле модерн с элементами экспрессионизма. На картине изображён динамичный хоровод крестьянских девушек в ярких сарафанах, создающий ощущение движения и энергии. Работа находится в Государственном Русском музее в Санкт-Петербурге.",
    16 : "Рене Магритт, «Сын человеческий» (1964) — одна из самых узнаваемых работ бельгийского художника-сюрреалиста. На картине изображён мужчина в котелке и чёрном пальто, лицо которого скрыто парящим зелёным яблоком. Работа символизирует загадочность человеческой природы, скрытые истины и противоречия между видимым и реальным. Картина находится в частной коллекции, но её репродукции широко известны по всему миру.",
    17 : "Антонис ван Дейк, «Портрет молодого человека» (около 1620-х годов) — работа фламандского художника, мастера портретной живописи эпохи барокко. На картине изображён элегантный юноша с выразительным взглядом, что подчёркивает мастерство ван Дейка в передаче характера и эмоций. Работа хранится в коллекции Государственного Эрмитажа в Санкт-Петербурге.",
    18 : "Василий Кандинский, «Круги в круге» (1923) — одна из ключевых работ художника, созданная в период его преподавания в Баухаузе. Картина выполнена в абстрактном стиле и представляет собой композицию из геометрических форм, где круги разных цветов и размеров взаимодействуют внутри большого круга. Работа символизирует гармонию, бесконечность и единство вселенной. Картина находится в коллекции Филадельфийского музея искусств (США).",
    19 : "Бэнкси, «Метатель цветов» (2005) — одна из самых известных работ британского уличного художника. На изображении человек в маске и с капюшоном, вместо коктейля Молотова, бросает букет цветов. Работа символизирует протест против насилия и призыв к миру, сочетая в себе активизм и иронию. Этот образ стал культовым и часто воспроизводится в различных формах уличного искусства. Оригинальная работа находится в Иерусалиме, но её репродукции можно встретить по всему миру.",
    20 : "Фред Каллери (род. 1964) — современный художник, известный романтическими и эмоциональными работами в стиле фигуративизма. Его картины часто изображают женские образы и природу, сочетая реализм с поэтической атмосферой. Работы выставляются в галереях по всему миру.",
    21 : "Сальвадор Дали, «Постоянство памяти» (1931) — одна из самых знаменитых работ художника, созданная в стиле сюрреализма. На картине изображены мягкие, плавящиеся часы, лежащие на фоне пустынного пейзажа. Работа символизирует относительность времени и его субъективное восприятие. Картина находится в Музее современного искусства (MoMA) в Нью-Йорке.",
    22 : ""
}

const swiper = new Swiper('.swiper-container', {
    // Настройки слайдера
    // loop: true, // Бесконечный слайдер
    // autoplay: {
    //     delay: 3000, // Автоматическое переключение каждые 3 секунды
    // },
    pagination: {
        el: '.swiper-pagination', // Элемент для пагинации
        clickable: true, // Возможность переключать слайды по клику на точки
    },
    navigation: {
        nextEl: '.swiper-button-next', // Кнопка "вперед"
        prevEl: '.swiper-button-prev', // Кнопка "назад"
    },
    on: {
        slideChange: function () {
            const title = document.getElementById('slide-title');
            content.innerHTML = dictionary[this.activeIndex + 1];
            console.log(this.activeIndex + 1)
        },
    },
});

function showInfo() {
    if (content.style.display === 'none') {
        content.style.display = 'flex'; // Показываем элемент
    } else {
        content.style.display = 'none'; // Скрываем элемент
    }
}