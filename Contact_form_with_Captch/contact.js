var captcha;
function generate() {
 
    document.getElementById("captcha-form").value = "";
 
    captcha = document.getElementById("image");
    var uniquechar = "";
 
    const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
    captcha.innerHTML = uniquechar;
}

function rechange(){
    generate();
}
 
function printmsg() {
    const usr_input = document
        .getElementById("captcha-form").value;

    if (usr_input == captcha.innerHTML) {
        var s = document.getElementById("key")
            .innerHTML = "capcha Matched";
        generate();
    }
    else {
        var s = document.getElementById("key")
            .innerHTML = "capcha not Matched";
        generate();
    }
}
