'use client';

import PersonalInfo from './personal-info';
import ApplicantType from './applicant-type';

import { useForm, FormProvider } from 'react-hook-form';
import BusinessInfo from './business-info';
import SupportNeeded from './support-needed';

export type RegistrationFormValues = {
  fullName: string;
  idNumber: string;
  mobile: string;
  governorate: string;
  area: string;
  socialStatus: string;
  healthStatus: string;
  displacementStatus: string;
  familyCount: number | '';
  applicantType: string;
  businessName: string;
  workSector: string;
  currentWorkLocation: string;
  activityDuration: string;
  workersCount: number | '';
  avgMonthlyIncome: string;
  activityDescription: string;
  supportNeed: string;
  hadPreviousSupport: boolean | null;
};

export default function RegistrationForm() {
  const form = useForm<RegistrationFormValues>({
    defaultValues: {
      fullName: '',
      idNumber: '',
      mobile: '',
      governorate: '',
      area: '',
      socialStatus: '',
      healthStatus: '',
      displacementStatus: '',
      familyCount: '',
      applicantType: '',
      businessName: '',
      workSector: '',
      currentWorkLocation: '',
      activityDuration: '',
      workersCount: '',
      avgMonthlyIncome: '',
      activityDescription: '',
      supportNeed: '',
      hadPreviousSupport: null
    },
    mode: 'onChange'
  });

  const onSubmit = (values: RegistrationFormValues) => {
    console.log(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-230 mx-auto py-8 space-y-7'>
        <PersonalInfo />
        <ApplicantType />
        <BusinessInfo />
        <SupportNeeded />
      </form>
    </FormProvider>
  );
}
