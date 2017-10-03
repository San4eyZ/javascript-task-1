/* eslint-disable linebreak-style */
/* eslint max-depth: ["error", 3] */
'use strict';

function isInInterval(n, a, b) {
    return n >= a && n <= b;
}

function isCorrectTime(time) {
    let [hours, minutes] = time.split(':');
    if (parseInt(hours) !== Number(hours) || !isInInterval(Number(hours), 0, 23)) {
        throw new TypeError();
    }
    if (parseInt(minutes) !== Number(minutes) || !isInInterval(Number(minutes), 0, 59)) {
        throw new TypeError();
    }

    return true;
}

function arabicToRoman(number) {
    let romans = {
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    if (!number) {
        return 'N';
    }
    let roman = '';
    for (let letter in romans) {
        if (Object.prototype.hasOwnProperty.call(romans, letter)) {
            while (number >= romans[letter]) {
                roman += letter;
                number -= romans[letter];
            }
        }
    }

    return roman;
}

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function romanTime(time) {
    let timeArray = time.split(':');
    if (timeArray.length !== 2) {
        throw new TypeError();
    }
    isCorrectTime(time);
    timeArray = timeArray.map(x => arabicToRoman(Number(x)));

    return timeArray.join(':');
}

module.exports = romanTime;

