function validateForm() {
  var validateOk = true;
  	var doc = document.getElementById("document").value;
  	var func = document.getElementById("funcionario").value;
	var re = new RegExp("^([0-9]{8})$");
	if (doc == "" || !(re.test(doc))) {
		document.getElementById("errorDoc").innerHTML = "Ingresar documento sin puntos ni guiones";
		validateOk = false;
	} else{
	  	document.getElementById("errorDoc").innerHTML = "";
	}

	if (func == "") {
		document.getElementById("errorFun").innerHTML = "Ingresar un numero de funcionario";
		validateOk = false;
	}else{
	  	document.getElementById("errorFun").innerHTML = "";
	}

  return validateOk;
}

document.getElementById("boton").addEventListener("click", loguinSubmit);

function loguinSubmit() {
	if (validateForm())
	{
		sessionStorage.setItem("documento", document.getElementById("document").value);
		sessionStorage.setItem("funcionario", document.getElementById("funcionario").value);
		window.location.replace("./views/selecColegios.html");
	}
}

