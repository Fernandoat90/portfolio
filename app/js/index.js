function alterFont(){
    const saludo=document.getElementById('saludo');
    
        saludo.addEventListener('mouseover', function(){
                saludo.style.fontSize="60px";
                saludo.style.transition="1s";
        });

        saludo.addEventListener('mouseout', function(){
            saludo.style.fontSize="45px";
            saludo.style.transition="1s";
        });
}

