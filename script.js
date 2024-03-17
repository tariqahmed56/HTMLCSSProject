let q1 = document.querySelectorAll('.q1');
q1.forEach(elem =>{
    elem.addEventListener('click', ()=>{
      
            elem.nextElementSibling.classList.toggle('visiblity');
            elem.parentNode.classList.toggle('height');
            elem.lastElementChild.classList.toggle('rotate');
    })
});

 