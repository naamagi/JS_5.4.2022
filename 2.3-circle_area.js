function circleArea(radius) {
  console.log(Math.PI * Math.pow(radius, 2));
  let area = Math.PI * Math.pow(radius, 2);
  let areaWith2DecimalPlaces = area.toFixed(2);
  console.log(areaWith2DecimalPlaces);
}

circleArea(2) ;
