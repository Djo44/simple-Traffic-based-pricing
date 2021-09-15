let pageViews = document.querySelector(".page-views");
let price = document.querySelector(".big-price");
let slider = document.querySelector("#slider");
let discount = document.querySelector("#discount");
let button = document.querySelector("button");
let check = document.querySelector("#check");

function monthlyYearly() {
  if (check.checked === true) {
    return true;
  } else {
    return false;
  }
}

function getPrice() {
  let sliderValue = parseInt(slider.value);
  let value;

  if (sliderValue == 1) {
    if (monthlyYearly()) {
      value = 8 * 0.75;
    } else {
      value = 8;
    }
    pageViews.innerHTML = "10K PAGEVIEWS";
    price.innerText = `$${value}.00`;
  }
  if (sliderValue == 2) {
    if (monthlyYearly()) {
      value = 12 * 0.75;
    } else {
      value = 12;
    }
    pageViews.innerHTML = "50K PAGEVIEWS";
    price.innerText = `$${value}.00`;
  }
  if (sliderValue == 3) {
    if (monthlyYearly()) {
      value = 16 * 0.75;
    } else {
      value = 16;
    }
    pageViews.innerHTML = "100K PAGEVIEWS";
    price.innerText = `$${value}.00`;
  }
  if (sliderValue == 4) {
    if (monthlyYearly()) {
      value = 24 * 0.75;
    } else {
      value = 24;
    }
    pageViews.innerHTML = "500K PAGEVIEWS";
    price.innerText = `$${value}.00`;
  }
  if (sliderValue == 5) {
    if (monthlyYearly()) {
      value = 36 * 0.75;
    } else {
      value = 36;
    }
    pageViews.innerHTML = "1M PAGEVIEWS";
    price.innerText = `$${value}.00`;
  }
}

slider.addEventListener("change", getPrice);

check.addEventListener("click", function () {
  if (monthlyYearly()) {
    discount.style.color = "hsl(174, 86%, 45%)";
    discount.style.backgroundColor = "hsl(174, 77%, 80%)";
  } else {
    discount.style.color = "";
    discount.style.backgroundColor = "";
  }
  getPrice();
  monthlyYearly();
});
