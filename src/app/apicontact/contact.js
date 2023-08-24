import axios from "axios";
import API_BASE_URL from './const';

const contact = async(args) => {
  axios.post(API_BASE_URL + '/contact-us', {
    fullname: args.fullname,
    lastname: args.lastname,
    email: args.email,
    phone_number: args.phone_number,
    topic: args.topic,
    message: args.message,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default contact;