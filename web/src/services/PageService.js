import axios from 'axios'

export default {
  getStatic (path, ext = 'html') {
    return axios.get(`${path}.${ext}`)
  }
}
