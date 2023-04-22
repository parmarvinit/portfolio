// onscroll Animations
AOS.init();

//disable right click
// document.addEventListener('contextmenu', function(e){
//     e.preventDefault();
// });

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


// //Get the button
// var mybutton = document.getElementById("myBtn");
// // When scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }


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


// Title change when u switch to new tab
window.onblur = function () { 
    document.title = 'You went?😏'; 
}

window.onfocus = function () { 
    document.title = 'Came Back !!😜🙂'; 
}


// Contact form, Input Number take only 10 digit number
function onlyNumberKey(evt) { 
        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
}


// Disable Developer Mode (disable right click, 123 keycode, ctrl+shift+i, ctrl+shift+c, ctrl+shift+j, ctrl+u)
// document.onkeydown = function(e) {
//   if(event.keyCode == 123) {       
//     return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {       
//     return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {       
//     return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {       
//     return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//     // if(confirm("Sorry, Inspect is Hided😶!!.\nVisit my GitHub profile for source code😁\nYes, There r lots of ways to access it.Find it!🤔\nHint: Lil easy n in front of uhh")){ // shown confirm message if user click on OK
//     //     window.open("https://github.com/jaadu1402/Portfolio", '_blank');    //////// open github link in new tab
//     // }       
//     return false;
//   }
// }


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










// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("nav ul li");
// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (pageYOffset >= sectionTop - 60) {
//       current = section.getAttribute("id"); }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// };



