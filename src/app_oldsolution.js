/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function domaingenerator() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (
    let pronounindex = 0;
    pronounindex <= pronoun.length - 1;
    pronounindex++
  ) {
    for (let adjindex = 0; adjindex <= adj.length - 1; adjindex++) {
      for (let nounindex = 0; nounindex <= noun.length - 1; nounindex++) {
        console.log(
          pronoun[pronounindex] + adj[adjindex] + noun[nounindex] + ".com"
        );
      }
    }
  }
}

function domaingenerator1() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big", "dotcom"];
  let noun = ["dotcom", "internet", "justthetwoofus", "city"];

  for (
    let pronounindex = 0;
    pronounindex <= pronoun.length - 1;
    pronounindex++
  ) {
    for (let adjindex = 0; adjindex <= adj.length - 1; adjindex++) {
      for (let nounindex = 0; nounindex <= noun.length - 1; nounindex++) {
        let domain = pronoun[pronounindex] + adj[adjindex] + noun[nounindex];
        let TestDomain = true;
        switch (TestDomain) {
          case domain.endsWith("com"):
            let NewDomain1 = domain.replace("com", "");
            console.log(NewDomain1 + ".com");
            break;
          case domain.endsWith("net"):
            let NewDomain2 = domain.replace("net", "");
            console.log(NewDomain2 + ".net");
            break;
          case domain.endsWith("us"):
            let NewDomain3 = domain.replace("us", "");
            console.log(NewDomain3 + ".us");
            break;
          default:
            console.log(domain + ".NOT");
            break;
        }
      }
    }
  }
  // let test = noun.includes("dotcom");
  // console.log(test);
}

domaingenerator();
console.log("DIVIDED");
domaingenerator1();
