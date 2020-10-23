import '../styles/style.css';
import nav from './components/nav';
import main from './components/main';
import footer from './components/footer';

const content = document.querySelector('#content');

content.append(nav().navTag, main(), footer());