basic.forever(function () {
    if (input.lightLevel() < 10) {
        basic.showString("N")
    } else {
        basic.showString("D")
    }
    basic.pause(1000)
})
