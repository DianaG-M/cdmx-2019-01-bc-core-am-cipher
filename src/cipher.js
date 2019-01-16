let nuevoCifrado = "";

window.cipher = {
  encode : (offset,str) =>{
    let mensajeObtenido = str.value;
    let mayuscula = mensajeObtenido.toUpperCase();
    offset = offset.value;
    offset = Number(offset);
    
    for(let i = 0; i<mayuscula.length; i++){
      let letraAscii = mayuscula.charCodeAt(i);
      let formula = (letraAscii-65+offset)%26+65;
      let resultado = String.fromCharCode(formula);
      nuevoCifrado+=resultado;
  
    }

    alert(nuevoCifrado);

  },
  
  decode : (offset,str) => {
    let mensajeObtenido = str.value;
    let mayuscula = mensajeObtenido.toUpperCase();
    offset = offset.value;
    offset = Number(offset);
    
    for(let i = 0; i<mayuscula.length; i++){
      let letraAscii = mayuscula.charCodeAt(i);
      let formula = (letraAscii+65-offset)%26+65;
      let resultado = String.fromCharCode(formula);
      nuevoCifrado+=resultado;
  
    }

    alert(nuevoCifrado);
  }

  
};
