

// let p = document.querySelector("p")

// someText = "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....".replace(/(\r\n|\n|\r)/gm, " ");

// p.innerText = someText

let episode1 = document.querySelector("#one");

let episode2 = document.querySelector("#two");

let episode3 = document.querySelector("#three");

let episode4 = document.querySelector("#four");

let episode5 = document.querySelector("#five");

let episode6 = document.querySelector("#six");




let baseUrl = "https://swapi.co/api/films/";

function fetchCrawl1 () {
fetch(baseUrl, ).then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res.results[0].opening_crawl);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}


function fetchCrawl2 () {
fetch(baseUrl, ).then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}


function fetchCrawl3 () {
fetch(baseUrl, ).then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}


function fetchCrawl4 () {
fetch(baseUrl, ).then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}

function fetchCrawl5 () {
fetch(baseUrl, ).then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}

function fetchCrawl6 () {
fetch(baseUrl, ).then(res => {
    return res.json();
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}


fetchCrawl1();





































