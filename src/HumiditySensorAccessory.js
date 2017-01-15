const SensorAccessory = require('./Accessory.js').SensorAccessory;

class HumiditySensorAccessory extends SensorAccessory {

  constructor(log, device, homebridge) {
    const Service = homebridge.hap.Service;
    const Characteristic = homebridge.hap.Characteristic;
    super(log, device, homebridge, Service.HumiditySensor, Characteristic.CurrentRelativeHumidity);
  }

  setCurrentValue(value) {
    if (value < 0 || value > 100) {
      this.log.warning('Value for humidity outside of range:', value);
    }
    super.setCurrentValue(value);
  }
}

module.exports = HumiditySensorAccessory;