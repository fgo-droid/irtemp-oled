OLED.init(128, 64)
basic.forever(function () {
    OLED.writeStringNewLine("Thermometre")
    OLED.drawRectangle(
    0,
    12,
    68,
    12
    )
    OLED.newLine()
    OLED.writeString("T Obj : ")
    OLED.writeNumNewLine(Math.trunc(MLX90614.temperature(TemperatureLocation.Object) * 10) / 10)
    OLED.newLine()
    OLED.writeString("T Amb : ")
    OLED.writeNumNewLine(Math.trunc(MLX90614.temperature(TemperatureLocation.Ambiant) * 10) / 10)
    basic.pause(2000)
    OLED.clear()
})
