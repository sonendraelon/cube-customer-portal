import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getRandomPhotos } from '../../services/unsplashService';
import { Photo } from '../../types/types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchPhotos = async () => {
    try {
      const newPhotos = await getRandomPhotos(9);
      setPhotos(newPhotos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid>
      {photos.map((photo) => (
        <Image key={photo.id} src={photo.url} alt="Random" />
      ))}
    </Grid>
  );
};

export default PhotoGrid;