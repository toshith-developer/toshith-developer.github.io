summer.addCommands({
    //The smart property of the command needs to be true
    smart:true,
    indexes: ["repeat after me *","search *","speak *","say *"],
    action: function(i, wildcard){
        // Speak alterable value
       if(i==0){
            summer.say(wildcard);
       }else if(i==1){
           document.getElementById("playlist").innerHTML="<form action='https://bing.com/search' method='get' target='frame'><input type='text' style='color:rgba(0,0,0,0);background:rgba(0,0,0,0);border:none' name='q' id='sear'/><input type='submit' style='color:rgba(0,0,0,0);background:rgba(0,0,0,0);border:none' id='searc'></form><iframe id='search' name='frame' width='700'height=500 style='opacity:0.8'></iframe>";
           document.getElementById("sear").value = wildcard;
           document.getElementById("searc").click();
       }else if(i==2){
        summer.say(wildcard);
       }else if(i==3){
        summer.say(wildcard);
       }
    }

});