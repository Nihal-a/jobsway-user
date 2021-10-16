import axios from 'axios'

const userUrl = 'http://localhost:8000'

export const user = () => axios.get(userUrl)