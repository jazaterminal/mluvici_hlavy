(() => {
  const sounds = Array.isArray(window.SOUNDS) ? window.SOUNDS : [];
  const grid = document.getElementById('soundGrid');
  const randomButton = document.getElementById('randomButton');
  const stopButton = document.getElementById('stopButton');

  let currentAudio = null;
  let currentTile = null;

  function resetCurrent() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    if (currentTile) currentTile.classList.remove('is-playing');
    currentAudio = null;
    currentTile = null;
  }

  function playSound(sound, tile) {
    resetCurrent();

    const audio = new Audio(sound.file);
    audio.preload = 'auto';
    currentAudio = audio;
    currentTile = tile;
    tile.classList.add('is-playing');

    audio.addEventListener('ended', resetCurrent, { once: true });
    audio.addEventListener('error', () => {
      tile.classList.remove('is-playing');
      console.error(`Nelze přehrát soubor: ${sound.file}`);
      alert(`Zvukový soubor se nepodařilo načíst: ${sound.file}`);
      currentAudio = null;
      currentTile = null;
    }, { once: true });

    audio.play().catch((error) => {
      console.error(error);
      resetCurrent();
    });
  }

  sounds.forEach((sound, index) => {
    const button = document.createElement('button');
    button.className = 'sound-tile';
    button.type = 'button';
    button.setAttribute('aria-label', `Přehrát: ${sound.title}`);

    const number = document.createElement('span');
    number.className = 'sound-number';
    number.textContent = String(index + 1).padStart(2, '0');

    const title = document.createElement('span');
    title.className = 'sound-title';
    title.textContent = sound.title;

    button.append(number, title);
    button.addEventListener('click', () => playSound(sound, button));
    grid.appendChild(button);
  });

  randomButton.addEventListener('click', () => {
    if (!sounds.length) return;
    const index = Math.floor(Math.random() * sounds.length);
    const tile = grid.children[index];
    playSound(sounds[index], tile);
  });

  stopButton.addEventListener('click', resetCurrent);
})();
