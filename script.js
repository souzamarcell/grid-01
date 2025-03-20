document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("boxContainer");
  const images = [
      "imagens/imagem01.jpg",
      "imagens/imagem02.jpg",
      "imagens/imagem03.jpg",
      "imagens/imagem04.jpg",
      "imagens/imagem05.jpg"
  ];

  images.forEach(imageSrc => {
      const imgBox = document.createElement("div");
      imgBox.classList.add("image-box");

      const img = document.createElement("img");
      img.src = imageSrc;
      img.alt = "Imagem";

      imgBox.appendChild(img);
      container.appendChild(imgBox);
  });
});
