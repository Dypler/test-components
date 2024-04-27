import { parse, isValid } from 'date-fns'

function parseDate(dateStr) { //надо бы вынести в отдельный файл и вызывать, чтобы в каждой компоненте не дублировать
    if (!dateStr) return null
    dateStr = dateStr.indexOf(':') >= 0 ? dateStr : dateStr + ' 00:00:00';
    const parsedDate = parse(dateStr, 'dd.MM.yyyy HH:mm:ss', new Date())
    return isValid(parsedDate) ? parsedDate : null
}

export function getDate(dateStart, dateEnd) { //надо бы вынести в отдельный файл и вызывать, чтобы в каждой компоненте не дублировать
    const startDate = parseDate(dateStart)
    const endDate = parseDate(dateEnd)
    const formatter = new Intl.DateTimeFormat('ru-RU', { month: 'long', day: 'numeric' })
    let dateDisplay = formatter.format(startDate)
    if (endDate) {
        const endFormatted = formatter.format(endDate)
        const sameMonth =
            startDate.getMonth() === endDate.getMonth() &&
            startDate.getFullYear() === endDate.getFullYear()
        dateDisplay = sameMonth
            ? `${startDate.getDate()} - ${endDate.getDate()} ${formatter.formatToParts(endDate).find((part) => part.type === 'month').value}`
            : `${dateDisplay} - ${endFormatted}`
    }
    return dateDisplay;
}

export function addToArrayWithDistinct(array, elem) {
    if (!array.includes(elem)) { // Проверяем, есть ли город в массиве
        array.push(elem); // Добавляем город, если его нет
    }
    console.log(array)
}


export const COMPONENTS = {
    API: 'http://tanin.phosagro.picom.su/api'
}