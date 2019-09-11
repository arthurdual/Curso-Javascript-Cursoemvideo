//estudar funçao
/*
arrow function
call backs
funçoes anonimas
iife function 

DOM
Estudar objetos 
modularização

RegEx
Expessoes regulares

json

ajax

NodeJs
angular 
*/
//let num = [5,8,4]

let amigo = {/*Objeto */
    //objetos podem guardar valores e functions/metodos (engordar(p))
    nome:'jose',
    sexo:'M',
    peso:85.4,
    engordar(p){
        console.log('Engordou')
        this.peso += p//this faz referencia ao objeto
    }

}
amigo.engordar(2)//chama a funçao engordar que adiciona 2kg a variavel peso
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)



