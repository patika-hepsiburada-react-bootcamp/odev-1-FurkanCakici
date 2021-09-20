import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

const getData = async (id) => {
   try {
      const { data: user } = await axios.get(`${url}/users/${id}`);
      const { data: posts } = await axios.get(`${url}/posts?${user.id}`);
      const postsData = posts.slice(0, 1);

      return { ...user, postsData };
   } catch (error) {
      return error.message;
   }
};

export default getData;
