radio.onReceivedNumber(function (receivedNumber) {
    수신번호 = receivedNumber
})
let 수신번호 = 0
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    if (수신번호 == 1) {
        RingbitCar.forward()
    } else if (수신번호 == 2) {
        RingbitCar.back()
    } else if (수신번호 == 3) {
        RingbitCar.turnleft()
    } else if (수신번호 == 4) {
        RingbitCar.turnright()
    } else if (수신번호 == 5) {
        RingbitCar.brake()
    }
})
control.inBackground(function () {
    while (0 == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(100)
    }
})
