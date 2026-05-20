import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Panel({ title, children, className = '' }) {
  return (
    <Paper className={`p-6 ${className}`} elevation={2}>
      {title && (
        <Typography variant="h6" component="div" className="mb-4">
          {title}
        </Typography>
      )}
      {children}
    </Paper>
  );
}
