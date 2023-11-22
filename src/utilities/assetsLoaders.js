
export const loadBackgrounds = (setLayoutsLoaded, backgroundImagesUrls, layouts, currentLayout) => {
  const loadImage = (imageUrl) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = resolve;
    });
  };

  Promise.all(backgroundImagesUrls.map(imageUrl => loadImage(imageUrl)))
    .then(() => {
      addLoadedLayout(layouts, setLayoutsLoaded, currentLayout);
    })
    .catch(() => {
      addLoadedLayout(layouts, setLayoutsLoaded, currentLayout); // depending on your case, you might still want to render the app
    });
}

const addLoadedLayout = (layouts, setLayoutsLoaded, currentLayout) => {
  for (const [key, value] of Object.entries(layouts)) {
    if (key === currentLayout) {
      layouts[key] = true
    }
  }
  setLayoutsLoaded(layouts);
}

export const getBackgroundOnSizeChange = (arr, windowSize) => {
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

export const getDimension = (size) => {
  if (size.width >= 1024) {
    return 'full';
  } else if (size.width >= 650) {
    return 'medium';
  } else {
    return 'mobile';
  }
};

export const checkWindowSizeChange = (windowSize,currentLayout,prevWindowSize) => {
  const crossed650 = (windowSize.width >= 650 && prevWindowSize.current < 650) || (windowSize.width < 650 && prevWindowSize.current >= 650) || (windowSize.width < 650 && prevWindowSize.current === windowSize.width);
  const crossed1024 = (windowSize.width >= 1024 && prevWindowSize.current < 1024) || (windowSize.width < 1024 && prevWindowSize.current >= 1024) || (windowSize.width < 650 && prevWindowSize.current === windowSize.width);
  if (crossed650) {
    currentLayout.current = "medium"
  }
  else if (crossed1024) {
    currentLayout.current = "full"
  }
  else {
    currentLayout.current = "mobile";
  }
  return crossed650 || crossed1024;
};