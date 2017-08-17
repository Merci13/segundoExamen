var usuarios=[];
var id=0;
var lista=[];
$( document ).ready(function() {
    
    var local=localStorage.getItem('usuarios');
    if (local==null) {
    	local=[];
    }else{
    usuarios=JSON.parse(local);	
    }
    

  $("[data-toggle=tooltip]").tooltip();



  /*cargar listado de post*/
   var lista_de_post= localStorage.getItem('post');
   if (lista_de_post==null) {
   	lista=[];
   }else{
   	var lista=JSON.parse(lista_de_post);
   }
   	 
   	 var url=window.location.href;
   	 var urlsplit=url.split("/");
   	 if (urlsplit[urlsplit.length-1]=="home.html") {
   	 	if (lista.length>0) {
   	 	for (var i = lista.length - 1; i >= 0; i--) {
   	 		var post=document.createElement("div");
   	 		if (id==lista[i][1]) {

   	 			post.innerHTML= "<textarea disabled=\"true\" id=\""+id+"\"">+lista[i][0]+"</textarea> <button class=\"btn btn-info\" onclick=>Cambiar</button>";
   	 			document.getElementById('post-area').appendChild(post);
   	 		}else{
   	 		post.innerHTML = "<p>"+lista[i][0]+"</p>";	
   	 		document.getElementById('post-area').appendChild(post);
   	 		}
   	 	}
	}
   	 	
   	 	
   	 }
		
   
});





function guardarUsuario(){
var nombre=document.getElementById("name_sing_up").value;
var apellido=document.getElementById("last-name").value;
var correo=document.getElementById("email-direction").value;
var contraseña=document.getElementById("contraseña").value;
var validacionContraseña=document.getElementById("pass-validation").value;
if (contraseña!=validacionContraseña) {
	alert("la contraseña no coincide")
}
var usuario=[nombre,apellido,correo,contraseña]

usuarios.push(usuario);


localStorage.setItem('usuarios',JSON.stringify(usuarios));

}


function login(){
	var nombre=document.getElementById('nick').value;
	var password=document.getElementById('contraseña').value;
	for (var i = usuarios.length - 1; i >= 0; i--) {
		
			if (usuarios[i][0]==nombre && usuarios[i][3]==password) {
				id=i;
				window.location.replace("home.html");
				
			}else{
       alert('No coincide con ningun usuario')
		
	}

}

}


function compartir(){
	/*id del usuario actual*/
	var post= [document.getElementById('post').value,id];
	lista.unshift(post);
	localStorage.setItem('post',JSON.stringify(lista));
for (var i = lista.length - 1; i >= 0; i--) {
	var publicacion=document.createElement("div");
	publicacion.innerHTML= "<textarea disabled=\"true\" id=\""+id+"\"">+lista[i][0]+"</textarea> <button class=\"btn btn-info\" onclick=>Cambiar</button>";
}




}