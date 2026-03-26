function getRandomDamage(baseMin, baseMax) {
  return Math.floor(Math.random() * (baseMax - baseMin + 1)) + baseMin;
}

function formatNumber(num) {
    if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + ' M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + ' K';
    } else {
        return num.toString();
    }
}