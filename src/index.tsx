/* @refresh reload */
import { render } from 'solid-js/web';
import './styles/css/normalize.css';
import './styles/sass/main.scss';

import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);


