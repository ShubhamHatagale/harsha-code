import React from 'react'
import Modal from 'react-modal';
import './Component.css';
import ArrowR from '../img/arrowright.svg'


const customStyles = {
    content: {
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#F2E6E1',
      border: 'none',
      position: 'absolute',
      
      
    },
    
  };

// Modal.setAppElement('#yourAppElement');

export default function Model() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#000';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div>
        <button onClick={openModal} className="nav-links2">Enquiry</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel=""
        >
          <div>
            <div>
          <button onClick={closeModal} className="model-cloae-btn" >X</button>
            </div>
          <div className="model-form">
          <div className="model-main">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Enquiry </h2>
          <p>please fill all details</p>
          <br/>
          </div>
          <form>
            <div className="model-field-flex">
              <div>
                <label>First Name <span>*</span> </label><br/>
                <input type="text" placeholder="First Name"/>
            </div>
            <div>
            <label>Last Name <span>*</span></label><br/>
                <input type="text" placeholder="Last Name" />
            </div>
            </div>
            <div>
            <label>Email <span>*</span></label><br/>
                <input type="email" placeholder="Email" />
            </div>
            <div>
            <label>Contact Number <span>*</span></label><br/>
                <input type="text" placeholder="Contact Number" />
            </div>
            <div>
              <label>Reference Sketch </label><br/>
                <input type="file" placeholder="File" />
            </div>
            <br/>
            <div className="btn-center">
            <button>submit <img src={ArrowR} /> </button>
            </div>
                 

          </form>
          </div>
          </div>
        </Modal>
      </div>
    )
}
