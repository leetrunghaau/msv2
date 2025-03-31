import type { ProductItem, } from "@/components/product/productItem";

const products: ProductItem[] = [
  {
    id: "1",
    name: "ESP32-S3 ",
    href: "#",
    price: 150000,
    description: "ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.",
    imageSrc: "https://www.thegioiic.com/upload/large/52635.jpg",
  },
  {
    id: "2",
    name: "ESP32-S3",
    href: "#",
    price: 49.99,
    description: "ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.",
    imageSrc: "https://www.thegioiic.com/upload/large/50108.jpg",
  },
  {
    id: "3",
    name: "ESP32-S3",
    href: "#",
    price: 49.99,
    description: "ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.",
    imageSrc: "https://www.thegioiic.com/upload/large/52635.jpg",
  },
  {
    id: "4",
    name: "ESP32-S3",
    href: "#",
    price: 49.99,
    description: "ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.",
    imageSrc: "https://www.thegioiic.com/upload/large/52635.jpg",
  },
  {
    id: "5",
    name: "ESP32-S3",
    href: "#",
    price: 49.99,
    description: "ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.",
    imageSrc: "https://www.thegioiic.com/upload/large/52635.jpg",
  },
  {
    id: "6",
    name: "ESP32-S3",
    href: "#",
    price: 49.99,
    description: "ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.",
    imageSrc: "https://www.thegioiic.com/upload/large/52635.jpg",
  },

];

export const esp32C3SpecsList = [
  { key: "model", value: "ESP32-C3" },
  { key: "cpu", value: "RISC-V 32-bit đơn lõi" },
  { key: "clockSpeed", value: "160 MHz" },
  { key: "ultraLowPowerProcessing", value: "Không có" },
  { key: "sram", value: "400 KB" },
  { key: "rom", value: "384 KB" },
  { key: "internalFlash", value: "4 MB" },
  { key: "externalFlash", value: "Hỗ trợ tối đa 16 MB" },
  { key: "externalPSRAM", value: "Không hỗ trợ" },
  { key: "wifi", value: "802.11 b/g/n, 2.4 GHz" },
  { key: "bluetooth", value: "Bluetooth 5.0" },
  { key: "adc", value: "2 * 12-bit SAR ADC, 6 kênh" },
  { key: "temperatureSensor", value: "1 cảm biến" },
  { key: "touchSensor", value: "Không có" },
  { key: "hallSensor", value: "Không có" },
  { key: "gpio", value: "22 chân" },
  { key: "spi", value: "3 kênh" },
  { key: "uart", value: "2 kênh" },
  { key: "i2c", value: "1 kênh" },
  { key: "i2s", value: "1 kênh" },
  { key: "camera", value: "Không có" },
  { key: "rmt", value: "4 kênh" },
  { key: "pwmLedControl", value: "6 kênh" },
  { key: "mcpwm", value: "Không có" },
  { key: "usbOtg", value: "Không có" },
  { key: "twi", value: "1 cổng" },
  { key: "sdSdioMmc", value: "Không có" },
  { key: "macEthernet", value: "Không có" },
  { key: "usbPort", value: "1 cổng" },
  { key: "weight", value: "2g" }
];

export const categoryList = [
  {
    id: 1,
    name: "kit wifi",
    children: [
      {
        id: 2,
        name: "esp",
        children: [
          { id: 3, name: "ESP32", children: [] },
          { id: 4, name: "ESP8266", children: [] },
          { id: 5, name: "ESP32-C3", children: [] },
          { id: 6, name: "ESP32-S2", children: [] },
          { id: 7, name: "ESP32-S3", children: [] },
        ],
      },
      {
        id: 8,
        name: "rf52",
        children: [
          { id: 9, name: "nRF52840", children: [] },
          { id: 10, name: "nRF52832", children: [] },
          { id: 11, name: "nRF52805", children: [] },
        ],
      },
      {
        id: 12,
        name: "wemos",
        children: [
          { id: 13, name: "Wemos D1 Mini", children: [] },
          { id: 14, name: "Wemos D1 R2", children: [] },
          { id: 15, name: "Wemos Mega", children: [] },
        ],
      },
      {
        id: 16,
        name: "bl602",
        children: [
          { id: 17, name: "BL602 Dev Board", children: [] },
          { id: 18, name: "BL602 Mini", children: [] },
        ],
      },
    ],
  },
  {
    id: 19,
    name: "iot",
    children: [
      {
        id: 20,
        name: "sensor",
        children: [
          { id: 21, name: "DHT11", children: [] },
          { id: 22, name: "DHT22", children: [] },
          { id: 23, name: "MQ-2", children: [] },
          { id: 24, name: "BMP180", children: [] },
          { id: 25, name: "BMP280", children: [] },
        ],
      },
      {
        id: 26,
        name: "actuator",
        children: [
          { id: 27, name: "Relay Module", children: [] },
          { id: 28, name: "Servo Motor", children: [] },
          { id: 29, name: "Stepper Motor", children: [] },
          { id: 30, name: "LED Strip", children: [] },
        ],
      },
      {
        id: 31,
        name: "communication",
        children: [
          { id: 32, name: "LoRa Module", children: [] },
          { id: 33, name: "Xbee Module", children: [] },
          { id: 34, name: "Wi-Fi Module", children: [] },
          { id: 35, name: "Bluetooth Module", children: [] },
        ],
      },
    ],
  },
  {
    id: 36,
    name: "robotics",
    children: [
      {
        id: 37,
        name: "motor",
        children: [
          { id: 38, name: "DC Motor", children: [] },
          { id: 39, name: "Step Motor", children: [] },
          { id: 40, name: "Brushless Motor", children: [] },
        ],
      },
      {
        id: 41,
        name: "sensor",
        children: [
          { id: 42, name: "Ultrasonic Sensor", children: [] },
          { id: 43, name: "IR Sensor", children: [] },
          { id: 44, name: "Temperature Sensor", children: [] },
          { id: 45, name: "Accelerometer Sensor", children: [] },
        ],
      },
      {
        id: 46,
        name: "controller",
        children: [
          { id: 47, name: "Arduino Uno", children: [] },
          { id: 48, name: "Arduino Nano", children: [] },
          { id: 49, name: "Raspberry Pi", children: [] },
          { id: 50, name: "ESP32 Dev Board", children: [] },
        ],
      },
    ],
  },
  {
    id: 51,
    name: "3D Printing",
    children: [
      {
        id: 52,
        name: "filament",
        children: [
          { id: 53, name: "PLA", children: [] },
          { id: 54, name: "ABS", children: [] },
          { id: 55, name: "PETG", children: [] },
          { id: 56, name: "TPU", children: [] },
        ],
      },
      {
        id: 57,
        name: "printer",
        children: [
          { id: 58, name: "Creality Ender 3", children: [] },
          { id: 59, name: "Anycubic i3", children: [] },
          { id: 60, name: "Prusa i3", children: [] },
          { id: 61, name: "Artillery Sidewinder X1", children: [] },
        ],
      },
    ],
  }
];

export default products;
