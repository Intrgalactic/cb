
export const loadBackgrounds = (setBackgroundLoaded,backgroundImagesUrls) => {
    const loadImage = (imageUrl) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = resolve;
        });
    };

    Promise.all(backgroundImagesUrls.map(imageUrl => loadImage(imageUrl)))
        .then(() => setBackgroundLoaded(true))
        .catch(() => {
            setBackgroundLoaded(true); // depending on your case, you might still want to render the app
        });
}


export const getBackgroundOnSizeChange = (arr,windowSize) => {
    if (windowSize.width < 650) {
        return arr[0];
      }
      else if (window.width > 650 && window.width < 1024) {
        return arr[1];
      }
      else {
        return arr[2];
      }
} 