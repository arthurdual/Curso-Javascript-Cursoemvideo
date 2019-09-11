function carregar(){
    var img = window.document.getElementById('imagem');
    var msg = window.document.getElementById('msg');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 15;
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0  && hora < 12 ){
        img.src= 'img/manha.jpg';
        window.document.body.style.background = 'rgb(70, 144, 236)';
    }
    else if(hora >=12 && hora<= 18){
        img.src = 'img/tarde.jpg';
        window.document.body.style.background = 'green'
    }
    else{
        img.src = 'img/noite';
        window.document.body.style.background = 'gray';
    }
}



