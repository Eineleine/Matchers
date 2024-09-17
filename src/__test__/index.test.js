import { healthOfCharacters } from '../index';

const expected = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

const received = healthOfCharacters(
  [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ],
);

test('sort characters from max health to min', () => {
  expect(received).toEqual(expected);
});

test('sort characters: Not toBe', () => {
  expect(healthOfCharacters(expected)).not.toBe(received);
});