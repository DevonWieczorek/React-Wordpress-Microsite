export const randomNumber = (min, max) => {
    min = min || 0;
    max = max || 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const decimal = (num) => {
    let rounded = Math.ceil(num * 10) / 10;

    if ((rounded % 1) > 0) {
        return rounded;
    } else {
        // Strip .0 for even numbers
        return parseInt(rounded);
    }
}

export const abbvNumber = (num) => {
    let div_k = parseFloat(num / 1000);
    let div_m = parseFloat(div_k / 1000);
    let div_b = parseFloat(div_m / 1000);
    let div_t = parseFloat(div_b / 1000);

    if (div_k < 1000) {
        return decimal(div_k) + 'K';
    } else if (div_m < 1000) {
        return decimal(div_m) + 'M';
    } else if (div_b < 1000) {
        return decimal(div_b) + 'B';
    } else {
        return decimal(div_t) + 'T';
    }
}

export const cleanDate = (dateString) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date(dateString);
    const dd = d.getDate();
    const mm = d.getMonth();
    const yyyy = d.getFullYear();
    return `${months[mm]} ${dd}, ${yyyy}`;
}

export const decodeHTMLEntity = (str) => {
	return str.replace(/&#(\d+);/g, function(match, dec) {
		return String.fromCharCode(dec);
	});
}

export const encodeHTMLEntity = (str) => {
	return str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
       return '&#'+i.charCodeAt(0)+';';
    });
}

export const stripHTML = (str) => {
    return str.replace(/<[^>]*>?/gm, '');
}
