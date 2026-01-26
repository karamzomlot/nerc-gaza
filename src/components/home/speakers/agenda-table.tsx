import type { Row } from './index';

export default function AgendaTable({ rows }: { rows: Row[] }) {
  return (
    <div className='mt-6'>
      <div className='divide-y divide-white/10'>
        {rows.map((r, idx) => (
          <div key={idx} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 py-6 items-center'>
            {/* Time */}
            <div className='lg:col-span-3'>
              <p className='text-white font-semibold text-sm'>{r.time.range}</p>
              <p className='text-white/60 text-xs mt-1'>{r.time.meridiem}</p>
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
  );
}
