'use client';

import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Controller, useFormContext } from 'react-hook-form';
import type { LookupRow } from '.';

import { TrendingUp, GraduationCap, Wrench, Megaphone, Sprout, Handshake, LucideIcon } from 'lucide-react';
import { FormSchemaValues } from './form.schema';

const supportTypeIcon: Record<number, LucideIcon> = {
  31: TrendingUp,
  32: Wrench,
  33: GraduationCap,
  34: Megaphone,
  35: Sprout
};

export default function SupportNeeded({ data }: { data: LookupRow[] }) {
  const { control } = useFormContext<FormSchemaValues>();
  return (
    <Card dir='rtl' className='rounded-[30px] py-10 px-7 shadow-none border-none'>
      <CardHeader className='px-0'>
        <CardTitle className='flex items-center gap-2 '>
          <Handshake className='w-5 h-5 mb-1.5 text-secondary' />
          <h2 className='font-extrabold text-xl'>الاحتياجات والدعم</h2>
        </CardTitle>
      </CardHeader>

      <Controller
        control={control}
        name='supportType'
        render={({ field, fieldState }) => (
          <>
            <RadioGroup value={field.value} onValueChange={field.onChange} className='grid grid-cols-2 md:grid-cols-5 gap-4' dir='rtl'>
              {data.map((item) => {
                const Icon = supportTypeIcon[item.value];
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

      <div className='mt-3'>
        <p className='text-sm font-semibold text-foreground mb-3'>هل حصلت على دعم سابق؟</p>

        <Controller
          control={control}
          name='receivedPreviousSupport'
          render={({ field, fieldState }) => (
            <>
              <RadioGroup value={field.value} onValueChange={field.onChange} className='flex flex-col gap-3' dir='rtl'>
                <label className='flex items-center gap-3 cursor-pointer'>
                  <RadioGroupItem value='1' />
                  <span className='text-sm'>نعم</span>
                </label>

                <label className='flex items-center gap-3 cursor-pointer'>
                  <RadioGroupItem value='0' />
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
