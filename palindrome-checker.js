function palindrome(str) {
    const regex = /[^\W_]/g;
    
    let forwards = str
    .toLowerCase()
    .match(regex)
    .join("");
    
    let backwards = str
    .toLowerCase()
    .match(regex)
    .reverse()
    .join("");
    
    return forwards == backwards;
}