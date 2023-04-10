import Modal from 'react-modal';

function ModalComponent({isOpen, onCloseModal, score}){
    const modalStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#FFF4D2',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          padding: '20px',
          minWidth: '450px'
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      };

      function handleVoteAgain(){
        onCloseModal()
      }

      return(
        <Modal isOpen={isOpen} style={modalStyles}>
        <h1 className='text-center'>Votes:</h1>
        <p><strong>Cat 🐱</strong>: {score.cat}</p>
        <p><strong>Dog 🐶</strong>: {score.dog}</p>

        <button className='modalButton' onClick={handleVoteAgain}>Vote Again</button>
      </Modal>
      )
}

export {ModalComponent}