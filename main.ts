basic.forever(function () {
    if (randint(1, 6) == 1) {
        turtle.forward(1)
    } else if (randint(1, 6) == 2) {
        turtle.back(1)
    } else if (randint(1, 6) == 3) {
        turtle.forward(2)
    } else if (randint(1, 6) == 4) {
        turtle.back(2)
    } else if (randint(1, 6) == 5) {
        turtle.turnLeft()
    } else if (randint(1, 6) == 6) {
        turtle.turnRight()
    }
})
