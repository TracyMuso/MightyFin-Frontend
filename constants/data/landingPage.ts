import type {
  PartnershipDataType,
  LoanStepDataType,
  BlogDataType,
  MiniBlogDataType,
  BlogCategoriesDataType,
  ProductCardType,
} from "@/types";

export const PartnershipData: PartnershipDataType[] = [
  {
    alt: "aws icon",
    url: "/Images/LandingPage/aws.png",
  },
  {
    alt: "seed-stars icon",
    url: "/Images/LandingPage/ss.png",
  },
  {
    alt: "growth Africa icon",
    url: "/Images/LandingPage/ga.png",
  },
  {
    alt: "village capital icon",
    url: "/Images/LandingPage/vc.png",
  },
  {
    alt: "bank of zambia icon",
    url: "/Images/LandingPage/boz.png",
  },
  {
    alt: "baobab icon",
    url: "/Images/LandingPage/baobab.png",
  },
  {
    alt: "stanchart icon",
    url: "/Images/LandingPage/sc.png",
  },
  {
    alt: "bongohive icon",
    url: "/Images/LandingPage/bongohive.png",
  },
];

export const LeadershipData: PartnershipDataType[] = [
  {
    alt: "badge icon",
    url: "/Images/LandingPage/lr-badge-1.png",
  },
  {
    alt: "badge icon",
    url: "/Images/LandingPage/lr-badge-2.png",
  },
  {
    alt: "badge icon",
    url: "/Images/LandingPage/lr-badge-3.png",
  },
  {
    alt: "badge icon",
    url: "/Images/LandingPage/lr-badge-4.png",
  },
];

export const LoanStepsData: LoanStepDataType[] = [
  {
    step: 1,
    icon: "/Icons/system-uicons_user-add.png",
    title: "Online Account Registration",
    text: "Create Your Account",
  },
  {
    step: 2,
    icon: "/Icons/fluent_form-24-regular.png",
    title: "Loan Application Form",
    text: "Select Loan & Enter Details",
  },
  {
    step: 3,
    icon: "/Icons/material-symbols-light_domain-verification-outline-rounded.png",
    title: "Verification",
    text: "Verify Email and Phone number",
  },
  {
    step: 4,
    icon: "/Icons/wpf_approval.png",
    title: "Loan Approval Confirmation",
    text: "Get Your Loan Decision ",
  },
];

export const BlogData: BlogDataType[] = [
  {
    title: "Understanding Your Borrowing Options",
    author: "Chanda Phiri",
    date: "12th March, 2024",
    content:
      "It will explain different loan types (personal, business, auto etc.), common loan terms (interest rate, repayment period), and factors to consider when choosing a loan...",
  },
  {
    title: "How to Effectively repay your loan",
    author: "Vwa Boa",
    date: "13th March, 2024",
    content:
      "If you have personal loan debt and are in a financial position to pay it off early, doing so could save you money on interest and boost your credit score...",
  },
];

export const miniBlogCardData: MiniBlogDataType[] = [
  {
    postType: "Videos",
    title: "Smart Budgeting Tips for Civil Servants",
    author: "Lute Chongo",
    image: "/Images/LandingPage/calculator.png",
  },
  {
    postType: "Blog Post",
    title: "The Dos and Don'ts of Building Your Credit Score",
    author: "Chanda Phiri",
    image: "/Images/LandingPage/creditcard.png",
  },
  {
    postType: "Videos",
    title: "My experience payinig off a loan on time",
    author: "Adelaja Oluwaseyijeje",
    image: "/Images/LandingPage/calculator.png",
  },
];

export const BlogCategoriesData: BlogCategoriesDataType[] = [
  {
    category: "Personal Finance",
    url: "#",
  },
  {
    category: "Entrepreneurial Finance",
    url: "#",
  },
  {
    category: "Lifestyle & Finance",
    url: "#",
  },
];

export const ProductCardData: ProductCardType[] = [
  {
    icon: "/Icons/Personal-Loan.png",
    text: "Personal Loans for Civil Servants, MOU Employees & Secured Options",
    title: "Personal",
    productDetails: "#",
  },
  {
    icon: "/Icons/house.png",
    text: "Grow your business with our credit financing solutions for SMEs",
    title: "SMEs",
    productDetails: "#",
  },
  {
    icon: "/Icons/woman.png",
    text: "Empowering women led businesses through working capital loans",
    title: "For women",
    productDetails: "#",
  },
];
