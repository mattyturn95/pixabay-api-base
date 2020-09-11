import React, { useState, useEffect } from 'react';
import '../src/App.css';
import Header from './components/Header';
import Body from './components/Body';
import Gallery from './components/Gallery';
import ImageSearch from './components/ImageSearch';
import Contact from './components/Contact';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=sketch=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsloading(false);
      });

  }, [term]);
  return (
    <div className="App">
      <Header />
      <Body />
      <div className='container mx-auto'>
        <ImageSearch searchText={(text) => setTerm(text)}/>
        {!isLoading && images.length === 0 && <h1 className='text-6xl text-center mx-auto mt-32'>No images found :( </h1>}
        {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading</h1>
          : <div className='grid grid-cols-3 gap-4'>
            {images.map(image => (
              <Gallery key={image.id} image={image} />
            ))}
          </div>}
      </div>
      <Contact />
    </div>




  );
}

export default App;
