import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type Partner = {
  id: string;
  src: string;
  alt: string;
};

const partners: Partner[] = [
  { id: 'p1', src: '/assets/partner-1.png', alt: 'Partner 1' },
  { id: 'p2', src: '/assets/partner-2.png', alt: 'Partner 2' },
  { id: 'p3', src: '/assets/partner-3.png', alt: 'Partner 3' },
  { id: 'p4', src: '/assets/partner-4.png', alt: 'Partner 4' },
  { id: 'p5', src: '/assets/partner-5.jpg', alt: 'Partner 5' },
  { id: 'p1', src: '/assets/partner-1.png', alt: 'Partner 6' },
  { id: 'p2', src: '/assets/partner-2.png', alt: 'Partner 7' },
  { id: 'p3', src: '/assets/partner-3.png', alt: 'Partner 8' },
  { id: 'p4', src: '/assets/partner-4.png', alt: 'Partner 9' },
  { id: 'p5', src: '/assets/partner-5.jpg', alt: 'Partner 10' }
];

export default function Partners() {
  return (
    <section className='w-full bg-white py-10 sm:py-14' id='partners'>
      <div className='mx-auto w-full px-4 lg:px-16'>
        {/* Title */}
        <div className='text-center'>
          <h2 className='text-xl sm:text-2xl font-extrabold'>
            شركاء <span className='text-secondary'>البناء الإقتصادي</span>
          </h2>
          <p className='mt-1 text-base text-black/55'>تعاون وطني يقود مرحلة التعافي</p>
        </div>

        {/* Carousel */}
        <div className='mt-8 relative'>
          <Carousel
            opts={{
              align: 'start',
              loop: true
            }}
            className='w-full'
            dir='ltr'
          >
            <CarouselContent className='-ml-4'>
              {partners.map((item, idx) => (
                <CarouselItem key={item.id + idx} className='pl-4 basis-full sm:basis-1/2 lg:basis-1/5'>
                  {/* Card */}
                  <div className='h-28 w-full rounded-sm border border-black/10 bg-white shadow-sm flex items-center justify-center px-4'>
                    <div className='relative h-11/12 w-11/12'>
                      <Image src={item.src} alt={item.alt} fill className='object-contain' sizes='(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 20vw' />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className='absolute -left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white shadow-md hover:bg-white/90 text-secondary border-none'
              aria-label='السابق'
            >
              <ChevronLeft className='h-5 w-5 text-secondary' />
            </CarouselPrevious>

            <CarouselNext
              className='absolute -right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white shadow-md hover:bg-white/90 text-secondary border-none'
              aria-label='التالي'
            >
              <ChevronRight className='h-5 w-5 text-secondary' />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
