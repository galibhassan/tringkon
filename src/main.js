window.addEventListener("load", function () {

  div1 = document.querySelector("#div1");
  div2 = document.querySelector("#div2");
  div3 = document.querySelector("#div3");
  lineColor = "rgba(95, 99, 105, 1)";
  dotContainer = document.querySelector("#dotContainer");

  //centering div
  var windowMid = getMidPointOfWindow();

  console.log(parseInt(dotContainer.offsetHeight / 2))



  //  executeBt.addEventListener("mousedown", function () {
  window.addEventListener("keyup", function (event) {
    if (event.code === 'Space') {
      var x1 = getMidPoint(div1).x;
      var y1 = getMidPoint(div1).y;
      var x2 = getMidPoint(div2).x;
      var y2 = getMidPoint(div2).y;
      var x3 = getMidPoint(div3).x;
      var y3 = getMidPoint(div3).y;

      drawLink(x1, y1, x2, y2, lineColor);
      drawLink(x2, y2, x3, y3, lineColor);
    }
  });

});

var drawLink = function (startX, startY, endX, endY, lineColor) {
  var link = document.createElement("div");
  link.style.position = "absolute";
  link.style.zIndex = "-500";
  link.style.top = startY + "px";
  link.style.left = startX + "px";
  link.style.borderRadius = "5px";

  // r
  var r = distance(startX, startY, endX, endY);
  link.style.height = r + "px";
  // theta
  link.style.transformOrigin = `top left`;

  if (startX < endX) {
    var theta = getAngle(startY, endY, r);
  } else {
    var theta = - getAngle(startY, endY, r);
  }

  link.style.transform = `rotate(${theta}deg)`;

  link.style.width = 5 + "px";
  link.style.backgroundColor = lineColor;
  link.style.boxShadow = "1px 2px 10px 1px rgba(0,0,0, .4)";




  var linksContainer = document.getElementById("linksContainer");
  linksContainer.appendChild(link);
}

var distance = function (x1, y1, x2, y2) {
  d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  return parseInt(d);
}

var getAngle = function (y1, y2, distance) {
  var vumi = (y2 - y1);
  var otivuj = distance;
  var theta = Math.acos(vumi / otivuj);
  return -(theta * 180 / Math.PI);
}

var getMidPoint = function (divVar) {
  var x = divVar.offsetLeft;
  var y = divVar.offsetTop;
  var width = divVar.offsetWidth;
  var height = divVar.offsetHeight;
  return {
    x: parseInt(x + (width) / 2),
    y: parseInt(y + (height) / 2)
  }
}

var getMidPointOfWindow = function () {
  return {
    x: parseInt(window.innerWidth / 2),
    y: parseInt(window.innerHeight / 2)
  }
}