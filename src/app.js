/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function domaingenerator1() {
  let pronoun = ["the", "our", "gov"];
  let adj = ["great", "big", "dotcom", "justdoit"];
  let noun = ["dotcom", "internet", "justthetwoofus", "citypt", "bytheorg"];
  let arrExtensions = [
    "us",
    "io",
    "uk",
    "it",
    "pt",
    "es",
    "com",
    "net",
    "org",
    "int",
    "edu",
    "gov"
  ];
  let arrayDomains = [];

  for (
    let pronounindex = 0;
    pronounindex <= pronoun.length - 1;
    pronounindex++
  ) {
    for (let adjindex = 0; adjindex <= adj.length - 1; adjindex++) {
      for (let nounindex = 0; nounindex <= noun.length - 1; nounindex++) {
        for (
          let extensionsIndex = 0;
          extensionsIndex <= arrExtensions.length - 1;
          extensionsIndex++
        ) {
          let domain;
          if (noun[nounindex].endsWith(arrExtensions[extensionsIndex])) {
            let nounsplited = noun[nounindex].split(
              arrExtensions[extensionsIndex]
            );
            domain =
              pronoun[pronounindex] +
              adj[adjindex] +
              nounsplited[0] +
              "." +
              arrExtensions[extensionsIndex];
          } else {
            domain =
              pronoun[pronounindex] +
              adj[adjindex] +
              noun[nounindex] +
              "." +
              arrExtensions[extensionsIndex];
          }
          arrayDomains.push(domain);
        }
      }
    }
  }
  console.log(arrayDomains);
}

domaingenerator1();
