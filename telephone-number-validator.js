function telephoneCheck(str) {
    const regex = /(^[1]?\s?)((\s?\([0-9]{3}\)\s?)|([0-9]{3}))(\s?-?)([0-9]{3})(\s?-?)([0-9]{4})$/;
    return regex.test(str);
}
