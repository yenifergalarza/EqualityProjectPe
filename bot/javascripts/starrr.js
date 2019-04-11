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
    contadormal = (contadormal + 5);
  }
  document.getElementById('graficaExce').style.width = contadorexcelente+"%";
  document.getElementById('graficaExce').innerHTML = "<h3>"+contadorexcelente+"%</h3>";

  document.getElementById('graficaMBien').style.width = contadormuybien+"%";
  document.getElementById('graficaMBien').innerHTML = "<h3>"+contadormuybien+"%</h3>";

  document.getElementById('graficaBien').style.width = contadorbien+"%";
  document.getElementById('graficaBien').innerHTML = "<h3>"+contadorbien+"%</h3>";

  document.getElementById('graficaMal').style.width = contadormal+"%";
  document.getElementById('graficaMal').innerHTML = "<h3>"+contadormal+"%</h3>";

  document.getElementById('graficaMmal').style.width = contadormuymal+"%";
  document.getElementById('graficaMmal').innerHTML = "<h3>"+contadormuymal+"%</h3>";

  if(contadorvotos == 100){
    document.getElementById('inputs').style.display = 'none';
document.getElementById('divgraficas').style.display = 'block';
  }
}