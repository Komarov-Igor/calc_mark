const randomIntNumber = (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};


function xor(a, b) {
    return (a && !b) || (!a && b)
};


function atoprint(aId) {
  var atext = document.getElementById(aId).innerHTML;
  var captext = window.document.title;
  var alink = window.document.location;
  var prwin = open('');
  prwin.document.open();
  prwin.document.writeln('<html><head><title>Версия для печати<\/title><\/head><body text="#000000" bgcolor="#FFFFFF"><div onselectstart="return false;" oncopy="return false;">');
  prwin.document.writeln('<div style="margin-bottom:5px;"><a href="javascript://" onclick="window.print();">Печать<\/a> • <a href="javascript://" onclick="window.close();">Закрыть окно<\/a><\/div><hr>');
  prwin.document.writeln('<h1>'+captext+'<\/h1>');
  prwin.document.writeln('<div class="container-fluid" id="container">');
  prwin.document.writeln(atext);
  prwin.document.writeln('<\/div>');
  prwin.document.writeln('<div style="margin-top:5px;"><a href="javascript://" onclick="window.print();">Печать<\/a> • <a href="javascript://" onclick="window.close();">Закрыть окно<\/a><\/div>');
  prwin.document.writeln('<\/div>');
  prwin.document.writeln('<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>');
  prwin.document.writeln('<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>');
  prwin.document.writeln('<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>');

  
  prwin.document.writeln('<\/div><\/body><\/html>');


}

//  <a href="javascript://" onclick="atoprint('MessForPrint');">Версия для печати</a>
