const DEFAULT_ENDPOINT =
  'https://cdn.glitch.com/760886e0-5f1f-4216-9a2e-0e0c7c7797eb%2Fbuilds.json?v=1602261849911';

const fetchData = (url = DEFAULT_ENDPOINT) => window.fetch(url);

export default fetchData;
