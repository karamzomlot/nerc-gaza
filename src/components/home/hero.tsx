import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <header className='relative h-screen overflow-hidden flex items-center justify-center flex-col px-4 text-center text-white'>
      {/* Background Image */}
      <Image src='/assets/header-bg.jpg' alt='خلفية المؤتمر الوطني للتعافي الاقتصادي' fill priority sizes='100vw' className='object-cover' quality={75} />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/60' />

      {/* Content */}
      <div className='relative z-10'>
        <span className='px-7 py-3 rounded-[50px] inline-flex items-center justify-center text-white text-[16px] font-medium bg-white/10 backdrop-blur-lg mb-10'>
          يبدأ التسجيل 02 يناير 2026
        </span>

        <h1 className='font-extrabold text-4xl text-white mb-5'>المؤتمر الوطني للتعافي الاقتصادي</h1>

        <p className='text-white w-full max-w-3xl text-xl mx-auto mb-8'>
          منصة وطنية رسمية رفيعة المستوى، تهدف إلى قيادة مرحلة التعافي الاقتصادي المبكر والانتقال المنهجي نحو التنمية الاقتصادية المستدامة.
        </p>

        <div className='flex justify-center items-center gap-2 flex-wrap'>
          <Link href='/register' passHref>
            <Button className='w-full sm:w-fit rounded-full px-11 py-6'>سجّل مشروعك</Button>
          </Link>

          <Link href='/register' passHref>
            <Button className='w-full sm:w-fit rounded-full px-11 py-6 border border-white bg-white/10 backdrop-blur-lg hover:bg-white/10'>
              قدّم فكرة مبتكرة
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
