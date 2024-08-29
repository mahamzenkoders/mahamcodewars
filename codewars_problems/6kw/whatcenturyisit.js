function getCentury(year) {
    
    const yearNum = parseInt(year, 10);

    const centuryNum = Math.ceil(yearNum / 100);

    let suffix;
    const lastDigit = centuryNum % 10;
    const lastTwoDigits = centuryNum % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        suffix = 'th'; 
    } else {
        switch (lastDigit) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
                break;
        }
    }

    
    return `${centuryNum}${suffix}`;
}


console.log(getCentury("1999")); 
console.log(getCentury("2011")); 
console.log(getCentury("2154")); 
console.log(getCentury("2259")); 
console.log(getCentury("1124")); 
console.log(getCentury("2000")); 
