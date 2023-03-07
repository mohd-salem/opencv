var xmlFile = './annotations/annotations.xml';

function loadDoc() {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", xmlFile, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      xmlFunction(this.response);

    }
  };

}

function xmlFunction(xml) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xml, "text/xml");

  var table = "<tr><th>Image</th><th>Title</th><th>Id</th></tr>"; //subcategory heading
  var x = xmlDoc.getElementsByTagName("polygon")


  for (var elem of x) {
try {
	var titles = elem.getElementsByTagName(
    "attribute")[0].childNodes[0].nodeValue

var imagName = elem.getElementsByTagName(
    "attribute")[0].parentNode.parentNode.getAttributeNode('name').nodeValue
var imageId = elem.getElementsByTagName(
    "attribute")[0].parentNode.parentNode.getAttributeNode('id').nodeValue

}
catch (error) {
  console.error(error);
  titles = ''
  imagName = ''
  imageId = ''
}

    table += "<tr><td>"  + ' <img width=100% src="/annotations/images/'+imagName+'" >' + "</td><td>" + titles + "</td><td>"+imageId+ "</td><td><input id='checker' type='checkbox'> </td></tr>" ;
  }
  
  document.getElementById("myTable").innerHTML = table;


}
loadDoc();
document.getElementById('select').onclick = function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
	document.getElementById("select").innerHTML = checkboxes.length;
}