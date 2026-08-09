export interface SoftwareCategory {
  category: string;
  software: string[];
}

export const SOFTWARE: SoftwareCategory[] = [
  {
    category: "Architecture & CAD",
    software: ["Autodesk AutoCAD"],
  },
  {
    category: "3D Modeling",
    software: ["SketchUp"],
  },
  {
    category: "Rendering",
    software: ["Lumion", "V-Ray"],
  },
  {
    category: "Graphic Design",
    software: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
  },
  {
    category: "Video Editing",
    software: ["Adobe Premiere Pro"],
  },
  {
    category: "Online Platforms",
    software: ["Behance", "Canva"],
  },
];

