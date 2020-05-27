const summer = new Artyom();
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

 

  function stopArtyom(){
    summer.fatality();
  }
