const trendingDiv = document.getElementById('trending');
const searchInput = document.getElementById('search');

// Load songs from Firestore
function loadSongs() {
  db.collection('songs').get().then(snapshot => {
    trendingDiv.innerHTML = '';
    snapshot.forEach(doc => {
      const song = doc.data();
      const card = document.createElement('div');
      card.className = 'song-card';
      card.innerHTML = `
        <img src="${song.cover}" alt="${song.title}">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
        <audio controls>
          <source src="${song.url}" type="audio/mpeg">
        </audio>
        <a href="${song.url}" download>Download</a>
      `;
      trendingDiv.appendChild(card);
    });
  });
}

// Simple search filter
searchInput.addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  db.collection('songs').get().then(snapshot => {
    trendingDiv.innerHTML = '';
    snapshot.forEach(doc => {
      const song = doc.data();
      if (song.title.toLowerCase().includes(term) || song.artist.toLowerCase().includes(term)) {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.innerHTML = `
          <img src="${song.cover}" alt="${song.title}">
          <h3>${song.title}</h3>
          <p>${song.artist}</p>
          <audio controls>
            <source src="${song.url}" type="audio/mpeg">
          </audio>
          <a href="${song.url}" download>Download</a>
        `;
        trendingDiv.appendChild(card);
      }
    });
  });
});

loadSongs();
