//canvasjs will break if you skip over charts (i.e. have a chart created in the javascript but don't actually use all of them in the html) in the js file. single-use js files.
window.onload = function() {

var seaTempChart = new CanvasJS.Chart("seaTempChartContainer", {
title: {
  text: "Change in global sea levels and combined land-sea anomalies",
},
zoomEnabled: true,
data: [ //array of dataseries
{ //data series 1
  //https://pkgstore.datahub.io/core/sea-level-rise/epa-sea-level_json/data/ac016d75688136c47a04ac70298e42ec/epa-sea-level_json.json
  //Commonwealth Scientific and Industrial Research Organisation
  type: "area",
  color: "mediumblue",
  name: "Sea Level Change in Centimeters",
  showInLegend: true,
  dataPoints: [
    { x: new Date(1880,0,0), y: 0},
    { x: new Date(1881,0,0), y: .0220472441},
    { x: new Date(1882,0,0), y: -.0440944881},
    { x: new Date(1883,0,0), y: -.0232283464},
    { x: new Date(1884,0,0), y: .0590551181},
    { x: new Date(1885,0,0), y: .0531496062},
    { x: new Date(1886,0,0), y: .0437007874},
    { x: new Date(1887,0,0), y: .0216535433},
    { x: new Date(1888,0,0), y: .0299212598},
    { x: new Date(1889,0,0), y: .0362204724},
    { x: new Date(1890,0,0), y: .0440944881},
    { x: new Date(1891,0,0), y: .0374015748},
    { x: new Date(1892,0,0), y: .0499999999},
    { x: new Date(1893,0,0), y: .0685039369},
    { x: new Date(1894,0,0), y: .0303149606},
    { x: new Date(1895,0,0), y: .0767716535},
    { x: new Date(1896,0,0), y: .0468503937},
    { x: new Date(1897,0,0), y: .0673228346},
    { x: new Date(1898,0,0), y: .1043307086},
    { x: new Date(1899,0,0), y: .1338582676},
    { x: new Date(1900,0,0), y: .1125984251},
    { x: new Date(1901,0,0), y: .1110236219},
    { x: new Date(1902,0,0), y: .1291338581},
    { x: new Date(1903,0,0), y: .1606299211},
    { x: new Date(1904,0,0), y: .12007874},
    { x: new Date(1905,0,0), y: .0984251968},
    { x: new Date(1906,0,0), y: .1251968503},
    { x: new Date(1907,0,0), y: .1196850392},
    { x: new Date(1908,0,0), y: .1098425196},
    { x: new Date(1909,0,0), y: .127559055},
    { x: new Date(1910,0,0), y: .1271653542},
    { x: new Date(1911,0,0), y: .1598425195},
    { x: new Date(1912,0,0), y: .1476377951},
    { x: new Date(1913,0,0), y: .1547244093},
    { x: new Date(1914,0,0), y: .1795275589},
    { x: new Date(1915,0,0), y: .210629921},
    { x: new Date(1916,0,0), y: .2031496061},
    { x: new Date(1917,0,0), y: .1854330707},
    { x: new Date(1918,0,0), y: .1791338581},
    { x: new Date(1919,0,0), y: .1854330707},
    { x: new Date(1920,0,0), y: .1905511809},
    { x: new Date(1921,0,0), y: .1988188974},
    { x: new Date(1922,0,0), y: .1952755904},
    { x: new Date(1923,0,0), y: .1999999998},
    { x: new Date(1924,0,0), y: .1712598423},
    { x: new Date(1925,0,0), y: .1791338581},
    { x: new Date(1926,0,0), y: .2047244092},
    { x: new Date(1927,0,0), y: .2003937006},
    { x: new Date(1928,0,0), y: .1850393699},
    { x: new Date(1929,0,0), y: .1905511809},
    { x: new Date(1930,0,0), y: .2062992124},
    { x: new Date(1931,0,0), y: .2047244092},
    { x: new Date(1932,0,0), y: .2271653541},
    { x: new Date(1933,0,0), y: .2440944879},
    { x: new Date(1934,0,0), y: .2228346454},
    { x: new Date(1935,0,0), y: .2448818895},
    { x: new Date(1936,0,0), y: .2295275588},
    { x: new Date(1937,0,0), y: .2519685037},
    { x: new Date(1938,0,0), y: .2622047241},
    { x: new Date(1939,0,0), y: .2826771651},
    { x: new Date(1940,0,0), y: .2618110234},
    { x: new Date(1941,0,0), y: .3098425194},
    { x: new Date(1942,0,0), y: .3098425194},
    { x: new Date(1943,0,0), y: .3098425194},
    { x: new Date(1944,0,0), y: .284645669},
    { x: new Date(1945,0,0), y: .295669291},
    { x: new Date(1946,0,0), y: .3251968501},
    { x: new Date(1947,0,0), y: .3374015745},
    { x: new Date(1948,0,0), y: .3562992122},
    { x: new Date(1949,0,0), y: .351181102},
    { x: new Date(1950,0,0), y: .3598425193},
    { x: new Date(1951,0,0), y: .3972440941},
    { x: new Date(1952,0,0), y: .3870078736},
    { x: new Date(1953,0,0), y: .4043307082},
    { x: new Date(1954,0,0), y: .3929133854},
    { x: new Date(1955,0,0), y: .3964566925},
    { x: new Date(1956,0,0), y: .3763779524},
    { x: new Date(1957,0,0), y: .4291338578},
    { x: new Date(1958,0,0), y: .4346456688},
    { x: new Date(1959,0,0), y: .4358267712},
    { x: new Date(1960,0,0), y: .4503937003},
    { x: new Date(1961,0,0), y: .4748031491},
    { x: new Date(1962,0,0), y: .4543307082},
    { x: new Date(1963,0,0), y: .4480314956},
    { x: new Date(1964,0,0), y: .4169291334},
    { x: new Date(1965,0,0), y: .4610236216},
    { x: new Date(1966,0,0), y: .4397637791},
    { x: new Date(1967,0,0), y: .4452755901},
    { x: new Date(1968,0,0), y: .4484251964},
    { x: new Date(1969,0,0), y: .4751968499},
    { x: new Date(1970,0,0), y: .467716535},
    { x: new Date(1971,0,0), y: .4881889759},
    { x: new Date(1972,0,0), y: .5240157475},
    { x: new Date(1973,0,0), y: .5003937003},
    { x: new Date(1974,0,0), y: .5472440939},
    { x: new Date(1975,0,0), y: .5409448813},
    { x: new Date(1976,0,0), y: .5370078735},
    { x: new Date(1977,0,0), y: .5303149601},
    { x: new Date(1978,0,0), y: .5555118105},
    { x: new Date(1979,0,0), y: .5362204719},
    { x: new Date(1980,0,0), y: .5598425191},
    { x: new Date(1981,0,0), y: .6086614167},
    { x: new Date(1982,0,0), y: .5858267711},
    { x: new Date(1983,0,0), y: .6188976372},
    { x: new Date(1984,0,0), y: .6153543301},
    { x: new Date(1985,0,0), y: .574803149},
    { x: new Date(1986,0,0), y: .5771653537},
    { x: new Date(1987,0,0), y: .5795275585},
    { x: new Date(1988,0,0), y: .5980314955},
    { x: new Date(1989,0,0), y: .6157480309},
    { x: new Date(1990,0,0), y: .6232283458},
    { x: new Date(1991,0,0), y: .6334645663},
    { x: new Date(1992,0,0), y: .635826771},
    { x: new Date(1993,0,0), y: .6291338576},
    { x: new Date(1994,0,0), y: .6499999993},
    { x: new Date(1995,0,0), y: .6618110229},
    { x: new Date(1996,0,0), y: .6787401568},
    { x: new Date(1997,0,0), y: .7066929127},
    { x: new Date(1998,0,0), y: .6665354324},
    { x: new Date(1999,0,0), y: .7011811016},
    { x: new Date(2000,0,0), y: .7062992119},
    { x: new Date(2001,0,0), y: .7287401567},
    { x: new Date(2002,0,0), y: .7381889756},
    { x: new Date(2003,0,0), y: .7759842512},
    { x: new Date(2004,0,0), y: .7740157472},
    { x: new Date(2005,0,0), y: .774409448},
    { x: new Date(2006,0,0), y: .7917322827},
    { x: new Date(2007,0,0), y: .7996062984},
    { x: new Date(2008,0,0), y: .8350393692},
    { x: new Date(2009,0,0), y: .8586614164},
    { x: new Date(2010,0,0), y: .8901574794},
    { x: new Date(2011,0,0), y: .896456692},
    { x: new Date(2012,0,0), y: .9326771644},
    { x: new Date(2013,0,0), y: .8980314951},
    { x: new Date(2014,0,0), y: null}
    ]

  },
  { //data series 2
    //https://www.ncdc.noaa.gov/cag/global/time-series/globe/land_ocean/ytd/12/1880-2016.json
    type: "line",
    color: "red",
    name: "Global Land and Ocean Temperature Anomalies, Degrees Celcius",
    showInLegend: true,
    dataPoints: [
      { x: new Date(1880,0,0), y: -0.11 },
      { x: new Date(1881,0,0), y: -0.06 },
      { x: new Date(1882,0,0), y: -0.06 },
      { x: new Date(1883,0,0), y: -0.14 },
      { x: new Date(1884,0,0), y: -0.20 },
      { x: new Date(1885,0,0), y: -0.21 },
      { x: new Date(1886,0,0), y: -0.20 },
      { x: new Date(1887,0,0), y: -0.24 },
      { x: new Date(1888,0,0), y: -0.15 },
      { x: new Date(1889,0,0), y: -0.10 },
      { x: new Date(1890,0,0), y: -0.32 },
      { x: new Date(1891,0,0), y: -0.25 },
      { x: new Date(1892,0,0), y: -0.30 },
      { x: new Date(1893,0,0), y: -0.31 },
      { x: new Date(1894,0,0), y: -0.27 },
      { x: new Date(1895,0,0), y: -0.22 },
      { x: new Date(1896,0,0), y: -0.09 },
      { x: new Date(1897,0,0), y: -0.11 },
      { x: new Date(1898,0,0), y: -0.25 },
      { x: new Date(1899,0,0), y: -0.11 },
      { x: new Date(1900,0,0), y: -0.06 },
      { x: new Date(1901,0,0), y: -0.13 },
      { x: new Date(1902,0,0), y: -0.24 },
      { x: new Date(1903,0,0), y: -0.33 },
      { x: new Date(1904,0,0), y: -0.41 },
      { x: new Date(1905,0,0), y: -0.28 },
      { x: new Date(1906,0,0), y: -0.21 },
      { x: new Date(1907,0,0), y: -0.37 },
      { x: new Date(1908,0,0), y: -0.44 },
      { x: new Date(1909,0,0), y: -0.42 },
      { x: new Date(1910,0,0), y: -0.38 },
      { x: new Date(1911,0,0), y: -0.43 },
      { x: new Date(1912,0,0), y: -0.33 },
      { x: new Date(1913,0,0), y: -0.32 },
      { x: new Date(1914,0,0), y: -0.14 },
      { x: new Date(1915,0,0), y: -0.07 },
      { x: new Date(1916,0,0), y: -0.29 },
      { x: new Date(1917,0,0), y: -0.31 },
      { x: new Date(1918,0,0), y: -0.20 },
      { x: new Date(1919,0,0), y: -0.20 },
      { x: new Date(1920,0,0), y: -0.21 },
      { x: new Date(1921,0,0), y: -0.14 },
      { x: new Date(1922,0,0), y: -0.22 },
      { x: new Date(1923,0,0), y: -0.21 },
      { x: new Date(1924,0,0), y: -0.24 },
      { x: new Date(1925,0,0), y: -0.14 },
      { x: new Date(1926,0,0), y: -0.06 },
      { x: new Date(1927,0,0), y: -0.14 },
      { x: new Date(1928,0,0), y: -0.17 },
      { x: new Date(1929,0,0), y: -0.29 },
      { x: new Date(1930,0,0), y: -0.10 },
      { x: new Date(1931,0,0), y: -0.07 },
      { x: new Date(1932,0,0), y: -0.12 },
      { x: new Date(1933,0,0), y: -0.24 },
      { x: new Date(1934,0,0), y: -0.10 },
      { x: new Date(1935,0,0), y: -0.14 },
      { x: new Date(1936,0,0), y: -0.11 },
      { x: new Date(1937,0,0), y: -0.02 },
      { x: new Date(1938,0,0), y: -0.03 },
      { x: new Date(1939,0,0), y: -0.01 },
      { x: new Date(1940,0,0), y: 0.10 },
      { x: new Date(1941,0,0), y: 0.19 },
      { x: new Date(1942,0,0), y: 0.15 },
      { x: new Date(1943,0,0), y: 0.15 },
      { x: new Date(1944,0,0), y: 0.29 },
      { x: new Date(1945,0,0), y: 0.17 },
      { x: new Date(1946,0,0), y: -0.01 },
      { x: new Date(1947,0,0), y: -0.06 },
      { x: new Date(1948,0,0), y: -0.05 },
      { x: new Date(1949,0,0), y: -0.06 },
      { x: new Date(1950,0,0), y: -0.17 },
      { x: new Date(1951,0,0), y: -0.02 },
      { x: new Date(1952,0,0), y: 0.02 },
      { x: new Date(1953,0,0), y: 0.09 },
      { x: new Date(1954,0,0), y: -0.12 },
      { x: new Date(1955,0,0), y: -0.14 },
      { x: new Date(1956,0,0), y: -0.20 },
      { x: new Date(1957,0,0), y: 0.04 },
      { x: new Date(1958,0,0), y: 0.11 },
      { x: new Date(1959,0,0), y: 0.06 },
      { x: new Date(1960,0,0), y: 0.02 },
      { x: new Date(1961,0,0), y: 0.07 },
      { x: new Date(1962,0,0), y: 0.09 },
      { x: new Date(1963,0,0), y: 0.11 },
      { x: new Date(1964,0,0), y: -0.15 },
      { x: new Date(1965,0,0), y: -0.08 },
      { x: new Date(1966,0,0), y: -0.02 },
      { x: new Date(1967,0,0), y: -0.02 },
      { x: new Date(1968,0,0), y: -0.03 },
      { x: new Date(1969,0,0), y: 0.09 },
      { x: new Date(1970,0,0), y: 0.04 },
      { x: new Date(1971,0,0), y: -0.08 },
      { x: new Date(1972,0,0), y: 0.03 },
      { x: new Date(1973,0,0), y: 0.16 },
      { x: new Date(1974,0,0), y: -0.07 },
      { x: new Date(1975,0,0), y: 0.00 },
      { x: new Date(1976,0,0), y: -0.08 },
      { x: new Date(1977,0,0), y: 0.20 },
      { x: new Date(1978,0,0), y: 0.11 },
      { x: new Date(1979,0,0), y: 0.23 },
      { x: new Date(1980,0,0), y: 0.26 },
      { x: new Date(1981,0,0), y: 0.30 },
      { x: new Date(1982,0,0), y: 0.18 },
      { x: new Date(1983,0,0), y: 0.34 },
      { x: new Date(1984,0,0), y: 0.15 },
      { x: new Date(1985,0,0), y: 0.13 },
      { x: new Date(1986,0,0), y: 0.23 },
      { x: new Date(1987,0,0), y: 0.37 },
      { x: new Date(1988,0,0), y: 0.37 },
      { x: new Date(1989,0,0), y: 0.29 },
      { x: new Date(1990,0,0), y: 0.43 },
      { x: new Date(1991,0,0), y: 0.40 },
      { x: new Date(1992,0,0), y: 0.25 },
      { x: new Date(1993,0,0), y: 0.28 },
      { x: new Date(1994,0,0), y: 0.34 },
      { x: new Date(1995,0,0), y: 0.45 },
      { x: new Date(1996,0,0), y: 0.32 },
      { x: new Date(1997,0,0), y: 0.52 },
      { x: new Date(1998,0,0), y: 0.63 },
      { x: new Date(1999,0,0), y: 0.44 },
      { x: new Date(2000,0,0), y: 0.42 },
      { x: new Date(2001,0,0), y: 0.54 },
      { x: new Date(2002,0,0), y: 0.60 },
      { x: new Date(2003,0,0), y: 0.61 },
      { x: new Date(2004,0,0), y: 0.58 },
      { x: new Date(2005,0,0), y: 0.66 },
      { x: new Date(2006,0,0), y: 0.61 },
      { x: new Date(2007,0,0), y: 0.61 },
      { x: new Date(2008,0,0), y: 0.54 },
      { x: new Date(2009,0,0), y: 0.63 },
      { x: new Date(2010,0,0), y: 0.70 },
      { x: new Date(2011,0,0), y: 0.58 },
      { x: new Date(2012,0,0), y: 0.62 },
      { x: new Date(2013,0,0), y: 0.67 },
      { x: new Date(2014,0,0), y: 0.74 },
      { x: new Date(2015,0,0), y: 0.91 },
      { x: new Date(2016,0,0), y: 0.95 },
      ]
  }
]// end of data array
// options: {},
});
seaTempChart.render();

var midwestChart = new CanvasJS.Chart("midwestChartContainer",{
  title: {
    text: "Days per year over 90 degrees Farenheit"
  },
  zoomEnabled: true,
  axisX: {
    labelAngle: -30
  },
  axisY: {
    maximum: 120,
    interval: 25,
  },
  data: [ //array of dataseries
    { //data series 1 - 1961-1990
    type: "column",
    color: "black",
    name: "Historical Midwest Heat 1961-1990",
    showInLegend: true,
      dataPoints: [
        { x: 1, y: 17, label: "Chicago" },
        { x: 2, y: 19, label: "Cincinnati" },
        { x: 3, y: 10, label: "Cleveland" },
        { x: 4, y: 23, label: "Des Moines", },
        { x: 5, y: 12, label: "Detroit" },
        { x: 6, y: 18, label: "Indianapolis" },
        { x: 7, y: 9, label: "Milwaukee aka the Greatest" },
        { x: 8, y: 14, label: "Minneapolis" },
        { x: 9, y: 35, label: "St. Louis" }
      ]
    },//end of dataseries 1 - 1961-1990
   { //dataseries 2 - low emissions 2070-2099
    type: "column",
    color: "tan",
    name: "Low Emissions Projected Heat 2070-2099",
    showInLegend: true,
    dataPoints: [
      { x: 1, y: 36, label: "Chicago" },
      { x: 2, y: 43, label: "Cincinnati" },
      { x: 3, y: 25, label: "Cleveland" },
      { x: 4, y: 44, label: "Des Moines" },
      { x: 5, y: 30, label: "Detroit"  },
      { x: 6, y: 40, label: "Indianapolis" },
      { x: 7, y: 21, label: "Milwaukee aka the Greatest" },
      { x: 8, y: 33, label: "Minneapolis" },
      { x: 9, y: 62, label: "St. Louis" }
    ]
  }, //dataseries 2
  { //data series 3
    type: "column",
    color: "orange",
    name: "High Emissions Projected Heat 2070-2099",
    showInLegend: true,
    dataPoints: [
      { x: 1, y: 73, label: "Chicago" },
      { x: 2, y: 84, label: "Cincinnati" },
      { x: 3, y: 60, label: "Cleveland" },
      { x: 4, y: 85, label: "Des Moines" },
      { x: 5, y: 64, label: "Detroit" },
      { x: 6, y: 81, label: "Indianapolis" },
      { x: 7, y: 58, label: "Milwaukee aka the Greatest" },
      { x: 8, y: 70, label: "Minneapolis" },
      { x: 9, y: 105, label: "St. Louis", }
    ]
  } // end of dataseries 3
] // array of dataseries
});
  midwestChart.render();

}//window onload
