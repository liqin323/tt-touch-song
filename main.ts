let i = 0
input.onButtonPressed(Button.A, function () {
    if (i == 0) {
        basic.showIcon(IconNames.Angry)
        soundExpression.giggle.play()
    } else if (i == 1) {
        basic.showIcon(IconNames.No)
        soundExpression.mysterious.play()
    } else if (i == 2) {
        basic.showIcon(IconNames.SmallHeart)
        soundExpression.hello.play()
    } else if (i == 3) {
        basic.showIcon(IconNames.Sad)
        soundExpression.twinkle.play()
    } else if (i == 4) {
        basic.showIcon(IconNames.Giraffe)
        soundExpression.spring.play()
    } else if (i == 5) {
        basic.showIcon(IconNames.Butterfly)
        soundExpression.yawn.play()
    }
})
basic.forever(function () {
    i = randint(0, 5)
})
