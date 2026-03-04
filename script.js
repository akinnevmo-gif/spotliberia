// Load songs from Firestore
const playlistDiv = document.getElementById('playlist');

db.collection('songs').get().then(snapshot => {
  snapshot.forEach(doc => {
    const song = doc.data();
    const songDiv = document.createElement('div');
    songDiv.className = 'song';
    songDiv.innerHTML = `
      <h3>${song.title}</h3>
      <audio controls>
        <source src="${song.url}" type="audio/mpeg">
      </audio>
      <a href="${song.url}" download>Download</a>
    `;
    playlistDiv.appendChild(songDiv);
  });
});
