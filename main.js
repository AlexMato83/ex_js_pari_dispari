/* L'utente sceglie pari o dispari ed un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer.
 Sommiamo i due numeri e dichiariamo chi ha vinto.*/

 var evenOdd = prompt("scegli pari o dispari");
 alert("hai scelto " + evenOdd);
 var numUser = parseInt(prompt("scegli un numero tra 1 e 5"));
 alert("hai scelto " + numUser);
 alert("tiro del computer");
 var numGen = Math.floor(Math.random() * 5) + 1;
 alert("il computer ha fatto " + numGen);
  var sum = numGen + numUser
 if (evenOdd === "pari" && sum % 2 == 0) {
   document.getElementById("text").innerHTML = sum + " è pari" + ", HAI VINTO";
   document.body.style.backgroundImage = "url('https://image.freepik.com/free-vector/you-win-sign-pop-art-style_175838-499.jpg')";
} else if (evenOdd === "dispari" && sum % 2 !== 0) {
  document.getElementById("text").innerHTML = sum + " è dispari" + ", HAI VINTO";
  document.body.style.backgroundImage = "url('https://image.freepik.com/free-vector/you-win-sign-pop-art-style_175838-499.jpg')";

} else {
  document.getElementById("text").innerHTML = "hai scelto " + evenOdd + ", il totale fa " + sum + ", HAI PERSO";
  document.body.style.backgroundImage = "url('https://image.shutterstock.com/image-vector/you-lose-red-stamp-text-260nw-303609533.jpg')";
}
