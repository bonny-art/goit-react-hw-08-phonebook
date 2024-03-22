import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from 'store/auth/authSlice';

export const UpdateProfilePage = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleChange = e => {
    setFile(e.target.files[0]);
  };

  const uploadAvatar = e => {
    e.preventDefault();
    dispatch(authActions.updateUserAvatar(file));
  };

  return (
    <div>
      <form onSubmit={uploadAvatar}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};
