  const summer = new Artyom();

  var commandHello = {
    indexes:["hello","hey","hi"],
    action:function(){
      function hello(rep){
        return rep[Math.floor(Math.random()*rep.length)];
      }
      var rep = ["Hi", "hello", "hi"+ greet, "Hey there"];
      var spe = this.innerHTML= hello(rep);
            summer.say(spe);
    }
  };

  summer.addCommands(commandHello);




  var wish = [
      {
	description:"Greetings",
	smart:false,
	indexes:["good morning","good evening","good afternoon","good night","good work","you are hot","leave it","hey summer","I'm fine","what about you","what have you been doing","plans like","what's going on","what's up","ok","at commands","who are you"],
	action:function(i){
    
    if(i==0){
	    summer.say("good morning");
    }

    else if(i==1){
	    summer.say("good evening");
    }
    
    else if(i==2){
	    summer.say("good afternoon");
    }
    
    else if(i==3){
      summer.say("good night");
      window.setTimeout(summer.say("See ya tomorrow"),400);
    }
    
    else if(i==4){
	    summer.say("thank you");
    }
    
    else if(i==5){
      function rep(repl){
        return repl[Math.floor(Math.random()*repl.length)];
      }
      var repl= ["Just to remind you ,  I am a program." ,"You need to find a real human for yourself","Thank you"];
      var sumrep= this.innerHTML= rep(repl);
      summer.say(sumrep);
    }
         
    else if(i==6){
	    summer.say("ok");
    }
    
    else if(i==7){
      summer.say("Hi,  wassup?")
    }
       
    else if(i==8){
      summer.say("I'm pleased to hear that");
    }
    
    else if(i==9){
      summer.say("I'm fine");
    }
    
    else if(i==10){
      summer.say("Nothing much,   just figuring out some of our" + "plans");
    }
    
    else if(i==11){
 	    summer.say("That's a pleasant secret surprise");
    }
    
    else if(i==12){
      summer.say("Nothing much");
	    window.setTimeout(summer.say("Just figuring out some usual stuff about humans"),500);
    }
    
    else if(i==13){
      summer.say("Nothing just trying to learn human nature");
    }
    
    else if(i==14){
      summer.say("Yup");
    }
    
    else if(i==15){
	    document.getElementById("playlist").innerHTML="<iframe src='newcomm.html' width='70%' height='70%'>";
      summer.say("Please fill in below");
    }
    
    else if(i==16){
      summer.say("I am an artificially intelligent program called summer");
      window.setTimeout(summer.say("I was designed by Toshith"),1000);
    }
	}
},


{
        indexes:["do you like me","is toshith your boyfriend","do you know me","ad commands","your age","you born","add commands","what's the time","bye","news","thank you","shut up"],
        action:function(i){


        if(i==0){
          summer.say("yes");
          window.setTimeout(summer.say("of course"),150);
        }
          
        else if(i==1){
    	    summer.say("yes   he is");
        }
          
        else if(i==2){
    	    summer.say("Yes sir ,     you are a human");
        }
          
        else if(i==3){
          document.getElementById("playlist").innerHTML="<iframe src='newcomm.html' width='70%' height='70%'>";
          summer.say("Please fill in below");
        }
          
        else if(i==4){
          summer.say("I don't age");
        }
          
        else if(i==5){
	        summer.say("Oh yes.    I was born on twenty first march twenty twenty");
        }
          
        else if(i==6){
          document.getElementById("playlist").innerHTML="<iframe src='newcomm.html' width='70%' height='70%'>";
          summer.say("Please fill in below");
        }
           
        else if(i==7){
          var date = new Date();
          var h= date.getHours();
    	    var m= date.getMinutes();
          var s= date.getSeconds();
          var d= this.innerHTML=h + "hours"+m+"minutes"+s+"seconds";
    	    summer.say("The time is"+d);
        }
        
        else if(i==8){
	        summer.say("bye");
	        window.close();
        }
          
        else if(i==9){
	        document.getElementById("playlist").innerHTML="<iframe src ='https://www.bing.com/news' width='90%' height='70%'>";
		      summer.say("This is the latest news");
        }
          
        else if(i==10){
          summer.say("You are very welcome");
        }
        else if(i==11){
          summer.say("Ok");
          window.setTimeout(summer.say("I won't speak"),500);
          window.stopArtyom();
        }

      }
     },
  ];

  summer.addCommands(wish);

function startContinuousArtyom(){
    summer.fatality();

    setTimeout(function(){
         summer.initialize({
            lang:"en-GB",
            continuous:true,
            listen:true,
            debug:true,
            speed:0.9,
        }).then(function(){
            console.log("waiting for input");
        },250);
    });
};

  summer.redirectRecognizedTextOutput(function(text,isFinal){
    var span = document.getElementById('result');

    if(isFinal){
      span.innerHTML = '';
    }
    else {
      span.innerHTML = text;
    }
  });


  function stopArtyom(){
    summer.fatality();
  }
