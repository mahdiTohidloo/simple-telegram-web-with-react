import React from 'react';
import PropTypes from "prop-types";

const UserInformationModal = ({ data, show, onClose }) => {
  return !show ? <div /> : (
    <div className={'User-info-modal'}>
      <div className="mask"  onClick={onClose}/>
      <div className="content" onClick={() => {}}>
        <figure>
          <img src={data.image} />
        </figure>
        <div className={'name'}>
          <h2> { data.name } </h2>
        </div>
      </div>
    </div>
  )
};

UserInformationModal.propTypes = {
  data: PropTypes.object,
  show: PropTypes.bool,
  onClose: PropTypes.func,
};
export default UserInformationModal;
