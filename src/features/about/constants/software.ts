export interface SoftwareCategory {
  category: string;
  software: string[];
}

export const SOFTWARE: SoftwareCategory[] = [
  {
    category: "Architecture & CAD/BIM",
    software: ["AutoCAD", "Revit"],
  },
  {
    category: "3D Modeling",
    software: ["SketchUp", "3ds Max"],
  },
  {
    category: "Rendering",
    software: ["Lumion", "V-Ray", "Enscape", "D5"],
  },
  {
    category: "Graphic Design",
    software: ["Adobe Photoshop", "Adobe InDesign"],
  },
  {
    category: "Video Editing",
    software: ["Adobe Premiere Pro"],
  },
  {
    category: "Documentation",
    software: ["Microsoft Office Suite"],
  },
  {
    category: "Platforms",
    software: ["Behance", "Canva"],
  },
];
