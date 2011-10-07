(function(document){
    
    // accessing dom in bad way start
    var start = new Date().getTime();
    
    function innerHtmlBadWay(){
      for (var i = 0; i < 10000; i++){
        document.getElementById('myDiv').innerHTML += 'x';
      }
    }
    innerHtmlBadWay();
    
    document.getElementById('badWay').innerHTML = ((new Date().getTime()) - start) + ' ms';
    document.getElementById('myDiv').innerHTML = '';
    
    // accessing dom as good way
    start = new Date().getTime();
    
    function innerHtmlGoodWay(){
      var content = 'x';
      for (var i = 0; i < 10000; i++){
        content += 'x';
      }
      document.getElementById('myDiv').innerHTML += content;
    }
    innerHtmlGoodWay();
    
    document.getElementById('goodWay').innerHTML = ((new Date().getTime()) - start) + ' ms';
    document.getElementById('myDiv').innerHTML = '';
    
}(document));



