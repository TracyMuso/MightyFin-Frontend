export type User = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  NRCNumber: string;
  gender: "male" | "female";
  employeeNumber: string;
  jobTitle: string;
  department: string;
  ministry: string;
  city: string;
  country: string;
};

export type LoanType = {
  id: string;
  loanType: string;
  amount: string | number;
  duration: string | number;
  totalRepayment: string;
  monthlyRepayment: string;
  nextRepaymentDate: string;
};

export interface PartnershipDataType {
  alt: string;
  url: string;
}

export interface HeroPointType {
  title: string;
  text: string;
}

export interface LoanStepDataType {
  step: number;
  icon: string;
  title: string;
  text: string;
}

export interface BlogDataType {
  title: string;
  author: string;
  date: string;
  content: string;
}

export interface MiniBlogDataType {
  postType: string;
  title: string;
  author: string;
  image: string;
}

export interface BlogCategoriesDataType {
  category: string;
  url: string;
}
