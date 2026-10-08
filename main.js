let maleBtn = document.getElementById("male");
let femaleBtn = document.getElementById("female");

// Gender Selection Color
maleBtn.addEventListener("click", () => {
  maleBtn.classList.add("active-male");
  femaleBtn.classList.remove("active-female");
});

femaleBtn.addEventListener("click", () => {
  femaleBtn.classList.add("active-female");
  maleBtn.classList.remove("active-male");
});

// 1.Validation Function
let validateInputs = () => {
  let measureAge = document.getElementById("age").value;
  let measureHeight = document.getElementById("height").value;
  let measureWeight = document.getElementById("weight").value;

  // Gender VErification
  let isMaleSelected = maleBtn.classList.contains("active-male");
  let isFemaleSelected = femaleBtn.classList.contains("active-female");

  if (!isMaleSelected && !isFemaleSelected) {
    alert("Please select a gender");
    return;
  }

  // Age Verification
  if (
    measureAge.trim() === "" ||
    isNaN(measureAge) ||
    Number(measureAge) <= 0
  ) {
    alert("Plese enter a valid age");
    return; // Stop here if invalid
  }

  // Height Verification
  if (
    measureHeight.trim() === "" ||
    isNaN(measureHeight) ||
    Number(measureHeight) <= 0
  ) {
    alert("Please enter a valid Height");
    return;
  }

  // Weight Verification
  if (
    measureWeight.trim() === "" ||
    isNaN(measureWeight) ||
    Number(measureWeight) <= 0
  ) {
    alert("Please enter a valid Weight");
    return;
  }
  calculateBmi(Number(measureHeight), Number(measureWeight));
};

let calculateBmi = (height, weight) => {
  let bmi = weight / ((height / 100) * (height / 100));

  let categoryCheck = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else if (bmi >= 30) {
      return "Obese";
    } else {
      return "Invalid BMI";
    }
  };
  let category = categoryCheck(bmi);
  console.log(category);

  let outputResult = document.getElementById("bmi");
  let outputCategory = document.getElementById("category");

  outputResult.value = `${bmi.toFixed(1)}`;
  outputCategory.value = `${category}`;

  // removing previous css classes
  outputCategory.className = "";

  // applying new css to the category attribute

  if (category === "Underweight") {
    outputCategory.classList.add("underweight-color");
  } else if (category === "Normal weight") {
    outputCategory.classList.add("normal-color");
  } else if (category === "Overweight") {
    outputCategory.classList.add("overweight-color");
  } else if (category === "Obese") {
    outputCategory.classList.add("obese-color");
  }
};

let clearEntities = () => {
  document.getElementById("age").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";

  // clear result filed
  document.getElementById("bmi").value = "";
  document.getElementById("category").value = "";

  // Reset Teh gender button to unselected state
  document.getElementById("male").classList.remove("active-male");
  document.getElementById("female").classList.remove("active-female");
};

let clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", clearEntities);
