function loadXMLDoc(filename)
{
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",filename,false);
    xhttp.send();
    return xhttp.responseXML;
}

function saveContents()
{
    var f = document.getElementById("facts").value;
    alert(f);


    var xmlDoc = loadXMLDoc("/resources/myxml.xml");
    //alert(xmlDoc.xml);

    alert(xmlDoc.getElementsByTagName("two")[0].childNodes[0].nodeValue);
    //alert(xmlDoc.xml);

    //alert(xmlDoc.getElementsByTagName("one")[0].childNodes[0].nodeValue);

    /*var myxml = new XMLWriter();
    myxml.BeginNode("Foo");
    myxml.Attrib("Bar", "Some Value");
    myxml.EndNode();
    myxml.Close();*/
    alert("Successfully created")
}

function prevFunction()
{
    saveContents();
    //alert("Previous Button Clicked");
    return true;
}
function nextFunction()
{
    saveContents();
    //alert("Next Button Clicked");
    return true;
}