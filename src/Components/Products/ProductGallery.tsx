import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

interface GalleryImage {
  original: string;
  thumbnail: string;
}

interface ProductGalleryProps {
  images?: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images = [] }) => {
  const defaultImages: string[] = [
    "/images/default1.png",
    "/images/default2.png",
    "/images/default3.png"
  ];

  const galleryImages: GalleryImage[] = (images.length > 0 ? images : defaultImages).map(img => ({
    original: img,
    thumbnail: img
  }));

  return (
    <div className="product-gallery-card">
      <ImageGallery
        items={galleryImages}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
        thumbnailPosition="bottom"
        slideInterval={3000}
        slideDuration={500}
      />
    </div>
  );
};

export default ProductGallery; 