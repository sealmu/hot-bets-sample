import chaos from "chaosocket";
import scoreGridMock from "./mocks/ScoreGrid";

const mocks = {
  scoreGridMock: {
    ...scoreGridMock(),
  },
};

const mockNames = Object.keys(mocks);

chaos.register((faker) => {
  const generatedMock = scoreGridMock();
  mocks.scoreGridMock = { ...mocks.scoreGridMock, ...generatedMock };

  const randomMockName =
    mockNames[Math.floor(Math.random() * mockNames.length)];
  const mockData = mocks[randomMockName];

  return {
    type: randomMockName,
    data: mockData,
  };
});
chaos.listen({
  delay: 1000,
});

export default mocks;

//     create_at: faker.date.recent(),
//     event_name: faker.random.arrayElement(['connection', 'typing', 'message']),
//     first_name: faker.name.firstName(),
//     last_name: faker.name.lastName(),
//     bio: faker.lorem.text()
