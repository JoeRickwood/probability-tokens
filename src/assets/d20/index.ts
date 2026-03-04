import type { PieceTemplate } from "../../types";

const src = "./d20/d20.gltf";

export const d20 = {
  // Asset originally created by Misha Tsyatksko for Garbo Succus
  name: "D20 Dice",
  src,
  scale: [0.016, 0.016, 0.016], //Scaled to fit inside a 16mm^3 cube
  faces: [
    { name: "1", rotation: [0, 260, 0] },
    { name: "2", rotation: [36, 10, 0] },
    { name: "3", rotation: [78, 18, 0] },
    { name: "4", rotation: [336, 330, 0] },
    { name: "5", rotation: [336, 330, 0] },
    { name: "6", rotation: [252, 233, 0] },
    { name: "7", rotation: [0, 37.5, 0] },
    { name: "8", rotation: [204, 209.5, 0] },
    { name: "9", rotation: [281, 198, 0] },
    { name: "10", rotation: [288, 307.5, 0] },
    { name: "11", rotation: [288, 127.5, 0] },
    { name: "12", rotation: [36, 191, 0] },
    { name: "13", rotation: [0, 217.5, 0] },
    { name: "14", rotation: [72.5, 127.5, 0] },
    { name: "15", rotation: [101.5, 162.5, 0] },
    { name: "16", rotation: [156, 29.5, 0] },
    { name: "17", rotation: [259, 342, 0] },
    { name: "18", rotation: [204, 29.5, 0] },
    { name: "19", rotation: [144, 349, 0] },
    { name: "20", rotation: [0, 79, 0] }

  ],
} as PieceTemplate;
