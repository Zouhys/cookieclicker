const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const autoclicker = document.getElementById("autoclicker");
const clickupgrade = document.getElementById("clickupgrade");

let cookies = 0;
let autoclickerPrice = 100;
let autoclickerIncrease = 0;

let clickupgradePrice = 50;
let clickupgradeIncrease = 1;

// () => arrow function
cookie.onclick = () => {
  cookies += clickupgradeIncrease;
  counter.innerHTML = cookies;
};

clickupgrade.onclick = () => {
  if (cookies >= clickupgradePrice) {
    cookies -= clickupgradePrice;
    counter.innerHTML = cookies;
    clickupgradePrice *= 2;
    clickupgrade.innerHTML = `Buy click upgrade: ${clickupgradePrice}`;
    clickupgradeIncrease++;
  }
};

autoclicker.onclick = () => {
  if (cookies >= autoclickerPrice) {
    cookies -= autoclickerPrice;
    counter.innerHTML = cookies;
    autoclickerPrice *= 2;
    autoclicker.innerHTML = `Buy autoclicker : ${autoclickerPrice}`;
    if (autoclickerIncrease == 0) {
      // spustim interval
      setInterval(() => {
        cookies += autoclickerIncrease;
        counter.innerHTML = cookies;
      }, 1000);
    }
    autoclickerIncrease++;
  }
}