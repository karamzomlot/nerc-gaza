import { Button } from '../ui/button';

const Hero = () => {
  return (
    <header
      className='h-screen bg-cover bg-center flex items-center justify-center flex-col px-4 text-center text-white'
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/assets/header-bg.jpg")'
      }}
    >
      <span className='px-7 py-3 rounded-[50px] flex items-center justify-center  text-white text-[16px] font-medium  bg-white/10 backdrop-blur-lg mb-10'>
        يبدأ التسجيل 02 يناير 2026
      </span>
      <h1 className='font-extrabold text-4xl text-white mb-5'>المؤتمر الوطني للتعافي الاقتصادي</h1>
      <p className='text-white w-full max-w-3xl text-xl text-center mb-8'>
        منصة وطنية رسمية رفيعة المستوى، تهدف إلى قيادة مرحلة التعافي الاقتصادي المبكر والانتقال المنهجي نحو التنمية الاقتصادية المستدامة.
      </p>
      <div className='flex justify-center items-center gap-2 flex-wrap'>
        <Button className='w-full sm:w-fit rounded-full px-11 py-6'>سجّل مشروعك</Button>
        <Button className='w-full sm:w-fit rounded-full px-11 py-6 border border-white bg-white/10 backdrop-blur-lg hover:bg-white/10'>قدّم فكرة مبتكرة</Button>
      </div>
    </header>
  );
};

export default Hero;
