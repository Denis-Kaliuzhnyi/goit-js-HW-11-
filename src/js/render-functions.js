export { renderGalleryItem };

const renderGalleryItem = image => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');

  const imageElement = document.createElement('img');
  imageElement.classList.add('gallery-image');
  imageElement.src = image.webformatURL;
  imageElement.alt = image.tags;

  galleryItem.appendChild(imageElement);
  return galleryItem;
};
