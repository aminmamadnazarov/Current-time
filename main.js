var clock = document.getElementById('time');
function clockTime() {
    var
        time = new Date(),
        h = time.getHours().toString()
    m = time.getMinutes().toString()
    s = time.getSeconds().toString()

    if (h.length < 2) { h = '0' + h; }
    if (h.length < 2) { h = '0' + h; }
    if (h.length < 2) { h = '0' + h; }

    var clockString = h + ':' + m + ':' + s;
    clock.textContent = 'Current Time : ' + clockString
}

setInterval(clockTime, 1000)
