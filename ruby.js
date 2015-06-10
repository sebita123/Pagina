// JavaScript Document
function setsombra(elemento){
	$(elemento).shadow("raised");
	
}

function setbounce(id,numero){
$(id).hide().toggle("bounce",numero);	
	
}

function loong(){
$("nav").loongshadow({
	length :200,
	fadeIn: true,
	fadeTime: 2000,
	baseOpacity: 0.4
	
	
	});	
$("header").loongshadow({
	length :200,
	fadeIn: true,
	fadeTime: 2000,
	baseOpacity: 0.4
	
	
	});	
$(".izquierda").loongshadow({
	length :200,
	fadeIn: true,
	fadeTime: 2000,
	baseOpacity: 0.4
	
	
	});	
	}

function unclick(p)	{
	var r=document.getElementsByClassName("derecha");
	$(r).hide().fadeIn(2000).shadow("raised");
	$(r).loongshadow({
	length :200,
	fadeIn: true,
	fadeTime: 2000,
	baseOpacity: 0.4
	
	
	});	
	if(p=="que es"){
	
	$(r).html("<h1> Ruby  </h1><h2>'Es un lenguaje de programacion dinámico, de código abierto, enfocado a en la simplicidad y productividad, soporta orientación a objetos y su sintáxis es fácil de comprender, su creador es Yukihiro “Matz” Matsumoto, mezcló partes de sus lenguajes preferidos(perl,smalltalk,eifel,ada y lisp), para crear este lenguaje que soporta tanto programación funcional como imperativa. '</h2>");
	
		}
	if(p=="ides"){
		
	$(r).html("<h1 class='alingri' id='mine'> Rubymine</h1><h1 id='sub' class='alingri'> SubimeText</h1><h1 id='note' class='alingri'>Notepad++</h1><h1 class='alingri'> Arcadia </h1>");	
		$("#sub").mouseover(function(){
			$("#mostrar").hide().fadeIn(1000);
			$("#mostrar").html("es un editor de texto y editor de código fuente está escrito en C++ y Python para los plugins.1 Desarrollado originalmente como una extensión de Vim, con el tiempo fue creando una identidad propia, por esto aún conserva un modo de edición tipo vi llamado Vintage mode.2 Se distribuye de forma gratuita, sin embargo no es software libre o de código abierto,3 se puede obtener una licencia para su uso ilimitado, pero el no disponer de ésta no genera ninguna limitación más allá de una alerta cada cierto tiempo.")
			
			});
		}
		$("#mine").mouseover(function(){
			$("#mostrar").hide().fadeIn(1000);
			$("#mostrar").html("RubyMine es un IDE de Ruby y Rails con el paquete completo de herramientas de desarrollo esenciales, todos ellos estrechamente integradas en un entorno de desarrollo cómodo y elegante. JetBrains RubyMine IDE proporciona un completo editor de código Ruby cuenta de las especificidades de lenguaje dinámico y proporciona asistencia inteligente de codificación, la refactorización de código inteligente y capacidades de análisis de código. Fácil configuración del proyecto, automática Ruby Gems gestión, el apoyo Rake - Tiene todo lo que un desarrollador de Ruby necesita en un entorno de desarrollo.")
			
			
			});
			$("#note").mouseover(function(){
			$("#mostrar").hide().fadeIn(1000);
			$("#mostrar").html("Notepad++ es un editor de texto y de código fuente libre con soporte para varios lenguajes de programación. De soporte nativo a Microsoft Windows. Se parece al Bloc de notas en cuanto al hecho de que puede editar texto sin formato y de forma simple. No obstante, incluye opciones más avanzadas que pueden ser útiles para usuarios avanzados como desarrolladores y programadores. Se distribuye bajo los términos de la Licencia Pública General de GNU.")
			
			
			});
			
			$("#note").mouseout(function(){
				$("#mostrar").hide()
				
				});
			$("#sub").mouseout(function(){
				$("#mostrar").hide()
				
				});
			$("#mine").mouseout(function(){
				$("#mostrar").hide()
				
				});
	if(p=="codigo"){
		$(r).html("<h1> puts( 'Hola Mundo' )</h1><h1>$i=0,$num=5</h1>")

	}
}
function Slidedown(p,numero){
$(p).hide().toggle("slide",numero);	
	
	}
	
function Fadein(p,numero){
$(p).hide().fadeIn(numero);	
	}

function hover(p){
	
	
	
	}	