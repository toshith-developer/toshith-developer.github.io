<?php
shell_exec("gpio -g mode 27 out");
shell_exec("gpio -g mode 22 out");
shell_exec("gpio -g mode 23 out");
shell_exec("gpio -g mode 24 out");
shell_exec("gpio -g mode 21 pwm");
shell_exec("gpio -g mode 20 pwm");
?>
<html>
<head>
  <script src="script/artyom.window.min.js"></script>
  <script src="script/artyom.js"></script>
  <title>Bot Control</title>
  <script src="script/config.js"></script>
  <style>

    body {
        background-image:url('style/pictures/bag.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    input{
        width: 800px;
        height: 7%;
        border-radius: 10px;
        padding: 1px;
    }
    .button{
        opacity:0;
    }
    </style>
    <script>
    summer.addCommands({
        smart:true,
        indexes: ["speed 1","*"],
        action: function(i, wildcard){
            if(i==0){
                document.getElementById("G1").click();
            }else if(i==1){
            document.getElementById("dir").value = wildcard;
            document.getElementById("button").click();
            }
	  }
        })
    </script>
</head>

<body>

<h1>Bot Control</h1>
<form action='gpio.php' method="POST">
<input type="text" id="dir" name="dir" />

<input type = "submit" name="button" id="button" class="button">
</form>
<script>
window.startContinuousArtyom();
</script>
</body>
</html>
<?php
$comm = $_POST["dir"];
if($comm == 'forward'){
    echo "Forward";
    shell_exec("gpio -g write 27 1");
    shell_exec("gpio -g write 22 0");
    shell_exec("gpio -g write 23 1");
    shell_exec("gpio -g write 24 0");
    if($gear == '1'){
        shell_exec("gpio -g pwm 21 300");
        shell_exec("gpio -g pwm 20 300");
    };
}
else if($comm == 'reverse'){
    echo "reverse";
    shell_exec("gpio -g write 27 0");
    shell_exec("gpio -g write 22 1");
    shell_exec("gpio -g write 23 0");
    shell_exec("gpio -g write 24 1");
}else if($comm == 'turn left'){
    echo "turn left on the spot";
    shell_exec("gpio -g write 27 0");
    shell_exec("gpio -g write 22 1");
    shell_exec("gpio -g write 23 1");
    shell_exec("gpio -g write 24 0");
    sleep(1);
    shell_exec("gpio -g write 27 0");
    shell_exec("gpio -g write 22 0");
    shell_exec("gpio -g write 23 0");
    shell_exec("gpio -g write 24 0");
}else if($comm == 'e'){
    echo "turn on the spot";
    shell_exec("gpio -g write 27 1");
    shell_exec("gpio -g write 22 0");
    shell_exec("gpio -g write 23 0");
    shell_exec("gpio -g write 24 1");
    sleep(1);
    shell_exec("gpio -g write 27 0");
    shell_exec("gpio -g write 22 0");
    shell_exec("gpio -g write 23 0");
    shell_exec("gpio -g write 24 0");
}else if($comm == "left"){
    shell_exec("gpio -g write 27 0");
    shell_exec("gpio -g write 22 1");
    shell_exec("gpio -g write 23 1");
    shell_exec("gpio -g write 24 0");
    shell_exec("gpio -g pwm 21 500");
    shell_exec("gpio -g pwm 20 1000");
}else if($comm == "right"){
    echo "turn on the spot";
    shell_exec("gpio -g write 27 1");
    shell_exec("gpio -g write 22 0");
    shell_exec("gpio -g write 23 0");
    shell_exec("gpio -g write 24 1");
    shell_exec("gpio -g pwm 21 1000");
    shell_exec("gpio -g pwm 20 500");
}
?>
