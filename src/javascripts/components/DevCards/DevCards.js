import 'bootstrap';
import $ from 'jquery';
import utilities from '../../helpers/utilities';
import developers from '../../helpers/data/developers';

import './DevCards.scss';

const hoverEvent = (cardId) => {
  $(`#${cardId}.devCard`).hover(() => {
    $(`#${cardId} .devImage`).toggle();
    $(`#${cardId} .weeDevImage`).toggle();
  });
};

const devProfile = () => {
  const developerUnsorted = developers.getDevelopers();
  const developerForHire = [];
  const developerTaken = [];
  for (let i = 0; i < developerUnsorted.length; i += 1) {
    if (developerUnsorted[i].isHired) {
      developerTaken.push(developerUnsorted[i]);
    } else {
      developerForHire.push(developerUnsorted[i]);
    }
  }
  const developer = developerForHire.concat(developerTaken);

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
    <div id="dev-${developer[i].id}" class="card devCard">`;
      isHired();
      domString += `
        <img class="card-img-top devImage" src="${developer[i].picture}" alt="${developer[i].name} headshot">
        <img class="card-img-top weeDevImage" src="${developer[i].babyPicture}" alt="${developer[i].name} childhood photo">
      <div class="card-body">
        <h5 class="card-title devName">${developer[i].name}</h5>
        <a href="${developer[i].resume}" class="card-icon-link" target="_blank">
          <img src="src/images/icons/resume_icon.png" class="cardIcon" alt="resume icon" />
        </a>
        <a href="${developer[i].github}" class="card-icon-link" target="_blank">
          <img src="src/images/icons/gitHub_icon.png" class="cardIcon" alt="Github icon" />
        </a>
        <a href="${developer[i].website}" class="card-icon-link" target="_blank">
          <img src="src/images/icons/website_icon.png" class="cardIcon" alt="website icon" />
        </a>
        <a href="${developer[i].linkedin}" class="card-icon-link" target="_blank">
          <img src="src/images/icons/linkedIn_icon.png" class="cardIcon" alt="LinkedIn icon" />
        </a>`;
      if (developer[i].podcastTrack !== '') {
        domString += `
        <a href="${developer[i].podcastTrack}" class="card-icon-link" target="_blank">
          <img src="src/images/icons/soundcloud_icon.png" class="cardIcon" alt="Soundcloud icon" />
        </a>`;
      }
      if (developer[i].demoVideo !== '') {
        domString += `
        <a href="${developer[i].demoVideo}" class="card-icon-link" target=_blank">
          <img src="src/images/icons/video_icon.png" class="cardIcon" alt="YouTube icon" />
        </a>
        `;
      }
      domString += `      
      </div>
    </div>
    `;
    } else {
      domString += `
    <div id="dev-${developer[i].id}" class="card devCard">`;
      isHired();
      domString += `
      <img class="card-img-top devImage" src="${developer[i].picture}" alt="Card image cap">
      <img class="card-img-top weeDevImage" src="${developer[i].babyPicture}" alt="${developer[i].name} childhood photo">
      <div class="card-body">
        <h5 class="card-title devName">${developer[i].name}</h5>
        <a href="${developer[i].github}" class="card-icon-link" target="_blank">
          <img src="src/images/icons/gitHub_icon.png" class="cardIcon" alt="Github icon" />
        </a>
        <a href="${developer[i].website}" class="card-icon-link" target="_blank">
          <img src="src/images/icons/website_icon.png" class="cardIcon" alt="website icon" />
        </a>
        <a href="${developer[i].linkedin}" class="card-icon-link" target="_blank">
          <img src="src/images/icons/linkedIn_icon.png" class="cardIcon" alt="LinkedIn icon" />
        </a>
      </div>
    </div>
    `;
    }
  }
  domString += '</div>';
  utilities.printToDom('devProfileCards', domString);
  for (let i = 0; i < developer.length; i += 1) {
    hoverEvent(`dev-${developer[i].id}`);
  }
};

export default { devProfile };
