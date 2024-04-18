const initalRender = () => {
  const form = document.createElement('form');
  form.classList.add('search-form');
  const input = document.createElement('input');
  input.type = 'text';
  input.classList.add('search-input');
  input.placeholder = 'Search images...';
  const button = document.createElement('button');
  button.type = 'submit';
  button.classList.add('search-button');
  button.textContent = 'Search';
  const list = document.createElement('ul');
  list.classList.add('gallery-list');
  form.append(input, button);
  document.body.append(form, list);
};

const renderGalleryItem = image => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('gallery-link');
  link.href = image.largeImageURL;

  const imageElement = document.createElement('img');
  imageElement.classList.add('gallery-image');
  imageElement.src = image.webformatURL;
  imageElement.alt = image.tags;

  const description = document.createElement('div');
  description.classList.add('image-description');
  description.innerHTML = `
    <p>Likes ${image.likes}</p>
    <p>Views ${image.views}</p>
    <p>Comments ${image.comments}</p>
    <p>Downloads ${image.downloads}</p>
  `;

  link.appendChild(imageElement);
  galleryItem.append(link, description);

  return galleryItem;
};

const renderGallery = imagesGallery => {
  const galleryList = document.querySelector('.gallery-list');
  galleryList.innerHTML = '';

  const galleryItems = imagesGallery.map(renderGalleryItem);
  galleryItems.forEach(item => {
    galleryList.appendChild(item);
  });
};

export { renderGalleryItem };
