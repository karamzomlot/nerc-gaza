import { z } from 'zod/v3';

const MAX_INT32 = 2147483647;

const selectIntRequired = (fieldMsg: string) => z.string({ required_error: fieldMsg });

const numOrEmptyMin1 = (requiredMsg: string, invalidMsg: string) =>
  z.preprocess(
    (v) => {
      if (v === '' || v === null || v === undefined) return undefined;
      if (typeof v === 'string') {
        const n = Number(v);
        return Number.isNaN(n) ? v : n;
      }
      return v;
    },
    z.number({ required_error: requiredMsg, invalid_type_error: requiredMsg }).int(invalidMsg).min(1, invalidMsg).max(MAX_INT32, invalidMsg)
  );

export const FormSchema = z.object({
  fullName: z.string({ required_error: 'الاسم مطلوب' }).min(3, 'الاسم قصير جدا').max(255, 'الاسم يجب ألا يزيد عن 255 حرفًا.'),

  idNumber: z
    .string({ required_error: 'رقم الهوية مطلوب' })
    .regex(/^\d{9}$/, 'رقم الهوية غير صحيح.')
    .refine((v) => v !== '000000000', { message: 'رقم الهوية غير صحيح.' }),

  phone1: z
    .string({ required_error: 'رقم الجوال مطلوب' })
    .min(1, 'رقم الجوال مطلوب')
    .max(16, 'رقم الجوال يجب ألا يزيد عن 16 رقمًا.')
    .regex(/^[0-9]*$/, 'رقم الجوال يجب أن يحتوي على أرقام فقط.'),

  governorate: selectIntRequired('المحافظة مطلوبة'),
  area: selectIntRequired('المنطقة مطلوبة'),
  maritalStatus: selectIntRequired('الحالة الإجتماعية مطلوبة'),
  healthStatus: selectIntRequired('الحالة الصحية مطلوبة'),
  displacementSituation: selectIntRequired('حالة النزوح مطلوبة'),
  familyMembers: z.coerce.number({
    required_error: 'عدد أفراد الأسرة مطلوب'
  }),
  projectType: selectIntRequired('تصنيف مقدم الطلب مطلوب'),
  workName: z.string({ required_error: 'اسم النشاط مطلوب' }).min(1, 'اسم النشاط مطلوب').max(100, 'اسم النشاط يجب ألا يزيد عن 100 حرف.'),

  workSector: selectIntRequired('قطاع العمل مطلوب'),

  workArea: z.string({ required_error: 'مكان النشاط الحالي مطلوب' }).min(1, 'مكان النشاط الحالي مطلوب'),

  workDuration: z.string({ required_error: 'مدة النشاط مطلوبة' }).min(1, 'مدة النشاط مطلوبة'),

  workNumberStuff: numOrEmptyMin1('عدد العاملين مطلوب', 'أدخل رقم صحيح'),

  workAvgSalary: selectIntRequired('متوسط الدخل الشهري مطلوب'),

  workDescription: z.string({ required_error: 'وصف النشاط مطلوب' }).min(1, 'وصف النشاط مطلوب').max(2000, 'وصف النشاط يجب ألا يزيد عن 2000 حرف.'),
  supportType: selectIntRequired('نوع الدعم مطلوب'),
  receivedPreviousSupport: z.enum(['0', '1'], { required_error: 'هذا الحقل مطلوب' }),
  socialPriorities: selectIntRequired('الأولويات الاجتماعية مطلوبة'),
  isDeclarationApproved: z.literal(true, {
    errorMap: () => ({ message: 'يجب الموافقة على صحة البيانات المقدمة' })
  })
});

export type FormSchemaValues = z.infer<typeof FormSchema>;

export type FormSchemaInput = z.input<typeof FormSchema>; // ✅ نوع قيم الفورم (قبل التحويل)
