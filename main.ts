basic.forever(function () {
    if (input.lightLevel() < 20) {
        basic.showString("N")
    } else {
        basic.showString("D")
    }
    basic.pause(1000)
})
