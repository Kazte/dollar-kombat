import './app.css';
import {useEffect, useState} from 'react';
import getYOffset from './lib/getYOffset.ts';
import useValueTransition from './hooks/useValueTransition.ts';

const API_URL = 'https://api.bluelytics.com.ar/v2/latest';

export default function App() {
  const [price, setPrice] = useState(0);
  const animatedTranslateValue = useValueTransition(0, getYOffset(price), 1000);
  const animatedPriceValue = useValueTransition(0, price, 1000);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        setPrice(resData.blue.value_avg);
      });
  }, []);

  return (

    <main>
      <div className='container'>
        <img className='tower' src='src/assets/img/tower.png' alt='Descripción de la imagen'/>
        <div className='dollar' style={{bottom: `${animatedTranslateValue}%`}}>
          <img alt='1 dollar' src='/src/assets/img/dollar.png'/>
          <p>
            {animatedPriceValue.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}
          </p>
        </div>
      </div>
    </main>
  );

}