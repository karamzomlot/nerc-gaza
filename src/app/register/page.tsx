import RegistrationForm from '@/components/register/form';

export default function RegisterPage() {
  return (
    <main className='bg-[#F7F9F9]'>
      <header className='bg-primary pt-24 pb-30 text-center px-4 text-white rounded-b-[90px] md:rounded-b-[140px]'>
        <h1 className='font-extrabold text-xl sm:text-2xl mb-4'>نموذج حصر الباعة وصغار التجار والمشاريع والمبادرات</h1>
        <p className=''>دولة فلسطين | نحو قاعدة بيانات موحدة للتمكين الاقتصادي</p>
      </header>
      <section className='px-4'>
        <RegistrationForm />
      </section>
    </main>
  );
}
