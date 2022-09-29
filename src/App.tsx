import React, { useCallback, useEffect } from 'react';
import IndexRouter from './page';
import { SEND_MAIN_PING } from './constant';
import { TestAPI } from './api';
import useSWR from 'swr';
import APIConstant from './api/APIConstant';
import { fetcher } from './utils/fetch';

type Props = {};

const App = (props: Props) => {
  /* Router */
  /* State */
  const { data, error } = useSWR(APIConstant.TEST_GET, fetcher);
  console.log(data);
  const { ipcRenderer } = window.require('electron');
  const sendMail = () => {
    ipcRenderer.send(SEND_MAIN_PING, 'send');
  };
  /* Functions */
  /* Hooks */
  useEffect(() => {
    sendMail();
  }, []);

  /* Render */
  return <IndexRouter />;
};

export default App;
