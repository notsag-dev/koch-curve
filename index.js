const p = (x, y) => {
  return {x, y};
};

const rotateVector = (v, angle) => {
  return {
    x: v.x * Math.cos(angle) - v.y * Math.sin(angle),
    y: v.x * Math.sin(angle) + v.y * Math.cos(angle),
  };
};

const getAngle = (v1, v2) => {
  const op = v2.y - v1.y;
  const adj = v2.x - v1.x;
  const t = op / adj;
  return Math.atan(t);
};

const processLine = (from, to, levels) => {
  if (levels === 0) {
    return [from, to];
  }
  const distance = Math.sqrt(
    Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2),
  );
  const normFrom = p(0, 0);
  const normTo = p(distance, 0);
  const points = [
    p(0, 0),
    p(distance / 3, 0),
    p(distance / 2, (Math.tan((60 * Math.PI) / 180) * distance) / 6),
    p((2 * distance) / 3, 0),
    p(distance, 0),
  ];
  const res = [];
  for (let i = 0; i < 4; i++) {
    res.push(...processLine(points[i], points[i + 1], levels - 1));
  }

  return res
    // rotate
    .map(v => rotateVector(v, getAngle(from, to)))
    // translate
    .map(v => p(v.x + from.x, v.y + from.y));
};

module.exports = {processLine};
