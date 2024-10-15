import style from './counterContainer.module.css';
import {useState} from 'react'


function Counter() {
 const [counter, useCounter] = useState(0);
  
  const HandlIncrease = () => {
    useCounter(prev => prev +1);
  }

  const HandlReduce = () => {
    useCounter(prev => prev -1);
  }



  return (

    <div className="App">
      <header className="App-header">

      <div className={style.counter__container}>
        <div className={style.items__container}>
          <input value={counter} className={style.inputText} placeholder="..."></input>
          <div className={style.btn__container}>
            <button onClick={HandlReduce} className={style.btn__reduce}>Reduce</button>
            <button onClick={HandlIncrease}  className={style.btn__increase}>Increase</button>
          </div>
        </div>
      </div>

      </header>
    </div>
  );
}

export default Counter;
