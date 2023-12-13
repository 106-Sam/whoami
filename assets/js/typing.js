// <!-- typed js effect starts -->
//var typed = new Typed(".typing-text", {
  //  strings: ["Cybersecurity Engineer","Red Team Engineer","OSINT Investigator","CTF player"],
    //loop: true,
    //typeSpeed: 50,
    //backSpeed: 25,
    //backDelay: 500,
//});
// <!-- typed js effect ends -->

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

