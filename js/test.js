window.onload = init;

function init()
{
	document.getElementById("btn1").onclick = changeH2;	
}

function changeH2()
{
	var elms = document.getElementsByTagName("h2");
	
	for (var i=0; i < elms.length; i++)
	{
		if ( i == 0)
			elms[i].innerHTML = "Changed 1";
		else
			elms[i].innerHTML = "Changed 2";

	}
}

function displayInput()
{
	var text;
	text = document.getElementById("email").value;
	
	document.getElementById("display").innerHTML = text;
}
