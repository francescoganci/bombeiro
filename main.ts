let Flame = 0
basic.forever(function () {
    Flame = pins.analogReadPin(AnalogPin.P0)
    if (Flame > 350) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P8, 1023)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P8, 0)
    }
})
