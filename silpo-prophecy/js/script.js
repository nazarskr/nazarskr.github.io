const prophecies = [
    'Просто розпочніть, далі все піде',
    'Жити - значить діяти!',
    'Ви на порозі важливих змін.',
    'доброго вечора, ми - з України.',
    'Оберігайте свою свободу.',
    'Дії без мети не мають значення.',
    'Удосконалюйте все, що ви робите.',
    'Зберігайте спокій і беріться за велику справу.',
    'Скоро життя стане цікавішим.',
    'Сьогодні вас хвалитимуть.',
    'Зірки на небі говорять вам «ТАК».',
    'доброго вечора, ми - з України.',
    'Для вас все складеться добре.',
    'русскій воєнний корабль, іді нах*й.',
    'Цінуйте та вдосконалюйте свою працю.',
    'Ви маєте сильний характер.',
    'Сміх - найкоротша відстань між людьми.',
    'русскій воєнний корабль, іді нах*й.',
    'У вас гарна сумісність з людьми.',
    'Задумане можна здійснити.',
    'Вам призначено досягти успіху.',
    'Ви практичні та надійні, знайте про це.',
    'русскій воєнний корабль, іді нах*й.',
    'Спокійно долайте всі перешкоди.',
    'У вас світле майбутнє.',
    'Ви завоюєте успіх у всьому.',
    'Не змінюйте вітер - регулюйте вітрила!',
    'Не здавайтесь - і ви не програєте!',
    'доброго вечора, ми - з України.',
    'Дивіться на речі простіше.',
    'Живіть у згоді з природою.',
    'Оптиміст у всьому бачить можливість.',
    'Будьте уважні - нові можливості на порозі!',
    'русскій воєнний корабль, іді нах*й.',
    'Щастить тому, хто вірить у своє щастя.',
    'Думайте про майбутнє.',
    'Живіть сьогоднішнім днем.',
    'Усі радіють вашій компанії.',
    'доброго вечора, ми - з України.',
    'Все змінюється на краще.',
    'Ваша особистість приваблює.',
    'русскій воєнний корабль, іді нах*й.',
    'Бажайте кожному добра.',
    'У вас загадкова душа.',
    'Ви маєте щастя і вдачу.',
    'Хочеш залишатися собою? Змінюйся!',
    'путін-хуйло.',
    'Будьте старанні.',
    'Помилки - це допомога в майбутньому.',
    'Любіть і поважайте себе. Ви - гідні!',
    'русскій воєнний корабль, іді нах*й.',
    'Ви сьогодні виглядаєте фантастично!',
    'На вас чекають щасливі часи.',
    'Хтось шукає щастя, ви його приносите.',
    'Ви на вірному шляху.',
    'доброго вечора, ми - з України.',
    'Хто багато діє, той багато мріє.',
    'Лягайте спати раніше',
    'незабаром побачите гарний фільм.',
    'русскій воєнний корабль, іді нах*й.',
    'свобода - нічого не боятися.',
    'тільки гуртом можна перемогти.',
    'будьте обережні з почуттями близьких.',
    'добрий початок - половина справи.',
    'кожен щасливий з таким другом, як ви.',
    'русскій воєнний корабль, іді нах*й.',
    'путін-хуйло.',
    'довіряйте  собі.',
    'далека мандрівка принесе нову зустріч.',
    'завтра буде ще краще.',
    'на вас чекає щасливий період.',
    'ви краще знаєте, коли погодитися',
    'русскій воєнний корабль, іді нах*й.',
    'вода камінь точить.',
    'так, це буде у наступний вівторок.',
    'не кажіть, що я вас попереджав.',
    'доброго вечора, ми - з України.',
    'звичайно, ви зможете!',
    'думайти про приємне.',
    'туалетного паперу вистачить на всіх!',
    'русскій воєнний корабль, іді нах*й.',
    'солі вистачить на всіх!',
    'гречки вистачить на всіх!',
    'макаронів вистачить на всіх!',
    'путін-хуйло.',
    'цукру вистачить на всіх!',
    'читайте книги!',
    'займайтесь саморозвитком.',
    'не панікуйте!',
    'на вас чекає любов.',
    'подякувати - ніколи не зайве.',
    'вам завжди щастить в особистому житті',
    'доброго вечора, ми - з України.',
    'ваша мрія здійсниться',
    'правильно оцінюйте свої можливості',
    'мудрість не має кінця.',
    'вчасно змінюйте свої принципи.',
    'вашу працю буде винагороджено.',
    'не переймайтеся, відповідь прийде сама!',
    'путін-хуйло.',
    'майте друзів, будете щасливим.',
    'не хвилюйтеся, на порозі!',
    'в коханих очах все бездоганно.',
    'для вашого щастя частіше мандруйте!',
    'алкоголь - не засіб від коронавірусу!',
    'не беріть багато речей у відпустку.',
    'сьогодні краще посиліть вдома.',
    'потрібен відпочинок? не чекайте на вихідні.',
    'доброго вечора, ми - з України.',
    'вам личить скромність.',
    'вірте тим, хто дивиться в очі.',
    'хтось захоплюється вами.',
    'мрія живе усередині вас!',
    'сильна людина говорить те, що думає.',
    'русскій воєнний корабль, іді нах*й.',
    'життя - узагалі річ малозрозуміла.',
    'відпочиньте хоча б пару годин',
    'останнім часом ви всіх дивуєте',
    'доброго вечора, ми - з України.',
    'бажайте обережно - може збутися.',
    'задумане можна здійснити',
    'спокійна людина завжди пізнає істину.',
    'путін-хуйло.',
    'цукор закінчується, мистецтво - вічне.',
    'гречка закінчується, мистецтво - вічне.',
    'сіль закінчується, мистецтво - вічне.',
    'макарони закінчуються, мистецтво - вічне.',
    'русскій воєнний корабль, іді нах*й.',
    'туалетний папір закінчується, мистецтво - вічне.',
    'шампунь закінчується, мистецтво - вічне.',
    'діліться знаннями з іншими',
    'у вас гарна посмішка',
    'карантин закінчується, мистецтво - вічне',
    'доброго вечора, ми - з України.',
    'гумор - ознака гідності',
    'сьогодні ви читаєте думки.',
    'прийміть рішення самостійно.',
    'хтось мріє про вашу увагу.',
    'русскій воєнний корабль, іді нах*й.',
    'час поприбирати вдома.',
    'найпростіша відповідь - дія.',
    'не розмірковуйте про життя, радійте йому!',
    'оберігайте свою свободу.',
    'так чи ні? так!',
    'всі обожнюють вашу творчу натуру.',
    'доброго вечора, ми - з України.',
    '20 березня у мене ДН.',
    'смачна їжа піднімає настрій.',
    'путін-хуйло.',
    'русскій воєнний корабль, іді нах*й.',
    'доброго вечора, ми - з України.',
];

const button = document.getElementById('button');
const preventRepeat = document.getElementById('preventRepeat');
const prophecyField = document.getElementById('prophecyText');

button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * prophecies.length);
    const newProphecy =  prophecies[random];
    prophecyField.innerHTML = newProphecy;
    console.log(newProphecy);
    preventRepeat.setAttribute('style', 'display: block');
    button.setAttribute('style', 'display: none');
})
