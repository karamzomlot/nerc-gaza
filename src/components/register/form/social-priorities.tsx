'use client';

import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Controller, useFormContext } from 'react-hook-form';
import type { LookupRow, RegistrationFormValues } from '.';

import { GraduationCap, Handshake, HandCoins, UserRound, Accessibility, LucideIcon } from 'lucide-react';

const prioritiesIcon: Record<number, LucideIcon> = {
  36: HandCoins,
  37: UserRound,
  38: Accessibility,
  39: GraduationCap
};
export default function SocialPriorities({ data }: { data: LookupRow[] }) {
  const { control } = useFormContext<RegistrationFormValues>();
  return (
    <Card dir='rtl' className='rounded-[30px] py-10 px-7 shadow-none border-none'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 '>
          <Handshake className='w-5 h-5 mb-1.5 text-secondary' />
          <h2 className='font-extrabold text-xl'>الأولويات الاجتماعية</h2>
        </CardTitle>
      </CardHeader>

      <Controller
        control={control}
        name='socialPriorities'
        rules={{ required: 'يرجى اختيار الأولوية الإجتماعية' }}
        render={({ field, fieldState }) => (
          <>
            <RadioGroup value={field.value} onValueChange={field.onChange} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4' dir='rtl'>
              {data.map((item) => {
                const Icon = prioritiesIcon[item.value];
                return (
                  <label key={item.value} className='cursor-pointer'>
                    <RadioGroupItem value={item.value.toString()} className='peer sr-only' />

                    <div
                      className={cn(
                        'flex flex-col items-center justify-center gap-3 rounded-xl border p-4 text-center transition',
                        'border-input bg-[#306C6C05]',
                        'peer-data-[state=checked]:bg-primary',
                        'peer-data-[state=checked]:text-white/90',
                        'peer-data-[state=checked]:border-primary',
                        fieldState.invalid && 'border-destructive'
                      )}
                    >
                      <Icon className='w-6 h-6 opacity-90' />
                      <span className='text-sm font-bold'>{item.description}</span>
                    </div>
                  </label>
                );
              })}
            </RadioGroup>

            {fieldState.error && <p className='mt-3 text-sm text-destructive'>{fieldState.error.message}</p>}
          </>
        )}
      />
    </Card>
  );
}
