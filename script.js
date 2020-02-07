
let p = document.querySelector("p")

let episode1 = document.querySelector("#one");

let episode2 = document.querySelector("#two");

let episode3 = document.querySelector("#three");

let episode4 = document.querySelector("#four");

let episode5 = document.querySelector("#five");

let episode6 = document.querySelector("#six");

episode1.addEventListener("click", fetchCrawl1)

episode2.addEventListener("click", fetchCrawl2)

episode3.addEventListener("click", fetchCrawl3)

episode4.addEventListener("click", fetchCrawl4)

episode5.addEventListener("click", fetchCrawl5)

episode6.addEventListener("click", fetchCrawl6)


let baseUrl = "https://swapi.co/api/films/";

function fetchCrawl1 (e) {
e.preventDefault(); 	
fetch(baseUrl, ).then(res => {
    return res.json();
  })
  .then(res => {
	p.innerText = res.results[2].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
  })
  episode1.classList.add("clickColor");
  .catch(err => {
    console.log("something went wrong...", err);
  });
}


function fetchCrawl2 () {
fetch(baseUrl, ).then(res => {
    return res.json();
  })
  .then(res => {
	p.innerText = res.results[1].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
  episode2.classList.add("clickColor");
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
	p.innerText = res.results[3].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
  episode2.classList.add("clickColor");
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
	p.innerText = res.results[0].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
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
	p.innerText = res.results[5].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
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
	p.innerText = res.results[4].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });
}



















