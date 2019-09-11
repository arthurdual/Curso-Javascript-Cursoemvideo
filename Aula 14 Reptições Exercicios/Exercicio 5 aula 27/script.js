
function contar(){

    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = document.getElementById('res')
    if( ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0){
        alert('[erro] algum valor não foi preenchido')
    }
    else{
        //alert('td certo')
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var p = Number(passo.value)
        var f = Number(fim.value)
        if(p<=0){
            window.alert('Passo invalido! considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c}\u{1F449} `
            }
            //res.innerHTML += `\u{1F3C1}`
            //para por emoji procure por unicode emoji list
            //retire do codigounicode o U+ por ex U+1F605 fica 1F605	
            //pegue o codigo unicode e Coloque entre \u{} por exemplo U+1F605 fica \u{1F605}
            //Exemplo U+1F60B vira \u{1F60B}
        }
        else{
            //Contagem regressiva
            for(var c= i; c>= f; c -= p){
                res.innerHTML += `${c}\u{1F60B} `
            }
            //res.innerHTML += `\u{1F3C1}`
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}