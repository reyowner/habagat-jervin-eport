export interface Education {
  year: string;
  institution: string;
  degree: string;
  achievements?: string[];
}

export const EDUCATION: Education[] = [
  {
    year: "2013 — 2019",
    institution: "Bataan Peninsula State University",
    degree: "BS in Architecture",
    achievements: [
      "Best in Pre-Thesis 2017",
      "Theatro Perlas",
      "Architectural Thesis: Sentro Resayko",
    ],
  },
  {
    year: "2009 — 2013",
    institution: "Mt. View Village School",
    degree: "Secondary Education",
    achievements: [
      "MVVS Artist of the Year 2012",
      "DSPC Cartooning 2011–2012",
      "Mariwad Poster Making 2011 — Top 3",
    ],
  },
];
