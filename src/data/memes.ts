import bilkulRisk from "../assets/images/Bilkul-ricks-nahi-lene-ka-meme-templates.jpg";
import abhiMaza from "../assets/images/Abhi-Maza-Aayega-Na-BHidu-Meme-Template.jpg";
import doglapan from "../assets/images/yeSabDoglapanhai.jfif";
import jobChhodDu from "../assets/images/main-kya-karu-fir-job-chhod-du-famous-indian-meme-templates.jpg";
import hilaDala from "../assets/images/Kyu-Hila-Dala-Na-Rajinikanth-Meme-Template.jpg";
import chronology from "../assets/images/Aap-chronology-samajhiye-meme-template-stree.jpg";
import cheating from "../assets/images/Cheating-Karta-Hai-Meme-Template.jpg";
import kohliSurprised from "../assets/images/Kohli-Surprised-meme-template.jpg";
import abeySaale from "../assets/images/abey-saale-meme-template.jpg";
import struggle from "../assets/images/Maine-Bahot-Struggle-Kiya-Meme-Template.png";
import meraMazak from "../assets/images/Kaisa-Laga_Mera-Mazaak-Meme-Template.jpg";
import ajayDevgn from "../assets/images/Ajay-Devgn-Black-Specs-Meme-Template.jpg";
import mujheDrugsDo from "../assets/images/Mujhe-Drugs-Do-Meme-Template-Arnab-Goswami.jpg";
import disappointedFan from "../assets/images/Disappointed-Pakistani-Cricket-Fan-India-Vs-Pak-World-Cup-2019-Meme-Template.jpg";
import haveli from "../assets/images/aaoKabhiHawalipe.jpg";
import zomatoBoy from "../assets/images/Zomato-happy-boy-Sonu-Meme.jpg";

export type Meme = {
  /** The setup line — the meme image supplies the punchline. */
  situation: string;
  image: string;
  alt: string;
};

/** The meme wall. Setup line above, template does the rest. */
export const memeWall: Meme[] = [
  {
    situation: "Someone suggests a Friday 6 PM deploy",
    image: bilkulRisk,
    alt: "Bilkul risk nahi lena ka meme",
  },
  {
    situation: "The pipeline goes green on the first push",
    image: abhiMaza,
    alt: "Abhi maza ayega na bhidu meme",
  },
  {
    situation: 'The ticket said "just a small UI change"',
    image: doglapan,
    alt: "Ye sab doglapan hai meme",
  },
  {
    situation: '"Can we ship this by tonight?"',
    image: jobChhodDu,
    alt: "Main kya karu fir, job chhod du meme",
  },
  {
    situation: "Lighthouse goes from 62 to 98",
    image: hilaDala,
    alt: "Kyu hila dala na meme",
  },
  {
    situation: "Reviewer opens a PR with 47 commits",
    image: chronology,
    alt: "Aap chronology samajhiye meme",
  },
  {
    situation: "git blame points back to me",
    image: cheating,
    alt: "Cheating karta hai tu meme",
  },
  {
    situation: "The bug fixes itself after a hard refresh",
    image: kohliSurprised,
    alt: "Surprised reaction meme",
  },
  {
    situation: "Someone force-pushes to main",
    image: abeySaale,
    alt: "Abey saale meme",
  },
];

/**
 * The floating corner meme, keyed by section id. Each one reacts to what
 * the visitor is actually reading, so keep these in sync with the nav ids.
 */
export const sectionMemes: Record<string, Meme> = {
  about: {
    situation: "3.7 years of centering divs",
    image: struggle,
    alt: "Maine bahot struggle kiya hai meme",
  },
  experience: {
    situation: "Sprint planning, every single time",
    image: jobChhodDu,
    alt: "Main kya karu fir, job chhod du meme",
  },
  projects: {
    situation: "Watching the deploy go green",
    image: ajayDevgn,
    alt: "Ajay Devgn black specs meme",
  },
  skills: {
    situation: "Me at 2 AM, chasing a race condition",
    image: mujheDrugsDo,
    alt: "Mujhe drugs do meme",
  },
  education: {
    situation: "A civil engineering degree, writing TypeScript",
    image: disappointedFan,
    alt: "Disappointed fan meme",
  },
  contact: {
    situation: "My salary expectations",
    image: meraMazak,
    alt: "Kaisa laga mera mazak meme",
  },
};

export const inviteMeme: Meme = {
  situation: "Or just drop by",
  image: haveli,
  alt: "Aao kabhi haveli pe meme",
};

export const deliveredMeme: Meme = {
  situation: "Message delivered",
  image: zomatoBoy,
  alt: "Happy delivery boy meme",
};
