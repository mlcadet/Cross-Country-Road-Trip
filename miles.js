const $ = (id) => {
    return document.getElementById(id);
  };

  let miles;
  let milesDriven;
  let gallons;
  let price;
  let mpg;
  let cost;
  let err;
  let = true;

  const getNum = (num) => {
    if (isNaN(num) || num <= 0) {
      return true;
    }
  };

  // Clear Button Function
  const clearBtn = () => {
    // Miles Driven
    $("miles_driven").value = "";
    $("miles_driven_error").innerHTML = "";

    // Gallons Used
    $("gallons_used").value = "";
    $("gallons_used_error").innerHTML = "";

    // Gas Price
    $("price_gallon").value = "";
    $("price_gallon_error").innerHTML = "";

    // Assign Outputs
    $("mpg").innerHTML = "";
    $("cost").innerHTML = "";
  };
  // MPG Calculate Function
  function calc() {
    // Miles Driven
    var miles = $("miles_driven").value;
    var miles_err = $("miles_driven_error");
    miles_err.innerHTML = "";
    var miles_ok = true;

    // Gallons Used
    var gallons = $("gallons_used").value;
    var gallon_err = $("gallons_used_error");
    gallon_err.innerHTML = "";
    var gallons_ok = true;

    // Gas Price
    var price = $("price_gallon").value;
    var price_err = $("price_gallon_error");
    price_err.innerHTML = "";
    var price_ok = true;

    // Assign Outputs
    var mpg = $("mpg");
    var cost = $("cost");
    var total_mpg = miles / gallons;
    var total_cost = price * gallons;

    // Error Check
    if (getNum(miles)) {
      miles_err.innerHTML = "Please enter a valid number";
      miles_ok = false;
    }

    if (getNum(gallons)) {
      gallon_err.innerHTML = "Please enter a valid number";
      gallons_ok = false;
    }

    if (getNum(price)) {
      price_err.innerHTML = "Please enter a valid number";
      price_ok = false;
    }
    // Calculate
    if (miles_ok && gallons_ok && price_ok) {
      mpg.innerHTML =
        "The estimated MPG is:  " + total_mpg.toFixed(0) + "mpg.";
      cost.innerHTML = "The cost of this trip is $" + total_cost.toFixed(2);
    }
  }
  // Call functions on load
  window.onload = function () {
    $("btnCalc").onclick = calc;
    $("btnClear").onclick = clearBtn;
  };