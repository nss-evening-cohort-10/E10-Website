import 'bootstrap';
import utl from './helpers/utilities';
import '../styles/main.scss';

const init = () => {
  const domString = `
    <div>
      <h2 class="text-center">Print More Stuff</h2>
    </div>`;
  utl.printToDom('stuff', domString);
};

init();
