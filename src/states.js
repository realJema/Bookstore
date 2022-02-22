import axios from "axios";
const { atom, selector } = require("recoil");


const booksState = atom({
    key: 'booksState',
    default: ['hello'],
})
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

const errorsState = atom({
    key: 'errorsState',
    default: '',
})

export { booksState, errorsState, fetchUserData };
