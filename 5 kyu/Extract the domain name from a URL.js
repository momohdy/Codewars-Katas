// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  let domain;
  url = url.replace(/https:\/\//, "").replace(/http:\/\//, "").replace(/www./, "").replace(/.com/, "");

  //   initial value
  domain = url

  if (url.includes(".")) {
     domain = url.split(".")[0];
  }
  
  if (domain.includes("/")) {
    domain = domain.split("/")[0]
  }

  return domain;
}


// function domainName(url){  
//     return url.replace(/.+\/\/|www.|\..+/g, '')
// }

console.log(domainName("https://www.codewars.com/kata")); // codewars/kata
