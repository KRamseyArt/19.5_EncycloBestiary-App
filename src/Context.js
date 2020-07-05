import React from 'react';

const Context = React.createContext({
  user: {},
  bestiaries: [],
  data: [],
  activateUser: () => {},
  addBestiary: () => {},
  deleteBestiary: () => {},
  addData: () => {},
  deleteData: () => {}
})

export default Context;