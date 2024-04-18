const fetchImages = imageName => {
  const params = new URLSearchParams({
    key: '43257853-194068c59ee252fa44b7d008e',
    q: imageName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`, {
    header: {
      'Access-Control-Allow-Origin': 'https://pixabay.com',
    },
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => console.log(error));
};

export { fetchImages };