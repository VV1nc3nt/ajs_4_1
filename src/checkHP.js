export default function checkHP(element) {
  if (element.health >= 50) {
    return 'healthy';
  } if (element.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
