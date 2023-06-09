// onscroll Animations
AOS.init();

// // disable right click
document.addEventListener('contextmenu', function(e){
    e.preventDefault();
});

window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
    },
    false
);



// When clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Copy Link Button
function copyToClipboard(text) {
    var inputc = document.body.appendChild(document.createElement("input"));
    inputc.value = window.location.href;
    inputc.focus();
    inputc.select();
    document.execCommand('copy');
    inputc.parentNode.removeChild(inputc);
}


// Delay msg after click on Copy button
let button = document.getElementById("cb");
button.addEventListener("click", function () {
  let text = document.getElementById("demo");
  text.classList.remove("hide");
  setTimeout(function () {
    text.classList.add("fade-in");
    setTimeout(function () {
      text.classList.remove("fade-in");
      setTimeout(function () {
        text.classList.add("hide");
      }, 1000);
    }, 1000);
  });
});



// Contact form, Input Number take only 10 digit number
function onlyNumberKey(evt) { 
        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
}

// Progress Bar 
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        console.log(document.readyState);
        document.getElementById("PreLoaderBar").style.display = "none";
    }
}


//Reading Progress Bar
let processScroll = () => {
  let docElem = document.documentElement, 
    docBody = document.body,
    scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
      scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
    scrollPercent = scrollTop / scrollBottom * 100 + '%';
    document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent); 
}
document.addEventListener('scroll', processScroll);


// Loading Screen
function loader() {
    document.querySelector('.loading').classList.add('fade-out');
}
function fadeOut() {
    setInterval(loader, 500);
}
window.onload = fadeOut;

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Vinit Parmar";
        }
        else {
            document.title = "Come Back To Portfolio";
        }
    });
