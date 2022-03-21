function rot13(str) {
    return str
    .split("")
    .map(i => {
        if(i.match(/[A-Z]/g)) {
            let replace = String.fromCharCode(i.charCodeAt(0) - 13);
            if(replace.match(/[A-Z]/g)) return replace;
            return String.fromCharCode(i.charCodeAt(0) + 13);
        }
        return i;
    })
    .join("");
}