import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderGalleryItem } from './js/render-functions.js';


const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const searchQuery = input.value.trim();
  if (searchQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }

  loader.classList.add('loading');
  gallery.innerHTML = '';

  try {
    const images = await fetchImages(searchQuery);
    if (images.length === 0) {
      iziToast.warning({
        title: 'Warning',
        message: '"Sorry, there are no images matching your search query. Please try again!"',
        position: 'topRight',
      });
    } else {
      const galleryItems = images.map(renderGalleryItem);
      gallery.append(...galleryItems);

      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later',
      position: 'topRight',
    });
  } finally {
    loader.classList.remove('loading');
  }
});
