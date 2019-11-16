document.getElementById('secondaryButton').style.display = 'none';
document.getElementById('anulareRunda').style.display = 'none';
document.getElementById('descalificare').style.display = 'none';
document.getElementById('sfarsitSerie').style.display = 'none';
document.getElementById('primaryButton').addEventListener('click', showBtn);
document.getElementById('secondaryButton').addEventListener('click', showBtn1);
document.getElementById('sfarsitSerie').addEventListener('click', showBtn2);

 
function showBtn(e) {
 document.getElementById('secondaryButton').style.display = 'block';
 document.getElementById('anulareRunda').style.display = 'block';
 document.getElementById('descalificare').style.display = 'block';
 document.getElementById('primaryButton').style.background = 'gray';
 document.getElementById("primaryButton").style.disabled = 'true';
 e.preventDefault();
}

 
function showBtn1(e) {
 document.getElementById('sfarsitSerie').style.display = 'block';
 document.getElementById('anulareRunda').style.display = 'block';
 document.getElementById('descalificare').style.display = 'block';
 document.getElementById('secondaryButton').style.background = 'gray';
 document.getElementById("secondaryButton").style.disabled = 'true';
 e.preventDefault();
}

 
function showBtn2(e) {
 document.getElementById('secondaryButton').style.display = 'block';
 document.getElementById('sfarsitSerie').style.display = 'block';
 document.getElementById('anulareRunda').style.display = 'block';
 document.getElementById('descalificare').style.display = 'block';
 document.getElementById('secondaryButton').style.background = '#ffc905';
 // document.getElementById("secondaryButton").style.disabled = 'true';
 e.preventDefault();
}