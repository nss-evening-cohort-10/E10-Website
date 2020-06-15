import $ from 'jquery';
import 'bootstrap';

const printToDom = (divId, toPrint) => {
  $(`#${divId}`).html(toPrint);
};

export default { printToDom };
