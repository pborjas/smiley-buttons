input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    basic.showString("Hola, como esta?")
    basic.showString("Hello!")
})
