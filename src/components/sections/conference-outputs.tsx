import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const outputs = [
  'وثيقة التعافي الاقتصادي الوطني.',
  'إطلاق الحاضنة الاقتصادية الوطنية.',
  'حزمة مشاريع جاهزة للتنفيذ (Project Pipeline).',
  'توقيع اتفاقيات ومذكرات تفاهم.',
  'إطلاق أدوات تمويل وصناديق ضمان مخاطر.',
  'تشكيل لجان متابعة وتنفيذ.'
];

export default function ConferenceOutputs() {
  return (
    <section className='w-full bg-[#d9d9d9]/15'>
      <div className='mx-auto w-full px-4 lg:px-16 py-12 sm:py-20'>
        <div className='relative bg-white rounded-[32px] overflow-hidden lg:overflow-visible lg:w-8/12 mr-auto'>
          {/* <div className='relative w-10/12 lg:w-full h-55 sm:h-70 md:h-80 lg:hidden'>
            <Image
              src='/assets/economic-collaboration.jpg'
              alt='مخرجات المؤتمر'
              fill
              priority
              className='object-cover rounded-t-[32px]'
              sizes='(max-width: 1024px) 100vw'
            />
          </div> */}

          <div className='px-6 sm:px-10 md:px-12 lg:px-16 py-10 sm:py-12 lg:ps-20'>
            <div className='hidden lg:block absolute top-1/2 left-full -translate-y-1/2 -translate-x-12 w-145 h-119'>
              <Image
                src='/assets/economic-collaboration.jpg'
                alt='مخرجات المؤتمر'
                fill
                className='object-cover rounded-s-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]'
                sizes='(max-width: 1280px) 55vw, 50vw'
                priority
              />
            </div>

            <h2 className='text-[18px] sm:text-[20px] font-extrabold'>
              مخرجات <span className='text-secondary'>المؤتمر</span>
            </h2>

            <p className='mt-4 text-sm leading-7 text-black/90'>
              يشكل المؤتمر منصة وطنية لإنتاج مخرجات عملية ومؤسسية، تهدف إلى قيادة مرحلة التعافي الاقتصــــــــادي المبكـــر، من خــلال إطلاق مبادرات تنفيذية،
              وبناء أطر شراكة وتمويل، وتشكيــــل آليات متابعة تضمن تحويـــل الرؤى إلى واقـــــع ملموس. وتتجسّد هذه المخرجات في حزمة من النتائج والمبادرات
              الاستراتيجية، أبرزها ما يلي:
            </p>

            <ul className='mt-6 space-y-3'>
              {outputs.map((item) => (
                <li key={item} className='flex items-start gap-3'>
                  <span className='mt-1 grid place-items-center w-5 h-5 rounded-full bg-primary text-white shrink-0'>
                    <Check size={14} />
                  </span>
                  <span className='text-sm leading-7 text-[#555555]'>{item}</span>
                </li>
              ))}
            </ul>

            <div className='mt-8 flex justify-start'>
              <Link
                href='#'
                className='inline-flex items-center justify-center h-11 px-10 rounded-full bg-secondary text-white font-bold text-[14px] shadow-[0_10px_25px_rgba(183,200,74,0.35)] hover:brightness-95 active:brightness-90 transition'
              >
                قدم فكرة مبتكرة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
