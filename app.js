$("form").submit(function (e) {
    e.preventDefault();
  });
  
  function calculate_cost() {
    let gallon_per_100km = $("#gallon_per_100km").prop('value');
    let cost_per_gallon = $("#cost_per_gallon").prop('value');
    let distance = $("#distance").prop('value');
    let trip_cost = (gallon_per_100km*cost_per_gallon/100)*distance;
    $('#output').prop('value','$'+trip_cost/100)
  }