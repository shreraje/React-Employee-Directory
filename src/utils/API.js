import axios from 'axios';

// Export an object containing methods we'll use for accessing the random user API

export default {
  getRandomEmployee: function () {
    return axios
      .get("https://randomuser.me/api/?results=50")
      .then(res => {
        console.log(res)
        
      });

  }
}

