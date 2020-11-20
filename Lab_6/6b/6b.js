// b) Write JS func that will add a paragraph of text to page after 5 secs from opening the page

document.addEventListener("DOMContentLoaded",function () {
    setTimeout(() => { document.getElementById('t').innerText = 'hello' },5000)
});