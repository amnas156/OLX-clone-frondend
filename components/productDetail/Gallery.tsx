'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { BASE_URL } from '@/lib/config';

type GalleryProps = {
  images: { id: number; image: string }[];
};

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel >
        <CarouselContent className=''>
          {images.map((img, index) => (
            <CarouselItem key={img.id || index} className="flex justify-center">
              <Image
                src={`${BASE_URL}${img.image}`}
                alt={`Product image ${index + 1}`}
                width={300}
                height={100}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Gallery;
