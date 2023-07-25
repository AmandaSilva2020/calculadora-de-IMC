export const Modal = {

  wraper: document.querySelector('.modal-wraper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() { // é a mesma coisa que -> open: function() {}
    Modal.wraper.classList.add('open');
  }, 
  close() {
    Modal.wraper.classList.remove('open');
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close();
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
  // console.log(event.key)

  if(event.key == 'Escape'){
    Modal.close();
  }
}