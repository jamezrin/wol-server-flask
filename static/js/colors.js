var r = 255, g = 0, b = 0;
var fun = function() {
	document.body.style.backgroundColor = "rgb({r}, {g}, {b})".replace("{r}", r).replace("{g}", g).replace("{b}", b);
    if (r == 255) {
        if (b > 0) {
            b--;
        } else {
            g++;
        }
    }

    if (g == 255) {
        if (r > 0) {
            r--;
        } else {
            b++;
        }
    }

    if (b == 255) {
        if (g > 0) {
            g--;
        } else {
            r++;
        }
    }
};

setInterval(fun, 20);