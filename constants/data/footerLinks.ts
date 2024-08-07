import { type NavItem } from "@/types";

interface FooterLink {
  title: string;
  titleLink: string;
  links: NavItem[];
}

interface SocialLink {
  label: string;
  icon: string;
  link: string;
}

export const footerLinks: FooterLink[] = [
  {
    title: "Company",
    titleLink: "#",
    links: [
      {
        label: "Home",
        link: "#",
      },
      {
        label: "About",
        link: "#",
      },
      {
        label: "Products",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
    ],
  },
  {
    title: "Legal",
    titleLink: "#",
    links: [
      {
        label: "FAQs",
        link: "#",
      },
      {
        label: "Legal",
        link: "#",
      },
      {
        label: "Terms and conditions",
        link: "#",
      },
      {
        label: "Privacy",
        link: "#",
      },
      {
        label: "Sitemap",
        link: "#",
      },
    ],
  },
];

export {};

export const footerContactLinks: SocialLink[] = [
  {
    label: "+260 97 8555299",
    icon: "/Icons/fluent_call-12-regular.svg",
    link: "#",
  },
  {
    label: "info@mightyfinance.co.zm",
    icon: "/Icons/quill_mail.svg",
    link: "#",
  },
  {
    label: "13 Chikuni Close, Off Makishi Road, Northmead, Lusaka.",
    icon: "/Icons/system-uicons_location.svg",
    link: "#",
  },
];

export const footerSocialLinks: SocialLink[] = [
  {
    label: "Instagram",
    icon: "/Icons/instagram.svg",
    link: "#",
  },
  {
    label: "Linkedin",
    icon: "/Icons/linkedin.svg",
    link: "#",
  },
  {
    label: "Facebook",
    icon: "/Icons/fb-icon.svg",
    link: "#",
  },
];
