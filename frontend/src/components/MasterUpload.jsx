import React from 'react';
import UploadBox from './UploadBox';

export default function MasterUpload() {
  return (
    <div>
      <UploadBox />
      <div style={{ marginTop: 10 }}>CSV mapping and preview for master data import</div>
      <button className="primary" style={{ marginTop: 12 }}>Validate & Import</button>
    </div>
  );
}
