document.getElementById('calculateBtn').addEventListener('click', function() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value) / 100; // convert height from cm to meters

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById('result').innerHTML = 'Please enter valid weight and height values.';
    return;
  }

  var bmi = weight / (height * height);
  var bmiResult = 'Your BMI is ' + bmi.toFixed(2) + '. ';

  if (bmi < 18.5) {
    bmiResult += 'You are underweight.';
  } else if (bmi < 25) {
    bmiResult += 'You have a normal weight.';
  } else if (bmi < 30) {
    bmiResult += 'You are overweight.';
  } else {
    bmiResult += 'You are obese.';
  }

  document.getElementById('result').innerHTML = bmiResult;
});




const searchInput = document.getElementById('searchInput');
const items = document.getElementById('items');
const results = document.getElementById('results');

searchInput.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  results.innerHTML = '';

  if (searchValue.length > 0) {
    items.querySelectorAll('li').forEach(item => {
      const itemName = item.textContent.toLowerCase();
      if (itemName.includes(searchValue)) {
        const li = document.createElement('li');
        li.textContent = item.textContent;
        li.addEventListener('click', function() {
          alert('You clicked: ' + this.textContent);
        });
        results.appendChild(li);
      }
    });
  }
});

// Function to add new items to search
function addItemToSearch(itemName) {
  const li = document.createElement('li');
  li.textContent = itemName;
  items.appendChild(li);
}

const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("menu-btn")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance:"50px",
  origin:"bottom",
  duration: 1000,
};

// header container
scrollReveal().reveal(".header__image img", {
  ...scrollRevealOption
});

scrollReveal().reveal(".header__content h4, .header__content .section__header",{
  ...scrollRevealOption,
  delay: 500,
});

scrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

scrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});




