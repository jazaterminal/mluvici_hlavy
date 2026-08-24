/*
  SEZNAM AUDIO SOUBORŮ.
  Text na dlaždici se vytváří automaticky z názvu souboru bez přípony .mp3.
  Soubory musí být uložené přímo v kořeni repozitáře vedle index.html, přesně pod uvedeným názvem.
*/
window.SOUNDS = [
  "Valime.mp3",
  "baha.mp3",
  "caukrasavce.mp3",
  "Nebojsespolutozvládneme.mp3",
  "dobydendobyden.mp3",
  "No stalo sa v regionech.mp3",
  "ukazpicu.mp3",
  "dyť to bylo zadarmo.mp3",
  "prosimtetobudezadarmo.mp3",
  "takstrejdo.mp3",
  "ToNejdeZvonku.mp3",
  "tonejdezvonkuě.mp3",
  "nahoda.mp3",
  "taktyvole.mp3",
  "naschle.mp3",
  "nesmieš1.mp3",
  "kambysjezdil.mp3",
  "cojefurt.mp3",
  "Jé no my se máme.mp3",
  "alenotakstrejdo.mp3",
  "didoprdelebaumane.mp3",
  "huhuaaa.mp3",
  "vitajte.mp3",
  "ahojahoj.mp3",
  "nemamčas.mp3",
  "pikouamiladou.mp3",
  "achohojjea.mp3"
].map((filename) => ({
  title: filename.replace(/\.mp3$/i, ""),
  file: filename
}));
