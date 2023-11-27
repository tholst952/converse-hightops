"use strict";

const colors = document.querySelector(".colors");
const img = document.querySelector("img").src;

const black = document.querySelector(".black");
const parchment = document.querySelector(".parchment");
const sunflower = document.querySelector(".sunflower");
const summitSage = document.querySelector(".summit-sage");
const vaporViolet = document.querySelector(".vapor-violet");
const rhubarbPie = document.querySelector(".rhubarb-pie");
const sunnyOasis = document.querySelector(".sunny-oasis");
const brown = document.querySelector(".brown");
const amberPink = document.querySelector(".amber-pink");

black.addEventListener(
  "click",
  () => (document.querySelector("img").src = "img/black.jpg")
);

parchment.addEventListener(
  "click",
  () => (document.querySelector("img").src = "img/parchment.jpg")
);

sunflower.addEventListener(
  "click",
  () => (document.querySelector("img").src = "img/sunflower.jpg")
);

summitSage.addEventListener(
  "click",
  () => (document.querySelector("img").src = "img/summit-sage.jpg")
);

vaporViolet.addEventListener(
  "click",
  () => (document.querySelector("img").src = "img/vapor-violet.jpg")
);

rhubarbPie.addEventListener(
  "click",
  () => (document.querySelector("img").src = "img/rhubarb-pie.jpg")
);

sunnyOasis.addEventListener(
  "click",
  () => (document.querySelector("img").src = "img/sunny-oasis.jpg")
);

brown.addEventListener(
  "click",
  () => (document.querySelector("img").src = "img/brown.jpg")
);

amberPink.addEventListener(
  "click",
  () => (document.querySelector("img").src = "img/amber-pink.jpg")
);
