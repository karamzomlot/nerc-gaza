'use client';

import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Controller, useFormContext } from 'react-hook-form';
import { FileSignature } from 'lucide-react';
import { FormSchemaValues } from './form.schema';

export default function Declaration() {
  const { control } = useFormContext<FormSchemaValues>();

  return (
    <Card className='rounded-[30px] py-8 px-7 shadow-none border-none bg-white'>
      <CardHeader className='px-0'>
        <CardTitle className='flex items-center gap-2'>
          <FileSignature className='w-5 h-5 text-secondary' />
          <h2 className='font-extrabold text-xl text-slate-900'>الإقرار</h2>
        </CardTitle>
      </CardHeader>

      <Controller
        control={control}
        name='isDeclarationApproved'
        render={({ field, fieldState }) => {
          const checked = !!field.value;

          return (
            <>
              <label
                htmlFor='declaration-checkbox'
                className={cn(
                  'block rounded-2xl border px-5 pt-5.5 pb-4 cursor-pointer select-none transition',
                  'bg-[#FFF8E6] border-[#E7D9A5]',
                  // checked && 'ring-1 ring-primary/30',
                  fieldState.invalid && 'border-destructive'
                )}
              >
                <div className='flex items-start gap-4'>
                  {/* checkbox */}
                  <Checkbox
                    id='declaration-checkbox'
                    checked={checked}
                    onCheckedChange={(val) => field.onChange(!!val)}
                    className={cn(
                      'mt-0.5 h-5 w-5 rounded-[6px] shrink-0',
                      'border-slate-300 bg-white',
                      'data-[state=checked]:bg-primary data-[state=checked]:border-primary'
                    )}
                  />

                  {/* النص */}
                  <p className='text-[15px] leading-7 text-[#B45309]'>
                    أقر بصحة البيانات أعلاه، وأتحمل المسؤولية القانونية عنها، وأوافق على استخدامها لأغراض دراسة الدعم الاقتصادي.
                  </p>
                </div>
              </label>

              {fieldState.error && <p className='text-sm text-destructive'>{fieldState.error.message}</p>}
            </>
          );
        }}
      />
    </Card>
  );
}
