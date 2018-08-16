let canvas = new fabric.Canvas('c');


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
  radius:20 
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

var circle = new fabric.Circle({
  left: 100,
  top: 100,
  radius: 50
});

circle.setGradient('fill', {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: circle.height,
  colorStops: {
    0: '#000',
    1: '#fff'
  }
  canvas.add(circle);
});