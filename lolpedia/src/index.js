import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const loldex=['Ahri','Aatrox','Akali','Alistar','Amumu','Anivia','Annie','Ashe','AurelionSol','Azir','Bard','Blitzcrank','Brand','Braum','Caitlyn','Camille','Cassiopeia','Chogath','Corki','Darius']

ReactDOM.render(<App loldex={loldex}/>, document.getElementById('root'));
