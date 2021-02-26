let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racooncom', 'thelastofus'];
let domains = ['com', 'net', 'org', 'us'];
 const main = () => {
     for (p in pronoun) {
         for (a in adj) {
             for (n in noun) {
                 for (d in domains) {
                     if (domains.includes(
                         noun[n].slice(
                             noun[n].length - (domains[d].length),
                             noun[n].length))) {
                         console.log(pronoun[p] + adj[a] + noun[n].slice(0, noun[n].length - (domains[d].length)) + "." + noun[n].slice(noun[n].length - (domains[d].length), noun[n].length));
                     } else {
                         console.log(pronoun[p] + adj[a] + noun[n] + "." + domains[d]);
                     }
                 }
             }
         }
     }
 }
console.log(main());


