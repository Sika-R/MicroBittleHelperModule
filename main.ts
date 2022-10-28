let x = 0
let y = 0
let length = 0
class MicrobitDirection {
    static Null: number
    private ___Null_is_set: boolean
    private ___Null: number
    get Null(): number {
        return this.___Null_is_set ? this.___Null : MicrobitDirection.Null
    }
    set Null(value: number) {
        this.___Null_is_set = true
        this.___Null = value
    }
    
    static Up: number
    private ___Up_is_set: boolean
    private ___Up: number
    get Up(): number {
        return this.___Up_is_set ? this.___Up : MicrobitDirection.Up
    }
    set Up(value: number) {
        this.___Up_is_set = true
        this.___Up = value
    }
    
    static Down: number
    private ___Down_is_set: boolean
    private ___Down: number
    get Down(): number {
        return this.___Down_is_set ? this.___Down : MicrobitDirection.Down
    }
    set Down(value: number) {
        this.___Down_is_set = true
        this.___Down = value
    }
    
    static Left: number
    private ___Left_is_set: boolean
    private ___Left: number
    get Left(): number {
        return this.___Left_is_set ? this.___Left : MicrobitDirection.Left
    }
    set Left(value: number) {
        this.___Left_is_set = true
        this.___Left = value
    }
    
    static Right: number
    private ___Right_is_set: boolean
    private ___Right: number
    get Right(): number {
        return this.___Right_is_set ? this.___Right : MicrobitDirection.Right
    }
    set Right(value: number) {
        this.___Right_is_set = true
        this.___Right = value
    }
    
    public static __initMicrobitDirection() {
        MicrobitDirection.Null = 0
        MicrobitDirection.Up = 1
        MicrobitDirection.Down = 2
        MicrobitDirection.Left = 3
        MicrobitDirection.Right = 4
    }
    
}

MicrobitDirection.__initMicrobitDirection()

function parse_accelerometer(): number {
    let deg: number;
    let inner: number[];
    let outer: number[];
    
    let direction = MicrobitDirection.Null
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    length = y * y + x * x
    if (length != 0 && length > 2000) {
        deg = Math.acos(x / Math.sqrt(length))
        deg = deg / Math.PI * 180
        if (y > 0) {
            deg = 360 - deg
        }
        
        //  print(deg)
        inner = []
        outer = []
        if (deg < 45 || deg > 315) {
            outer.push(2)
            outer.push(4)
            inner.push(2)
            inner.push(3)
            direction = MicrobitDirection.Right
        } else if (deg < 135) {
            outer.push(0)
            outer.push(2)
            inner.push(1)
            inner.push(2)
            direction = MicrobitDirection.Up
        } else if (deg < 225) {
            outer.push(2)
            outer.push(0)
            inner.push(2)
            inner.push(1)
            direction = MicrobitDirection.Left
        } else if (deg <= 315) {
            outer.push(4)
            outer.push(2)
            inner.push(3)
            inner.push(2)
            direction = MicrobitDirection.Down
        }
        
        led.plot(inner[1], inner[0])
        if (length > 80000) {
            led.plot(outer[1], outer[0])
        }
        
    }
    
    led.plot(2, 2)
    return direction
}

function parse_P0(): number {
    let reading = pins.analogReadPin(AnalogPin.P0)
    return reading
}

function parse_P1(): number {
    let reading = pins.analogReadPin(AnalogPin.P1)
    return reading
}

function parse_P2(): number {
    let reading = pins.analogReadPin(AnalogPin.P2)
    return reading
}

