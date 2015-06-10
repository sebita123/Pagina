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