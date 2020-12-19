import axios from 'axios';

// Export an object containing methods we'll use for accessing the random user API

export default {
  getRandomEmployee: function () {
    return axios
      .get("https://randomuser.me/api/?results=50")
      .then(res => {
        console.log(res)
        const employees = res.data.results;
        return employees.map(function (employee) {
          return {
            image: employee.picture.thumbnail,
            loginFirstName: employee.name.first,
            loginLastName: employee.name.last,
            gender: employee.gender,
            location: employee.location.city,
            email: employee.email
          };
        });
      });

  }
}

