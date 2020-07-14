import React from 'react';

const Context = React.createContext({
  userToken: "",
  user: {},
  activeBestiaryID: null,
  bestiaries: [],
  data: [],
  setUser: () => {},
  addUser: () => {},
  setActiveBestiaryID: () => {},
  addBestiary: () => {},
  deleteBestiary: () => {},
  addData: () => {},
  deleteData: () => {},
  handleSuccessfulLogin: () =>{}
})

export default Context;