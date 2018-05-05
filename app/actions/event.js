import axios from 'axios'

export function allEvent(data){
  return {
    type: "ALL_EVENT",
    payload: axios.post('http://10.0.3.2:8989/api/eventList',data)
  }
} 

export function createEvent(data){
  return {
    type: "CREATE_EVENT",
    payload: axios.post('http://10.0.3.2:8989/api/user/createUser', data)
  }
}
