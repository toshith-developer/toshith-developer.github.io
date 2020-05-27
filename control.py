import RPi.GPIO as gpio

from flask import Flask, request, render_template, url_for

gpio.setmode(gpio.BCM)

import time

##########################
#Flask work
app = (__name__)

@app.route('/', methods= ["POST", "GET"])
def index():
  if request.method =='POST':
    char = request.form['command']
  else:
    return render_template("pyth.html")

if __name__="__main__":
  app.run(debug=True)


#########################

gpio.setwarnings(False)

p1 = 27

p2 = 22

gpio.setup(p1, gpio.OUT)

gpio.setup(p2, gpio.OUT)

p3 = 24

p4 = 25

gpio.setup(p3, gpio.OUT)

gpio.setup(p4, gpio.OUT)

# set PWM

pwm_1 = 4

pwm_2 = 17

gpio.setup(pwm_1, gpio.OUT)

gpio.setup(pwm_2, gpio.OUT)

pwm_1 = gpio.PWM(4,100)

pwm_2 = gpio.PWM(17,100)

pwm_1.start(0)

pwm_1.ChangeDutyCycle(0)

pwm_2.start(0)

pwm_2.ChangeDutyCycle(0)

# The catch method can determine which key has been pressed


# Here we define the methods used to determine

# whether a motor needs to spin forward or backwards.

# both pins match, the motor will not turn.

def reverse():

    gpio.output(p1, True)

    gpio.output(p2, False)

    gpio.output(p3, False)

    gpio.output(p4, True)

def forward():

    gpio.output(p1, False)

    gpio.output(p2, True)

    gpio.output(p3, True)

    gpio.output(p4, False)

# stop the motors

def stop():

    gpio.output(p1, False)

    gpio.output(p2, False)

    gpio.output(p3, False)

    gpio.output(p4, False)

# until the user presses the first key


#The loop will not end until the user presses the

# exit key X or the program crashes

while True:

# Keyboard character retrieval method. This method will save

# the pressed key into the variable char


  if(char == "w"):

    pwm_1.ChangeDutyCycle(30)

    pwm_2.ChangeDutyCycle(30)

    forward()

    print("forward")

# The car will reverse when the s key is pressed

  if(char == "s"):
    
    pwm_1.ChangeDutyCycle(30)

    pwm_2.ChangeDutyCycle(30)

    reverse()

# Stop the motors

  if(char == "q"):
    stop()

# The d key will toggle the steering right

  if(char == "d"):

    pwm_1.ChangeDutyCycle(70)

    pwm_2.ChangeDutyCycle(40)

# The a key will toggle the steering left

  if(char == 'a'):

    pwm_1.ChangeDutyCycle(40)

    pwm_2.ChangeDutyCycle(70)

# The x key will break the loop and exit the program

  if(char == "x"):
    
    print('Program Ended')
    break

# The keyboard character variable char has to be set blank. We need

# to set it blank to save the next key pressed by the user

char = ""

# Program will clean up all GPIO settings and terminates

gpio.cleanup()

