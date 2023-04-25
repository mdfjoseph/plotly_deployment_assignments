Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

Plotly.newPlot("plotArea", [{x: [5, 7, 9], y: [15, 25, 35]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", [trace], layout);

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

   var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);
   
var trace1 = {
    x: ['nonalcoholic beer','nonalcoholic wine','nonalcoholic martini','nonalcoholic margarita'],
    y: [20, 12, 4],
    name: 'Red',
    type: 'scatter',
    mode:  'markers'
};

var trace2 = {
    x: ['ice tea', 'rum & coke', 'mai tai', 'gin & tonic'],
    y: [16, 8, 2],
    name: 'Blue',
    type: 'scatter',
    mode: 'markers'
};

var data = [trace1, trace2];

var layout = {
    scattermode: 'group',
    title:  'Drinks',
    xaxis:  {title: 'Nonalcholic Drinks'},
    yaxis:  {title: 'Alcholic Drinks'}
};
Plotly.newPlot('myDiv', data, layout);

var numbers = [0,2,4,6,8];
var add = numbers.map(function(num){
    return num + 5;
});
console.log(add);