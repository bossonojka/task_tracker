const request = require('supertest');
const app = require('../../index');

const RegistrationService = require('../../services/Registration');

jest.mock('../../services/Registration', () => ({
  RegistrationService: class {
    static registrate = jest.fn();
  },
}));

describe('Registration routes', () => {
  RegistrationService.registrate.mockImplementationOnce(() => {
    return new Promise.resolve([1]);
  })
  test('Registration route returns object with id', async () => {
    const response = await request(app.callback()).get('/api/registration');
    expect(response.status).toBe(200);
    expect(response.text).toBe({ id: 1 });
  });
});
