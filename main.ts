let Rotate = 0
basic.showString("HL8")
basic.showNumber(8)
let Pause = 2
let Max = 50
let Brightness = Max
let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.setBrightness(Brightness)
basic.forever(function () {
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
    haloDisplay.clear()
    haloDisplay.show()
})
