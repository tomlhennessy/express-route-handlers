
// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());""

app.post('/', (req, res) => {
  res.json({ received: req.body });
})

app.get('/artists', (req, res) => {
  const artists = getAllArtists(); // get the data from the data.js function
  res.status(200).json(artists); // send the data as json with a 200 status
})

app.post('/artists', (req, res) => {
  const newArtist = req.body; // access the data sent in the request body
  const addedArtist = addArtist(newArtist); // add the artist using data.js function
  res.status(201).json(addedArtist); // respond with the created artist and 201 status
})

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
