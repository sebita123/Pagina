function pricipal(){
$("body").hide().fadeIn(2000);
$(".mover").hide().toggle("shake",2000);
$("nav").hide().delay(500).slideDown(2000);	
	}
function sombra(p){

$(p).shadow("raised");	
	
	}
function sombra2(p){
$(p).shadow({type:'sides',sides:'hz-1'});

	}
function loongshadow(p){
	$(p).loongshadow({
	length :200,
	fadeIn: true,
	fadeTime: 2000,
	baseOpacity: 0.1
	
	
	});	
	
	}
	function saludar(){
			window.alert("bienvenido a mi página web");
			}
	function color(){
		$("#color").css("background-color","#F00");
		}
	function animacion1(){
		$(".mover").hide(0).toggle("bounce",2000);
		}			
function animacion(p){
	if(p=="ides"){
		$(".descripcion").hide();
	$(".aparecer").hide().fadeIn(1000);
	$(".aparecer").html("<h3> Dreamweaver </h3><h3> Netbeans </h3><h3>Sublimetext</h3><h3>WebStorm</h3><h3>Notepad++</h3>");	
		
		}
	if(p=="codigo"){
		$(".descripcion").hide();
		$(".aparecer").hide()
		$(".aparecer").hide(0).fadeIn(1000);
		$(".aparecer").html("<button onclick='saludar()'>Haz Click Aquí!</button></br><p></p><button id='color' onclick='color()'> Cambia mi color!</button></br><p></p><button onclick='animacion1()'>Animar imagen</button>");
		$(".descripcion").hide().fadeIn(1000).html("<h3> function saludar(){ window.alert('Bienvenido a mi pagina web');}</h3><h3>function color(){$('#color').css('background-color','#F00');}</h3><h3>function animacion1(){ $('.img').hide(0).toggle('bounce',2000);}</h3>");
	
		}
		
		if(p=="info"){
			$(".descripcion").hide();
			$(".aparecer").hide()
			$(".descripcion").hide(0).fadeIn(1000).html("<h3>JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.</h3>");
			}
		if(p=="cont"){
			$(".descripcion").hide();
			$(".aparecer").hide()
						$(".descripcion").hide(0).fadeIn(1000).html("<div id='margen'><h3>Email : seebastianaleejandro@live.com</h3></div>");
			
			
			}	
			
	
	}			