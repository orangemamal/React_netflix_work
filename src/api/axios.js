import axios from "axios"

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "ead3109fb995c4e2c640214c584e9128",
    language: "ko-KR",
  },
})

export default instance