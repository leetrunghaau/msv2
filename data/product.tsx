import { ProductDetailType } from "@/app/product/[productId]/page";
import { OrderItem } from "@/app/user/page";
import { CartItemType } from "@/components/order/cartItem";
import type { ProductItem, } from "@/components/product/productItem";

const products: ProductItem[] = [
  {
    id: "1",
    name: "ESP32-S3 ",
    href: "kajgh",
    price: 150000,
    description: "ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.",
    imageSrc: "https://www.thegioiic.com/upload/large/52635.jpg",
  },
  {
    id: "2",
    name: "ESP32-S3",
    href: "aokgh",
    price: 49.99,
    description: "ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.",
    imageSrc: "https://www.thegioiic.com/upload/large/50108.jpg",
  },
  {
    id: "3",
    name: "ESP32-S3",
    href: "jkashgd",
    price: 49.99,
    description: "ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.",
    imageSrc: "https://www.thegioiic.com/upload/large/52635.jpg",
  },
  {
    id: "4",
    name: "ESP32-S3",
    href: "ádlkjfh",
    price: 49.99,
    description: "ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.",
    imageSrc: "https://www.thegioiic.com/upload/large/52635.jpg",
  },
  {
    id: "5",
    name: "ESP32-S3",
    href: "ádklflh",
    price: 49.99,
    description: "ESP32-S3-WROOM-1-N4 Module WiFi Bluetooth 4MB Flash 2.4GHz.",
    imageSrc: "https://www.thegioiic.com/upload/large/52635.jpg",
  },
  {
    id: "6",
    name: "ESP32-S3",
    href: "aksdjfg",
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
export const carts: CartItemType[] = [
  {
    selected: true,
    id: 1,
    src: "https://nshopvn.com/wp-content/uploads/2022/05/day-bus-cai-xh2-54mm-dai-20cm-1-300x300.jpg",
    name: 'Dây Bus cái XH2.54mm dài 20cm',
    decripsition: "Kit RF thu phát wifi bluetooth esp32 cổng nạp Micro có bộ xử lý mạnh mẽ, Hổ trợ các chế độ: AP, STA, và AP+STA.",
    price: 15000,
    amount: 3,
    total: 10,
  },
  {
    selected: true,
    id: 2,
    src: "https://nshopvn.com/wp-content/uploads/2022/05/day-bus-cai-xh2-54mm-dai-20cm-1-300x300.jpg",
    name: 'Dây Bus cái XH2.54mm dài 20cm',
    decripsition: "Kit RF thu phát wifi bluetooth esp32 cổng nạp Micro có bộ xử lý mạnh mẽ, Hổ trợ các chế độ: AP, STA, và AP+STA.",
    price: 15000,
    amount: 3,
    total: 15,
  },
  {
    selected: true,
    id: 3,
    src: "https://nshopvn.com/wp-content/uploads/2022/05/day-bus-cai-xh2-54mm-dai-20cm-1-300x300.jpg",
    name: 'Dây Bus cái XH2.54mm dài 20cm',
    decripsition: "Kit RF thu phát wifi bluetooth esp32 cổng nạp Micro có bộ xử lý mạnh mẽ, Hổ trợ các chế độ: AP, STA, và AP+STA.",
    price: 15000,
    amount: 3,
    total: 8,
  },
  {
    selected: true,
    id: 4,
    src: "https://nshopvn.com/wp-content/uploads/2022/05/day-bus-cai-xh2-54mm-dai-20cm-1-300x300.jpg",
    name: 'Dây Bus cái XH2.54mm dài 20cm',
    decripsition: "Kit RF thu phát wifi bluetooth esp32 cổng nạp Micro có bộ xử lý mạnh mẽ, Hổ trợ các chế độ: AP, STA, và AP+STA.",
    price: 15000,
    amount: 3,
    total: 6,
  },
  {
    selected: true,
    id: 5,
    src: "https://nshopvn.com/wp-content/uploads/2022/05/day-bus-cai-xh2-54mm-dai-20cm-1-300x300.jpg",
    name: 'Dây Bus cái XH2.54mm dài 20cm',
    decripsition: "Kit RF thu phát wifi bluetooth esp32 cổng nạp Micro có bộ xử lý mạnh mẽ, Hổ trợ các chế độ: AP, STA, và AP+STA.",
    price: 15000,
    amount: 3,
    total: 50,
  }
]

export const productDetail: ProductDetailType = {
  id: 101,
  name: "ESP 32 s2 c3 ",
  price: 135000,
  total: 10,
  code: "XYZ123",
  branch: "ABC Electronics",
  description: "Dây Bus cái XH2.54mm dài 20cm, sử dụng cho các bo mạch điện tử và các ứng dụng giao tiếp tín hiệu.",
  src: [
    "https://www.thegioiic.com/upload/large/51847.jpg",
    "https://www.thegioiic.com/upload/large/51848.jpg",
    "https://www.thegioiic.com/upload/large/51849.jpg",
    "https://www.thegioiic.com/upload/large/51850.jpg",
    "https://www.thegioiic.com/upload/large/51848.jpg",
    "https://www.thegioiic.com/upload/large/51849.jpg",
    "https://www.thegioiic.com/upload/large/51850.jpg"

  ],
  detail: {
    describe: [
      {
        index: 0,
        content: "Kit phát triển WiFi  Bluetooth ESP32-C3 Super Mini là một phiên bản nhỏ gọn nhưng mạnh mẽ của dòng vi điều khiển ESP32-C3. Được thiết kế đặc biệt cho các ứng dụng Internet of Things (IoT), sản phẩm này cung cấp khả năng kết nối không dây ổn định và hiệu quả, phù hợp cho nhiều dự án sáng tạo và phát triển sản phẩm."
      },
      {
        index: 1,
        content: "Với Wi-Fi 802.11 b/g/n và Bluetooth Low Energy (BLE), ESP32-C3 Super Mini cho phép thiết lập kết nối không dây nhanh chóng và linh hoạt. Việc hỗ trợ nhiều giao thức kết nối giúp sản phẩm dễ dàng tích hợp vào các thiết bị thông minh và hệ thống tự động hóa trong nhà, cũng như các ứng dụng yêu cầu truyền tải dữ liệu với mức tiêu thụ năng lượng thấp."
      },
      {
        index: 2,
        content: "Bộ xử lý RISC-V lõi đơn của ESP32-C3 Super Mini mang lại hiệu suất mạnh mẽ trong khi vẫn tối ưu hóa việc sử dụng năng lượng. Với khả năng tiết kiệm năng lượng cao và kích thước nhỏ gọn, kit phát triển này là lựa chọn lý tưởng cho các thiết bị di động, cảm biến từ xa, và các giải pháp IoT cần tối ưu hóa không gian và năng lượng.."
      }

    ],
    parameter: [
      { key: "model", value: "ESP32-C3 -18" },
      { key: "cpu", value: "RISC-V 32-bit đơn lõi" },
      { key: "clockSpeed", value: "160 MHz" },
      { key: "ultraLowPowerProcessing", value: "Không có" },
      { key: "sram", value: "400 KB" }
    ]
  }
};
export const orders: OrderItem[] = [
  {
    id: 1,
    code: "ORD001",
    date: new Date("2025-04-01T10:00:00Z"),
    total: 250000,
    state: "accept"
  },
  {
    id: 2,
    code: "ORD002",
    date: new Date("2025-04-02T14:30:00Z"),
    total: 350000,
    state: "transferred"
  },
  {
    id: 3,
    code: "ORD003",
    date: new Date("2025-04-03T09:00:00Z"),
    total: 120000,
    state: "delivery"
  },
  {
    id: 4,
    code: "ORD004",
    date: new Date("2025-04-04T11:45:00Z"),
    total: 450000,
    state: "delivered"
  },
  {
    id: 5,
    code: "ORD005",
    date: new Date("2025-04-05T16:30:00Z"),
    total: 300000,
    state: "cancel"
  },
  {
    id: 6,
    code: "ORD006",
    date: new Date("2025-04-06T08:15:00Z"),
    total: 500000,
    state: "accept"
  },
  {
    id: 7,
    code: "ORD007",
    date: new Date("2025-04-07T13:00:00Z"),
    total: 200000,
    state: "transferred"
  },
  {
    id: 8,
    code: "ORD008",
    date: new Date("2025-04-08T09:45:00Z"),
    total: 150000,
    state: "delivery"
  },
  {
    id: 9,
    code: "ORD009",
    date: new Date("2025-04-09T10:30:00Z"),
    total: 300000,
    state: "delivered"
  },
  {
    id: 10,
    code: "ORD010",
    date: new Date("2025-04-10T14:00:00Z"),
    total: 250000,
    state: "cancel"
  },
  {
    id: 11,
    code: "ORD011",
    date: new Date("2025-04-11T16:00:00Z"),
    total: 320000,
    state: "accept"
  },
  {
    id: 12,
    code: "ORD012",
    date: new Date("2025-04-12T10:30:00Z"),
    total: 420000,
    state: "transferred"
  },
  {
    id: 13,
    code: "ORD013",
    date: new Date("2025-04-13T09:00:00Z"),
    total: 180000,
    state: "delivery"
  },
  {
    id: 14,
    code: "ORD014",
    date: new Date("2025-04-14T12:00:00Z"),
    total: 600000,
    state: "delivered"
  },
  {
    id: 15,
    code: "ORD015",
    date: new Date("2025-04-15T17:15:00Z"),
    total: 350000,
    state: "cancel"
  }
];



export default products;
