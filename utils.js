function formatNumber(num) {
    const suffixes = [
        { value: 1e3, symbol: 'K' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'B' },
        { value: 1e12, symbol: 'T' },
        { value: 1e15, symbol: 'Q' },
        { value: 1e18, symbol: 'Qt' }, // Quintillion
        { value: 1e21, symbol: 'S' },  // Sextillion
        { value: 1e24, symbol: 'Sp' }, // Septillion
        { value: 1e27, symbol: 'O' },  // Octillion
        { value: 1e30, symbol: 'N' },  // Nonillion
        { value: 1e33, symbol: 'D' },  // Decillion
        // Add more if needed
    ];

    for (let i = suffixes.length - 1; i >= 0; i--) {
        if (num >= suffixes[i].value) {
            let scaled = num / suffixes[i].value;
            // Remove trailing zeros
            let formatted = scaled.toFixed(2).replace(/\.0+|(\.[0-9]*[1-9])0+$/, '$1');
            return formatted + ' ' + suffixes[i].symbol;
        }
    }
    return num.toString();
}

// Source - https://stackoverflow.com/a/17748203
// Posted by user1693593, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-28, License - CC BY-SA 3.0

function allStorage() {

    var archive = {}, // Notice change here
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        archive[ keys[i] ] = localStorage.getItem( keys[i] );
    }

    return archive;
}

