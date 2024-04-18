export { fetchImages };

const fetchImages = async searchQuery => {
  const myApiKey = 'YOUR_PIXABAY_API_KEY';
  const url = `https://pixabay.com/api/?key=${myApiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
