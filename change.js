
gCompleteCode = 4;
gHTTPStatusOK = 200;
function getIndex(filename) {
	xmlhttp = new XMLHttpRequest();
	if (xmlhttp)
	{
		xmlhttp.onreadystatechange = check;
		xmlhttp.open("GET", filename);
		xmlhttp.send(null);
	}
}
function check()
{
	if (xmlhttp.readyState == gCompleteCode && xmlhttp.status == gHTTPStatusOK)
	{
		document.getElementById("htmlData").innerHTML = xmlhttp.responseText;
	}
}