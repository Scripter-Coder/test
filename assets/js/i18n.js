/* ============================================================================
   Aurora Mini-Hotel — translations
   ----------------------------------------------------------------------------
   How to add a language:
     1. Add an entry to LANGS:  { code: 'de', name: 'Deutsch', flag: 'de' }
     2. Copy the `en` block, translate the values, change the key to your code.
     3. Add <li><button data-set-lang="de">…</button></li> in index.html.
   Keys starting with a language code that is missing fall back to English.
   ========================================================================== */

const LANGS = {
  it: { code: 'it', name: 'Italiano',  flag: 'it' },
  en: { code: 'en', name: 'English',  flag: 'en' },
  ru: { code: 'ru', name: 'Русский',  flag: 'ru' },
  uk: { code: 'uk', name: 'Українська', flag: 'uk' },
  de: { code: 'de', name: 'Deutsch',  flag: 'de' },
  fr: { code: 'fr', name: 'Français', flag: 'fr' },
  es: { code: 'es', name: 'Español',  flag: 'es' }
};

const I18N = {

/* ================================== ITALIAN ================================= */
it: {
  meta: {
    title: 'Aurora Mini-Hotel — Appartamento giornaliero a Mondragone',
    description: 'Appartamento giornaliero a Mondragone. Due camere separate, cucina, soggiorno, bagno e cortile privato per il tè.'
  },
  a11y: { skip: 'Salta al contenuto' },
  brand: { name: 'AURORA', sub: 'mini-hotel' },
  lang: { code: 'IT', switch: 'Cambia lingua' },
  nav: { rooms: 'Camere', amenities: 'Servizi', offers: 'Offerte', reviews: 'Recensioni', contacts: 'Contatti' },
  header: { phone1: '+39 379 140 9369', phone2: '' },

  hero: {
    badge: 'Appartamento giornaliero · Mondragone',
    title: 'DAILY RENT APARTMENT IN MONDRAGON',
    kicker: '',
    i1: 'Centro città',
    i2: 'Parcheggio',
    i3: 'Appartamento con nuova ristrutturazione',
    i4: 'Patio accogliente per barbecue',
    i5: 'Due camere separate',
    stat1: 'valutazione ospiti',
    stat2: 'ospiti felici',
    stat3: 'min al centro',
    cardTitle: '',
    cardText: '',
    btnBook: '',
    btnLearn: '',
    meta1: 'Fermata bus 3 minuti',
    meta2: '',
    scroll: 'Scorri'
  },

  rooms: {
    label: 'Alloggio',
    title: 'Scegli la tua camera',
    lead: 'Ogni appartamento è privato, appena pulito e pronto all\'arrivo.',
    n1: 'Double 1', d1: 'Appartamento con due camere, tre letti, cucina, soggiorno, bagno e cortile privato per il tè. Lato tranquillo e soleggiato della casa — perfetto per un breve viaggio.',
    area: '55 m²', guests: '2-7 ospiti', floor: '1° piano',
    from: '', price: '', perNight: '', cta: 'Ottieni il prezzo'
  },

  am: {
    label: 'Servizi',
    title: 'Rendiamo confortevole il tuo soggiorno nella nostra città',
    a1: '', a2: 'Parcheggio gratuito', a3: 'Pulizia', a4: 'Wi-Fi',
    a5: '', a6: 'Acqua potabile', a7: 'Frigo & microonde', a8: 'Caffè & tè',
    shower: 'Doccia', bed: 'Letto', wifi: 'Wi-Fi', safe: '', tv: '', ac: 'Aria condizionata', kettle: 'Bollitore', breakfast: 'Colazione', sofa: 'Soggiorno'
  },

  promo: {
    title: 'Prenota per più di 2 notti',
    sub: 'e risparmia il 10%',
    sub2: 'del tuo soggiorno'
  },

  form: {
    name: 'Il tuo nome',
    phone: 'Il tuo telefono',
    submit: 'Invia',
    note: 'Ti chiameremo entro 15 minuti e non condivideremo mai il tuo numero.',
    ok: 'Grazie! La tua richiesta è stata inviata — ti contatteremo a breve.'
  },

  tour: {
    label: 'Video',
    title: 'Dai un\'occhiata prima di arrivare',
    lead: 'Un breve tour dell\'appartamento, delle camere e del cortile.',
    hint: 'Video tour',
    chip: 'Video tour · 0:35'
  },

  rv: {
    label: 'Recensioni',
    title: 'Cosa dicono i nostri ospiti',
    src: 'Fonte',
    r1n: '', r1: '', r1d: '',
    r2n: '', r2: '', r2d: '',
    r3n: '', r3: '', r3d: '',
    r4n: '', r4: '', r4d: ''
  },

  of: {
    label: 'Offerte',
    title: 'Offerte speciali',
    t1: '−15%', t2: '−25%', t3: '',
    n1: 'Prenotazione anticipata', d1: 'Non lasciare per l\'ultimo momento. Prenota almeno 15 giorni prima dell\'arrivo e ottieni <b>il 15% di sconto</b> su tutto il soggiorno.',
    n2: 'Tariffa notturna', d2: 'La scelta migliore quando hai bisogno solo di poche ore. <b>Condizioni: soggiorno dalle 22:00 alle 09:00.</b>',
    n3: '', d3: '',
    cta: 'Prenota questa offerta'
  },

  ct: {
    label: 'Contatti',
    title: 'Restiamo in contatto',
    mapOpen: 'Apri in Google Maps',
    phoneLbl: 'Telefono',
    emailLbl: 'Email',
    addrLbl: 'Indirizzo',
    addr: 'Italia, Città Mondragone, Via S. Razzino, 20',
    hoursLbl: '',
    hours: '',
    q: 'Hai ancora domande?',
    q2: 'Ti risponderemo',
    cta: 'Prenota una consulenza con i nostri specialisti'
  },

  ftr: {
    title: '',
    sub: '',
    rights: 'Tutti i diritti riservati.',
    made: 'Fatto con cura · ospitato su Cloudflare'
  },

  chat: { txt: 'Domande? Scrivici' },

  m: {
    title: 'Prenota una camera',
    sub: 'Lascia i tuoi dati e il manager ti chiamerà a breve.',
    btn: 'Ottieni il regalo',
    vTitle: 'Video tour',
    vSub: 'Il video verrà riprodotto qui.',
    vBtn: 'Chiudi'
  },

  ph: {
    hero: 'Sfondo principale · 1920×1280',
    room1: 'Double 1 · foto', room2: 'Double 2 · foto', room3: 'Economy · foto', room4: 'Semi-deluxe · foto',
    promo: 'Sfondo promozione · 1600×900',
    badge: 'Premio · 600×600',
    video: 'Video tour · 1920×1080',
    map: 'Google Maps embed',
    offer1: 'Offerta · 800×500', offer2: 'Offerta · 800×500', offer3: 'Offerta · 800×500'
  }
},

/* ================================== ENGLISH ================================= */
en: {
  meta: {
    title: 'Aurora Mini-Hotel — Boutique hotel in Zaporizhzhia',
    description: 'Boutique mini-hotel in Zaporizhzhia. Five comfortable rooms, private bathroom, fast Wi-Fi, free parking and a wood-fired steam room.'
  },
  a11y: { skip: 'Skip to content' },
  brand: { name: 'AURORA', sub: 'mini-hotel' },
  lang: { code: 'EN', switch: 'Change language' },
  nav: { rooms: 'Rooms', amenities: 'Amenities', offers: 'Offers', reviews: 'Reviews', contacts: 'Contacts' },
  header: { phone1: '+38 067 000 00 00', phone2: '+38 050 000 00 00' },

  hero: {
    badge: 'Boutique mini-hotel · Zaporizhzhia',
    title: 'A mini-hotel in Zaporizhzhia',
    kicker: '5 comfortable rooms',
    i1: "We'll find a room that fits your budget",
    i2: 'Business travellers — full document package',
    i3: 'Breakfast and coffee included',
    i4: 'Free secured parking',
    i5: 'Wood-fired steam room + steam generator',
    stat1: 'guest rating',
    stat2: 'happy guests',
    stat3: 'min to the centre',
    cardTitle: 'Book a room',
    cardText: 'Leave your details and the manager will call you back within 15 minutes.',
    btnBook: 'Book a room',
    btnLearn: 'Learn more',
    meta1: '3 km from the railway station',
    meta2: '24/7 reception',
    scroll: 'Scroll'
  },

  rooms: {
    label: 'Accommodation',
    title: 'Choose your room',
    lead: 'Every room is private, freshly cleaned and ready on arrival. The price depends on the category and the length of the stay.',
    n1: 'Double 1', d1: 'A double room with one bed and its own bathroom. A quiet, sunny side of the house — perfect for a short city break.',
    n2: 'Double 2', d2: 'A renovated double with a king-size bed, a work desk and a balcony facing the courtyard. Blackout curtains and a quiet air conditioner.',
    n3: 'Economy twin', d3: 'Two separate beds and everything you need for an overnight stay, plus a small wardrobe. The best price per guest in the hotel.',
    n4: 'Semi-deluxe', d4: 'The largest room in the hotel: a king bed, a living corner, a wide bathroom and a view of the city. Extra bedding on request.',
    area: '25 m²', area2: '28 m²', area3: '18 m²', area4: '40 m²',
    guests: '2 guests', guests2: '2 guests', guests3: '2–3 guests',
    floor: '2nd floor', floor1: '1st floor', floor3: '3rd floor', floor4: '4th floor',
    from: 'from', price: '$24', price2: '$29', price3: '$19', price4: '$39',
    perNight: '/ night',
    cta: 'Get the price'
  },

  am: {
    label: 'Amenities',
    title: "We'll make your stay comfortable in our city",
    a1: '24/7 reception', a2: 'Free parking', a3: 'Cleanliness', a4: 'Wi-Fi',
    a5: 'Cable TV', a6: 'Drinking water', a7: 'Fridge & microwave', a8: 'Coffee & tea',
    shower: 'Shower', bed: 'Bed', wifi: 'Wi-Fi', safe: 'Safe', tv: 'TV',
    ac: 'Air conditioning', kettle: 'Kettle', breakfast: 'Breakfast', sofa: 'Living corner'
  },

  promo: {
    title: 'Book for more than 2 nights',
    sub: 'and save 10%',
    sub2: 'of your stay'
  },

  form: {
    name: 'Your name',
    phone: 'Your phone',
    submit: 'Send',
    note: "We'll call you back within 15 minutes and never share your number.",
    ok: "Thanks! Your request has been sent — we'll be in touch shortly."
  },

  aw: {
    label: 'Recognition',
    title: 'We received an award',
    text: 'Best hotel by guest reviews 2019. More than 80% of our guests come back and recommend us to their friends — the strongest measure of reliability and quality in our work.',
    s1: 'return guests',
    s2: 'average score',
    s3: 'award year',
    ribbon: "Traveller's Choice",
    score: 'Best hotel in the region'
  },

  tour: {
    label: 'Video',
    title: 'Take a look around before you arrive',
    lead: 'A short walkthrough of the rooms, the lobby and the steam room. Shot in 4K, about 90 seconds long.',
    hint: 'Video placeholder · drop tour.mp4 into assets/video/',
    chip: 'Video tour · 1:32'
  },

  rv: {
    label: 'Reviews',
    title: 'What our guests say',
    src: 'Source',
    r1n: 'Olena K.', r1: 'Very clean room, hot water and a kettle in the room. We checked in at 2am and the night receptionist met us without any delay.', r1d: 'March 2025',
    r2n: 'Dmytro V.', r2: 'I stayed three nights on a business trip. They prepared the full document package and issued the invoice without any questions.', r2d: 'February 2025',
    r3n: 'Iryna M.', r3: 'The steam room is the real highlight. We also used the free parking — the car stayed in a lit yard the whole time.', r3d: 'January 2025',
    r4n: 'Serhii L.', r4: 'Great location, three minutes on foot to the main avenue. The breakfast and the lobby coffee machine are a nice bonus.', r4d: 'December 2024'
  },

  of: {
    label: 'Offers',
    title: 'Special offers',
    t1: '−20%', t2: '−15%', t3: '−25%',
    n1: 'Happy hours',   d1: 'Every day from 11:00 to 18:00. <b>Three hours for the price of two.</b>',
    n2: 'Early booking', d2: 'Don\'t leave it for the last moment. Book at least 15 days before arrival and get <b>15% off</b> the whole stay.',
    n3: 'Night rate',    d3: 'The best choice when you only need a few hours. <b>Conditions: stay from 22:00 to 09:00.</b>',
    cta: 'Book this offer'
  },

  ct: {
    label: 'Contacts',
    title: 'Get in touch',
    mapOpen: 'Open in Google Maps',
    phoneLbl: 'Phone',
    emailLbl: 'Email',
    addrLbl: 'Address',
    addr: '77 Stolyarna St, Zaporizhzhia, Ukraine',
    hoursLbl: 'Reception',
    hours: '24 hours, every day',
    q: 'Still have questions?',
    q2: "We'll be glad to answer.",
    cta: 'Request a consultation'
  },

  ftr: {
    title: 'Need help with booking?',
    sub: 'Leave a request and we\'ll help you choose',
    rights: 'All rights reserved.',
    made: 'Made with care · hosted on Cloudflare'
  },

  chat: { txt: 'Questions? Write to us' },

  m: {
    title: 'Book a room',
    sub: 'Leave your details and the manager will call you back shortly.',
    btn: 'Get the gift',
    vTitle: 'Video tour',
    vSub: 'The video will play here. Drop tour.mp4 into assets/video/ and wire it up in main.js — see PLACEHOLDERS.md.',
    vBtn: 'Close'
  },

  /* Placeholder labels (used by the "add media later" blocks) */
  ph: {
    hero: 'Hero background · 1920×1280',
    room1: 'Double 1 · photo', room2: 'Double 2 · photo', room3: 'Economy · photo', room4: 'Semi-deluxe · photo',
    promo: 'Promo background · 1600×900',
    badge: 'Award badge · 600×600',
    video: 'Video placeholder · 1920×1080',
    map: 'Google Maps embed',
    offer1: 'Offer image · 800×500', offer2: 'Offer image · 800×500', offer3: 'Offer image · 800×500'
  }
},

/* =================================== RUSSIAN ================================ */
ru: {
  meta: {
    title: 'Мини-отель «Аврора» — бутик-отель в Запорожье',
    description: 'Мини-отель в Запорожье. Пять комфортабельных номеров, собственная ванная комната, быстрый Wi-Fi, бесплатная парковка и парная на дровах.'
  },
  a11y: { skip: 'Перейти к содержимому' },
  brand: { name: 'АВРОРА', sub: 'мини-отель' },
  lang: { code: 'RU', switch: 'Сменить язык' },
  nav: { rooms: 'Номера', amenities: 'Удобства', offers: 'Акции', reviews: 'Отзывы', contacts: 'Контакты' },
  header: { phone1: '+38 067 000 00 00', phone2: '+38 050 000 00 00' },

  hero: {
    badge: 'Бутик-мини-отель · Запорожье',
    title: 'Мини-отель в Запорожье',
    kicker: '5 комфортабельных номеров',
    i1: 'Подберём номер под ваш бюджет',
    i2: 'Командировочным — полный пакет документов',
    i3: 'Завтраки и кофе включены',
    i4: 'Бесплатная охраняемая парковка',
    i5: 'Парная на дровах + парогенератор',
    stat1: 'рейтинг гостей',
    stat2: 'довольных гостей',
    stat3: 'минут до центра',
    cardTitle: 'Забронировать номер',
    cardText: 'Оставьте заявку — менеджер перезвонит вам в течение 15 минут.',
    btnBook: 'Заказать номер',
    btnLearn: 'Узнать подробнее',
    meta1: '3 км от железнодорожного вокзала',
    meta2: 'Ресепшн 24/7',
    scroll: 'Листайте'
  },

  rooms: {
    label: 'Проживание',
    title: 'Выберите ваш номер',
    lead: 'Каждый номер отдельный, свежеубранный и готов к заселению. Цена зависит от категории и длительности проживания.',
    n1: 'Двухместный 1', d1: 'Двухместный номер с одной кроватью и собственной ванной комнатой. Тихая солнечная сторона дома — отлично для короткой поездки.',
    n2: 'Двухместный 2', d2: 'Отремонтированный двухместный номер с кроватью king-size, рабочим столом и балконом во двор. Затемняющие шторы и тихий кондиционер.',
    n3: 'Эконом 2-х мест', d3: 'Две отдельные кровати и всё, что нужно для ночёвки, плюс небольшой шкаф. Лучшая цена за гостя в отеле.',
    n4: 'Полу-люкс', d4: 'Самый большой номер в отеле: кровать king, гостиный уголок, просторная ванная и вид на город. Дополнительное бельё — по запросу.',
    area: '25 м²', area2: '28 м²', area3: '18 м²', area4: '40 м²',
    guests: '2 гостя', guests2: '2 гостя', guests3: '2–3 гостя',
    floor: '2 этаж', floor1: '1 этаж', floor3: '3 этаж', floor4: '4 этаж',
    from: 'от', price: '1 100 ₴', price2: '1 300 ₴', price3: '850 ₴', price4: '1 750 ₴',
    perNight: '/ ночь',
    cta: 'Узнать стоимость'
  },

  am: {
    label: 'Удобства',
    title: 'Обеспечим вам комфортное проживание в нашем городе',
    a1: 'Ресепшн 24/7', a2: 'Бесплатная парковка', a3: 'Чистота и порядок', a4: 'Wi-Fi',
    a5: 'Кабельное ТВ', a6: 'Питьевая вода', a7: 'Холодильник и микроволновка', a8: 'Кофе и чай',
    shower: 'Душ', bed: 'Кровать', wifi: 'Wi-Fi', safe: 'Сейф', tv: 'Телевизор',
    ac: 'Кондиционер', kettle: 'Чайник', breakfast: 'Завтрак', sofa: 'Гостиный уголок'
  },

  promo: {
    title: 'Забронируйте более чем на 2 суток',
    sub: 'и сэкономьте 10%',
    sub2: 'своих расходов'
  },

  form: {
    name: 'Ваше имя',
    phone: 'Ваш телефон',
    submit: 'Отправить',
    note: 'Перезвоним в течение 15 минут. Ваш номер никогда не передаём третьим лицам.',
    ok: 'Спасибо! Заявка отправлена — скоро свяжемся с вами.'
  },

  aw: {
    label: 'Награда',
    title: 'Мы получили награду',
    text: 'Лучший отель по отзывам гостей 2019. Более 80% гостей возвращаются к нам и рекомендуют друзьям — это лучший показатель надёжности и качества нашей работы.',
    s1: 'возвращаются снова',
    s2: 'средняя оценка',
    s3: 'год награды',
    ribbon: 'Выбор путешественников',
    score: 'Лучший отель в регионе'
  },

  tour: {
    label: 'Видео',
    title: 'Посмотрите на отель до приезда',
    lead: 'Короткий обзор номеров, холла и парной. Снято в 4K, примерно 90 секунд.',
    hint: 'Заглушка видео · положите tour.mp4 в assets/video/',
    chip: 'Видеообзор · 1:32'
  },

  rv: {
    label: 'Отзывы',
    title: 'Что говорят наши гости',
    src: 'Источник',
    r1n: 'Елена К.', r1: 'Очень чистый номер, горячая вода и чайник в комнате. Заселялись в 2 часа ночи — ночной администратор встретил нас сразу.', r1d: 'Март 2025',
    r2n: 'Дмитрий В.', r2: 'Жил три дня в командировке. Полный пакет документов подготовили, счёт выставили без лишних вопросов.', r2d: 'Февраль 2025',
    r3n: 'Ирина М.', r3: 'Настоящая жемчужина — парная на дровах. Плюс бесплатная парковка: машина всё время стояла на освещённой территории.', r3d: 'Январь 2025',
    r4n: 'Сергей Л.', r4: 'Отличное расположение — три минуты пешком до главного проспекта. Завтраки и кофемашина в лобби — приятный бонус.', r4d: 'Декабрь 2024'
  },

  of: {
    label: 'Акции',
    title: 'Спецпредложения',
    t1: '−20%', t2: '−15%', t3: '−25%',
    n1: 'Счастливые часы',   d1: 'Каждый день с 11:00 до 18:00. <b>Три часа по цене двух.</b>',
    n2: 'Раннее бронирование', d2: 'Не откладывайте бронирование на последний момент. Забронируйте за 15 дней до заезда и получите <b>скидку 15%</b> на весь период проживания.',
    n3: 'Ночной тариф',    d3: 'Лучший вариант, когда нужно остановиться на несколько часов. <b>Условия: проживание с 22:00 до 09:00.</b>',
    cta: 'Забронировать'
  },

  ct: {
    label: 'Контакты',
    title: 'Свяжитесь с нами',
    mapOpen: 'Открыть в Google Maps',
    phoneLbl: 'Телефон',
    emailLbl: 'E-mail',
    addrLbl: 'Адрес',
    addr: 'Украина, г. Запорожье, ул. Столярная, 77',
    hoursLbl: 'Ресепшн',
    hours: 'Круглосуточно, каждый день',
    q: 'Остались вопросы?',
    q2: 'С удовольствием ответим!',
    cta: 'Заказать консультацию'
  },

  ftr: {
    title: 'Нужна помощь в бронировании?',
    sub: 'Оставьте заявку и мы поможем с выбором',
    rights: 'Все права защищены.',
    made: 'Сделано с заботой · хостинг Cloudflare'
  },

  chat: { txt: 'Есть вопросы? Напишите нам' },

  m: {
    title: 'Забронировать номер',
    sub: 'Оставьте заявку, и менеджер свяжется с вами в ближайшее время.',
    btn: 'Получить подарок',
    vTitle: 'Видеообзор отеля',
    vSub: 'Здесь будет видео. Положите tour.mp4 в assets/video/ и подключите его в main.js — см. PLACEHOLDERS.md.',
    vBtn: 'Закрыть'
  },

  ph: {
    hero: 'Фон главного экрана · 1920×1280',
    room1: 'Двухместный 1 · фото', room2: 'Двухместный 2 · фото', room3: 'Эконом · фото', room4: 'Полу-люкс · фото',
    promo: 'Фон акции · 1600×900',
    badge: 'Награда · 600×600',
    video: 'Заглушка видео · 1920×1080',
    map: 'Карта Google Maps',
    offer1: 'Карточка акции · 800×500', offer2: 'Карточка акции · 800×500', offer3: 'Карточка акции · 800×500'
  }
},

/* ================================== UKRAINIAN ============================== */
uk: {
  meta: {
    title: 'Міні-готель «Аврора» — бутик-готель у Запоріжжі',
    description: "Міні-готель у Запоріжжі. П'ять комфортабельних номерів, власна ванна кімната, швидкий Wi-Fi, безкоштовна парковка та парня на дровах."
  },
  a11y: { skip: 'Перейти до вмісту' },
  brand: { name: 'АВРОРА', sub: 'міні-готель' },
  lang: { code: 'UA', switch: 'Змінити мову' },
  nav: { rooms: 'Номери', amenities: 'Зручності', offers: 'Акції', reviews: 'Відгуки', contacts: 'Контакти' },
  header: { phone1: '+38 067 000 00 00', phone2: '+38 050 000 00 00' },

  hero: {
    badge: 'Бутик-міні-готель · Запоріжжя',
    title: 'Міні-готель у Запоріжжі',
    kicker: '5 комфортабельних номерів',
    i1: 'Підберемо номер під ваш бюджет',
    i2: 'Відрядженцям — повний пакет документів',
    i3: 'Сніданки та кава включені',
    i4: 'Безкоштовна охоронна парковка',
    i5: 'Парня на дровах + парогенератор',
    stat1: 'рейтинг гостей',
    stat2: 'задоволених гостей',
    stat3: 'хвилин до центру',
    cardTitle: 'Забронювати номер',
    cardText: 'Залиште заявку — менеджер передзвонить протягом 15 хвилин.',
    btnBook: 'Замовити номер',
    btnLearn: 'Дізнатися більше',
    meta1: '3 км від залізничного вокзалу',
    meta2: 'Рецепція 24/7',
    scroll: 'Гортайте'
  },

  rooms: {
    label: 'Проживання',
    title: 'Оберіть ваш номер',
    lead: 'Кожен номер окремий, свіжоприбраний і готовий до заселення. Ціна залежить від категорії та тривалості проживання.',
    n1: 'Двозмісний 1', d1: 'Двозмісний номер з одним ліжком і власною ванною кімнатою. Тиха сонячна сторона будинку — ідеально для короткої поїздки.',
    n2: 'Двозмісний 2', d2: 'Відремонтований двозмісний номер із ліжком king-size, робочим столом і балконом у двір. Затемнювальні штори й тихий кондиціонер.',
    n3: 'Економ 2-місний', d3: 'Дві окремі ліжка і все необхідне для ночівлі, плюс невелика шафа. Найкраща ціна за гостя в готелі.',
    n4: 'Напівлюкс', d4: 'Найбільший номер у готелі: ліжко king, вітальня куток, простора ванна та вид на місто. Додаткову білизню — за запитом.',
    area: '25 м²', area2: '28 м²', area3: '18 м²', area4: '40 м²',
    guests: '2 гості', guests2: '2 гості', guests3: '2–3 гості',
    floor: '2 поверх', floor1: '1 поверх', floor3: '3 поверх', floor4: '4 поверх',
    from: 'від', price: '1 100 ₴', price2: '1 300 ₴', price3: '850 ₴', price4: '1 750 ₴',
    perNight: '/ ніч',
    cta: 'Дізнатися вартість'
  },

  am: {
    label: 'Зручності',
    title: 'Забезпечимо вам комфортне проживання в нашому місті',
    a1: 'Рецепція 24/7', a2: 'Безкоштовна парковка', a3: 'Чистота і порядок', a4: 'Wi-Fi',
    a5: 'Кабельне ТБ', a6: 'Питна вода', a7: 'Холодильник і мікрохвильова', a8: 'Кава та чай',
    shower: 'Душ', bed: 'Ліжко', wifi: 'Wi-Fi', safe: 'Сейф', tv: 'Телевізор',
    ac: 'Кондиціонер', kettle: 'Чайник', breakfast: 'Сніданок', sofa: 'Вітальня куток'
  },

  promo: {
    title: 'Забронюйте більше ніж на 2 доби',
    sub: 'і зекономите 10%',
    sub2: 'своїх витрат'
  },

  form: {
    name: "Ваше ім'я",
    phone: 'Ваш телефон',
    submit: 'Надіслати',
    note: 'Передзвонимо протягом 15 хвилин. Ваш номер ніколи не передаємо третім особам.',
    ok: 'Дякуємо! Заявку надіслано — скоро зв\'яжемося з вами.'
  },

  aw: {
    label: 'Нагорода',
    title: 'Ми отримали нагороду',
    text: 'Найкращий готель за відгуками гостей 2019. Понад 80% гостей повертаються до нас і рекомендують друзям — це найкращий показник надійності та якості нашої роботи.',
    s1: 'повертаються знову',
    s2: 'середня оцінка',
    s3: 'рік нагороди',
    ribbon: 'Вибір мандрівників',
    score: 'Найкращий готель у регіоні'
  },

  tour: {
    label: 'Відео',
    title: 'Погляньте на готель до приїзду',
    lead: 'Короткий огляд номерів, холу та парні. Знято в 4K, приблизно 90 секунд.',
    hint: 'Заглушка відео · покладіть tour.mp4 у assets/video/',
    chip: 'Відеоогляд · 1:32'
  },

  rv: {
    label: 'Відгуки',
    title: 'Що кажуть наші гості',
    src: 'Джерело',
    r1n: 'Олена К.', r1: 'Дуже чистий номер, гаряча вода та чайник у кімнаті. Заселялися о 2-й ночі — нічний адміністратор зустрів нас одразу.', r1d: 'Березень 2025',
    r2n: 'Дмитро В.', r2: 'Жив три дні у відрядженні. Повний пакет документів підготували, рахунок виставили без зайвих питань.', r2d: 'Лютий 2025',
    r3n: 'Ірина М.', r3: 'Справжня перлина — парня на дровах. Плюс безкоштовна парковка: авто весь час стояло на освітленій території.', r3d: 'Січень 2025',
    r4n: 'Сергій Л.', r4: 'Чудове розташування — три хвилини пішки до головного проспекту. Сніданки та кавомашина в лобі — приємний бонус.', r4d: 'Грудень 2024'
  },

  of: {
    label: 'Акції',
    title: 'Спецпропозиції',
    t1: '−20%', t2: '−15%', t3: '−25%',
    n1: 'Щасливі години',   d1: 'Щодня з 11:00 до 18:00. <b>Три години за ціною двох.</b>',
    n2: 'Раннє бронювання', d2: 'Не відкладайте бронювання на останній момент. Забронюйте за 15 днів до заїзду та отримайте <b>знижку 15%</b> на весь період проживання.',
    n3: 'Нічний тариф',    d3: 'Найкращий варіант, коли потрібно зупинитися на кілька годин. <b>Умови: проживання з 22:00 до 09:00.</b>',
    cta: 'Забронювати'
  },

  ct: {
    label: 'Контакти',
    title: "Зв'яжіться з нами",
    mapOpen: 'Відкрити в Google Maps',
    phoneLbl: 'Телефон',
    emailLbl: 'E-mail',
    addrLbl: 'Адреса',
    addr: 'Україна, м. Запоріжжя, вул. Столярна, 77',
    hoursLbl: 'Рецепція',
    hours: 'Цілодобово, щодня',
    q: 'Залишилися питання?',
    q2: 'Із задоволенням відповімо!',
    cta: 'Замовити консультацію'
  },

  ftr: {
    title: 'Потрібна допомога з бронюванням?',
    sub: 'Залиште заявку і ми допоможемо з вибором',
    rights: 'Усі права захищені.',
    made: 'Зроблено з турботою · хостинг Cloudflare'
  },

  chat: { txt: 'Є питання? Напишіть нам' },

  m: {
    title: 'Забронювати номер',
    sub: 'Залиште заявку, і менеджер зв\'яжеться з вами найближчим часом.',
    btn: 'Отримати подарунок',
    vTitle: 'Відеоогляд готелю',
    vSub: 'Тут буде відео. Покладіть tour.mp4 у assets/video/ та підключіть його в main.js — див. PLACEHOLDERS.md.',
    vBtn: 'Закрити'
  },

  ph: {
    hero: 'Головний фон · 1920×1280',
    room1: 'Двозмісний 1 · фото', room2: 'Двозмісний 2 · фото', room3: 'Економ · фото', room4: 'Напівлюкс · фото',
    promo: 'Фон акції · 1600×900',
    badge: 'Нагорода · 600×600',
    video: 'Заглушка відео · 1920×1080',
    map: 'Карта Google Maps',
    offer1: 'Картка акції · 800×500', offer2: 'Картка акції · 800×500', offer3: 'Картка акції · 800×500'
  }
}

};