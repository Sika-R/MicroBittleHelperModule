x = 0
y = 0
length = 0
class MicrobitDirection(Enum):
    Null = 0
    Up = 1
    Down = 2
    Left = 3
    Right = 4
def parse_accelerometer():
    global x, y, length
    direction = MicrobitDirection.Null
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    length = y * y + x * x
    if length != 0 and length > 2000:
        deg = Math.acos(x / Math.sqrt(length))
        deg = deg / Math.PI * 180
        if y > 0:
            deg = 360 - deg
        # print(deg)
        inner = []
        outer = []
        if deg < 45 or deg > 315:
            outer.append(2)
            outer.append(4)
            inner.append(2)
            inner.append(3)
            direction = MicrobitDirection.Right
        elif deg < 135:
            outer.append(0)
            outer.append(2)
            inner.append(1)
            inner.append(2)
            direction = MicrobitDirection.Up
        elif deg < 225:
            outer.append(2)
            outer.append(0)
            inner.append(2)
            inner.append(1)
            direction = MicrobitDirection.Left
        elif deg <= 315:
            outer.append(4)
            outer.append(2)
            inner.append(3)
            inner.append(2)
            direction = MicrobitDirection.Down
        led.plot(inner[1], inner[0])
        if length > 80000:
            led.plot(outer[1], outer[0])
    led.plot(2, 2)
    return direction

def parse_slider():
    reading = pins.analog_read_pin(AnalogPin.P0)
    return reading

def parse_humid_sensor():
    reading = pins.analog_read_pin(AnalogPin.P1)
    return reading