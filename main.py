x = 0
y = 0
length = 0
def ParseAccelerometer():
    global x, y, length
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    length = y * y + x * x
    if length != 0 and length > 2000:
        deg = Math.acos(x / Math.sqrt(length))
        deg = deg / Math.PI * 180
        if y > 0:
            deg = 360 - deg
        print(deg)
        inner = []
        outer = []
        if deg < 45 or deg > 315:
            outer.append(2)
            outer.append(4)
            inner.append(2)
            inner.append(3)
        elif deg < 135:
            outer.append(0)
            outer.append(2)
            inner.append(1)
            inner.append(2)
        elif deg < 225:
            outer.append(2)
            outer.append(0)
            inner.append(2)
            inner.append(1)
        elif deg <= 315:
            outer.append(4)
            outer.append(2)
            inner.append(3)
            inner.append(2)
        led.plot(inner[1], inner[0])
        if length > 80000:
            led.plot(outer[1], outer[0])
    led.plot(2, 2)
