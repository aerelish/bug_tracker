import { Montserrat, Ubuntu } from 'next/font/google'; 

export const font_montserrat = Montserrat({ 
    subsets: ['latin'], 
    weight: ['500', '400', '300', '200']
});

export const font_ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '700']
});
