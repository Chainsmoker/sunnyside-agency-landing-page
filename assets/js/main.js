const btn = document.querySelector('#btnMenu');
const arrow_down = document.querySelector('#arrow_down');

btn.addEventListener('click', function() {
    document.querySelector('.navegacion__links').classList.toggle('active');
    btn.classList.toggle('fa-xmark');
});
