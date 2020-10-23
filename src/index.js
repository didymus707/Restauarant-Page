import '../styles/style.css';
import nav from './components/nav';
import main from './components/main';

const content = document.querySelector('#content');

content.append(nav(), main());