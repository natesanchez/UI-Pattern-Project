let p = document.querySelector("p");

let home = document.querySelector(".home");

let homeCrawl = document.querySelector(".homeCrawl");

let episode1 = document.querySelector("#one");

let episode2 = document.querySelector("#two");

let episode3 = document.querySelector("#three");

let episode4 = document.querySelector("#four");

let episode5 = document.querySelector("#five");

let episode6 = document.querySelector("#six");

home.addEventListener("click", showHome);

episode1.addEventListener("click", fetchCrawl1);

episode2.addEventListener("click", fetchCrawl2);

episode3.addEventListener("click", fetchCrawl3);

episode4.addEventListener("click", fetchCrawl4);

episode5.addEventListener("click", fetchCrawl5);

episode6.addEventListener("click", fetchCrawl6);

let baseUrl = "https://swapi.dev/api/films/";

function showHome() {
  p.innerText = "";
  homeCrawl.innerText = "A long time ago in a galaxy far, far away....";
  episode1.classList.remove("clickColor");
  episode2.classList.remove("clickColor");
  episode3.classList.remove("clickColor");
  episode4.classList.remove("clickColor");
  episode5.classList.remove("clickColor");
  episode6.classList.remove("clickColor");
}

function fetchCrawl1(e) {
  e.preventDefault();
  fetch(baseUrl)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      p.innerText = res.results[2].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
      homeCrawl.innerText = "";
      episode1.classList.add("clickColor");
      episode2.classList.remove("clickColor");
      episode3.classList.remove("clickColor");
      episode4.classList.remove("clickColor");
      episode5.classList.remove("clickColor");
      episode6.classList.remove("clickColor");
    })
    .catch((err) => {
      console.log("something went wrong...", err);
    });
}

function fetchCrawl2() {
  fetch(baseUrl)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      p.innerText = res.results[1].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
      homeCrawl.innerText = "";
      episode2.classList.add("clickColor");
      episode1.classList.remove("clickColor");
      episode3.classList.remove("clickColor");
      episode4.classList.remove("clickColor");
      episode5.classList.remove("clickColor");
      episode6.classList.remove("clickColor");
    })
    .catch((err) => {
      console.log("something went wrong...", err);
    });
}

function fetchCrawl3() {
  fetch(baseUrl)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      p.innerText = res.results[3].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
      homeCrawl.innerText = "";
      episode3.classList.add("clickColor");
      episode1.classList.remove("clickColor");
      episode2.classList.remove("clickColor");
      episode4.classList.remove("clickColor");
      episode5.classList.remove("clickColor");
      episode6.classList.remove("clickColor");
    })
    .catch((err) => {
      console.log("something went wrong...", err);
    });
}

function fetchCrawl4() {
  fetch(baseUrl)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      p.innerText = res.results[0].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
      homeCrawl.innerText = "";
      episode4.classList.add("clickColor");
      episode1.classList.remove("clickColor");
      episode2.classList.remove("clickColor");
      episode3.classList.remove("clickColor");
      episode5.classList.remove("clickColor");
      episode6.classList.remove("clickColor");
    })
    .catch((err) => {
      console.log("something went wrong...", err);
    });
}

function fetchCrawl5() {
  fetch(baseUrl)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      p.innerText = res.results[5].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
      homeCrawl.innerText = "";
      episode5.classList.add("clickColor");
      episode1.classList.remove("clickColor");
      episode2.classList.remove("clickColor");
      episode3.classList.remove("clickColor");
      episode4.classList.remove("clickColor");
      episode6.classList.remove("clickColor");
    })
    .catch((err) => {
      console.log("something went wrong...", err);
    });
}

function fetchCrawl6() {
  fetch(baseUrl)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      p.innerText = res.results[4].opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
      homeCrawl.innerText = "";
      episode6.classList.add("clickColor");
      episode1.classList.remove("clickColor");
      episode2.classList.remove("clickColor");
      episode3.classList.remove("clickColor");
      episode4.classList.remove("clickColor");
      episode5.classList.remove("clickColor");
    })
    .catch((err) => {
      console.log("something went wrong...", err);
    });
}
