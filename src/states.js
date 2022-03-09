import axios from "axios";
const { atom, selector } = require("recoil");


const booksState = atom({
    key: 'booksState',
    default: ['hello'],
})

// querries the api to fetch data 
const url = `http://localhost:5000/100pages/api/data`;
const fetchUserData = selector({
  key: "userSelector",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});

// check if data is present locally else it querries the api 
// const getdata = selector({
//     key: "getdataSelector", 
    
// })



const errorsState = atom({
    key: 'errorsState',
    default: '',
})

export { booksState, errorsState, fetchUserData };
