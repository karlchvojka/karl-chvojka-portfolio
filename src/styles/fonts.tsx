import { Montserrat } from 'next/font/google';

export const montserrat_init = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});
