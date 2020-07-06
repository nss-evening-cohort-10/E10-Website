import 'bootstrap';
import utl from './helpers/utilities';
import { regular } from './helpers/data/techIcons.json';
import '../styles/main.scss';

const regularIconsToDom = () => {
  const domString = `
  <img class="tech-icon" src="${regular.dotnet}" alt=".NET icon" />
  <img class="tech-icon" src="${regular.csharp}" alt="C# icon" />
  <img class="tech-icon" src="${regular.sql}" alt="SQL icon" />
  <img class="tech-icon" src="${regular.html}" alt="HTML5 icon" />
  <img class="tech-icon" src="${regular.css}" alt="CSS3 icon" />
  <img class="tech-icon" src="${regular.javascript}" alt="JS icon" />
  <img class="tech-icon" src="${regular.bootstrap}" alt="Bootstrap icon" />
  <img class="tech-icon" src="${regular.sass}" alt="Sass icon" />
  <img class="tech-icon" src="${regular.jquery}" alt="jQuery icon" />
  <img class="tech-icon"src="${regular.webpack}" alt="Webpack icon" />
  <img class="tech-icon" src="${regular.react}" alt="React icon" />
  `;
  utl.printToDom('tech-icon-container', domString);
};

const init = () => {
  regularIconsToDom();
  const domString = `
    <div>
      <h2 class="text-center">Print More Stuff</h2>
    </div>`;
  utl.printToDom('stuff', domString);
};

init();
