// Navegador
const navegacion = document.querySelector('.flex');

window.addEventListener('scroll', function(){
    window.addEventListener('scroll', function(){
        navegacion.classList.toggle('active', window.scrollY >0)
    })
})

