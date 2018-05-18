import axios from 'axios'

export default {
  getPage (page) {
    return axios.get(`/static/pages/${page}.html`)
  }
}
