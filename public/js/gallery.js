function createGallery(galleryId, images) {
    const gallery = document.getElementById(galleryId);
  
    if (gallery === null || !(gallery instanceof HTMLDivElement)) {
      throw new Error("Invalid gallery HTML element");
    }
    const image = gallery.querySelector(".img");
    const btns = gallery.querySelectorAll(".btn");
    
    if (image === null || btns.length === 0) {
      throw new Error("Invalid buttons or image classes");
    }
    let counter = 0;
  
    function changeImage() {
      image.src = "images/" + images[Math.abs(counter % images.length)];
    }
  
    function handleClick(evt) {
      if (evt.target.classList.contains("next")) {
        counter++;
      } else {
        counter--;
      }
      changeImage();
    }
  
    btns.forEach((btn) => (btn.onclick = handleClick));
  }
  
  createGallery("gallery-1", ["robe_noire.jpg", "robe_rouge.jpg", "robe_blanche.jpg", "robe_bleue.jpg"]);

  createGallery("gallery-2", ["catwoman_harley1.JPG", "catwoman_harley2.JPG", "catwoman_harley3.JPG", "catwoman_harley4.JPG"]);

  createGallery("gallery-3", ["claire_jill.jpg", "claire_jill2.jpg"]);

  createGallery("gallery-4", ["tifa_aerith1.jpg", "tifa_aerith2.jpg"]);

  createGallery("gallery-5", ["birds1.jpg", "birds2.jpg", "birds3.jpg", "birds4.jpg"]);

  createGallery("gallery-6", ["horse_pattern.jpg", "horse_finished.jpg"]);

  createGallery("gallery-7", ["raichu1.jpg", "raichu2.jpg", "raichu3.jpg", "raichu4.jpg"]);
