import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import Parser from './parser';

const App: FC = () => {
  const str = ` 10 + 20 + 60 - 10 - '10'`;

  let result;
  
  try {
    result = Parser.parse(str);
  }
  catch (err) {
    console.log('err', err);
    return (
      <div>ЧТО_ТО СЛОМАЛОСЬ</div>
    )
  }

  console.log('result', result);
  console.log('result.evaluateValue', result.evaluateValue());

  return (
    <div>обычный див</div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
