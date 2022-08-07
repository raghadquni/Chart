var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }
],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();


//////////////////////////////// 


  var options1 = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [[1, 34], [3, 54], [5, 23], [15, 43]]

    }
],
    xaxis: {
        type: 'numeric'
    }
  }
  var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);

  chart1.render();

  //////////////////////////////////

  var options2 = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [[1324508400000, 34], [1324594800000, 54], [1326236400000, 43]]
    }
],
    xaxis: {
        type: 'numeric'
    }
  }


  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);

  
  chart2.render();





  //////////////////////////////////


  var options4 = {
    chart: {
        height: 355,
        type: 'line',
      },

    series: [{
    name: 'gonsure',
    type: 'area',
    data: [90, 60, 180, 112, 200, 100, 200, 120, 299, 200, 310]
  }, {
    name: 'Damin',
    type: 'area',
    data: [100, 190, 100, 230, 200, 90, 280, 150, 200, 100, 300]
  }],

  yaxis: [
    {
      title: {
        text: 'Customers',
      },
    }
    ],

  stroke: {
    curve: 'smooth'
  },

  fill: {
    type:'solid',
    opacity: [0.35, 0.35],
  },

  labels: ['Feb2021','march2021',"Apr2021","May2021","Jun2021","Jul2021","Aug2021", "Sep2021","Act2021", "Nov2021", "Des2021"]

}


  var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
  chart4.render();

  /////////////////////////////////////////////////

    var options5 = {
        series: [25,15,25,35],
        chart: {
        width: 380,
        type: 'donut',
      },

      fill: {
        type: 'gradient',
      },
    labels: ['IT', 'CS', 'cyber', 'UI/UX'],

    responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'top'
          }
        }
      }]
  }


var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
chart5.render();

///////////////////////////////


  var options6 = {
    series: [25,15,25,35],
    chart: {
    width: 480,
    type: 'pie',
  },

colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],

labels: ['IT', 'CS', 'cyber', 'UI/UX'],

fill: {
    type: 'image',
    opacity: 1,
    image: {
       src: ['./IT.jpeg', './cs.jpeg', './cyber.jpeg', './Uiux.png'],
      width: 10,
      imagedHeight: 25
    },
},

responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'top'
      }
    }
  }]
}

var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
chart6.render();

//////////////////////////////////////


var options7 = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
    type: 'polarArea',
  },
  colors: ['#e4e1b1', '#fea594', '#d3af37', '#ffc0cb', '#e6e6fa', '#c6e2ff', '#c5f8b0', '#d389b5', '#64110b'],
  labels: ['Raghad', 'sami', 'anoud', 'entessar', 'lama', 'nouf', 'dana','mishal','amjad'],

  stroke: {
    colors: ['#fff']
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}

var chart7 = new ApexCharts(document.querySelector("#chart7"), options7);
chart7.render();
