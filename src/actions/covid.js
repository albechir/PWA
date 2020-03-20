import axios from 'axios'

export const covidCall = () => {
  axios
    .get('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats', {
      headers: {
        'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
        'x-rapidapi-key': 'f2745929b3msha107a131ef73e61p1ef706jsn1c7fd277250a'
      },
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.error(err))
}
