const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if(window.scrollY > 450){
        navbar.classList.replace('bg-transparent', '.navbar');
    } else if(this.window.scrollY <= 0){
        navbar.classList.replace('.navbar', 'bg-transparent')
    }
});