function Verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = window.document.getElementById('res');
    
    if (fano.nodeValue.length == 0 ||fano.value > ano){
         window.alert('[Erro] Verifique os dados e tente novamente!');
    }

    else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
    }

}



