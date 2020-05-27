const baseUrl = 'https://corona.lmao.ninja';

class CoronaService {
  async getCountries () {
    return await fetch(`${baseUrl}/v2/countries`).then(res => res.json())
  }

  async getCountry (country) {
    return await fetch(`${baseUrl}/v2/countries/${country}`).then(res => res.json())
  }
}

const coronaService = new CoronaService();

export { coronaService }
