import RegistrationForm from '@/components/register/form';
import TopPartners from '@/components/register/partners';
import { getLookups } from '@/lib/api';

export default async function RegisterPage() {
  const data = await getLookups();

  return (
    <main className='bg-[#F7F9F9]'>
      <TopPartners />
      <header className='bg-primary pt-24 pb-30 text-center px-4 text-white md:rounded-b-[140px]'>
        <h1 className='font-extrabold sm:text-2xl mb-4'>نموذج حصر الباعة وصغار التجار والمشاريع والمبادرات</h1>
        <p className='text-sm'>دولة فلسطين | نحو قاعدة بيانات موحدة للتمكين الاقتصادي</p>
      </header>
      <section className='px-4 -translate-y-25'>
        <RegistrationForm lookups={data} />
        <p className='mt-3 px-4 text-center text-[#555555]'>&copy; 2026 وزارة الاقتصاد الوطني – فلسطين | المؤتمر الوطني للتعافي الاقتصادي</p>
      </section>
    </main>
  );
}
