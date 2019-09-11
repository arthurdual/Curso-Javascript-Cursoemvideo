/*
Variáveis simples só conseguem armazenar um valor por vez
Exemplo var c = 1 ou let c = 1 
Variáveis compostas conseguem armazenar vários valores em uma mesma estrutura
*/

/*
/*sem array
var vaga1 = carro01
var vaga2 = carro02
var vaga3 = carro03
var vaga4 = carro04
var vaga5 = carro05
var vaga6 = carro06
var vaga7 = carro07
var vaga8 = carro08
var vaga9 = carro09
var vaga10 = carro10
/*com array
var vaga = [carro01,carro02,carro03,carro04,carro05,carro06,carro07,carro08,carro09,carro10]
//ou
let vaga = [carro01,carro02,carro03,carro04,carro05,carro06,carro07,carro08,carro09,carro10]

//começa do indice  0 ou sejacarro01 esta na posição 0 e carro02 esta na posição 1
//um array e uma variavel que tem varios elementos cada elemento é composta por seu valor e uma chave de indentificação
*/
/*
let num =[0,1,2,3,4,5,6,7,8,9]
console.log(`nosso vetor é o ${num}`)
num[3] = 6//adiciona o valor 6 na posição 3
console.log(`nosso vetor é o ${num}`)
num.push(7)// adiciona o valor 7 na ultima posição
console.log(`nosso vetor é o ${num}`)
//num.length //mostra quantos numeros tem no array
console.log(`nosso vetor tem ${num.length} posições`)
//num.sort() //coloca osnumeros em ordem crescente
console.log(`o vetor em ordem crescente fica ${num.sort()}`)
console.log(`o número que esta na primeira posição (posição 0) do array é  ${num[0]}`)
*/

/*
//mostra os numeros do array sem [] e ,
i = 0
while(i < num.length ){
    console.log(num[i])
    i++
}
//mesmo codigo com o for
for (let c = 0; c<num.length; c++ ){
    console.log(num[c])
}
//mesmo codigo com o for in
for(var posicao in num){//for in para cada posição em num faça console.log(num[posicao])
    //console.log(num[posicao])
    console.log(`A posição ${posicao} tem o valor ${num[posicao]}`)
}
console.log(num[posicao])
*/
let num =[0,1,8,5,6,9,7,1,42,5]
//num.indexOf(7)// retorna a posiçao do valor 7 dentro do array
//console.log(num.indexOf(7))// mostra a posiçao do valor 7 dentro do array
