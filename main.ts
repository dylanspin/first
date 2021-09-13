radio.onReceivedString(function (receivedString) {
    singaal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (singaal >= minimalDistance) {
        basic.showString("good enough")
    } else {
        basic.showLeds(`
            . . # # .
            . # . . .
            . . # # .
            . . . . #
            . . # # .
            `)
    }
})
let singaal = 0
let minimalDistance = 0
radio.sendNumber(1)
radio.setTransmitPower(1)
minimalDistance = 75
basic.forever(function () {
    radio.sendString("test")
    basic.pause(200)
})
