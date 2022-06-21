radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber % 2 == 1) {
        led.plot(0, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        music.ringTone(440)
    }
    if (receivedNumber / 2 >= 1) {
        led.plot(4, 0)
        led.plot(4, 1)
        led.plot(4, 2)
        led.plot(4, 3)
        music.ringTone(880)
    }
    basic.pause(50)
    led.unplot(0, 2)
    led.unplot(0, 3)
    led.unplot(0, 0)
    led.unplot(0, 1)
    led.unplot(4, 0)
    led.unplot(4, 1)
    led.unplot(4, 2)
    led.unplot(4, 3)
    music.stopAllSounds()
})
radio.setGroup(0)
music.setVolume(128)
