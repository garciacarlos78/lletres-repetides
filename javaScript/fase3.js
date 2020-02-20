var name = ['C', 'a', 'a', 'r', 'l', 'o', 's'];

var mapa = new Map();

document.write("Nom: " + name + "<br><br>");

for (var i=0; i<name.length; i++) {
	// Comprobamos que no se trate de un número
	if ( name[i]!='0' && name[i]!='1' || name[i]!='2' || name[i]!='3' || name[i]!='4' ||
			name[i]!='5' || name[i]!='6' || name[i]!='7' || name[i]!='8' || name[i]!='9') {
		
		if (mapa.get(name[i]) == undefined) mapa.set(name[i],1);
		else mapa.set(name[i],mapa.get(name[i])+1);	
	}
}	

// Comprobamos que el mapa se ha rellenado correctamente
for (var i=0; i<name.length; i++) {
	document.write("Mapa["+name[i]+"]: " + mapa.get(name[i])+"<br>");
}



