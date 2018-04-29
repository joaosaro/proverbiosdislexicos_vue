function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var data = JSON.parse(Get('http://proverbios.joaosaro.com/backoffice/api/proverbios'));
