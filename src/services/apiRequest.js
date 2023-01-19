import axios from "axios";


export const getSamples = (city) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://simplestore.up.railway.app/SamplesApp/sampleindividual/?${city}`)
      .then((res) => {
        console.log(res.data)
        resolve(res.data);
      })
      .catch((err) => {
        console.log({'error response': err.response, 'error message': err.message, 'error response status': err.response.status})
        reject({ status: err.resopnse.status, message: err.message });
      });
  });
};
