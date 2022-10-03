let x = 0
let y = 0
let length = 0
function ParseAccelerometer() {
    let deg: number;
    let inner: number[];
    let outer: number[];
    
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    length = y * y + x * x
    if (length != 0 && length > 2000) {
        deg = Math.acos(x / Math.sqrt(length))
        deg = deg / Math.PI * 180
        if (y > 0) {
            deg = 360 - deg
        }
        
        console.log(deg)
        inner = []
        outer = []
        if (deg < 45 || deg > 315) {
            outer.push(2)
            outer.push(4)
            inner.push(2)
            inner.push(3)
        } else if (deg < 135) {
            outer.push(0)
            outer.push(2)
            inner.push(1)
            inner.push(2)
        } else if (deg < 225) {
            outer.push(2)
            outer.push(0)
            inner.push(2)
            inner.push(1)
        } else if (deg <= 315) {
            outer.push(4)
            outer.push(2)
            inner.push(3)
            inner.push(2)
        }
        
        led.plot(inner[1], inner[0])
        if (length > 80000) {
            led.plot(outer[1], outer[0])
        }
        
    }
    
    led.plot(2, 2)
}

