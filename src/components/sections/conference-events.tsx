import Image from 'next/image';
import { Button } from '../ui/button';

const days = [
  { id: 1, label: 'اليوم الأول 22 يناير 2026', active: true },
  { id: 2, label: 'اليوم الثاني 23 يناير 2026', active: false }
];

const rows = [
  {
    time: ['10:00 - 12:00', 'AM'],
    title: 'ورشة عمل حول المشاريع الصغيرة',
    speaker: { name: 'هاني سرور', role: 'رئيس الغرفة التجارية' },
    location: { city: 'محافظة غزة', place: 'المجلس التشريعي' }
  },
  {
    time: ['12:00 - 02:00', 'PM'],
    title: 'جلسة حول الحاضنات الاقتصادية',
    speaker: { name: 'فضل أبو كرش', role: 'مدير المشاريع في وزارة الاقتصاد' },
    location: { city: 'محافظة غزة', place: 'المجلس التشريعي' }
  },
  {
    time: ['02:00 - 04:00', 'PM'],
    title: 'تمكين المشاريع الصغيرة والمتوسطة',
    speaker: { name: 'وفاء أبو عصر', role: 'مدير شؤون الموظفين في وزارة الاقتصاد' },
    location: { city: 'محافظة غزة', place: 'المجلس التشريعي' }
  }
];

export default function ConferenceEvents() {
  return (
    <section dir='rtl' className='relative w-full overflow-hidden'>
      {/* Background image */}
      <Image src='/assets/sec-bg.jpg' alt='فعاليات المؤتمر' fill priority className='object-cover' sizes='100vw' />
      {/* Overlay */}
      <div className='absolute inset-0 bg-primary/70' />

      <div className='relative mx-auto w-full px-4 lg:px-16 py-12 sm:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          <div className='lg:col-span-4 text-start'>
            <h2 className='text-2xl sm:text-3xl font-extrabold text-white'>
              فعاليات <span className='text-secondary'>المؤتمر</span>
            </h2>
            <p className='mt-2 text-white/80 text-sm leading-7'>تابع آخر الجلسات وورش العمل للمؤتمر</p>
          </div>

          <div className='lg:col-span-8 text-right'>
            <p className='text-white/70 text-sm leading-7 max-w-3xl'>
              يتيح هذا القسم للزوار متابعة جميع فعاليات المؤتمر، بما في ذلك الجلسات
              <br /> وورش العمل ولقاءات رواد الأعمال، مع تفاصيل المواعيد والأماكن، وفرص التسجيل والمشاركة المباشرة.
            </p>
          </div>
        </div>

        {/* Days tabs */}
        <div className='mt-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-4 border-b border-white/10 pb-4'>
            <div className='lg:col-span-9 lg:col-start-1 flex flex-wrap gap-x-40 gap-y-4  justify-start lg:justify-start'>
              {days.map((d) => (
                <Button
                  variant={'link'}
                  key={d.id}
                  className={['text-sm font-bold transition hover:no-underline', d.active ? 'text-secondary' : 'text-white/90 hover:text-white'].join(' ')}
                >
                  {d.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className='mt-6'>
            <div>
              {rows.map((r, idx) => (
                <div key={idx} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 py-6 items-center border-b border-white/10'>
                  {/* Time */}
                  <div className='lg:col-span-3'>
                    <p className='text-white font-semibold text-sm'>{r.time[0]}</p>
                    <p className='text-white/60 text-xs mt-1'>{r.time[1]}</p>
                  </div>

                  {/* Title */}
                  <div className='lg:col-span-4'>
                    <p className='text-white font-semibold text-sm leading-7'>{r.title}</p>
                  </div>

                  {/* Speaker */}
                  <div className='lg:col-span-3'>
                    <p className='text-white font-semibold text-sm'>{r.speaker.name}</p>
                    <p className='text-white/60 text-xs mt-1'>{r.speaker.role}</p>
                  </div>

                  {/* Location */}
                  <div className='lg:col-span-2'>
                    <p className='text-white font-semibold text-sm'>{r.location.city}</p>
                    <p className='text-white/60 text-xs mt-1'>{r.location.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
