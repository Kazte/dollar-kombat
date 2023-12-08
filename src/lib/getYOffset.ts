export default function getYOffset(price: number): number {
  if (price > 2000)
    return 89;

  if (price > 0 && price <= 2) {
    return lerp(0, 8, getPercentage(0, 2, price));
  }

  if (price > 2 && price <= 5) {
    return lerp(8, 17, getPercentage(2, 5, price));
  }

  if (price > 5 && price <= 10) {
    return lerp(17, 26, getPercentage(5, 10, price));
  }

  if (price > 10 && price <= 20) {
    return lerp(26, 35, getPercentage(10, 20, price));
  }

  if (price > 20 && price <= 50) {
    return lerp(35, 44, getPercentage(20, 50, price));
  }

  if (price > 50 && price <= 100) {
    return lerp(44, 53, getPercentage(50, 100, price));
  }

  if (price > 100 && price <= 200) {
    return lerp(53, 62, getPercentage(100, 200, price));
  }

  if (price > 200 && price <= 500) {
    return lerp(62, 71, getPercentage(200, 500, price));
  }

  if (price > 500 && price <= 1000) {
    return lerp(71, 80, getPercentage(500, 1000, price));
  }

  if (price > 1000 && price <= 2000) {
    return lerp(80, 89, getPercentage(1000, 2000, price));
  }

  return 0;
}


function lerp(v0: number, v1: number, t: number): number {
  return (1 - t) * v0 + t * v1;
}

function getPercentage(a: number, b: number, c: number) {
  if (a === b)
    throw new Error('Numbers \'a\' y \'b\' cannot be the same.');

  return ((c - a) / (b - a));
}