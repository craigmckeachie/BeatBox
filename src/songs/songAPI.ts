import {
  BASE_URL,
  delay,
  checkStatus,
  parseJSON,
} from "../utility/fetchUtilities";

import { Song } from "./Song";

const url = `${BASE_URL}/songs`;

export const songAPI = {
  list(): Promise<Song[]> {
    return fetch(url).then(delay(200)).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<Song> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(song: Song) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(song: Song) {
    return fetch(`${url}/${song.id}`, {
      method: "PUT",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },
};
