window.onload = function() {
  let pronoun = ["Nuestro", "Vuestro"];
  let adj = ["grande", "pequeño"];
  let noun = ["hijo", "gato"];

  let textForLoop = "";

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        textForLoop += pronoun[p] + adj[a] + noun[n] + ".com<br>";
      }
    }
  }
  document.getElementById("excuse").innerHTML = textForLoop;
};
