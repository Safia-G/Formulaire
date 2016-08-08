function validate() {
  console.log(faux);

var identifiant = document.myform.identifiant.value;
var mdp = document.myform.mdp.value;
if (identifiant == "joe@gmail.com" && mdp == 12345) {
  alert ("Bienvenue");
  return false;
}
if (identifiant == "s.gobet@hotmail.fr" && mdp == "safia69400") {
  alert ("Bienvenue");
  return false;
}
if (identifiant == "toto@gmail.com" && mdp == 123) {
  alert ("Bienvenue");
  return false;
}
else {
  faux++;
  console.log(faux);
  alert("Identifiant ou mot de passe incorrect, veuillez recommencer la saisie.");
  if(faux >3) {
    alert("Vous avez atteint les 3 essais!" );
}
}

if(document.myform.identifiant.value.indexOf('@') == -1) {
alert("Il y a une erreur dans votre adresse électronique!");
document.myform.identifiant.focus();
return false;
}
}
if ($('#identifiant').data('mdp') === undefined) {
$('#identifiant').data('mdp',1);
}
else {
$('#identifiant').data('mdp',$('#identifiant').data('mdp')+1);
}
//affichicher le compteur en console
console.log('compteur : '+$('#identifiant').data('mdp'));
