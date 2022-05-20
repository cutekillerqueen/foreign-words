// Components
const mainSelect = document.querySelector('#langs')
const submit = document.querySelector('.submit')
const mainOut = document.querySelector('.out')

// Langs
const engToRu = ['Serve', 'Deserve', 'Notice', 'Influence', 'Insisting', 'Respond', 'Claim', 'Casual', 'Involved', 'Repair', 'Scratch', 'Bring', 'Chores', 'Really', 'Hint', 'Groceries', 'Enough', 'Mess', 'Worth', 'Bunch', 'Messing around', 'Straight', 'Contagious', 'Recognize', 'Hilarious', 'Reach', 'Reschedule', 'Above', 'Either', 'Ridiculous', 'Rather than...', 'Instead', 'Blow', 'Amount', 'Overload', 'Ancentors', 'Exist', 'Apparently', "Y'all", 'Except', 'Suddenly', 'Suppose', 'Pleasure', "Ain't", 'Pressure', 'Unfortunately', 'Accuser', 'Recant', 'Admit', 'Action', 'Obvious', 'Instant', 'Case', 'Figure it out', 'Neither', 'Raise', 'Get along with', 'Strength', 'Weakness', 'Find out', 'Caution', 'Complain', 'Be able', 'Satisfy', 'Appreciate', 'Swear', 'For a while', 'Assume', 'Rise', 'Possible']
const ruToEng = ['Обслуживать', 'Заслужить', 'Замечать', 'Оказать влияние', 'Настаивать', 'Реагировать', 'Отвечать / Ответить', 'Повседненая', 'Вовлеченный', 'Ремоет', 'Царапина', 'Приносить', 'Работа по дому', 'Очень / Правда', 'Намекать', 'Продукты', 'Достаточно', 'Беспорядок', 'Цена', 'Группа', 'Валять дурака', 'Прямо', 'Заразное', 'Узнавать / Признавать', 'Смешное', 'Достигать', 'Перенести (на какое-то время)', 'Выше (чего-то)', 'Либо', 'Смешно / Глупо', 'Нежели... / Скорее...', 'Вместо', 'Удар / Снести', 'Количество', 'Перезагрузить', 'Предки', 'Существовать', 'Очевидно', 'Вы все / Нааааароооод', 'Ожидать', 'Внезапно', 'Пологать', 'Удовольствие', 'Разве', 'Давление', 'К сожелению', 'Обвинение', 'Отказаться от', 'Признать', 'Действие', 'Очевидно', 'Мнговенно', 'Случий', 'Розбираться', 'Так же...', 'Поднять', 'Ладить', 'Сильная (сторона)', 'Слабая (сторона)', 'Узнать', 'Осторожно', 'Жаловаться', 'Быть в состоянии', 'Удовлетворить', 'Ценить', 'Клясться / Ругаться', 'На некоторое время', 'Предпологать / Брать на себя', 'Рости / Повышение', 'Возможно']
const frToRu = []
const ruToFr = []

// Word Piceker function
function wordPicker(array, arrayLength) {
    let randomWord = array[Math.floor(Math.random() * arrayLength)]
    let cutWord = array.indexOf(randomWord)
    let result = array.splice(cutWord, 1)

    if (arrayLength === 0) {
        return "That's all"
    } else {
        return result
    }
}

submit.addEventListener('click', function() {
    switch (mainSelect.value) {
        case 'eng-to-ru':
            mainOut.textContent = wordPicker(engToRu, engToRu.length)
            break;
        case 'ru-to-eng':
            mainOut.textContent = wordPicker(ruToEng, ruToEng.length)
            break;
        case 'fr-to-ru':
            mainOut.textContent = wordPicker(frToRu, frToRu.length)
            break;
        case 'ru-to-fr':
            mainOut.textContent = wordPicker(ruToFr, ruToFr.length)
            break;
    }
})