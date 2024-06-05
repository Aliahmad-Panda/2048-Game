let colorsSizes = {
  2: {
    size: 64,
    color: "#E2EE75",
  },
  4: {
    size: 64,
    color: "#F5596C",
  },
  8: {
    size: 64,
    color: "#E460DA",
  },
  16: {
    size: 64,
    color: "#47DE85",
  },
  32: {
    size: 64,
    color: "#4558C2",
  },
  64: {
    size: 64,
    color: "#A38605",
  },
  128: {
    size: 36,
    color: "#B92522",
  },
  256: {
    size: 36,
    color: "#673AB7",
  },
  512: {
    size: 36,
    color: "#795548",
  },
  1024: {
    size: 16,
    color: "#21B48A",
  },
  2048: {
    size: 16,
    color: "#B713BE",
  },
};

function randomGenrate() {
  let Largest;
  let r = random(1);
  let temp;

  largest = MaxValue();
  switch (largest) {
    case 0:
      temp = r > 0.3 ? 2 : 4;
      break;
    case 2:
      temp = r > 0.3 ? 2 : 4;
      break;
    case 4:
      temp = r > 0.3 ? 2 : 4;
      break;
    case 8:
      temp = r > 0.3 ? 2 : 4;
      break;
    case 16:
      temp = r > 0.3 ? 2 : 4;
      break;
    case 32:
      if (r <= 0.6) temp = 2;
      if (r > 0.6 && r <= 0.9) temp = 4;
      if (r > 0.9) temp = 8;
      break;
    case 64:
      if (r <= 0.5) temp = 2;
      if (r > 0.5 && r <= 0.9) temp = 4;
      if (r > 0.9) temp = 8;
      break;
    case 128:
      if (r <= 0.5) temp = 2;
      if (r > 0.5 && r <= 0.8) temp = 4;
      if (r > 0.8 && r <= 0.95) temp = 8;
      if (r > 0.95) temp = 16;
      break;
    case 256:
      if (r <= 0.5) temp = 2;
      if (r > 0.5 && r <= 0.75) temp = 4;
      if (r > 0.75 && r <= 0.9) temp = 8;
      if (r > 0.9 && r <= 0.975) temp = 16;
      if (r > 0.975) temp = 32;
      break;
    case 512:
      if (r <= 0.5) temp = 2;
      if (r > 0.5 && r <= 0.725) temp = 4;
      if (r > 0.725 && r <= 0.875) temp = 8;
      if (r > 0.875 && r <= 0.95) temp = 16;
      if (r >= 0.95 && r < 0.98) temp = 32;
      if (r > 0.98) temp = 64;
      break;
    case 1028:
      if (r <= 0.1) temp = 2;
      if (r > 0.1 && r <= 0.3) temp = 4;
      if (r > 0.3 && r <= 0.55) temp = 8;
      if (r > 0.55 && r <= 0.75) temp = 16;
      if (r >= 0.7 && r < 0.9) temp = 32;
      if (r >= 0.9 && r <= 0.95) temp = 64;
      if (r > 0.95) temp = 128;
      break;
    case 2048:
      if (r <= 0.05) temp = 2;
      if (r > 0.05 && r <= 0.2) temp = 4;
      if (r > 0.2 && r <= 0.35) temp = 8;
      if (r > 0.35 && r <= 0.7) temp = 16;
      if (r >= 0.7 && r < 0.85) temp = 32;
      if (r >= 0.85 && r <= 0.94) temp = 64;
      if (r > 0.94 && r <= 0.985) temp = 128;
      if (r > 0.985) temp = 256;
      break;
    default:
      temp = r > 0.9 ? 2 : 4;
      break;
  }
  return temp;
}
