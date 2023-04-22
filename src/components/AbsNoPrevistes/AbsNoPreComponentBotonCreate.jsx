import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AbsNoPreComponentCreate from './AbsNoPreComponentCreate';

function AbsNoPreComponentBotonCreate() {
  const [showCreate, setShowCreate] = useState(false);
  const history = useHistory();

  const handleButtonClick = () => {
    setShowCreate(false);
    history.push('/absnoprevistes/new');

  };

  return (
    <div>
      <button onClick={handleButtonClick}>Nova</button>
      {showCreate && <AbsNoPreComponentCreate />}
    </div>
  );
}

export default AbsNoPreComponentBotonCreate;
