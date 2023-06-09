console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
topFiveCityGrowths

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  console.log(cityPopulation);
  
  var topSevenCityNames = cityGrowths.map(population => population);
  var topSevenCityPopulation = cityPopulation.map(population => parseInt(population));
  topSevenCityPopulation
  
  var trace = {
      x: topSevenCityNames,
      y: topSevenCityPopulation,
      type: "bar"
    };
    var data = [trace];
    var layout = {
      title: "Cities with Largest Population",
      xaxis: {title: "City"},
      yaxis: {title: "Largest Population"}
    };
    Plotly.newPlot("bar-plot", data, layout);
   