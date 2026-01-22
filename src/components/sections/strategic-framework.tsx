import Image from 'next/image';

type Card = {
  title: string;
  desc: string;
  iconSrc: string;
  iconAlt: string;
};

const cards: Card[] = [
  {
    title: 'الرؤية',
    desc: 'اقتصاد وطني متعافٍ، مرن، وقادر على النمو المستدام.',
    iconSrc: '/assets/vision-icon.svg',
    iconAlt: 'أيقونة الرؤية'
  },
  {
    title: 'الرسالة',
    desc: 'توفير منصة وطنية جامعة لإطلاق برامج ومشاريع التعافي الاقتصادي، وتحفيز الاستثمار، ودعم ريادة الأعمال عبر أدوات تنفيذية عملية وحاضنات اقتصادية فاعلة.',
    iconSrc: '/assets/message.svg',
    iconAlt: 'أيقونة الرسالة'
  },
  {
    title: 'الأهداف الاستراتيجية',
    desc: 'إقرار إطار وطني موحد للتعافي الاقتصادي، إطلاق الحاضنة الاقتصادية الوطنية كمظلة تنفيذية، دعم وتمكين المشاريع الصغيرة والمتوسطة.',
    iconSrc: '/assets/golas-icon.svg',
    iconAlt: 'أيقونة الأهداف الاستراتيجية'
  }
];

export default function StrategicFrameworkSection() {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* Background image */}
      <div className='absolute inset-0 -z-10'>
        <Image src='/assets/sec-bg.jpg' alt='خلفية السيكشن' fill priority className='object-cover' />
        <div className='absolute inset-0 bg-primary/70' />
      </div>

      <div className='mx-auto w-full px-4 lg:px-16 py-12 sm:py-20'>
        {/* Header */}
        <div className='text-center' dir='rtl'>
          <h2 className='text-[22px] sm:text-[26px] font-extrabold text-white'>
            الإطار <span className='text-secondary'>الاستراتيجي</span> للمؤتمر
          </h2>
          <p className='mt-2 text-[13px] sm:text-[14px] text-white/80'>الرؤية - الرسالة - الأهداف الاستراتيجية</p>
        </div>

        {/* Cards container */}
        <div className='mt-8 sm:mt-10'>
          <div className='rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
              {cards.map((c, idx) => (
                <div
                  key={c.title}
                  className={['px-6 py-8 sm:py-10', idx !== cards.length - 1 ? 'border-b md:border-b-none md:border-l border-white/10' : ''].join(' ')}
                >
                  {/* Icon */}
                  <div className='mx-auto mb-4 flex justify-start'>
                    <div className='relative w-12 h-12 sm:w-14 sm:h-14'>
                      <Image src={c.iconSrc} alt={c.iconAlt} fill className='object-contain' />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className='text-white font-bold text-lg sm:text-xl'>{c.title}</h3>

                  {/* Description */}
                  <p className='mt-3 text-sm sm:text-base leading-7 text-white/80'>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
