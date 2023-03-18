
function converter() {

    let value = document.getElementById('input');
    let choice = document.getElementById('choice');
    let kzt = document.getElementById('toKZT');
    let usd = document.getElementById('toUSD');
    let eur = document.getElementById('toEUR');


    if (choice.selectedIndex == '0') {
        kzt.innerHTML = '-';
        usd.innerHTML = (value.value / 431.03).toFixed(2);
        eur.innerHTML = (value.value / 542.12).toFixed(2);
    }
    if (choice.selectedIndex == 1) {
        kzt.innerHTML = (value.value * 429).toFixed(2);
        usd.innerHTML = '-';
        eur.innerHTML = (value.value * 0.84283).toFixed(2);
    }
    if (choice.selectedIndex == 2) {
        eur.innerHTML = '-';
        kzt.innerHTML = (value.value * 507).toFixed(2);
        usd.innerHTML = (value.value * 1.176335).toFixed(2);
    }
}
