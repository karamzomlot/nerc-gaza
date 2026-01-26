'use client';

import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Controller, useFormContext } from 'react-hook-form';
import type { RegistrationFormValues } from '.';

import { User, Store, Home, Rocket, ShoppingBag, Layers } from 'lucide-react';

const options = [
  { value: 'mobile_vendor', label: 'بائع متجول', icon: User },
  { value: 'vendor', label: 'كشك / بسطة', icon: ShoppingBag },
  { value: 'shop_owner', label: 'صاحب محل', icon: Store },
  { value: 'home_project', label: 'مشروع منزلي', icon: Home },
  { value: 'startup', label: 'مشروع ناشئ', icon: Rocket }
];

export default function ApplicantType() {
  const { control } = useFormContext<RegistrationFormValues>();

  return (
    <Card className='rounded-[30px] py-10 px-7 shadow-none border-none gap-y-5'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Layers className='w-5 h-5 mb-1.5 text-secondary' />
          <h2 className='font-extrabold text-xl'>تصنيف مقدم الطلب</h2>
        </CardTitle>
      </CardHeader>

      <Controller
        control={control}
        name='applicantType'
        rules={{ required: 'يرجى اختيار تصنيف مقدم الطلب' }}
        render={({ field, fieldState }) => (
          <>
            <RadioGroup dir='rtl' value={field.value} onValueChange={field.onChange} className='grid grid-cols-2 md:grid-cols-5 gap-4'>
              {options.map((item) => {
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
