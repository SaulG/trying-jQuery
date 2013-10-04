$(function(){
        var box = $("#box");
        var para = $("p");
        var i = 0;
        //modify the element p
        para.text(i);
        
        //function that toggle the box and count the times in i
        function toggleBox(i){
            box.fadeToggle(500, function(){
                    i++;
                    if(i < 10){
                        para.text(i);
                        toggleBox(i);
                    };
                });
        };
        toggleBox(i);
});