import axios from 'axios';

const getData = async(userId) => {
    try{
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        
        const userData ={
            id: userResponse.data.id,
            name: userResponse.data.name,
            username: userResponse.data.username,
            email: userResponse.data.email,
            address: userResponse.data.address,
            phone: userResponse.data.phone,
            website: userResponse.data.website,
            company: userResponse.data.company,
            posts: postsResponse.data
        };

        return userData;
    } catch(error){
        console.error('Veri çekme hatası',error);
        throw error;
    }
};
export default getData;