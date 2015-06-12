function sombra(){
$(".desplegar").hide();	
$(".inicio").shadow("raised");
$(".sombre").shadow("raised");
$(".actualizable").shadow("raised");
$(".actualizable").loongshadow({
	length :200,
	fadeIn: true,
	fadeTime: 2000,
	baseOpacity: 0.4
	
	
	});
$(".cabecera").loongshadow({
		lenght : 200,
      fadeIn : false,
      fadeTime : 2000,
	  baseOpacity : 0.4
	
	});

	$(".inicio").loongshadow({
		lenght : 200,
      fadeIn : false,
      fadeTime : 2000,
	  baseOpacity : 0.4
	
	});
$(".sombre").loongshadow({
		lenght : 200,
      fadeIn : false,
      fadeTime : 2000,
	  baseOpacity : 0.4
	
	});
	
$(".cabecera").shadow("raised");
	
	
}
function cambio(p){
	if(p=="des"){
		$(".parrafo").html("<h1>python es un lenguaje de alto nivel, orientado a objetos y multiparadigma,basado y creado con el propósito de ser un lenguaje simple de implementar y legible,usa tipado dinámico, y soporta multiplés plataformas.</h1>")
		}
		
	if(p=="ides"){
	$(".parrafo").html("<h1>Pycharm</h1><h1>Sublimetext</h1><h1>Notepadd++</h1><h1>Python Shell</h1><h1>visual IronPython</h1><h1>Jython Netbeans</h1>")	
		
		}if(p=="cod"){
		$(".parrafo").html("<h1>class Saludar</h1><h1>def__init___(self,nombre):</br>self.nombre=nombre</br>print('hola como estás'+self.nombre+ '?')</br>Objeto=Saludar('Sebastian Sanchez')</h1>")
		}if(p=="cont"){
		$(".parrafo").html("<h1>Email:seebastianaleejandro@live.com</h1>");
		}	
	
	}
function moverYefectos(){
$("body").hide().fadeIn(2000);
$(".derecha").mouseover(function() {
    wrap
          .animate( { height: "hide" }, 2000, name )
          .delay( 800 )
          .animate( { height: "show" }, 2000, name );
});;
$(".cabecera").hide().slideDown(2000);	
$(".bounce").hide().toggle("slide",2000).hide().toggle("bounce",2000);
$(".parrafo").hide().toggle("bounce",2000);	}
	
function mouseover(){


$(".bounce").mouseover(function(){

	$(this).hide(0).toggle("bounce",2000);

});

$("li").click(function(){

	$(this).hide(0).toggle("highlight",2000);


});

}	