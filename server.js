'use strict';

const express = require('express'),
      app     = express(),
      PORT    = process.env.PORT || 3000
      ;

let count = 0;

app.get('/api/counter', (req,res) => {
  res.json({count});
});

app.get('/api/counter/increment', (req,res) => {
  count++;
  res.json({count});
});

app.get('/api/counter/decrement', (req,res) => {
  count--;
  res.json({count});
});

app.listen(PORT, () => {
  console.log(`Counter API listening on port ${PORT}`);
});