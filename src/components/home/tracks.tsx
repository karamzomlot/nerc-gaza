import Image from 'next/image';

type Track = {
  title: string;
  desc: string;
  iconSrc: string;
  iconAlt: string;
};

const tracks: Track[] = [
  {
    title: 'السياسات الاقتصادية في مرحلة التعافي',
    desc: 'استعراض السياسات الاقتصادية الوطنية خلال مرحلة إعادة النشاط الاقتصادي وتحفيز الاستثمار.',
    iconSrc: '/assets/track-1.svg',
    iconAlt: 'السياسات'
  },
  {
    title: 'الحاضنات الاقتصادية ودورها في إعادة البناء',
    desc: 'دعم المساحات الاقتصادية الجديدة لتمكين الأعمال والمشاريع الصغيرة من الانطلاق والنمو.',
    iconSrc: '/assets/track-2.svg',
    iconAlt: 'الحاضنات'
  },

  {
    title: 'تمكين المشاريع الصغيرة والمتوسطة',
    desc: 'تقديم الدعم والتمويل اللازم لضمان استمرارية المشاريع وتحقيق الأثر الاقتصادي.',
    iconSrc: '/assets/track-3.svg',
    iconAlt: 'تمكين المشاريع'
  },
  {
    title: 'التمويل والإقراض وضمان المخاطر',
    desc: 'توفير أدوات التمويل والإقراض وضمان المخاطر لتعزيز ثقة المستثمرين والمشاريع المحلية.',
    iconSrc: '/assets/track-4.svg',
    iconAlt: 'التمويل'
  },
  {
    title: 'التحول الرقمي والاقتصاد المعرفي',
    desc: 'تسريع التحول الرقمي واعتماد الحلول الحديثة لدعم الاقتصاد وتحديث القطاعات الإنتاجية.',
    iconSrc: '/assets/track-5.svg',
    iconAlt: 'التحول الرقمي'
  },
  {
    title: 'الشراكات الدولية وتجارب التعافي العالمية',
    desc: 'الاستفادة من الخبرات الدولية وتجارب التعافي لتطبيق أفضل الممارسات في التعافي الاقتصادي.',
    iconSrc: '/assets/track-6.svg',
    iconAlt: 'الشراكات'
  }
];

export default function Tracks() {
  return (
    <section className='w-full bg-white' id='tracks'>
      <div className='mx-auto w-full px-4 lg:px-16 py-12 sm:py-20' dir='rtl'>
        {/* Header */}
        <div className='text-center'>
          <h2 className='text-[22px] sm:text-[26px] font-extrabold text-[#0F2F2D]'>
            محاور <span className='text-secondary'>المؤتمر</span>
          </h2>
          <p className='mt-2 text-[13px] sm:text-[14px] text-slate-500'>محاور وطنية تقود التعافي وتؤسس للتنمية المستدامة</p>
        </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {tracks.map((t) => (
            <article
              key={t.title}
              className='rounded-2xl bg-white shadow-[0_18px_40px_rgba(15,59,59,0.08)] border border-slate-100 px-7.5 py-7 text-center mhover:shadow-[0_22px_55px_rgba(15,59,59,0.12)] transition'
            >
              <div className='mx-auto mb-5.5 grid place-items-center'>
                <div className='relative w-18 h-18 rounded-full border border-[#B7C84A]/60 bg-white'>
                  <Image src={t.iconSrc} alt={t.iconAlt} fill className='object-contain p-3' />
                </div>
              </div>

              <h3 className='text-[15px] sm:text-base mb-3 font-extrabold text-[#0F2F2D]'>{t.title}</h3>
              <p className='mt-2 text-sm leading-7 text-slate-500'>{t.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
