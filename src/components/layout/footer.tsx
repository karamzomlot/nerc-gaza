// app/components/SiteFooter.tsx
// Next.js + Tailwind footer matching your design (RTL, bg image, nav links, center logos, divider + copyright)

import { NAV_LINKS } from '@/constants';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer dir='rtl' className='relative w-full overflow-hidden'>
      <Image src='/assets/sec-bg.jpg' alt='فعاليات المؤتمر' fill priority className='object-cover' sizes='100vw' />
      {/* Overlay */}
      <div className='absolute inset-0 bg-primary/70' />

      <div className='relative mx-auto w-full px-4 lg:px-16 py-8 sm:py-10'>
        {/* Top nav */}
        <nav className='flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-white/85 text-sm font-semibold'>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className='hover:text-white transition w-full text-center sm:w-fit sm:text-start'>
              {l.label}
            </a>
          ))}
        </nav>

        <div className='flex items-center justify-center gap-6 ps-4 mt-12'>
          <Image src='/assets/nerc-logo.svg' alt='NERC Logo' width={67} height={80} className='' />
          <Separator orientation='vertical' className='w-px bg-[#D9D9D9]/40 h-11' />
          <Image src='/assets/mone-logo.svg' alt='MONE LOGO' className='' width={98} height={88} />
        </div>

        {/* Bottom line + copyright */}
        <div className='mt-8 flex items-center gap-4'>
          <span className='hidden sm:block h-px flex-1 bg-white/25' />
          <p className='text-center text-white/80 text-xs sm:text-sm whitespace-wrap mx-auto'>جميع الحقوق محفوظة © 2026 لدى وزارة الإقتصاد الفلسطيني</p>
          <span className='hidden sm:block h-px flex-1 bg-white/25' />
        </div>
      </div>
    </footer>
  );
}
