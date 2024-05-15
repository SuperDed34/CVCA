// src/components/NativeProject.js
import React from 'react';

function NativeProject(props) {
  const path = props.path
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={path}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Native Project"
      ></iframe>
    </div>
  );
}

export default NativeProject;
