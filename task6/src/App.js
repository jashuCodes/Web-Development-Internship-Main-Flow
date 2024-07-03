import React from 'react';
import './App.css';
import ImageGallery from './ImageGallery';



// Import the local images
import image1 from './images/pic1_gallery.jpg';
import image2 from './images/pic2_gallery.jpg';
import image3 from './images/pic3_gallery.jpg';
import image4 from './images/pic4_gallery.jpg';
import image5 from './images/pic5_gallery.jpg';
import image6 from './images/pic6_gallery.jpg';
import image7 from './images/pic7_gallery.jpg';
import image8 from './images/pic8_gallery.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  // Add more image URLs or imports
];

function App() {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
