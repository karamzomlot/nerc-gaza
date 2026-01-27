'use client';

import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Controller, useFormContext } from 'react-hook-form';
import type { RegistrationFormValues } from '.';

import { GraduationCap, Handshake, HandCoins, UserRound, Accessibility } from 'lucide-react';

const priorities = [
  { value: 'income_loss', label: 'فقدان مصدر الدخل', icon: HandCoins },
  { value: 'female_headed', label: 'إعالة المرأة', icon: UserRound },
  { value: 'special_needs', label: 'ذوي الاحتياجات الخاصة', icon: Accessibility },
  { value: 'new_graduates', label: 'الخريجون الجدد', icon: GraduationCap }
];

export default function SocialPriorities() {
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
              {priorities.map((item) => {
                const Icon = item.icon;
                return (
                  <label key={item.value} className='cursor-pointer'>
                    <RadioGroupItem value={item.value} className='peer sr-only' />

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
                      <span className='text-sm font-bold'>{item.label}</span>
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
