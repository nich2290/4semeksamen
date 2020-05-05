import App from './app'
import users from '../../json/mockdata-users.json'

test('Smoke test App component', () => {
  expect(new App()).toBeDefined();
})

test('returns accumulated stars from users', () => {
  expect(new App().sumUserStars(users)).toBe(12);
})