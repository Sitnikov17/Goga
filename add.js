let gov = prompt('Как тебя зовут?');

if (gov !== null) {
    gov.toLowerCase();
}

if (gov === null || gov === undefined || gov === '') {
    alert('ты пустой,ноль или андефайнд что ли?');
} else if (
    gov === 'гога' ||
    gov === 'гоша' ||
    gov === 'гошан' ||
    gov === 'игорь' ||
    gov === 'гоги'
) {
    let pok = prompt('Сколько раз тебе сказать спасибо?');
    for (let i = 0; i < pok; i++) {
        alert('Спасибо Гога');
    }
} else {
    alert('ты не гога иди отсюда, или пиши на русском');
}
