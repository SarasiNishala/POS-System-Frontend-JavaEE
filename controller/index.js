function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
}

document.getElementById('Home').style.display = 'block';
document.getElementById('Customer').style.display = 'none';
document.getElementById('Item').style.display = 'none';
document.getElementById('Order').style.display = 'none';

document.getElementById('home').addEventListener('click',function(e){
    e.preventDefault();
    
    document.getElementById('Home').style.display = 'block';
    document.getElementById('Customer').style.display = 'none';
    document.getElementById('Item').style.display = 'none';
    document.getElementById('Order').style.display = 'none';
})

document.getElementById('item').addEventListener('click',function(){
    document.getElementById('Home').style.display = 'none';
    document.getElementById('Customer').style.display = 'none';
    document.getElementById('Item').style.display = 'block';
    document.getElementById('Order').style.display = 'none';
})

document.getElementById('customer').addEventListener('click',function(){
    document.getElementById('Home').style.display = 'none';
    document.getElementById('Customer').style.display = 'block';
    document.getElementById('Item').style.display = 'none';
    document.getElementById('Order').style.display = 'none';
})

document.getElementById('order').addEventListener('click',function(){
    document.getElementById('Home').style.display = 'none';
    document.getElementById('Customer').style.display = 'none';
    document.getElementById('Item').style.display = 'none';
    document.getElementById('Order').style.display = 'block';
}) 