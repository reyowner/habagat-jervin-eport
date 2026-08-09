import heroArchitecture from "@/assets/hero-architecture.jpg";
import detail01 from "@/assets/detail-01.jpg";
import detail02 from "@/assets/detail-02.jpg";
import detail03 from "@/assets/detail-03.jpg";
import project01 from "@/assets/project-01.jpg";
import project02 from "@/assets/project-02.jpg";
import graphicsCover from "@/assets/graphics-cover.jpg";
import gfx01 from "@/assets/gfx-01.jpg";
import gfx02 from "@/assets/gfx-02.jpg";
import thumb01 from "@/assets/thumb-01.jpg";
import video01 from "@/assets/video-01.jpg";
import short01 from "@/assets/short-01.jpg";
import portrait from "@/assets/profile-jervin-portrait.png";
import backdoorGastropub from "@/assets/Long-Form_Vids/Backdoor Gastropub - Architectural Animation.mp4";
import backendBlackRose from "@/assets/Long-Form_Vids/BACKEND _  Black Rose.mp4";
import ecomCity from "@/assets/Long-Form_Vids/ECOM City Conceptualization - Video Presentation Walkthrough.mp4";
import lakasMakapanot from "@/assets/Short-Form_Vids/LAKAS MAKAPANOT!.mp4";
import pinagpalit from "@/assets/Short-Form_Vids/Pinagpalit sa mas mataas rank.mp4";
import solidLiquidGas from "@/assets/Short-Form_Vids/SOOOOOLID LIQUID GAS!!! ft Jac.mp4";
import walangMaiiwan from "@/assets/Short-Form_Vids/Walang maiiwan sa pamilya [PUBG Pt.2].mp4";
import thumbnailBackdoor from "@/assets/Thumbnail for Backdoor Gastropub.png";
import thumbnailEcom from "@/assets/Thumbnail for ECOM City Conceptualization.png";
import thumbnailBackend from "@/assets/Thumbnail for BACKEND — Black Rose Event Vlog.png";

export const images = {
  heroArchitecture,
  detail01,
  detail02,
  detail03,
  project01,
  project02,
  graphicsCover,
  gfx01,
  gfx02,
  thumb01,
  video01,
  short01,
  portrait,
};

export const videoThumbnails = {
  backdoor: thumbnailBackdoor,
  backend: thumbnailBackend,
  ecom: thumbnailEcom,
};

export { thumbnailBackdoor, thumbnailBackend, thumbnailEcom };

export const NAME = "Jervin Habagat";

export type DetailSample = {
  code: string;
  title: string;
  description: string;
  category: string;
  year: string;
  tools: string;
  image: string;
};

export const detailSamples: DetailSample[] = [
  {
    code: "DETAIL / A-01",
    title: "Wall Section — Exposed Concrete",
    description: "Construction detail study of a cast-in-place envelope with concealed drainage.",
    category: "Construction Detail",
    year: "2025",
    tools: "AutoCAD · Illustrator",
    image: detail01,
  },
  {
    code: "DETAIL / A-02",
    title: "Site Plan & Elevation Study",
    description: "Terrain-following elevation set with contour datum lines and sight studies.",
    category: "Plan / Elevation",
    year: "2025",
    tools: "AutoCAD · Revit",
    image: detail02,
  },
  {
    code: "DETAIL / A-03",
    title: "Longitudinal Section",
    description: "Section cut through the double-height volume documenting slab and roof assembly.",
    category: "Section",
    year: "2024",
    tools: "Revit · Illustrator",
    image: detail03,
  },
  {
    code: "DETAIL / A-04",
    title: "Residential Floor Plan",
    description: "Single-family plan with structural grid, circulation core and furniture layout.",
    category: "Plan",
    year: "2024",
    tools: "AutoCAD",
    image: detail02,
  },
  {
    code: "DETAIL / A-05",
    title: "Facade Articulation",
    description: "Rhythm study of vertical fins and shading depth across the south elevation.",
    category: "Facade Study",
    year: "2024",
    tools: "SketchUp · Lumion",
    image: detail01,
  },
  {
    code: "DETAIL / A-06",
    title: "Roof & Parapet Assembly",
    description: "Waterproofing, insulation and parapet capping detail with dimension callouts.",
    category: "Construction Detail",
    year: "2023",
    tools: "AutoCAD",
    image: detail03,
  },
];

export type Project = {
  slug: string;
  code: string;
  name: string;
  type: string;
  location: string;
  year: string;
  summary: string;
  description: string[];
  cover: string;
  gallery: { image: string; caption: string }[];
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "casa-lumen",
    code: "PROJECT / 001",
    name: "Casa Lumen",
    type: "Private Residence",
    location: "Cebu, Philippines",
    year: "2025",
    summary:
      "A two-storey concrete residence organised around a shaded courtyard and a continuous horizontal opening.",
    description: [
      "Casa Lumen is arranged as two offset concrete volumes bridged by a shaded terrace. The upper mass is carved by a single horizontal opening that frames the street while shielding the interior from western sun.",
      "The material palette is deliberately reduced — board-formed concrete, dark timber louvres and glass — so that light and shadow become the primary ornament across the day.",
    ],
    cover: project01,
    gallery: [
      { image: project01, caption: "North elevation, dusk" },
      { image: project02, caption: "Living volume, natural light study" },
      { image: detail03, caption: "Longitudinal section A-A" },
      { image: detail02, caption: "Site plan and elevations" },
    ],
    facts: [
      { label: "Status", value: "Design Development" },
      { label: "Area", value: "312 sqm" },
      { label: "Role", value: "Design & Documentation" },
      { label: "Tools", value: "Revit · Lumion · Illustrator" },
    ],
  },
  {
    slug: "atelier-grid",
    code: "PROJECT / 002",
    name: "Atelier Grid",
    type: "Studio & Workspace",
    location: "Manila, Philippines",
    year: "2024",
    summary:
      "An adaptive-reuse creative studio built on a strict 1.2 m planning grid with movable partitions.",
    description: [
      "The brief asked for a workspace that could change weekly. A 1.2 metre grid governs structure, lighting and partitions, allowing rooms to be redrawn without touching services.",
      "Daylight is pulled deep into the plan through a linear clerestory that runs the full length of the building.",
    ],
    cover: project02,
    gallery: [
      { image: project02, caption: "Main studio floor" },
      { image: detail01, caption: "Wall section detail" },
      { image: heroArchitecture, caption: "Street frontage" },
    ],
    facts: [
      { label: "Status", value: "Built" },
      { label: "Area", value: "480 sqm" },
      { label: "Role", value: "Lead Designer" },
      { label: "Tools", value: "AutoCAD · SketchUp · Enscape" },
    ],
  },
  {
    slug: "hillside-pavilion",
    code: "PROJECT / 003",
    name: "Hillside Pavilion",
    type: "Public Pavilion",
    location: "Bohol, Philippines",
    year: "2023",
    summary:
      "A lightweight viewing pavilion stepping along a slope, documented as a full presentation set.",
    description: [
      "A sequence of thin platforms follows the natural contour, each one calibrated to a specific view. The roof reads as a single plane hovering above the terrain.",
      "Documentation was produced as a complete presentation board: site strategy, plans, sections and construction details.",
    ],
    cover: heroArchitecture,
    gallery: [
      { image: heroArchitecture, caption: "Approach view" },
      { image: detail02, caption: "Contour and elevation study" },
      { image: detail03, caption: "Cross section" },
    ],
    facts: [
      { label: "Status", value: "Concept" },
      { label: "Area", value: "140 sqm" },
      { label: "Role", value: "Design & Visualisation" },
      { label: "Tools", value: "SketchUp · Lumion · InDesign" },
    ],
  },
];

export type Work = {
  code: string;
  title: string;
  type: string;
  description: string;
  image: string;
};

export const blackRose: Work[] = [
  {
    code: "GRAPHICS / 001",
    title: "Launch Campaign Key Art",
    type: "Social Campaign",
    description: "Key visual system for a multi-platform content launch.",
    image: gfx01,
  },
  {
    code: "GRAPHICS / 002",
    title: "Event Poster Series",
    type: "Event Graphics",
    description: "Three-part poster set with a shared typographic grid.",
    image: gfx02,
  },
  {
    code: "GRAPHICS / 003",
    title: "Brand Asset Pack",
    type: "Branding",
    description: "Logos, overlays and lower-thirds for creator content.",
    image: graphicsCover,
  },
  {
    code: "GRAPHICS / 004",
    title: "Promotional Story Set",
    type: "Promotional",
    description: "Vertical promo templates built for fast weekly output.",
    image: gfx01,
  },
];

export const gfxSamples: Work[] = [
  {
    code: "GFX / 005",
    title: "Geometric Composition",
    type: "Editorial",
    description: "Grid-driven poster exploring negative space.",
    image: gfx01,
  },
  {
    code: "GFX / 006",
    title: "Torn Paper Study",
    type: "Art Direction",
    description: "Analogue collage translated into a digital layout.",
    image: gfx02,
  },
  {
    code: "GFX / 007",
    title: "Monochrome Cover",
    type: "Print",
    description: "Cover concept for a self-published portfolio zine.",
    image: graphicsCover,
  },
  {
    code: "GFX / 008",
    title: "Layout System",
    type: "Editorial",
    description: "Modular spread system for long-form documents.",
    image: gfx01,
  },
  {
    code: "GFX / 009",
    title: "Contrast Study",
    type: "Illustration",
    description: "Shape and light study rendered in pure black and white.",
    image: gfx02,
  },
];

export const thumbnails: Work[] = [
  {
    code: "THUMB / 010",
    title: "Documentary Episode 04",
    type: "YouTube Thumbnail",
    description: "High-contrast crop with a single gold light cue.",
    image: thumb01,
  },
  {
    code: "THUMB / 011",
    title: "Studio Tour",
    type: "YouTube Thumbnail",
    description: "Architectural framing with restrained type placement.",
    image: graphicsCover,
  },
  {
    code: "THUMB / 012",
    title: "Design Breakdown",
    type: "YouTube Thumbnail",
    description: "Split composition built for small-screen legibility.",
    image: video01,
  },
];

export type VideoWork = {
  code: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  video: string;
  image?: string;
};

export const longForm: VideoWork[] = [
  {
    code: "VIDEO / 001",
    title: "Backdoor Gastropub — Architectural Animation",
    description: "Architectural animation showcasing the Backdoor Gastropub project.",
    duration: "Architectural Animation",
    category: "Architecture",
    video: backdoorGastropub,
    image: thumbnailBackdoor,
  },
  {
    code: "VIDEO / 002",
    title: "BACKEND — Black Rose Event Vlog",
    description: "Vlog about the event we had as part of the Black Rose Community in VALORANT Creator Brawl + Black Rose Grand Finals official event.",
    duration: "Event Vlog",
    category: "Vlog",
    video: backendBlackRose,
    image: thumbnailBackend,
  },
  {
    code: "VIDEO / 003",
    title: "ECOM City Conceptualization — Video Presentation Walkthrough",
    description: "Conceptualization video presentation walkthrough.",
    duration: "Presentation Walkthrough",
    category: "Presentation",
    video: ecomCity,
    image: thumbnailEcom,
  },
];

export const shortForm: VideoWork[] = [
  {
    code: "VIDEO / 004",
    title: "APEX Funny Moment",
    description: "Short portrait video about the APEX game.",
    duration: "Short",
    category: "Gaming",
    video: lakasMakapanot,
  },
  {
    code: "VIDEO / 005",
    title: "VALORANT Kalungkutan",
    description: "Malungkutan na hugot while playing Valorant.",
    duration: "Short",
    category: "Gaming",
    video: pinagpalit,
  },
  {
    code: "VIDEO / 006",
    title: "CSGO2 Funny Moment ft. Jac",
    description: "Funny moment while playing CSGO2 game.",
    duration: "Short",
    category: "Gaming",
    video: solidLiquidGas,
  },
  {
    code: "VIDEO / 007",
    title: "PUBG Funny Moment",
    description: "Funny moment while playing PUBG game.",
    duration: "Short",
    category: "Gaming",
    video: walangMaiiwan,
  },
];
