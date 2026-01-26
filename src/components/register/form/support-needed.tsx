'use client';

import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Controller, useFormContext } from 'react-hook-form';
import type { RegistrationFormValues } from '.';

import { TrendingUp, GraduationCap, Wrench, Megaphone, Sprout, Handshake } from 'lucide-react';

const needs = [
  { value: 'funding', label: 'تمويل', icon: TrendingUp },
  { value: 'tools', label: 'أدوات', icon: Wrench },
  { value: 'training', label: 'تدريب', icon: GraduationCap },
  { value: 'marketing', label: 'تسويق', icon: Megaphone },
  { value: 'incubation', label: 'احتضان', icon: Sprout }
];

export default function SupportNeeded() {
  const { control } = useFormContext<RegistrationFormValues>();

  return (
    <Card dir='rtl' className='rounded-[30px] py-10 px-7 shadow-none border-none'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 '>
          <Handshake className='w-5 h-5 mb-1.5 text-secondary' />
          <h2 className='font-extrabold text-xl'>الاحتياجات والدعم</h2>
        </CardTitle>
      </CardHeader>

      {/* ✅ نوع الاحتياج (Cards Radio) */}
      <Controller
        control={control}
        name='supportNeed'
        rules={{ required: 'يرجى اختيار نوع الاحتياج' }}
        render={({ field, fieldState }) => (
          <>
            <RadioGroup value={field.value} onValueChange={field.onChange} className='grid grid-cols-2 md:grid-cols-5 gap-4'>
              {needs.map((item) => {
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

      <div className='mt-3'>
        <p className='text-sm font-semibold text-foreground mb-3'>هل حصلت على دعم سابق؟</p>

        <Controller
          control={control}
          name='hadPreviousSupport'
          rules={{ required: 'يرجى اختيار نعم أو لا' }}
          render={({ field, fieldState }) => (
            <>
              <RadioGroup
                value={field.value === null ? undefined : field.value ? 'yes' : 'no'}
                onValueChange={(v) => field.onChange(v === 'yes')}
                className='flex flex-col gap-3'
                dir='rtl'
              >
                <label className='flex items-center gap-3 cursor-pointer'>
                  <RadioGroupItem value='yes' />
                  <span className='text-sm'>نعم</span>
                </label>

                <label className='flex items-center gap-3 cursor-pointer'>
                  <RadioGroupItem value='no' />
                  <span className='text-sm'>لا</span>
                </label>
              </RadioGroup>

              {fieldState.error && <p className='mt-3 text-sm text-destructive'>{fieldState.error.message}</p>}
            </>
          )}
        />
      </div>
    </Card>
  );
}
