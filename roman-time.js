/* eslint-disable linebreak-style */
/* eslint max-depth: ["error", 3] */
/* eslint complexity: ["error", 7] */
'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */

function isCorrectTime(time) {
    let [hours, minutes] = time.split(':');
    if (parseInt(hours) !== Number(hours) || Number(hours) < 0 || Number(hours) > 23) {
        throw new TypeError();
    }
    if (parseInt(minutes) !== Number(minutes) || Number(minutes) < 0 || Number(minutes) > 59) {
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

function romanTime(time) {
    isCorrectTime(time);
    time = time.split(':');
    if (time.length !== 2) {
        throw new TypeError();
    }
    time = time.map(Number).map(arabicToRoman);

    return time.join(':');
}

module.exports = romanTime;

