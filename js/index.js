let canvas = new fabric.Canvas('c');

var circle = new fabric.Circle({
  left: 100,
  top: 100,
  fill:'red',
  radius: 50
});

circle.setGradient('fill', { type:'radial',x1: 5, y1: 5, x2: 50, y2: 10, r1: 20, r2: 70, colorStops: { '0.2': 'rgba(0,100,0,0.5)', '0.7': 'rgba(0,153,153,0.5)'} });
canvas.add(circle);

canvas.renderAll();
let rect2 =  new fabric.Rect({
  left:100,
  top:150,
  fill:'red',
  width:200,
  height:200
});

canvas.add(rect2);

rect2.set('left', 200);

$("#b").click(
  function(){
  // alert(rect2.left);
   rect2.set({'left': rect2.left+20});
   canvas.renderAll();
  }
);

rect2.set('fill', 'green');
rect2.set({strokeWidth:25 ,stroke:'rgba(200,200,200,1'});
rect2.set('angle', 15).set('flipY', true);


canvas.renderAll();

let circle1= new fabric.Circle({
  left:200,
  top:200,
  fill:'blue',
  radius:100 
});

canvas.add(circle1);



let rect3 = new fabric.Rect ({width: 100, height: 100});
canvas.add(rect3);

fabric.Object.prototype.getAngleInRadians = function() {
  return this.get('angle') / 180 * Math.PI;
};

Rect4 = new fabric.Rect ( {angle: 45});
//alert(Rect4.getAngleInRadians());

let imgElement = document.getElementById('my_img');

let imgInstance = new fabric.Image(imgElement, {
  left: 100,
  top: 100,
  angle: 30,
  opacity: 0.85
});

//canvas.add(imgInstance);


//add from url

fabric.Image.fromURL('js/pi5.jpg', function(oImg){

  oImg.scale(0.5).set('flipX', true);
  canvas.add(oImg);
});

let path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
path.set({ left: 120, top: 120 });
canvas.add(path);

path.set({ fill: 'red', stroke: 'green', opacity: 0.5 });

var path1 = new fabric.Path('M121.32,0L44.58,0C36.67,0,29.5,3.22,24.31,8.41\
c-5.19,5.19-8.41,12.37-8.41,20.28c0,15.82,12.87,28.69,28.69,28.69c0,0,4.4,\
0,7.48,0C36.66,72.78,8.4,101.04,8.4,101.04C2.98,106.45,0,113.66,0,121.32\
c0,7.66,2.98,14.87,8.4,20.29l0,0c5.42,5.42,12.62,8.4,20.28,8.4c7.66,0,14.87\
-2.98,20.29-8.4c0,0,28.26-28.25,43.66-43.66c0,3.08,0,7.48,0,7.48c0,15.82,\
12.87,28.69,28.69,28.69c7.66,0,14.87-2.99,20.29-8.4c5.42-5.42,8.4-12.62,8.4\
-20.28l0-76.74c0-7.66-2.98-14.87-8.4-20.29C136.19,2.98,128.98,0,121.32,0z');

canvas.add(path1.set({ left: 100, top: 200 }));

path.animate('angle', 85, {
  onChange: canvas.renderAll.bind(canvas),
  duration: 1000,
  easing: fabric.util.ease.easeOutElastic});



/////
  
fabric.Image.fromURL('js/bf.jpg', function(img) {
  // add filter
  img.filters.push(new fabric.Image.filters.Grayscale());

 
  // apply filters and re-render canvas when done
  img.applyFilters(canvas.renderAll.bind(canvas));

  // add image onto canvas
  img.width = canvas.width;
  img.height = canvas.height;
  canvas.add(img);
  
});



fabric.Image.fromURL('js/pi5.jpg', function(img) {
  // add filter
  img.filters.push(new fabric.Image.filters.Sepia());

 
  // apply filters and re-render canvas when done
  img.applyFilters(canvas.renderAll.bind(canvas));

  // add image onto canvas
  img.width = canvas.width;
  img.height = canvas.height;
  canvas.add(img);
  
});


// Do some initializing stuff
fabric.Object.prototype.set({
  transparentCorners: false,
  cornerColor: 'rgba(102,153,255,0.5)',
  cornerSize: 12,
  padding: 5
});

// Initialze the example
var rect1 = new fabric.Rect({
  left: 100,
  top: 100,
  width: 100,
  height: 100,
  fill: '#ffda4f'
});

var rect3 = new fabric.Rect({
  left: 400,
  top: 100,
  width: 100,
  height: 100,
  fill: 'rgb(166,111,213)'
});
var rect4 = new fabric.Rect({
  left: 100,
  top: 400,
  width: 100,
  height: 100,
  fill: '#ffda4f'
});
var rect5 = new fabric.Rect({
  left: 250,
  top: 400,
  width: 100,
  height: 100,
  fill: 'rgb(111,154,211)'
});
var rect6 = new fabric.Rect({
  left: 400,
  top: 400,
  width: 100,
  height: 100,
  fill: 'rgb(166,111,213)'
});
canvas.add(rect1, rect2, rect3, rect4, rect5, rect6);

/**
* setGradient linear gradients example
*/

// horizontal linear gradient
rect1.setGradient('fill', {
  type: 'linear',
  x1: -rect1.width / 2,
  y1: 0,
  x2: rect1.width / 2,
  y2: 0,
  colorStops: {
      0: '#ffe47b',
      1: 'rgb(111,154,211)'
  }
});

// vertical linear gradient
rect2.setGradient('fill', {
  type: 'linear',
  x1: 0,
  y1: -rect2.height / 2,
  x2: 0,
  y2: rect2.height / 2,
  colorStops: {
      0: '#ff4040',
      1: '#e6399b'
  }
});

// diagonal linear gradient
rect3.setGradient('fill', {
  type: 'linear',
  x1: -rect3.width / 2,
  y1: -rect3.height / 2,
  x2: rect3.width / 2,
  y2: rect3.height / 2,
  colorStops: {
      0: 'rgb(166,111,213)',
      0.5: 'rgba(106, 72, 215, 0.5)',
      1: '#200772'
  }
});

/**
* setGradient radial gradients example
*/

// radial gradient
rect4.setGradient('fill', {
  type: 'radial',
  r1: rect4.width / 2,
  r2: 10,
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  colorStops: {
      0: '#FF4F4F',
      1: 'rgb(255, 239, 64)'
  }
});

// radial gradient
rect5.setGradient('fill', {
  type: 'radial',
  r1: rect5.width / 2,
  r2: 10,
  x1: 0,
  y1: 0,
  x2: rect4.width / 4,
  y2: rect4.height / 4,
  colorStops: {
      0: '#ffe47b',
      0.5: 'rgb(111,154,211)',
      1: 'rgb(166,111,213)'
  }
});

// radial gradient
rect6.setGradient('fill', {
  type: 'radial',
  r1: 50,
  r2: 80,
  x1: 45,
  y1: 45,
  x2: 52,
  y2: 50,
  colorStops: {
      0: 'rgb(155, 237, 0)',
      1: 'rgba(0, 164, 128,0.4)'
  }
});

canvas.renderAll();
