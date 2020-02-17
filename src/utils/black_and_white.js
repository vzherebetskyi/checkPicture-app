const round = (number, precision) => {
  const factor = Math.pow(10, precision);
  const tempNumber = number * factor;
  const roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
};

const convertToBlackWhite = (picture) => {
  const canvas = document.createElement('canvas');
  [canvas.width, canvas.height] = [332, 473];

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const img = new Image();

  img.src = picture.src;
  ctx.filter = 'grayscale(100%)';
  const heightToWidthRatio = round(img.height / img.width, 2);
  let correctWidth = 332;

  if (correctWidth * heightToWidthRatio > 473) {
    while (correctWidth * heightToWidthRatio > 473) {
      correctWidth -= 1;
    }
  }

  ctx.drawImage(img, 0, 0, correctWidth, correctWidth * heightToWidthRatio);
  img.src = canvas.toDataURL();

  return img.src;
};

export default convertToBlackWhite;
