// Liste d'images de brouteurs (ici, ton image en test)
const scamImages = [
  "https://i.pinimg.com/736x/2f/64/ee/2f64ee22a904485ef65b63e441f45cdb.jpg"
];

// Parcours toutes les images de la page
document.querySelectorAll('img').forEach(img => {
  // Vérification stricte de l'URL de l'image
  if (scamImages.includes(img.src)) {
    chrome.runtime.sendMessage({
      action: "scamDetected",
      img: img.src
    });
  }
});
