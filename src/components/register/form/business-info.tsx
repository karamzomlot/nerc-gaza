'use client';

import { Controller, useFormContext } from 'react-hook-form';
import type { RegistrationFormValues } from '.';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BriefcaseBusiness } from 'lucide-react';

import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';

export default function BusinessInfo() {
  const { control } = useFormContext<RegistrationFormValues>();

  return (
    <Card dir='rtl' className='rounded-[30px] py-10 px-7 shadow-none border-none gap-y-5'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <BriefcaseBusiness className='w-5 h-5 mb-1.5 text-secondary' />
          <h2 className='font-extrabold text-xl'>معلومات النشاط التجاري</h2>
        </CardTitle>
      </CardHeader>

      <FieldGroup>
        <CardContent className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {/* اسم النشاط */}
          <Controller
            control={control}
            name='businessName'
            rules={{ required: 'اسم النشاط مطلوب' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>اسم النشاط *</FieldLabel>
                <Input {...field} id={field.name} placeholder='اسم النشاط بالكامل' aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* قطاع العمل */}
          <Controller
            control={control}
            name='workSector'
            rules={{ required: 'قطاع العمل مطلوب' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>قطاع العمل *</FieldLabel>

                <Select dir='rtl' value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder='اختر القطاع...' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='food'>أغذية ومشروبات</SelectItem>
                    <SelectItem value='retail'>تجارة (بيع/شراء)</SelectItem>
                    <SelectItem value='services'>خدمات</SelectItem>
                    <SelectItem value='handmade'>صناعات/حِرف</SelectItem>
                    <SelectItem value='other'>أخرى</SelectItem>
                  </SelectContent>
                </Select>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* مكان النشاط الحالي */}
          <Controller
            control={control}
            name='currentWorkLocation'
            rules={{ required: 'مكان النشاط الحالي مطلوب' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>مكان النشاط الحالي *</FieldLabel>
                <Input {...field} id={field.name} placeholder='المنطقة أو الشارع' aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* مدة النشاط */}
          <Controller
            control={control}
            name='activityDuration'
            rules={{ required: 'مدة النشاط مطلوبة' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>مدة النشاط *</FieldLabel>
                <Input {...field} id={field.name} placeholder='مثال: 3 شهور' aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* عدد العاملين */}
          <Controller
            control={control}
            name='workersCount'
            rules={{
              required: 'عدد العاملين مطلوب',
              validate: (v) => (v === '' || v < 0 ? 'أدخل رقم صحيح' : true)
            }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>عدد العاملين *</FieldLabel>
                <Input
                  id={field.name}
                  type='number'
                  placeholder='0'
                  value={field.value === '' ? '' : String(field.value)}
                  onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* متوسط الدخل الشهري */}
          <Controller
            control={control}
            name='avgMonthlyIncome'
            rules={{ required: 'متوسط الدخل الشهري مطلوب' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>متوسط الدخل الشهري *</FieldLabel>

                <Select dir='rtl' value={field.value} onValueChange={field.onChange} defaultValue='none'>
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder='اختر...' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='none'>لا يوجد</SelectItem>
                    <SelectItem value='lt_500'>أقل من 500</SelectItem>
                    <SelectItem value='500_1000'>500 - 1000</SelectItem>
                    <SelectItem value='1000_2000'>1000 - 2000</SelectItem>
                    <SelectItem value='gt_2000'>أكثر من 2000</SelectItem>
                  </SelectContent>
                </Select>

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* وصف النشاط (Full width) */}
          <div className='md:col-span-3'>
            <Controller
              control={control}
              name='activityDescription'
              rules={{ required: 'وصف النشاط مطلوب' }}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>وصف النشاط والوضع الحالي *</FieldLabel>
                  <Textarea
                    {...field}
                    id={field.name}
                    placeholder='اشرح لنا طبيعة عملك باختصار...'
                    className='min-h-30'
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </div>
        </CardContent>
      </FieldGroup>
    </Card>
  );
}
