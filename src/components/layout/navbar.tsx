import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  return (
    <nav className='absolute top-0 inset-x-0 z-50 bg-black/12 backdrop-blur-md border-b border-amber-50/20 py-2 sm:px-4'>
      <div className='rounded-full flex items-center justify-between'>
        {/* Right side (Logos) */}
        <div className='flex items-center gap-4 ps-4'>
          <Image
            src='/assets/nerc-logo.svg'
            alt='NERC Logo'
            width={65}
            height={67}
            sizes='(max-width: 640px) 40px, (max-width: 1024px) 55px, 65px'
            className='w-10 sm:w-12 md:w-16.5 h-auto'
          />

          <Separator orientation='vertical' className='w-px bg-[#D9D9D9]/40 h-11' />

          <Image
            src='/assets/mone-logo.svg'
            alt='MONE LOGO'
            width={81}
            height={65}
            sizes='(max-width: 640px) 48px, (max-width: 1024px) 65px, 81px'
            className='w-12 sm:w-16 md:w-20.25 h-auto'
          />
        </div>

        {/* Center (Links) */}
        <ul className='hidden lg:flex items-center gap-8 text-white text-sm font-medium'>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className='cursor-pointer hover:opacity-80'>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3 pl-4'>
          <Link
            href='/register'
            className='inline-flex items-center justify-center h-11 px-5 rounded-full bg-secondary text-white font-bold text-[14px] hover:brightness-95 active:brightness-90 transition'
          >
            سجّل كمشارك
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
