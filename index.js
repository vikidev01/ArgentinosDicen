///RESPUESTAS
let preguntas = [
    {pregunta: '1',
     respuestas: [{respuesta: 'ELEFANTE',
                cantidad: 36},
                {respuesta: 'JIRAFA',
                cantidad: 25},
                {respuesta: 'LEÓN',
                cantidad: 18},
                {respuesta: 'RINOCERONTE',
                cantidad: 12},
                {respuesta: 'OSO',     
                cantidad: 9}
                ]
  },
  {pregunta: '2',
   respuestas: [{respuesta: 'TENGO QUE ESTUDIAR',
                cantidad: 37},
                {respuesta: 'LO MIRO POR FACEBOOK',
                cantidad: 19},
                {respuesta: 'NO TENGO EN QUE IR',
                cantidad: 14},
                {respuesta: 'TENGO CULTO EN CASA',
                cantidad: 11},
                {respuesta: 'ME CAYÓ VISITA',     
                cantidad: 10},
                {respuesta: 'JUEGA MI EQUIPO DE FÚTBOL',
                cantidad: 5},
                {respuesta: 'ME DORMÍ',
                cantidad: 4}
                ]
  },
  {pregunta: '3',
   respuestas: [{respuesta: 'ME DUERMO',
                cantidad: 45},
                {respuesta: 'NO ENTIENDO NADA',
                cantidad: 23},
                {respuesta: 'VOY SIN DESAYUNAR',
                cantidad: 12},
                {respuesta: 'ME LEVANTO 5 MINUTOS ANTES',
                cantidad: 9},
                {respuesta: 'LLEGO TARDE SIEMPRE',     
                cantidad: 7},
                {respuesta: 'MATES Y GALLETITAS DURANTE LA PRÉDICA',
                cantidad: 4}
                ]
  },
  {pregunta: '4',
   respuestas: [{respuesta: 'MULTIPLICACIÓN DE LOS PANES',
                cantidad: 32},
                {respuesta: 'MAR ROJO',
                cantidad: 25},
                {respuesta: 'CAMINAR EN AGUA',
                cantidad: 21},
                {respuesta: 'JESUS RESUCITÓ',
                cantidad: 18},
                {respuesta: 'AGUA EN VINO',     
                cantidad: 7}
                ]
  },
  {pregunta: '5',
   respuestas: [{respuesta: 'ES MÁS CÓMODO',
                cantidad: 54},
                {respuesta: 'ENCUENTRO RAPIDO EL VERSÍCULO',
                cantidad: 15},
                {respuesta: 'PUEDO MIRAR LA REDES',
                cantidad: 11},
                {respuesta: 'NO ME ENTRA LA BIBLIA EN EL BOLSO',
                cantidad: 11},
                {respuesta: 'ME DA VERGÜENZA LLEVARLA',     
                cantidad: 9}
                ]
  },
  {pregunta: '6',
   respuestas: [{respuesta: 'COSAS DE HIGIENE',
                cantidad: 60},
                {respuesta: 'OJOTAS',
                cantidad: 28},
                {respuesta: 'ROPA',
                cantidad: 6},
                {respuesta: 'ROPA DE CAMA',
                cantidad: 3},
                {respuesta: 'BIBLIA',     
                cantidad: 2},
                {respuesta: 'UTENSILIOS',
                cantidad: 1}
                ]
  },
  {pregunta: '7',
   respuestas: [{respuesta: 'NO MATARÁS',
                cantidad: 45},
                {respuesta: 'AMA A TU PRÓJIMO COMO A TI MISMO',
                cantidad: 33},
                {respuesta: 'NO ROBARÁS',
                cantidad: 19},
                {respuesta: 'HONRA A TU PADRE Y A TU MADRE',
                cantidad: 2},
                {respuesta: 'NO TENDRÁS ÍDOLOS',     
                cantidad: 1}
                ]
  },
  {pregunta: '8',
   respuestas: [{respuesta: 'MUEVO LA BOCA',
                cantidad: 37},
                {respuesta: 'LE MIRO LA BOCA A L@S CANTANTES',
                cantidad: 21},
                {respuesta: 'LA APRENDO',
                cantidad: 16},
                {respuesta: 'ESCUCHO AL DE AL LADO',
                cantidad: 10},
                {respuesta: 'ME PONGO A ORAR',     
                cantidad: 7},
                {respuesta: 'LA BUSCO EN EL CELU',
                cantidad: 5},
                {respuesta: 'NO CANTO',
                cantidad: 2}
                ]
  },
   {pregunta: '9',
   respuestas: [{respuesta: 'BUSCO SU MIRADA',
                cantidad: 56},
                {respuesta: 'L@ SALUDO EN LA BENDICIÓN',
                cantidad: 15},
                {respuesta: 'LE DOY UN VERSÍCULO',
                cantidad: 13},
                {respuesta: 'L@ MIRO TODO EL TIEMPO',
                cantidad: 7},
                {respuesta: 'ME HAGO AMIG@ DE SUS AMIGOS',     
                cantidad: 6},
                {respuesta: 'L@ SIGO EN REDES',
                cantidad: 3}
                ]
  } 
];

//CREACION de la PAGINA
let contenedorppal = document.createElement('div');
let contenedoruno = document.createElement('div');
let contenedordos = document.createElement('div');

contenedorppal.setAttribute('id', 'cppal');

contenedorppal.classList.add('contenedorp');
contenedoruno.classList.add('contenedor');
contenedordos.classList.add('contenedor');

contenedorppal.appendChild(contenedoruno);
contenedorppal.appendChild(contenedordos);

document.body.appendChild(contenedorppal);

const imagen = document.createElement('img');
imagen.setAttribute('src','cruz-removebg.png');
imagen.setAttribute('id','cruz');
document.body.appendChild(imagen);
imagen.classList.toggle('imagene');
imagen.classList.add('ocultar');



//Creo los botones
for(let i =0; i<4; i++){
    let bott = document.createElement('button');
    bott.setAttribute('id',i);
    contenedoruno.appendChild(bott);
}
for(let i =4; i<8; i++){
    let bott2 = document.createElement('button');
    bott2.setAttribute('id',i); 
    contenedordos.appendChild(bott2);
}

///SETEO LOS BOTONES
const bot = document.querySelectorAll('button');
for(let i=0; i<4 ; i++){
    let numero = document.createTextNode(i+1);
    bot[i].appendChild(numero);
}
for(let i=4; i<preguntas[0].respuestas.length ; i++){
    let numero = document.createTextNode(i+1);
    bot[i].appendChild(numero);
}

//CLASE AZUL
const botones = document.querySelectorAll('button');

for (let i =0; i<botones.length ; i++){
    botones[i].classList.add('azul');
}


function limpiarYcargar(posicion){
    //Limpio todooo
    for(let i =0; i<4; i++){
        const bott = document.getElementById(i);
        contenedoruno.removeChild(bott);
    }
    for(let i =4; i<8; i++){
        const bott = document.getElementById(i);
        contenedordos.removeChild(bott);
    }
    ///---------------------
    //Creo los botones
    for(let i =0; i<4; i++){
        let bott = document.createElement('button');
        bott.setAttribute('id',i);
        contenedoruno.appendChild(bott);
    }
    for(let i =4; i<8; i++){
        let bott2 = document.createElement('button');
        bott2.setAttribute('id',i); 
        contenedordos.appendChild(bott2);
    }

    const bot = document.querySelectorAll('button');
    ///SETEO LOS BOTONES
    for(let i=0; i<4 ; i++){
        let numero = document.createTextNode(i+1);
        bot[i].appendChild(numero);
    }
    for(let i=4; i<preguntas[posicion+1].respuestas.length ; i++){
        console.log(preguntas[posicion].respuestas.length );
        let numero = document.createTextNode(i+1);
        bot[i].appendChild(numero);
    }
    const botones = document.querySelectorAll('button');

    for (let i =0; i<botones.length ; i++){
        botones[i].classList.add('azul');
    } 
}

let posicion=0;

const wrapper = document.getElementById('cppal');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  const index = parseInt(event.target.id);

  if (!isButton) {
    return;
  }
  if(event.target.id=='7'){
        limpiarYcargar(posicion);
        posicion++;
  }else{
    let div1 = document.createElement('div');
    div1.classList.add('div11');
    div1.innerHTML = preguntas[posicion].respuestas[index].respuesta;

    let div2 = document.createElement('div');
    
    div2.innerHTML = preguntas[posicion].respuestas[index].cantidad;
    div2.classList.add('div22');

    let elemento = document.getElementById(event.target.id);
    elemento.innerHTML ='';

    elemento.appendChild(div1);
    elemento.appendChild(div2);

    elemento.classList.add('verde');
    elemento.classList.add('clse');
  
  }
})

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    var element = document.getElementById('cruz');
    element.classList.toggle("ocultar");
  });