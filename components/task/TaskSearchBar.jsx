import React from 'react';
import TextField from '@mui/material/TextField';

export default function TaskSearchBar({ onSearchChange }) {

  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <TextField
      label="Search Tasks"
      fullWidth
      onChange={handleSearchChange}
    />
  );
};
