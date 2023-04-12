import checkHP from '../checkHP';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Воин', health: 38 }, 'wounded'],
  [{ name: 'Некромант', health: 10 }, 'critical'],
])('testing returning HP status', (element, expected) => {
  const result = checkHP(element);
  expect(result).toBe(expected);
});
