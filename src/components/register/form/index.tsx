'use client';

import PersonalInfo from './personal-info';
import ApplicantType from './applicant-type';

import { useForm, FormProvider } from 'react-hook-form';
import BusinessInfo from './business-info';
import SupportNeeded from './support-needed';
import SocialPriorities from './social-priorities';
import Declaration from './declaration';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

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
  socialPriorities: string;
  declaration: boolean;
};

export type LookupRow = { value: number; description: string; groupName: string };

type IProps = {
  lookups: LookupRow[];
};
export default function RegistrationForm({ lookups }: IProps) {
  const governorateOptions = lookups.filter((o) => o.groupName === 'Governorate');
  const areaOptions = lookups.filter((o) => o.groupName === 'Area');
  const maritalOptions = lookups.filter((o) => o.groupName === 'MaritalStatus');
  const healthOptions = lookups.filter((o) => o.groupName === 'HealthStatus');
  const displacementOptions = lookups.filter((o) => o.groupName === 'DisplacementSituation');
  const projectOptions = lookups.filter((o) => o.groupName === 'ProjectType');
  const workSectorOptions = lookups.filter((o) => o.groupName === 'WorkSector');
  const avgSalaryOptions = lookups.filter((o) => o.groupName === 'WorkAvgSalary');
  const supportOptions = lookups.filter((o) => o.groupName === 'SupportType');
  const prioritiesOptions = lookups.filter((o) => o.groupName === 'SocialPriorities');

  const personalInfoData = {
    governorateOptions,
    areaOptions,
    maritalOptions,
    healthOptions,
    displacementOptions
  };

  const businessInfoData = {
    workSectorOptions,
    avgSalaryOptions
  };

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
      hadPreviousSupport: null,
      socialPriorities: '',
      declaration: false
    },
    mode: 'onChange'
  });

  const onSubmit = (values: RegistrationFormValues) => {
    console.log(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-230 mx-auto py-8 space-y-7'>
        <PersonalInfo data={personalInfoData} />
        <ApplicantType data={projectOptions} />
        <BusinessInfo data={businessInfoData} />
        <SupportNeeded data={supportOptions} />
        <SocialPriorities data={prioritiesOptions} />
        <Declaration />
        <Button className='w-full py-4 h-auto rounded-[20px] text-lg font-bold flex gap-3 items-center'>
          <span>تأكيد وإرسال الطلب</span>
          <Send className='size-5' />
        </Button>
      </form>
    </FormProvider>
  );
}
