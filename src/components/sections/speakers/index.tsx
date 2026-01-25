import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import AgendaTable from './agenda-table';
import { cn } from '@/lib/utils';

export type Day = {
  id: string;
  label: string;
};

export type Row = {
  time: { range: string; meridiem: 'AM' | 'PM' };
  title: string;
  speaker: { name: string; role: string };
  location: { city: string; place: string };
};

const days: Day[] = [
  { id: 'day-1', label: 'اليوم الأول 22 يناير 2026' },
  { id: 'day-2', label: 'اليوم الثاني 23 يناير 2026' }
];

const agendaByDay: Record<Day['id'], Row[]> = {
  'day-1': [
    {
      time: { range: '10:00 - 12:00', meridiem: 'AM' },
      title: 'ورشة عمل حول المشاريع الصغيرة',
      speaker: { name: 'هاني سرور', role: 'رئيس الغرفة التجارية' },
      location: { city: 'محافظة غزة', place: 'المجلس التشريعي' }
    },
    {
      time: { range: '12:00 - 02:00', meridiem: 'PM' },
      title: 'جلسة حول الحاضنات الاقتصادية',
      speaker: { name: 'فضل أبو كرش', role: 'مدير المشاريع في وزارة الاقتصاد' },
      location: { city: 'محافظة غزة', place: 'المجلس التشريعي' }
    },
    {
      time: { range: '02:00 - 04:00', meridiem: 'PM' },
      title: 'تمكين المشاريع الصغيرة والمتوسطة',
      speaker: { name: 'وفاء أبو عصر', role: 'مدير شؤون الموظفين في وزارة الاقتصاد' },
      location: { city: 'محافظة غزة', place: 'المجلس التشريعي' }
    }
  ],

  'day-2': [
    {
      time: { range: '09:30 - 10:30', meridiem: 'AM' },
      title: 'جلسة افتتاحية: أولويات التعافي الاقتصادي 2026',
      speaker: { name: 'د. رائد أبو شمالة', role: 'مستشار سياسات اقتصادية' },
      location: { city: 'محافظة غزة', place: 'قاعة المؤتمرات الرئيسية' }
    },
    {
      time: { range: '10:45 - 12:15', meridiem: 'AM' },
      title: 'حلقة نقاش: التمويل والإقراض وضمان المخاطر',
      speaker: { name: 'سمر الدحدوح', role: 'مدير برامج تمويل' },
      location: { city: 'محافظة غزة', place: 'قاعة المؤتمرات الرئيسية' }
    },
    {
      time: { range: '01:00 - 02:00', meridiem: 'PM' },
      title: 'عرض مشاريع جاهزة للتنفيذ (Project Pipeline)',
      speaker: { name: 'م. يزن سلامة', role: 'مدير تطوير أعمال' },
      location: { city: 'محافظة غزة', place: 'قاعة العروض' }
    },
    {
      time: { range: '02:15 - 03:30', meridiem: 'PM' },
      title: 'ورشة: التحول الرقمي والاقتصاد المعرفي',
      speaker: { name: 'هبة الحلو', role: 'مختص التحول الرقمي' },
      location: { city: 'محافظة غزة', place: 'قاعة التدريب' }
    }
  ]
};

export default function Speakers() {
  return (
    <section className='relative w-full overflow-hidden' id='speakers'>
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

        <Tabs defaultValue='day-1' className='mt-8' dir='rtl'>
          {/* Tabs header */}
          <div className='grid grid-cols-1 lg:grid-cols-12 items-center gap-4 border-b border-white/10 pb-4'>
            <div className='lg:col-span-9 lg:col-start-1'>
              <TabsList className='bg-transparent p-0 h-auto flex flex-wrap gap-y-4 gap-x-10 justify-start' dir='rtl'>
                {days.map((d) => (
                  <TabsTrigger
                    key={d.id}
                    value={d.id}
                    className='bg-transparent p-0 h-auto text-sm font-bold transition data-[state=active]:text-secondary data-[state=active]:bg-transparent group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none data-[state=inactive]:text-white '
                  >
                    {d.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {/* Tabs content */}
          {days.map((d) => (
            <TabsContent key={d.id} value={d.id} className='mt-0'>
              <AgendaTable rows={agendaByDay[d.id]} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
