
var multi = [
  {
    description:"smart commands and multi commands",
    smart:true,
    indexes:["* spotify","* playlist","* movie","* songs"],
    action:function(i,wildcard){
      var database = ["open","play","open my","play a","play some","open my spotify","play songs from my","show my"];

      if(i==0){
        if(database.indexOf(wildcard.trim())){
          summer.say("yeah sure.        Opening spotify");
          window.location.href="https://open.spotify.com/";
        }
      }
      
      else if(i==1){
        if(database.indexOf(wildcard.trim())){
          summer.say("opening your spotify playlist");
          document.getElementById("playlist").innerHTML="<iframe src='https://open.spotify.com/embed/playlist/0kZBVSLhC36CnW9B3wMBvp' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
        }
      }
      
      else if(i==2){
        if(database.indexOf(wildcard.trim())){
          summer.say("Select any movie that you would like to watch from the list below ");
          document.getElementById("demo").innerHTML="<strong>Choose a movie from the list below:<br></strong><i><a href='server/thor_rag.mkv'>1)Thor Ragnarok</a><br><a href='server/hobbs.mkv'>2)Hobbs And Shaw</a><br>";
        }
      }
      
      else if(i==3){
          summer.say("opening your spotify playlist");
          document.getElementById("playlist").innerHTML="<iframe src='https://open.spotify.com/embed/playlist/0kZBVSLhC36CnW9B3wMBvp' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
        }
      }
    },
 ];

summer.addCommands(multi);
