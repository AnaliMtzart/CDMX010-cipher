/*const cipher = {
  // ...
}*/

/* const user = {
  age: 28,
  name: 'Adriana',
  address: {
    street: 'Naranjo',
    number: 284
  },
  eat : function () {
    console.log('ñám, ñám')
  }
} 

user.courses= ''  agregar elementos o variable solo con string
user.name; mandar llamar 
user.eat();

*/


/*const cipher = {
  encode : function(){

  },
  decode : function(){

  },
};
offset, string
export default cipher;*/


/*const cipher = {

  encode : function resultadoCodificar(){

    let offset = document.getElementById('offsetEc'); 
    let string = document.getElementById('cifrar').value;
    let textoCifrado='';

    //realizar un bucle hacer algo repetidamente+=
    //
    for(let i = 0; i < string.length; i++){ //Bucle https://www.arkaitzgarro.com/javascript/capitulo-8.html
      let ascii = string.charCodeAt(i);
      let formula = (ascii - 65 + offset) % 26 + 65;
      textoCifrado += String.fromCharCode(formula);//sumar valor a la variable y devuelve una cadena ej S.FCC65) igual a A
    }
    console.log(textoCifrado);
  },
  decode : function(){
    
  },
};

export default cipher;*/


const cipher = {
  
  encode : function(offset, string){//llamar los valores que ingreso el usuario const square = num => num * num;
    //alert('hola')
    //console.log('cipher',offset,string);
    let newOffset = parseInt(offset);
    let textoCifrado='';//tomar los valores sin definir
    for(let i = 0; i <= string.length; i++) { //funcion que recorre el string
      let ascii = string.charCodeAt(i);//letras a ascii
      let formula = (ascii - 65 + newOffset) % 26 + 65;//offset por i? formula para despla
      textoCifrado += String.fromCharCode(formula);//sumar valor a la variable y devuelve una cadena ej S.FCC65) igual a A
    }

    console.log('El texto cifrado es ' + textoCifrado);//cipher.encode
    //return textoCifrado;
  },

 /*  decode : function(){v
    
  }, */
};




export default cipher;



