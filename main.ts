function PropellerRedBlue () {
    haloDisplay.setBrightness(Max)
    Rotate = 5
    for (let index = 0; index <= 4; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.show()
    }
    basic.pause(20)
    while (Rotate < 30) {
        haloDisplay.setZipLedColor(Rotate, kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.setZipLedColor(Rotate + 30, kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.setZipLedColor(Rotate - 5, kitronik_halo_hd.colors(ZipLedColors.Black))
        haloDisplay.setZipLedColor(Rotate + 25, kitronik_halo_hd.colors(ZipLedColors.Black))
        haloDisplay.show()
        basic.pause(20)
        Rotate += 1
    }
    Rotate = 0
    haloDisplay.clear()
    haloDisplay.show()
    while (Rotate < 30) {
        haloDisplay.setZipLedColor(Rotate, kitronik_halo_hd.colors(ZipLedColors.Blue))
        haloDisplay.setZipLedColor(Rotate + 30, kitronik_halo_hd.colors(ZipLedColors.Blue))
        haloDisplay.setZipLedColor(Rotate - 5, kitronik_halo_hd.colors(ZipLedColors.Black))
        haloDisplay.setZipLedColor(Rotate + 25, kitronik_halo_hd.colors(ZipLedColors.Black))
        haloDisplay.show()
        basic.pause(20)
        Rotate += 1
    }
    haloDisplay.clear()
    haloDisplay.show()
}
input.onButtonPressed(Button.B, function () {
    PulseColour(randint(0, 255), randint(0, 255), randint(0, 255))
})
input.onButtonPressed(Button.A, function () {
    PropellerRedBlue()
})
function PulseColour (RedNum: number, GrnNum: number, BluNum: number) {
    for (let index = 0; index <= Max; index++) {
        haloDisplay.setBrightness(index)
        haloDisplay.showColor(kitronik_halo_hd.rgb(RedNum, GrnNum, BluNum))
        basic.pause(20)
    }
    for (let index = 0; index <= Max; index++) {
        haloDisplay.setBrightness(Max - index)
        haloDisplay.showColor(kitronik_halo_hd.rgb(RedNum, GrnNum, BluNum))
        basic.pause(20)
    }
    haloDisplay.clear()
    haloDisplay.show()
}
let Rotate = 0
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
let Max = 0
basic.showString("HL8")
basic.showNumber(8)
let Pause = 2
Max = 50
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
