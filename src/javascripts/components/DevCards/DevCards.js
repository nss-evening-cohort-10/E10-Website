import 'bootstrap';
import utilities from '../../helpers/utilities';
import developers from '../../helpers/data/developers';

import './DevCards.scss';

const devProfile = () => {
  const developer = developers.getDevelopers();
  let domString = '';
  domString += '<div class="techStack d-flex flex-wrap justify-content-between">';
  for (let i = 0; i < developer.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    const isHired = () => {
      if (developer[i].isHired) {
        domString += '<h4 class="ribbon">Hired</h4>';
      }
    };
    if (developer[i].resume !== '') {
      domString += `
    <div class="card devCard">`;
      isHired();
      domString += `
        <img class="card-img-top devImage" src="${developer[i].picture}" alt="${developer[i].name} headshot">
      <div class="card-body">
        <h5 class="card-title devName">${developer[i].name}</h5>
        <a href="${developer[i].resume}" class="" target="_blank">
          <img src="src/images/icons/resume_icon.png" class="cardIcon" alt="resume icon" />
        </a>
        <a href="${developer[i].github}" class="" target="_blank">
          <img src="src/images/icons/gitHub_icon.png" class="cardIcon" alt="Github icon" />
        </a>
        <a href="${developer[i].website}" class="" target="_blank">
          <img src="src/images/icons/website_icon.png" class="cardIcon" alt="website icon" />
        </a>
        <a href="${developer[i].linkedIn}" class="" target="_blank">
          <img src="src/images/icons/linkedIn_icon.png" class="cardIcon" alt="LinkedIn icon" />
        </a>
        <a href="${developer[i].email}" class="" target="_blank">
          <img src="src/images/icons/email_icon.png" class="cardIcon" alt="email icon" />
        </a>
      </div>
    </div>
    `;
    } else {
      domString += `
    <div class="card devCard">`;
      isHired();
      domString += `
      <img class="card-img-top devImage" src="${developer[i].picture}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title devName">${developer[i].name}</h5>
        <a href="${developer[i].github}" class="" target="_blank">
          <img src="src/images/icons/gitHub_icon.png" class="cardIcon" alt="Github icon" />
        </a>
        <a href="${developer[i].website}" class="" target="_blank">
          <img src="src/images/icons/website_icon.png" class="cardIcon" alt="website icon" />
        </a>
        <a href="${developer[i].linkedIn}" class="" target="_blank">
          <img src="src/images/icons/linkedIn_icon.png" class="cardIcon" alt="LinkedIn icon" />
        </a>
        <a href="${developer[i].email}" class="" target="_blank">
          <img src="src/images/icons/email_icon.png" class="cardIcon" alt="email icon" />
        </a>
      </div>
    </div>
    `;
    }
  }
  domString += '</div>';
  utilities.printToDom('devProfileCards', domString);
};

export default { devProfile };
