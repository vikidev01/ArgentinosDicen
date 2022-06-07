
//let boton = document.getElementsByClassName('btn'); 
//boton.addEventListener('click',cambiar(boton),true);


class Respuesta{
    lista = [];
    valor = [];

    constructor (lista, valor){
        this.lista = lista;
        this.valor = valor;
    }
}   

const r1 = ["ELEFANTE", "JIRAFA", "LEÓN", "RINOCERONTE", "OSO"];
const v1 = [ 36, 25, 18, 12, 9];
const res1 = new Respuesta(r1,v1);

const r2 = ["TENGO QUE ESTUDIAR", "LO MIRO POR FACEBOOK","NO TENGO EN QUE IR", "TENGO MI CULTO PERSONAL EN CASA","ME CAYÓ VISITA A ÚLTIMO MOMENTO", "JUEGA MI EQUIPO DE FÚTBOL", "ME DORMÍ"];
const v2 = [ 37, 19, 14, 11, 10, 5, 4];
const res2 = new Respuesta(r2,v2);

const r3 = ["ME DUERMO","NO ENTIENDO NADA", "VOY SIN DESAYUNAR", "ME LEVANTO 5 MINUTOS ANTES","LLEGO TARDE SIEMPRE","MATES Y GALLETITAS DURANTE LA PRÉDICA" ];
const v3 = [ 45, 23, 12, 9, 7 ,4];
const res3 = new Respuesta(r3,v3);

const r4 = ["MULTIPLICACIÓN DE LOS PANES/PECES","MAR ROJO", "CAMINAR EN AGUA", "JESUS RESUCITÓ", " AGUA EN VINO"];
const v4 = [ 32, 25, 21, 18, 7];
const res4 = new Respuesta(r4,v4);

const r5 =  ["ES MÁS CÓMODO","ENCUENTRO MAS RAPIDO EL VERSÍCULO","PUEDO MIRAR LA REDES", "NO ME ENTRA LA BIBLIA EN EL BOLSO/MOCHILA", "ME DA VERGÜENZA LLEVAR LA BIBLIA EN LA CALLE"];
const v5 = [ 54, 15, 11, 10, 10];
const res5 = new Respuesta(r5,v5);

const r6 = ["SHAMPOO/ CREMA / JABÓN / DENTÍFRICO","OJOTAS","ROPA","FRAZADAS/SABANAS", "BIBLIA","PLATOS / TAZA / UTENSILIOS"];
const v6 = [ 60, 28, 6, 4, 2];
const res6 = new Respuesta(r6,v6);

const r7 = ["NO MATARÁS","AMA A TU PRÓJIMO COMO A TI MISMO","NO ROBARÁS", "HONRA A TU PADRE Y A TU MADRE","NO TENDRÁS ÍDOLOS"];
const v7 = [ 45, 33, 19, 2, 1];
const res7 = new Respuesta(r7,v7);

const r8 = ["MUEVO LA BOCA PRONUNCIANDO ALGUNAS PALABRAS","LE MIRO LA BOCA A L@S CANTANTES","LA ESCUCHO VARIAS VECES HASTA APRENDERLA","TRATO DE ESCUCHAR AL DE AL LADO", "CIERRO LOS OJOS Y ME PONGO A ORAR", "LA BUSCO EN EL CELU", "NO CANTO"];
const v8 = [ 37, 21, 16, 11, 8, 5 ,2];
const res8 = new Respuesta(r8,v8);

const r9 = ["ME METO EN EL CULTO Y MIRO SI ME ESTÁ MIRANDO","SIEMPRE L@ BUSCO EN EL MOMENTO DE LA BENDICIÓN ", "LE DOY UN VERSÍCULO", "LO MIRO TODO EL TIEMPO", "ME HAGO AMIG@ DE SUS AMIGOS", "L@ SIGO EN REDES" ];
const v9 = [ 56, 15, 13, 7, 6, 3];
const res9 = new Respuesta(r9,v9);

const respuestas = [res1, res2, res3, res4, res5, res6, res7, res8, res9];



function setear (){
    for(let i=0; i< respuestas.length(); i++){
        for (let j=0; j< respuestas[i].length(); j++){

        }
    }
}
//CLASE AZUL
const botones = document.querySelectorAll('button');
for (let i =0; i<botones.length ; i++){
    botones[i].classList.add('azul');
}
//----------------------------------


const cambiarEstilo = (e) =>{
    e.target.classList.toggle('verde');
    e.target.classList.toggle('azul'); 
}

const Boton1 = document.getElementById('1');
Boton1.addEventListener('click', cambiarEstilo,true);

const Boton2 = document.getElementById('2');
Boton2.addEventListener('click', cambiarEstilo,true);

const Boton3 = document.getElementById('3');
Boton3.addEventListener('click', cambiarEstilo,true);

const Boton4 = document.getElementById('4');
Boton4.addEventListener('click', cambiarEstilo,true);

const Boton5 = document.getElementById('5');
Boton5.addEventListener('click', cambiarEstilo,true);

const Boton6 = document.getElementById('6');
Boton6.addEventListener('click', cambiarEstilo,true);

const Boton7 = document.getElementById('7');
Boton7.addEventListener('click', cambiarEstilo,true);

const Boton8 = document.getElementById('8');
Boton8.addEventListener('click', cambiarEstilo,true);







const respues=document.getElementsByClassName('res');
const eso = document.createTextNode('dale perro');





/*function cambiar(e){
    e.target.class == "btn";
    alert ("has pulsado un boton");
    
    ,
    ,   
   ,
    ,
    ,
    ,
    ,





boton.addEventListener('click',cambiar,true);

*/
//document.querySelectorAll('button'),addEventListener('click', cambiar, true);


