import React, { useState, useEffect } from 'react';
import './ResponsiveImage.css';

export default function ResponsiveImage({ 
  src, 
  alt, 
  className = '', 
  width = '100%', 
  height = 'auto',
  objectFit = 'cover',
  loading = 'lazy'
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      className={`responsive-image-wrapper ${className}`}
      style={{ width, height }}
    >
      {!isLoaded && !hasError && (
        <div className="image-placeholder">
          <div className="spinner"></div>
        </div>
      )}
      
      {hasError && (
        <div className="image-error">
          <p>Image failed to load</p>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`responsive-image ${isLoaded ? 'loaded' : ''}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={loading}
        style={{
          objectFit,
          width: '100%',
          height: '100%',
          display: isLoaded && !hasError ? 'block' : 'none'
        }}
      />
    </div>
  );
}
