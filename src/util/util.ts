export function random(max: number) {
  return Math.round(Math.random() * max)
}

export function randomPointOutsideRect(width: number, height: number) {
  const side = Math.round(Math.random() * 5)
  switch (side) {
    case 0:
      return [-100, random(height)]
    case 1:
      return [width + 100, random(height)]
    case 2:
      return [random(width), -100]
    case 3:
      return [random(width), height + 100]
    case 4:
      return [random(width), random(height)]
  }

  return [0, 0]
}

export function getColorBetween(color1: string, color2: string) {
  if (color1.startsWith("#")) {
    color1 = color1.slice(1)
  }

  if (color2.startsWith("#")) {
    color2 = color2.slice(1)
  }

  const random = Math.random()
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)

  return rgbToHex(rgb1.map((c, i) => Math.round(c + (rgb2[i] - c) * random)));
}

export function hexToRgb(hex: string) {
  return [
    parseInt(hex.substring(0, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(4, 6), 16)
  ]
}

export function rgbToHex(rgb: number[]) {
  return "#" + rgb.map(c => c.toString(16).padStart(2, "0")).join("")
}