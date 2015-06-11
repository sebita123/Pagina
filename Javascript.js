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