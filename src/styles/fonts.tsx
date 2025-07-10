/* Font Imports */
import { Montserrat } from 'next/font/google';
/* End Font Imports */

/**
 * montserrat_init
 *
 * Montserrat Font settings
 *
 * @returns montserrat_init object
 */
export const montserrat_init = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});
