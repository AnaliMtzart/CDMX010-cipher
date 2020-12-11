
/*const cipher = {
  encode : function(){

  },
  decode : function(){

  },
};
offset, string
export default cipher;*/



/* const cipher = {
  
  encode : function(offset, string){//llamar los valores que ingreso el usuario const square = num => num * num;
    //alert('hola')
    //console.log('cipher',offset,string);
    //let newOffset = parseInt(offset);
    let textoCifrado='';//tomar los valores sin definir
    for(let i = 0; i <= string.length; i++) { //funcion que recorre el string
      let ascii = string.charCodeAt(i);//letras a ascii
      let formula = (ascii - 65 + offset) % 26 + 65;//newOffset formula para despla
      textoCifrado += String.fromCharCode(formula);//sumar valor a la variable y devuelve una cadena ej S.FCC65) igual a A
    }

    console.log('El texto cifrado es ' + textoCifrado);//cipher.encode
    //console.log(textoCifrado);
    //return textoCifrado;
  },

  //decode : function(){v
    
  }, 
};*/

const cipher = {
  
  encode : function(offset, string){
    
    let textoCifrado='';
    for(let i = 0; i <= string.length; i++) { 
      let ascii = string.charCodeAt(i);
      let formula = (ascii - 65 + offset) % 26 + 65;
      textoCifrado += String.fromCharCode(formula);
    }

    //console.log('El texto cifrado es ' + textoCifrado);
    return textoCifrado;
  },

  decode : function(offset, string){

    let textoCifrado='';
    for(let i = 0; i <= string.length; i++) { 
      let ascii = string.charCodeAt(i);
      let formula = (ascii - 65 - offset) % 26 + 65;
      textoCifrado += String.fromCharCode(formula);
    }

    //console.log('El texto cifrado es ' + textoCifrado);
    return textoCifrado;
    
  }, 
};


export default cipher;



