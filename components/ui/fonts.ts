// fonts.ts or your font file
import localFont from 'next/font/local';
import { Emilys_Candy} from 'next/font/google';



export const emilysCandy = Emilys_Candy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-emilys-candy',
});



export const merriweather = localFont({
  src: '../../public/fonts/merriweather/Merriweather-Regular.ttf',
  display: 'swap',
  weight: '400',
  variable: '--font-body',
});

