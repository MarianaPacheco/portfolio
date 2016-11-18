$(document).ready(function(){
	/*var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
	  $hamburger.toggleClass("is-active");
	  // Do something else, like open/close menu
	});*/
	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    };

    $('.efecto').on('mouseenter', function(){
		$(this).fadeTo('fast', '.4');
	});
	//Efecto para poner en gris el div que tiene el puntero encima
	$('.efecto').mouseleave(function(){
		$(this).fadeTo('fast', '1');
	});
	//Efecto para poner sin opacidad el div sobre los que no está el puntero
	$('#search').focus(function(){
		$(this).css('background-color', '#FFFFFF');
	});
	//Efecto para poner el background del input en blanco cuando está activo
	$('#search').blur(function(){
		$(this).css('background-color', '#000');
	});
	//Efecto para quitar el background blanco del input y regresarlo al color que tenía
	/*$('#aboutme').mouseleave(function(){
		$(this).after('<h2>Amanda Ray</h2>');
	});
	Cuando quita el puntero del div muestra un texto bajo ese div*/


	$('#secciones').pagepiling({
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		navigation: {
            'textColor': '#f2f2f2',
            'bulletsColor': '#ccc',
            'position': 'right',
        }
	});
	// Efecto entre paginas

	var i=0;
	var texto = '<h1>"Mientras tú piensas que es imposible, yo lo estoy programando"</h1>'
		function pintarLetra(){
			$('#texto').append(texto[i]);
			if (i<texto.length){
				i++;
				setTimeout(pintarLetra, 100);
			};
		};
		pintarLetra();

	//Efecto para la frase del home

	function move() {
	  var elem = document.getElementById("myBar");
	  var width = 1;
	  var id = setInterval(frame, 10);
	  function frame() {
	    if (width >= 100) {
	      clearInterval(id);
	    } else {
	      width++;
	      elem.style.width = width + '%';
	    };
	  };
	};

	var ProgressBar = require('progressbar.js');

	// Assuming we have an empty <div id="pb"></div> in
	// HTML
	var bar = new ProgressBar.Line('#pb', {easing: 'easeInOut'});
	bar.animate(1);  // Value from 0.0 to 1.0

})

