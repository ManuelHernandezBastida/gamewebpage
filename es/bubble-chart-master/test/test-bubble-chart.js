var datos = [];
var posiciones = [];
var posicion = 0

function cargar(){
d3.json('bubble-chart-master/test/datos2.json', function(err,data){
datos = data;
dibujar();
})
}

function cargarHijo(items){
    document.getElementById("bubbleChart").innerHTML = "";
   posiciones[posicion]=datos;
    
    if(items.children != null) {
       datos = items.children; 
    }
    
    posicion++;
    dibujar();
    
}

function volver(){
    document.getElementById("bubbleChart").innerHTML = "";
    
   
    if(posicion!=0){
         posicion--;
   
    }
     datos=posiciones[posicion];
    
    dibujar();
    
}
function dibujar() {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: datos,
      eval: function (item) {return item.texto;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function(item) {
           cargarHijo(item);
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [

            {// Line #1
              textField: "text",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "'Savour_Pinacolada', Arial, sans-serif",
                "text-anchor": "middle",
                "fill": "white"
              },
              attr: {
                dy: "60px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "50px"},
              attr: {dy: "100px"}
            },
            {// Line #1
              style: {"font-size": "30px"},
              attr: {dy: "100px"}
            }
          ]
        }
      }]
  });
};


