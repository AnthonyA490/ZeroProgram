function TEST_ON () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
input.onButtonPressed(Button.A, function () {
    TEST_ON()
})
input.onButtonPressed(Button.B, function () {
    TEST_OFF()
})
function TEST_OFF () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
basic.showIcon(IconNames.Angry)
