/**
 * KSR030 V0.010
 */
//% weight=10 color=#00A6F0 icon="\uf085" block="KSB039"
namespace KSB039 {

    /**
         * P13
         
    */

    //% blockId=KSB039_Ultrasonic
    //% block="Ultrasonic(cm)"
    //% weight=98
    export function Ultrasonic(): number {

        let maxCmDistance = 500
        // send pulse
        pins.setPull(DigitalPin.P13, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P13, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P13, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P13, 0);

        const d = pins.pulseIn(DigitalPin.P13, PulseValue.High, maxCmDistance * 58);
        // read pulse

        return Math.idiv(d, 58);
    }

    /**
            * P16
            
    */
    //% blockId="KSB039_RGB" 
    //% block="RGB LED "
    //% weight=96
    export function RGB_LED(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

        }

        return neoStrip;
    }


}