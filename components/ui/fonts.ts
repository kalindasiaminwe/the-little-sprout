// fonts.ts or your font file
import localFont from 'next/font/local';
import { Emilys_Candy} from 'next/font/google';

export const navFont = localFont({
  src: '../../public/fonts/quentonserif-personal-use-only.otf',
  display: 'swap',
  weight: '400',
  variable: '--font-navfont',
});

export const navFont2 = localFont({
  src: '../../public/fonts/Starby-Demo-BF6880798c224dd.otf',
  display: 'swap',
  weight: '400',
  variable: '--font-nav',
});

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

export const heroFont = localFont({
  src: '../../public/fonts/Bellmoco Handcola.ttf',
  display: 'swap',
  weight: '400',
  variable: '--font-hero',
});