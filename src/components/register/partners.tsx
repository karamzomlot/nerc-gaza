import { cn } from '@/lib/utils';
import Image from 'next/image';

type LogoItem = {
  src: string;
  alt: string;
  cover?: boolean;
};

const logos: LogoItem[] = [
  { src: '/assets/partner-1.png', alt: 'Logo 1' },
  { src: '/assets/partner-2.png', alt: 'Logo 2' },
  { src: '/assets/partner-3.png', alt: 'Logo 3' },
  { src: '/assets/partner-4.png', alt: 'Logo 4' },
  { src: '/assets/partner-5.jpg', alt: 'Logo 5' }
];

export default function TopPartners() {
  return (
    <section dir='rtl' className='w-full bg-white flex justify-center items-center'>
      <div className='mx-auto max-w-6xl px-4'>
        <div
          className='
            grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-x-10 gap-y-4 py-5
          '
        >
          {logos.map((item, idx) => (
            <div key={idx} className={'relative w-[96px] md:w-[120px] h-[36px] md:h-[50px] aspect-3/2'}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={cn('object-contain', logos.length % 2 === 0 && idx === logos.length && 'justify-self-start')}
                sizes='(max-width: 768px) 100px, 140px'
                priority={idx < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
