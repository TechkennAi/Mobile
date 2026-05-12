import type { FC, SVGProps } from 'react';

type SvgIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const googleIconPath = '/themobiledetailingco.com/wp-content/uploads/2024/10/google.png';
export const facebookIconPath = '/themobiledetailingco.com/wp-content/uploads/2024/10/facebook.png';
export const instagramIconPath = '/themobiledetailingco.com/wp-content/uploads/2024/10/instagram.png';
export const nextdoorIconPath = '/themobiledetailingco.com/wp-content/uploads/2024/10/nextdoor.png';
export const tmdLogoPath = '/themobiledetailingco.com/wp-content/uploads/2024/10/mobiledetailing.png';

export const StarIcon: FC<SvgIconProps> = ({ size = 12, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 2.25l2.927 5.93 6.546.951-4.736 4.616 1.118 6.52L12 17.188l-5.855 3.079 1.118-6.52L2.527 9.13l6.546-.951L12 2.25z" />
  </svg>
);

export const VerifiedIcon: FC<SvgIconProps> = ({ size = 12, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      d="M8.2 12.4l2.3 2.3 5.3-5.4"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
