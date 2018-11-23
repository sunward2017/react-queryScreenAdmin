import { request, config } from 'utils'

const { api } = config
const { userLogin } = api

export function login (data) {
  console.log(data)
  return request({
    url: userLogin,
    method: 'post',
    data,
  })
}
