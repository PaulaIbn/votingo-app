document.getElementById('secondaryButton').style.display = 'none';
document.getElementById('anulareRunda').style.display = 'none';
document.getElementById('descalificare').style.display = 'none';
document.getElementById('primaryButton').addEventListener('click', showBtn);
 
function showBtn(e) {
 document.getElementById('secondaryButton').style.display = 'block';
 document.getElementById('anulareRunda').style.display = 'block';
 document.getElementById('descalificare').style.display = 'block';
 document.getElementById('primaryButton').style.background = 'gray';
 document.getElementById("primaryButton").style.disabled = 'true';
 e.preventDefault();
}