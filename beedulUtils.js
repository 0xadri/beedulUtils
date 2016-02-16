/*
 * Module strategy based on :
 *  - comment of Maciej Baron on www.impressivewebs.com/my-current-javascript-design-pattern
 *  - presentation from Paul Irish https://www.youtube.com/watch?v=i_qE1iAmjFg
 *
 * Created by: Adrien Berthou
 */
// requires charUtils
;(function(beedulUtils, window, document, undefined) {

    beedulUtils.ESCAPE = 27;

    beedulUtils.isEmptyString = function(str) {
        return (!str || 0 === str.length);
    };

    beedulUtils.isBlankString = function(str) {
        return (!str || !str.replace(/ /g, ''));
    };

    beedulUtils.containsString = function(str,substring) {
        return (str.indexOf(substring) > -1);
    };

    beedulUtils.removeDiacriticsFromString = function(aString) {
        return aString.replace(/[^\u0000-\u007E]/g, function(currentChar){
            return charUtils.removeDiacriticFromCharacterIfAny(currentChar)
        });
    };

    // beedulUtils.hasOnlyAlphabeticalCharacters = function(aString) { return /^[a-zA-Z]*$/.exec(aCharacter)	};

    beedulUtils.isNumericString = function(str) {
        return (str && (/^\d+$/m).test(str));
    };

    beedulUtils.isNumeric = function(num) {
        return !isNaN(num)
    };

    beedulUtils.strictConvertToNumber = function(num) {
        return +num
    };

    beedulUtils.isInputValNumericAndInteger = function(enteredValue) {
        if (beedulUtils.isNumeric(enteredValue)) {
            var valueAsNumber = beedulUtils.strictConvertToNumber(enteredValue);
            if (valueAsNumber === parseInt(valueAsNumber)) {
                return true;
            }
        }
        return false;
    };

    beedulUtils.isPositiveAndNotZero = function(enteredValue) {
        if (beedulUtils.strictConvertToNumber(enteredValue) >= 1) {
            return true;
        }
        return false;
    };

    beedulUtils.convertEuropeanDateStringToUsaDateFormat = function(euroFormatDateAsString) {
        euroFormatDateAsString = euroFormatDateAsString.split('/');
        usa_date = euroFormatDateAsString.reverse().join('/');
        return new Date(usa_date);
    };

    var getUrlParts = function(url){
        if( url.indexOf('?') === -1 ){
            return {
                urlStringWithoutParams : url,
                urlStringRest : ''
            };
        }
        else {
            return {
                urlStringWithoutParams : url.substring( 0, url.indexOf('?') ),
                urlStringRest : url.substring( url.indexOf('?') )
            };
        }
    };

    beedulUtils.addStringToUrl = function(url, stringToAdd){
        var urlParts = getUrlParts(url);
        return urlParts.urlStringWithoutParams + stringToAdd + urlParts.urlStringRest;
    }

}(window.beedulUtils = window.beedulUtils || {}, this, this.document));
