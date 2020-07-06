import React from 'react';

const Context = React.createContext({
  user: {},
  bestiaries: [],
  activeBestiaryID: {},
  data: [],
  activateUser: () => {},
  addBestiary: () => {},
  deleteBestiary: () => {},
  setActiveBestiaryID: () => {},
  addData: () => {},
  deleteData: () => {}
})

export default Context;