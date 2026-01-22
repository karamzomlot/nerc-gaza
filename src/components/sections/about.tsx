import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <section className='w-full bg-white'>
      <div className='mx-auto px-4 lg:px-16 py-12 sm:py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>
          {/* Content – Right */}
          <div className='lg:col-span-6' dir='rtl'>
            <div className='max-w-2xl lg:ms-auto text-right'>
              <h3 className='text-[20px] sm:text-[22px] font-extrabold text-[#1E6C68]'>خلفية المؤتمر وأهميته</h3>

              <h4 className='mt-2 text-[18px] sm:text-[19px] font-bold text-[#0F2F2D]'>من التعافي الاقتصادي المبكر إلى التنمية المستدامة...</h4>

              <p className='mt-4 text-[14px] sm:text-[15px] leading-7 text-slate-600'>
                يأتي المؤتمر الوطني للتعافي الاقتصادي كمنصة وطنية رسمية رفيعة المستوى، تهدف إلى قيادة مرحلة التعـافي الاقتصادي المبكر والانتقال المنهجي نحو
                التنمية الاقتصادية المستدامة، من خلال إطلاق حزمـــــة مشاريـــع تنفيذية، وتدشين الحاضنة الاقتصادية الوطنية، وبناء شراكات فاعلـــــة على
                المستويين المحلي والدولي، وفـــق نماذج المؤتمرات الاقتصادية الدولية المعتمدة.
              </p>

              <p className='mt-4 text-[14px] sm:text-[15px] leading-7 text-slate-600'>
                في ظل التحديات الاقتصادية الاستثنائية التي يمر بها الاقتصـــاد الوطني، تبرز الحاجــــة إلى إطار مؤسسي منظـــم يقود جهود التعافي، ويوحد التدخلات
                والمبادرات ضمن رؤية وطنية واضحة، تركز على:
              </p>

              {/* Checklist */}
              <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4'>
                {[
                  'إعادة تنشيط القطاعات الاقتصادية.',
                  'دعم المشاريع الصغيرة والمتوسطة.',
                  'خلق فرص عمل مستدامة.',
                  'تعزيز الصمود والاستقرار الاقتصادي والاجتماعي.'
                ].map((item, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <span className='mt-1 grid place-items-center size-6 rounded-full bg-[#0F2F2D] text-white'>
                      <Check size={14} />
                    </span>
                    <p className='text-[14px] sm:text-[15px] text-slate-700'>{item}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className='mt-8 flex'>
                <Link
                  href='#register'
                  className='inline-flex items-center justify-center h-11 px-10 rounded-full bg-secondary/90 text-white font-bold text-[14px] shadow-[0_10px_25px_rgba(183,200,74,0.35)] hover:brightness-95 active:brightness-90 transition'
                >
                  سجّل الآن
                </Link>
              </div>
            </div>
          </div>

          {/* Image – Left */}
          <div className='lg:col-span-6'>
            <div className='relative overflow-hidden rounded-4xl shadow-[0_18px_45px_rgba(0,0,0,0.12)]'>
              <Image
                src='/assets/about-img.jpg'
                alt='خلفية المؤتمر'
                width={900}
                height={800}
                className='w-full object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
