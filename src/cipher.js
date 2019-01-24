window.cipher = {
  
  //Función que realiza cifrado cesar en el mensaje que ingresa el usuario
  encode : (offset,str) =>{
    let nuevoCifrado = ""; // Se utiliza para que salga la nueva cadena en horizontal
    offset = Number(offset);//convierte el valor en string a entero
    
    //recorre los valores del mensaje que ingreso el usuario letra por letra
      for(let i = 0; i < str.length; i++){
        //convierte cada letra a su valor en Ascii
        let letraAscii = str.charCodeAt(i);
        if (letraAscii >= 65 && letraAscii <= 90){
          let formula = (letraAscii-65+offset)%26+65;
          //Conviente el cifrado en Ascii a Alfabeto
          let resultado = String.fromCharCode(formula);
          //Muestra el mensaje ya cifrado en forma de cadena
          nuevoCifrado+=resultado;// Hace que en texto cifrado aparezca en horizontal
        }else if(letraAscii >= 97 && letraAscii <= 122){
          let formula = (letraAscii-97+offset)%26+97;
          let resultado = String.fromCharCode(formula);
          nuevoCifrado+=resultado;
        }else{
            let especial = String.fromCharCode(letraAscii);
            nuevoCifrado+=especial;
          }
        
      }  
    return nuevoCifrado + "." + offset;
  },

  
  
  //Funcion que realiza cifrado cesar inveso en el mensaje que ingresa el usuario
  decode : (offset,str) => {
    let nuevodesCifrado = ""; // Se utiliza para que salga la nueva cadena en horizontal

    offset = Number(offset);//convierte el valor en string a entero
    
    //recorre los valores del mensaje que ingreso el usuario letra por letra
      for(let i = 0; i < str.length; i++){
        //convierte cada letra a su valor en Ascii
        let letraAscii = str.charCodeAt(i);
        if (letraAscii >= 65 && letraAscii <= 90){
          let formula = (letraAscii+65-offset)%26+65;
          //Conviente el cifrado en Ascii a Alfabeto
          let resultado = String.fromCharCode(formula);
          //Muestra el mensaje ya cifrado en forma de cadena
          nuevodesCifrado+=resultado;// Hace que en texto cifrado aparezca en horizontal
        }else if(letraAscii >= 97 && letraAscii <= 122){
          let formula = (letraAscii+111-offset)%26+97;
          let resultado = String.fromCharCode(formula);
          nuevodesCifrado+=resultado;
        }else{
            let especial = String.fromCharCode(letraAscii);
            nuevodesCifrado+=especial;
          }
        
      }  
      return nuevodesCifrado + "." + offset;
  }
};
