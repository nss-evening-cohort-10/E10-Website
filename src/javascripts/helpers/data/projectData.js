import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const demProjects = response.data;
      const projects = [];
      Object.keys(demProjects).forEach((fbId) => {
        demProjects[fbId].id = fbId;
        projects.push(demProjects[fbId]);
      });
      resolve(projects);
    })
    .catch((error) => reject(error));
});

export default { getProjects };
