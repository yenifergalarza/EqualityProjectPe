let contadorexcelente =0;
let contadormuybien = 0;
let contadorbien = 0; 
let contadormuymal = 0; 
let contadormal = 0;
let contadorvotos = 0;

function contador(votos){
  if(votos == "Excelente"){
contadorvotos = (contadorvotos + 5);
contadorexcelente = (contadorexcelente + 5);
  }else if(votos == "Muy Bien"){
    contadorvotos = (contadorvotos + 5);
    contadormuybien = (contadormuybien + 5);
  }
  else if(votos == "Bien"){
    contadorvotos = (contadorvotos + 5);
    contadorbien = (contadorbien + 5);
  }
  else if(votos == "Mal"){
    contadorvotos = (contadorvotos + 5);
    contadormal = (contadormal + 5);
  }
  else if(votos == "Muy Mal"){
    contadorvotos = (contadorvotos + 5);
    contadormuymal = (contadormuymal + 5);
  }
  document.getElementById('graficaExce').style.width = contadorexcelente+"%";
  document.getElementById('graficaExce').innerHTML = "<label>"+contadorexcelente+"%</label>";

  document.getElementById('graficaMBien').style.width = contadormuybien+"%";
  document.getElementById('graficaMBien').innerHTML = "<label>"+contadormuybien+"%</label>";

  document.getElementById('graficaBien').style.width = contadorbien+"%";
  document.getElementById('graficaBien').innerHTML = "<label>"+contadorbien+"%</label>";

  document.getElementById('graficaMal').style.width = contadormal+"%";
  document.getElementById('graficaMal').innerHTML = "<label>"+contadormal+"%</label>";

  document.getElementById('graficaMmal').style.width = contadormuymal+"%";
  document.getElementById('graficaMmal').innerHTML = "<label>"+contadormuymal+"%</label>";

  if(contadorvotos == 100){
    document.getElementById('inputs').style.display = 'none';
    document.getElementById('divgraficas').style.display = 'block';
  }
}