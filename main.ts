let count_down = 0
input.onButtonPressed(Button.A, function () {
    if (count_down < 60) {
        count_down += 1
        basic.showNumber(count_down)
    } else {
        count_down = 0
        basic.showNumber(count_down)
    }
})
input.onButtonPressed(Button.AB, function () {
    count_down = 0
    basic.showNumber(count_down)
})
input.onButtonPressed(Button.B, function () {
    if (count_down < 50) {
        count_down += 10
        basic.showNumber(count_down)
    } else {
        count_down = 0
        basic.showNumber(count_down)
    }
})
input.onGesture(Gesture.Shake, function () {
    while (count_down > 0) {
        count_down += -1
        basic.showNumber(count_down)
        basic.pause(1000)
    }
})
