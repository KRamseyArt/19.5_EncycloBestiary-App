import TokenService from './token-service';
import Config from '../Config';

const BestiaryApiService = {
  getBestiaries(user_id) {
    return fetch(`${Config.API_ENDPOINT}/bestiaries/${user_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  getBestiary(bestiaryId) {
    return fetch(`${Config.API_ENDPOINT}/bestiaries/${bestiaryId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  getBestiaryData(bestiaryId) {
    return fetch(`${Config.API_ENDPOINT}/bestiaries/${bestiaryId}/data`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  postData(bestiaryId, title, content) {
    return fetch(`${Config.API_ENDPOINT}/data`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        bestiary_id: bestiaryId,
        data_name: title,
        data_description: content,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  }
}

export default BestiaryApiService;