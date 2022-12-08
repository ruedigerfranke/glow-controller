import { findDevice, turnOff, turnOn } from "litra-glow";

export function cli(args) {
  const device = findDevice();

  if (device) {
    if (args[2] === "on") {
      turnOn(device);
      console.log("Litra Glow was turned on.");
    } else if (args[2] === "off") {
      turnOff(device);
      console.log("Litra Glow was turned off.");
    }
  }
}
