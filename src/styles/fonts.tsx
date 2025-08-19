/* Font Imports */
import { 
  Lato,
  Montserrat,
  Roboto_Condensed
} from 'next/font/google';
/* End Font Imports */

/**
 * Lato
 *
 * Lato Font Settings
 *
 * @returns lato object
 */
export const lato = Lato({
  display: 'swap',
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-lato',
  weight: ['400', '700', '900']
});

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
  weight: ['400', '500', '600', '700', '800', '900'],
});

/**
 * robotoCond
 *
 * Roboto Condensed Font Settings
 *
 * @returns robotoCond object
 */ 
export const robotoCond = Roboto_Condensed({
  display: 'swap',
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-robotocond',
  weight: ['400', '500', '600', '700', '800']
});
