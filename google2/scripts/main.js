function toggle(content)
{
	node = document.getElementById(content);
	if (node.style.visibility=="hidden")
	{
		// Contenu caché, le montrer
		node.style.visibility = "visible";
		node.style.height = "auto";			// Optionnel rétablir la hauteur
	}
	else
	{
		// Contenu visible, le cacher
		node.style.visibility = "hidden";
		node.style.height = "0";			// Optionnel libérer l'espace
	}
}
let recherche = document.querySelector('#recherchegoogle');//bouton rechercher google
let motRechercher = document.querySelector("#inputrech"); //champ input

Rechercher.addEventListener("click",function(){
	let valeurMotRechercher = motRechercher.value;
	let motAvecPlus = valeurMotRechercher.replace(" ", "+");
	//REDIRECTION
	document.location.href=`https://www.google.fr/#q=${motAvecPlus}`;
}