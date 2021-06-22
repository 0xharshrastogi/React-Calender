import React from 'react';
import ReactDOM from 'react-dom';

import Calender from './components/Calender/Calender';
import './scss/normal.scss';

const Root = () => {
  return <Calender />;
};

ReactDOM.render(<Root />, document.getElementById('root'));
