import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

// const agent = {
//     get: (url: string) => axios.get(url),
//     post: (url: string, body: any) => axios.post(url,body),
//     put: (url: string, body: any) => axios.put(url, body),
//     delete:(url: string, body: any) => axios(url, body)
// }

// const Mentors = {
//     getListPa
// }