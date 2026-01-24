import { Separator } from '@radix-ui/react-separator';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

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
          <li>
            <Link href={''} className='cursor-pointer hover:opacity-80'>
              عن المؤتمر
            </Link>
          </li>
          <li>
            <Link href={''} className='cursor-pointer hover:opacity-80'>
              محاور المؤتمر
            </Link>
          </li>
          <li>
            <Link href={''} className='cursor-pointer hover:opacity-80'>
              مخرجات المؤتمر
            </Link>
          </li>
          <li>
            <Link href={''} className='cursor-pointer hover:opacity-80'>
              المتحدثون
            </Link>
          </li>
          <li>
            <Link href={''} className='cursor-pointer hover:opacity-80'>
              الشركاء
            </Link>
          </li>
        </ul>

        {/* Left side (Actions) */}
        <div className='flex items-center gap-3 pl-4'>
          <Button
            className='w-10 h-10 rounded-full border border-white/40 flex items-center justify-center bg-white/10 hover:bg-white/10 transition'
            aria-label='بحث'
          >
            <Search />
          </Button>
          {/* Register Button */}
          <Button
            className='h-10 px-6 rounded-full bg-secondary/90 text-secondary-foreground text-sm font-semibold hover:opacity-90 transition
              '
          >
            سجل كمشارك
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
