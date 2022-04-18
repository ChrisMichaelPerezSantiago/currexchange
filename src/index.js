const config = require('./config');
const request = require('./request');
const {
  cheerio: { load },
} = require('./packages');

const getCurrencies = async ({ defaultCurrency, amount }) => {
  const opts = {
    url: `${config.url}/table/?from=${defaultCurrency}&amount=${amount}`,
    method: 'get',
  };
  const response = await request(opts);
  const $ = load(response);

  const ratesTimestamp = $('span.ratesTimestamp:nth(1)').text();

  const data = $('table.tablesorter.ratesTable tbody tr')
    .map(
      (_, element) =>
        new Promise((resolve, reject) => {
          try {
            const $el = $(element);
            const country = $el.find('td:nth(0)').text();
            const currency = $el.find('td:nth(1)').text();
            const currencyName = $el.find('td:nth(1) a').attr('href');

            resolve({
              country,
              currencyName: currencyName ? currencyName.split('to=')[1] : null,
              currency: currency ? parseFloat(currency) : null,
            });
          } catch (error) {
            reject(error);
          }
        }),
    )
    .get();

  const currencies = await Promise.all(data);

  return {
    ratesTimestamp,
    currencies,
  };
};

const converter = async ({ from, to, amount }) => {
  const opts = {
    url: `${config.url}/calculator/?from=${from}&to=${to}&amount=${amount}`,
    method: 'get',
  };
  const response = await request(opts);
  const $ = load(response);

  const html = $('span.ccOutputRslt').html();
  const timestamp = $('span.calOutputTS').text() || null;

  return { amount: html ? html.split('<')[0] : null, code: to, timestamp };
};

module.exports = {
  getCurrencies,
  converter,
};
