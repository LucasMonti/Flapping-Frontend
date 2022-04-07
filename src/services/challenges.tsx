import axios from "axios";

export function getChallenges() {
   return axios.get('http://localhost:3001/api/challenges')
}
