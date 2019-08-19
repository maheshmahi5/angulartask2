import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements OnInit {
  constructor() {

    // line chart
    this.options = {
      chart: {
        type: 'line'
    },
    exporting: { enabled: false },

    credits: {
      enabled: false,
     },

    title: {
        text: 'Earnings Overview'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {

    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
      name : 'group1',
        data: [0, 10000, 5000, 15000 , 10000, 20000, 15000 , 25000, 20000, 30000, 25000, 40000]
    },
    {
      name : 'group2',
      data: [0, 14000, 15000, 25000 , 16000, 30000, 10000 , 25000, 20000, 30000, 25000, 40000]
  },

    ]
  };

  // donut chart

    this.options1 = {

    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
  },
  title: {
      text: 'Revenue<br>sources',

  },
  exporting: { enabled: false },

  credits: {
    enabled: false,
   },

  // tooltip: {
  //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  // },
  plotOptions: {
      pie: {
          dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                  fontWeight: 'bold',
                  color: 'black'
              }
          },
          startAngle: 0,
          endAngle: 360,
          center: ['50%' ],
          size: '70%'
      }
  },
  series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '70%',
      data: [
          ['Direct', 58.9],
          ['social', 28.1],
          ['Referal', 13]
      ]
  }]

  };

  // bar chart
    this.options2 = {
    chart: {
      type: 'bar'
  },
  title: {
      text: 'Year Wise College Strength'
  },
  exporting: { enabled: false },
  xAxis: {
      categories: ['ECE', 'MECH', 'CSE', 'EEE', 'CIVIL'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Population',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: 'students'
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Year 2015',
      data: [107, 31, 635, 203, 12]
  }, {
      name: 'Year 2016',
      data: [133, 156, 947, 408, 16]
  }, {
      name: 'Year 2017',
      data: [814, 841, 3714, 727, 131]
  }, {
      name: 'Year 2018',
      data: [1216, 1001, 4436, 738, 140]
  }, {
    name: 'Year 2019',
    data : [433, 564, 678, 889, 656]
  }
]

  };


  //pie drilldown

    this.options3 = {

      chart: {
        type: 'column'
    },
    exporting: { enabled: false },

    credits: {
      enabled: false,
     },
    title: {
        text: 'Raghu educational Institutions'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.2f}%'
            },
            center: ['50%' ],
            size: '70%'
        }
    },


    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Browsers",
            colorByPoint: true,
            data: [
                {
                    name: "REC",
                    y: 62.74,
                    drilldown: "rec"
                },
                {
                  name: "RIT",
                  y: 60.74,
                  drilldown: "rit"
              },
                {
                    name: "RCP",
                    y: 50.57,
                    drilldown: "rcp"
                },
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: "REC",
                id: "rec",
                data: [
                    [
                        "v65.0",
                        0.1
                    ],
                    [
                        "v64.0",
                        1.3
                    ],
                    [
                        "v63.0",
                        53.02
                    ],
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ],
                    [
                        "v60.0",
                        0.56
                    ],
                    [
                        "v59.0",
                        0.45
                    ],
                    [
                        "v58.0",
                        0.49
                    ],
                    [
                        "v57.0",
                        0.32
                    ],
                    [
                        "v56.0",
                        0.29
                    ],
                    [
                        "v55.0",
                        0.79
                    ],
                    [
                        "v54.0",
                        0.18
                    ],
                    [
                        "v51.0",
                        0.13
                    ],
                    [
                        "v49.0",
                        2.16
                    ],
                    [
                        "v48.0",
                        0.13
                    ],
                    [
                        "v47.0",
                        0.11
                    ],
                    [
                        "v43.0",
                        0.17
                    ],
                    [
                        "v29.0",
                        0.26
                    ]
                ]
            },
            {
              name: "RIT",
              id: "rit",
              data: [
                  [
                      "v58.0",
                      1.02
                  ],
                  [
                      "v57.0",
                      7.36
                  ],
                  [
                      "v56.0",
                      0.35
                  ],
                  [
                      "v55.0",
                      0.11
                  ],
                  [
                      "v54.0",
                      0.1
                  ],
                  [
                      "v52.0",
                      0.95
                  ],
                  [
                      "v51.0",
                      0.15
                  ],
                  [
                      "v50.0",
                      0.1
                  ],
                  [
                      "v48.0",
                      0.31
                  ],
                  [
                      "v47.0",
                      0.12
                  ]
              ]
          },
            
            {
                name: "RCP",
                id: "rcp",
                data: [
                    [
                        "v50.0",
                        0.96
                    ],
                    [
                        "v49.0",
                        0.82
                    ],
                    [
                        "v12.1",
                        0.14
                    ]
                ]
            }
        ]
    }

  }

  // stack bar

    this.options4 = {

    chart: {
      type: 'bar'
  },
  exporting: { enabled: false },
  title: {
      text: 'Project'
  },
  xAxis: {
      type : "category"
  },
  yAxis: {
      min: 0,
  },
  credits: {
    enabled: false
},
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
  series: [
{
    name: "service",
    colorByPoint : true,
      data: [
    {
      name : 'sales',
      y: 8
    },
    {
      name : 'migration',
      y: 6
    },
    {
      name : 'tracking',
      y: 4
    },
    {
      name : 'consumers',
      y: 6
    }, {
      name : 'payout',
      y: 2
    }
  ]

  }]
}

    this.options5 = {

  chart: {
    type: 'pie'
},
title: {
    text: ' Departments Pass Percentage '
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>',
},
exporting: { enabled: false },

credits: {
  enabled: false
},
plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: false
        },
        showInLegend: true
    }
},
series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
        name: 'Chemical',
        y: 61.41,
        sliced: true,
        selected: true
    }, {
        name: 'ECE',
        y: 11.84
    }, {
        name: 'MECH',
        y: 10.85
    }, {
        name: 'EEE',
        y: 4.67
    }, {
        name: 'CIVIL',
        y: 4.18
    }, {
        name: 'CSE',
        y: 7.05
    }]
}]
}

    this.options6 = {
  chart: {
    type: 'column'
},
exporting: { enabled: false },
title: {
    text: 'Marks of students'
},
xAxis: {
    categories: ['Maths', 'science', 'social', 'english', 'telugu']
},
yAxis: {
  text : 'marks'
},
credits: {
    enabled: false
},
series: [{
    name: 'arya',
    data: [10, 3, 4, 7, 2]
}, {
    name: 'deeksith',
    data: [6, -2, -3, 2, 1]
}, {
    name: 'lesya',
    data: [3, 4, 4, -2, 8]
},
{
  name: 'shasha',
  data: [-3, 9, 4, -2, 5]
}]

}
    this.options7 = {

  title: {
    text: 'Combination chart'
},
exporting: { enabled: false },

credits: {
  enabled: false,
 },
xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
},
labels: {
    items: [{
        html: 'Total fruit consumption',
        style: {
            left: '50px',
            top: '18px',
            // color: ( // theme
            //     Highcharts.defaultOptions.title.style &&
            //     Highcharts.title.style.color
            // ) || 'black'
        }
    }]
},
series: [{
    type: 'column',
    name: 'Ram',
    data: [3, 2, 1, 3, 4]
}, {
    type: 'column',
    name: 'Raj',
    data: [2, 3, 5, 7, 6]
}, {
    type: 'column',
    name: 'Sam',
    data: [4, 3, 3, 9, 0]
}, {
    type: 'spline',
    name: 'Average',
    data: [3, 2.67, 3, 6.33, 3.33],
    marker: {
        lineWidth: 2,
        lineColor: Highcharts.getOptions().colors[5],
        fillColor: 'white'
    }
}, {
    type: 'pie',
    name: 'Total consumption',
    data: [{
        name: 'Ram',
        y: 13,
        color: Highcharts.getOptions().colors[8] // Jane's color
    }, {
        name: 'Raj',
        y: 23,
        color: Highcharts.getOptions().colors[7] // John's color
    }, {
        name: 'Sam',
        y: 19,
        color: Highcharts.getOptions().colors[6] // Joe's color
    }],
    center: [100, 80],
    size: 100,
    showInLegend: false,
    dataLabels: {
        enabled: false
    }
}]
}

//     this.options8 = {
//     title: {
//         text: 'Chart.update'
//     },

//     subtitle: {
//         text: 'Plain'
//     },

//     xAxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     },

//     series: [{
//         type: 'column',
//         colorByPoint: true,
//         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//         showInLegend: false
//     }]

// });


//     $('#plain').click(function () {
//     chart.update({
//         chart: {
//             inverted: false,
//             polar: false
//         },
//         subtitle: {
//             text: 'Plain'
//         }
//     });
// });

//     $('#inverted').click(function () {
//     chart.update({
//         chart: {
//             inverted: true,
//             polar: false
//         },
//         subtitle: {
//             text: 'Inverted'
//         }
//     });
// });

//     $('#polar').click(function () {
//     chart.update({
//         chart: {
//             inverted: false,
//             polar: true
//         },
//         subtitle: {
//             text: 'Polar'
//         }
//     });
// }


   }
   options: Object;
   options1: Object;
   options2: Object;
   options3: Object;
   options4: Object;
   options5: Object;
   options6: Object;
   options7: Object;
   options8: Object;
   options9: Object;
   options10: Object;
   options11: Object;

  ngOnInit() {
  }
}
