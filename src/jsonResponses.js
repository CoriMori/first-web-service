const randomNumberJSON = (max = 1) => {
  let tempMax = Number(max); // cast 'max to a number
  tempMax = !tempMax ? 1 : tempMax; // default to 1 if max is not a number (falsy)
  tempMax = tempMax < 1 ? 1 : tempMax; // default to 1 if max is less than 1
  const number = Math.random() * tempMax;
  const responseObj = {
    timestamp: new Date(),
    number,
  };
  return JSON.stringify(responseObj);
};

const getRandomNumberResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(randomNumberJSON(params.max));
  response.end();
};

module.exports.getRandomNumberResponse = getRandomNumberResponse;
