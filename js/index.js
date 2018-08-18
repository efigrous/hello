let canvas = new fabric.Canvas('c');


var rect = new fabric.Rect({
  left: 120,
  top: 120,
  width: 550,
  height: 100
});


rect.setGradient('fill', {
  x1: 45,
  y1: 50,
  x2: 170,
  y2: 90,
  colorStops: {
    0: "black",
    0.5: "red",
    1: "blue"
  }
});

canvas.add(rect);
canvas.renderAll();

