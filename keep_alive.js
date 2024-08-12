//V11 ve V12'de Uyumludur

//Açılacak Dosya Adı
keep_alive.js
//İçine Yazılacak Kod
var http = require('http');

http.createServer(function(req, res){
  res.write("Botunuz Güvenli Bir Şekilde 7/24 Olmuştur");
  res.end();
}).listen(8080);