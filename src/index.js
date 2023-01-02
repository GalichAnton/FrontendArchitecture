import HelloComponent from './components/hello';
import Card from './components/card/card';

const component = new Card({id: 1, title: 'Hello', description: 'World'});
const root = document.getElementById('root');

if (root) {
  root.append(component.element);
} else {
  throw new Error('Root element not found');
}
