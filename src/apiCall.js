const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'fniCEkwKVgJYQGkxLoJy';

export const addScore = async (name, score) => {
  await fetch(`${BASE_URL}${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json());
};

export const getScore = async () => {
  let data;
  await fetch(`${BASE_URL}${gameId}/scores`).then((res) => res.json()).then((res) => { data = res; });
  return data;
};