radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
    	
    } else {
    	
    }
})
radio.sendNumber(1)
radio.setTransmitPower(1)
basic.forever(function () {
    radio.sendString("1")
    basic.pause(200)
})
