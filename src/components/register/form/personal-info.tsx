'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CircleUserRound } from 'lucide-react';

import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { RegistrationFormValues } from '.';

export default function PersonalInfo() {
  const { control } = useFormContext<RegistrationFormValues>();

  return (
    <Card className='rounded-[30px] py-10 md:px-7 shadow-none border-none gap-y-5'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 '>
          <CircleUserRound className='w-5 h-5 mb-1.5 text-secondary' />
          <h2 className='font-extrabold text-xl'>المعلومات الشخصية</h2>
        </CardTitle>
      </CardHeader>

      <FieldGroup>
        <CardContent className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Controller
            control={control}
            name='fullName'
            rules={{ required: 'الاسم مطلوب' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>الاسم الكامل *</FieldLabel>
                <Input {...field} id={field.name} placeholder='الاسم كما بالهوية' aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            control={control}
            name='idNumber'
            rules={{ required: 'رقم الهوية مطلوب' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>رقم الهوية *</FieldLabel>
                <Input {...field} id={field.name} inputMode='numeric' placeholder='رقم الهوية' aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            control={control}
            name='mobile'
            rules={{ required: 'رقم الجوال مطلوب' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>رقم الجوال *</FieldLabel>
                <Input {...field} id={field.name} inputMode='tel' placeholder='رقم الجوال' aria-invalid={fieldState.invalid} />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            control={control}
            name='governorate'
            rules={{ required: 'المحافظة مطلوبة' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>المحافظة *</FieldLabel>
                <Select dir='rtl' value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder='اختر المحافظة' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='gaza'>غزة</SelectItem>
                    <SelectItem value='north'>شمال غزة</SelectItem>
                    <SelectItem value='middle'>الوسطى</SelectItem>
                    <SelectItem value='khan'>خانيونس</SelectItem>
                    <SelectItem value='rafah'>رفح</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            control={control}
            name='area'
            rules={{ required: 'المنطقة مطلوبة' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>المنطقة *</FieldLabel>
                <Select dir='rtl' value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder='اختر المنطقة' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='area1'>المنطقة الأولى</SelectItem>
                    <SelectItem value='area2'>المنطقة الثانية</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            control={control}
            name='socialStatus'
            rules={{ required: 'الحالة الاجتماعية مطلوبة' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>الحالة الاجتماعية *</FieldLabel>
                <Select dir='rtl' value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder='اختر الحالة الاجتماعية' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='single'>أعزب</SelectItem>
                    <SelectItem value='married'>متزوج</SelectItem>
                    <SelectItem value='widowed'>أرمل</SelectItem>
                    <SelectItem value='divorced'>مطلق</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            control={control}
            name='familyCount'
            rules={{
              required: 'عدد أفراد الأسرة مطلوب',
              validate: (v) => (v === '' || v < 0 ? 'أدخل رقم صحيح' : true)
            }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>عدد أفراد الأسرة *</FieldLabel>
                <Input
                  id={field.name}
                  type='number'
                  placeholder='عدد أفراد الأسرة'
                  value={field.value === '' ? '' : String(field.value)}
                  onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            control={control}
            name='healthStatus'
            rules={{ required: 'الحالة الصحية مطلوبة' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>الحالة الصحية *</FieldLabel>
                <Select dir='rtl' value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder='اختر الحالة الصحية' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='good'>جيدة</SelectItem>
                    <SelectItem value='average'>متوسطة</SelectItem>
                    <SelectItem value='chronic_disease'>مرض مزمن</SelectItem>
                    <SelectItem value='disability'>إعاقة</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            control={control}
            name='displacementStatus'
            rules={{ required: 'حالة النزوح مطلوبة' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>حالة النزوح *</FieldLabel>
                <Select dir='rtl' value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder='اختر حالة النزوح' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='displaced'>نازح</SelectItem>
                    <SelectItem value='not_displaced'>غير نازح</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </CardContent>
      </FieldGroup>
    </Card>
  );
}
