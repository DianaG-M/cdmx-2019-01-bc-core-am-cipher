


window.cipher = {
  
  //Función que realiza cifrado cesar en el mensaje que ingresa el usuario
  encode : (offset,str) =>{
    let nuevoCifrado = ""; // Se utiliza para que salga la nueva cadena en horizontal

    let mayuscula = str.toUpperCase(); // convierte el mensaje a mayuscula   
    offset = Number(offset);//convierte el valor en string a entero
    
    //recorre los valores del mensaje que ingreso el usuario letra por letra
    for(let i = 0; i<mayuscula.length; i++){
      //convierte cada letra a su valor en Ascii
      let letraAscii = mayuscula.charCodeAt(i);
      //Fórmula para hacer el cifrado de acuerdo al offset que elige el usuario
      let formula = (letraAscii-65+offset)%26+65;
      //Conviente el cifrado en Ascii a Alfabeto
      let resultado = String.fromCharCode(formula);
      //Muestra el mensaje ya cifrado en forma de cadena
      nuevoCifrado+=resultado; // Hace que en texto cifrado aparezca en horizontal
  
    }
    return nuevoCifrado;
  },
  
  //Funcion que realiza cifrado cesar inveso en el mensaje que ingresa el usuario
  decode : (offset,str) => {
    let nuevodesCifrado = ""; // Se utiliza para que salga la nueva cadena en horizontal
    let mayuscula = str.toUpperCase(); // convierte el mensaje a mayuscula
    offset = Number(offset);//convierte el valor en string a entero
    
    //recorre los valores del mensaje que ingreso el usuario letra por letra
    for(let i = 0; i<mayuscula.length; i++){
      //convierte cada letra a su valor en Ascii
      let letraAscii = mayuscula.charCodeAt(i);
      //Fórmula para hacer el cifrado de acuerdo al offset que elige el usuario
      let formula = (letraAscii+65-offset)%26+65;
      //Conviente el cifrado en Ascii a Alfabeto
      let resultado = String.fromCharCode(formula);
      //Muestra el mensaje ya cifrado en forma de cadena
      nuevodesCifrado+=resultado;// Hace que en texto cifrado aparezca en horizontal
    }
    return nuevodesCifrado;
  }


};
