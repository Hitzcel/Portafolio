import './style.less';
import projects from './data/projects.json';
import ArtesanCafe from './assets/ArtesanCafe.png';
import NoveliaEditorial from './assets/NoveliaEditorial.png';

const imagesMap = {
    "ArtesanCafe.png": ArtesanCafe,
    "NoveliaEditorial.png": NoveliaEditorial
};

const container = document.getElementById("proyectos");

projects.forEach(p => {
    container.innerHTML += `
  <a class="project" href="#">
    <div class="project__image">
      <img src="${imagesMap[p.image]}" alt="${p.title}">
    </div>
    <div class="project__title">${p.title}</div>
  </a>
  `;
});

