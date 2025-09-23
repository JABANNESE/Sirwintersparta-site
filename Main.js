//async function loadAssets() {
  try {
    const response = await fetch('/assets.json'); // your JSON file in project root
    const assets = await response.json();

    // ✅ Logo
    const logo = document.querySelector('.logo');
    if (logo && assets.logo) {
      logo.src = assets.logo;
    }

    // ✅ Hero background
    const hero = document.querySelector('.hero');
    if (hero && assets["hero-bg"]) {
      hero.style.backgroundImage = `url('${assets["hero-bg"]}')`;
    }

    // ✅ Gallery images
    const gallery = document.querySelector('.gallery');
    if (gallery && assets["gallery-images"]) {
      gallery.innerHTML = "";
      assets["gallery-images"].forEach(imgUrl => {
        const img = document.createElement("img");
        img.src = imgUrl;
        gallery.appendChild(img);
      });
    }

  } catch (err) {
    console.error("Failed to load assets:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadAssets);
