/*
function parimp(n){
    if (n % 2 == 0){//ves seo numero é divisivel por 2
        return "par";//Retorna par no resultado
    }
    else{
        return"ímpar";//Retorna impar resultado
    }


}
let res = parimp(11)//Armazenao resultado na variavel res
console.log(res)//printa o resultado na tela
*/
/*
function soma(n1=0,n2=0){
    return n1 + n2

}
//let res = soma(11)//Armazenao resultado na variavel res
let res = soma(n2=11,n1=10)
console.log(res)//printa o resultado na tela
*/
/*
let v = function(x){
    return x*2
}

console.log(v(5))
*/
/*
//5! = 5*4*3*2*1
function fatorial(n){
    let fat = 1
    for(let c = n ;c > 1 ;c--){
        fat *=c
    }
    return fat
}
console.log(fatorial(5))
*/

//recursividade
function fatorial(n){
    if(n== 1){
        return 1
    }
    else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))