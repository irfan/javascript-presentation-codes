(function() {
    document.getElementById('navigation').onclick = function(event){
        var target = event.target;
        if (event.target.tagName == 'A') {
            alert('Şu sayfa açılacak: \n\n' + target.attributes[0].value);
            document.location = target.attributes[0].value;
        };
        event.preventDefault();
        event.stopPropagation();
    }
}());