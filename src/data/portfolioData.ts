export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  category: string;
  about: string;
  overview: string;
  what_i_did: string;
  deliverables: string[];
  coverImage: string;
  galleryImages: string[];
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Lucas Reis",
    role: "A.I. Artist / Designer / Art Director",
    email: "mail@reis.com",
    intro: "I craft visual systems where design meets emerging technology. My work blends human insight with machine precision — without sacrificing meaning.",
    aboutFull: "I am Lucas Reis — A.I. Artist, Designer, Art Director and Your Strategic Partner in Visual Innovation. I help brands, creators, and businesses transform abstract ideas into powerful visual narratives. I design with intent where clarity meets emotional impact, and technology enhances, not replaces, the human touch.",
    location: "Berlin, Germany",
    facts: [
      { label: "Years of Experience", value: "8+" },
      { label: "Successful Projects", value: "120+" },
      { label: "Global Clients", value: "40+" }
    ]
  },
  socials: [
    { name: "Instagram", url: "#", short: "IG" },
    { name: "X (Twitter)", url: "#", short: "X" },
    { name: "LinkedIn", url: "#", short: "LI" },
    { name: "Behance", url: "#", short: "BE" },
    { name: "Dribbble", url: "#", short: "DR" },
    { name: "YouTube", url: "#", short: "YT" }
  ],
  principles: [
    {
      title: "Tailored to client & business",
      description: "Every visual strategy is built around specific goals. No generic templates, only custom aesthetics that amplify your brand's unique character."
    },
    {
      title: "Transparency",
      description: "From concept boards to final renders, the creative process is collaborative and open. You always know what is being built and why."
    },
    {
      title: "Smart aesthetics",
      description: "Good design is beautiful, but smart design is functional. I focus on compositions that look spectacular while driving user engagement."
    }
  ],
  services: [
    {
      title: "AI-Driven Video",
      description: "Cinematic, high-fidelity moving images generated using advanced A.I. tools, styled and color-graded for advertising, mood reels, and campaigns.",
      iconName: "Video"
    },
    {
      title: "Custom Illustrations",
      description: "Bespoke digital artwork and graphics that define visual identities, editorial layouts, and digital products.",
      iconName: "Palette"
    },
    {
      title: "Concept Arts",
      description: "Early-stage visual development, concept keys, and architectural environments designed to map creative direction for production design.",
      iconName: "Layers"
    }
  ],
  testimonials: [
    {
      quote: "Professional, thoughtful, and easy to collaborate with. The process was smooth from start to finish, and the final results exceeded all our aesthetic expectations.",
      author: "Elena Rostova",
      role: "Creative Director, Maison Noir"
    },
    {
      quote: "Lucas has an incredible eye for details. His ability to fuse cutting-edge AI outputs with classical composition gave our brand a futuristic yet premium look.",
      author: "Kaito Sato",
      role: "Founder, VYRA Studio"
    },
    {
      quote: "He doesn't just create visuals; he tells stories. The concept art he produced for NEONWEAR has defined our visual language for the entire season.",
      author: "Sarah Jenkins",
      role: "Brand Director, NEONWEAR"
    }
  ],
  faqs: [
    {
      question: "What is your typical creative process?",
      answer: "We start with a briefing and research session to align on visual references and brand goals. Next, I prepare concept boards and initial drafts. Once approved, I generate and refine the assets using advanced design and AI suites, followed by final color grading and formatting."
    },
    {
      question: "Which tools do you use for A.I. art generation?",
      answer: "I utilize a curated suite of state-of-the-art tools including Midjourney, Stable Diffusion, and custom LoRA models trained on specific styles, along with traditional design software like Photoshop, Illustrator, and DaVinci Resolve for post-processing."
    },
    {
      question: "Are these visuals ready for commercial use?",
      answer: "Yes, absolutely. All final assets are fully cleared, upscaled to high resolution, and ready for commercial print, web, or social media distribution depending on your project requirements."
    },
    {
      question: "Do you collaborate with agencies and design teams?",
      answer: "Yes! I frequently partner with brand agencies, production houses, and internal design teams. I can act as an external director or work alongside your designers to accelerate creative asset production."
    }
  ],
  projects: [
    {
      slug: "echoes-of-elegance",
      title: "Echoes of Elegance",
      subtitle: "Timeless beauty in black and white",
      client: "Maison Noir",
      year: "2025",
      category: "AI Photography / Creative Direction",
      about: "Echoes of Elegance is a conceptual AI-generated project for Maison Noir, a fictional retro-inspired fashion brand. The central visual — a woman on a black-and-white background — embodies timeless style, cinematic charm, and the allure of vintage aesthetics.",
      overview: "The project explores how minimalism and retro styling can convey sophistication without excess. The monochrome palette highlights contrast and detail, turning every gesture into a statement. Inspired by mid-20th century cinema and editorial photography, the visuals aim to merge nostalgia with a contemporary perspective.",
      what_i_did: "I created the concept, generated AI imagery, and curated a set of portraits that evoke both intimacy and grandeur. Each shot was refined to emphasize atmosphere, elegance, and the storytelling power of simplicity.",
      deliverables: ["Visual Identity", "AI Concept Art", "Campaign Guidelines"],
      coverImage: "https://framerusercontent.com/images/AH65c4RP0KFjTJaj2iVkWH03I.png",
      galleryImages: [
        "https://framerusercontent.com/images/AH65c4RP0KFjTJaj2iVkWH03I.png",
        "https://framerusercontent.com/images/E1ohsKJUKzlf3Tzk4sF97yBrnvI.png"
      ]
    },
    {
      slug: "blurred-identity",
      title: "Blurred Identity",
      subtitle: "Between presence and disappearance",
      client: "Concept Studio",
      year: "2026",
      category: "Digital Art / Creative Direction",
      about: "Blurred Identity explores the transition space where human presence fades into digital static. Combining high-contrast lighting with glitch textures, the series questions the permanence of self in an increasingly virtual existence.",
      overview: "Using motion blur and visual decay, the composition focuses on portraits that are halfway between forming and dissolving. The project draws from early analog video art and electronic music culture to create a mysterious, melancholic mood.",
      what_i_did: "I developed the visual treatment, executed the AI portrait renders, and performed digital post-processing to embed noise, chromatic aberration, and overlay textures.",
      deliverables: ["Glitch Art Sets", "Motion Loops", "Cover Art Design"],
      coverImage: "https://framerusercontent.com/images/04ElzjMSlf8Oo8AlU0B8DhEbcMs.png",
      galleryImages: [
        "https://framerusercontent.com/images/04ElzjMSlf8Oo8AlU0B8DhEbcMs.png",
        "https://framerusercontent.com/images/CxF0uDxPx5ZrnM4sS3KBHhFm8.png"
      ]
    },
    {
      slug: "neon-rain",
      title: "Neon Rain",
      subtitle: "When rain becomes part of the city’s rhythm",
      client: "Tokyo Motion Drift",
      year: "2025",
      category: "Conceptual Cinematics / AI Video",
      about: "Neon Rain is an immersive visual concept designed for Tokyo Motion Drift. It captures the essence of midnight Tokyo, where rainfall acts as a liquid canvas for neon lights and restless city movement.",
      overview: "The project captures the mood of Tokyo at night, where rainfall transforms into a mirror of neon lights and restless energy. Cars glide through wet asphalt, reflecting signage and glowing billboards, turning an ordinary commute into a cinematic scene. The focus was on blending realism with a dreamlike, cyberpunk atmosphere.",
      what_i_did: "I built the concept, generated and curated visuals through AI, and refined the palette to emphasize the contrast between dark rain-soaked streets and vibrant city lights. Each image was selected to evoke motion, solitude, and the endless rhythm of the metropolis.",
      deliverables: ["Styleframes", "AI Cinematic Loops", "Color Palette Direction"],
      coverImage: "https://framerusercontent.com/images/6PiR1rKmgQ8RS3XEdUusqvulvtE.png",
      galleryImages: [
        "https://framerusercontent.com/images/6PiR1rKmgQ8RS3XEdUusqvulvtE.png",
        "https://framerusercontent.com/images/woLOYBxxGypaAqyoI9p34Pvcyc.png"
      ]
    },
    {
      slug: "bloomscape",
      title: "Bloomscape",
      subtitle: "Where nature and emotion meet",
      client: "FLORÉA",
      year: "2026",
      category: "Brand Campaign / AI Art Direction",
      about: "Bloomscape is an AI-driven conceptual project for FLORÉA, a fictional lifestyle brand inspired by nature and seasonal rituals. The central image — a young woman standing in a flower field — embodies harmony, freedom, and the fleeting beauty of summer days.",
      overview: "The project was designed as a visual meditation on growth and presence. Flowers are not just a background — they represent cycles of change, fragility, and renewal. By placing the figure in the middle of the field, the composition blends human identity with the landscape, evoking calmness and belonging.",
      what_i_did: "I developed the concept, generated and curated visuals, and built a narrative flow that connects personal emotion with natural environments. The series was shaped as a campaign moodboard for a lifestyle brand, adaptable for editorial spreads, social campaigns, or seasonal events.",
      deliverables: ["Campaign Strategy", "Art Direction", "Print Asset Mockups"],
      coverImage: "https://framerusercontent.com/images/uHQ7Baalyd8GmCy1Qj9jHVeKco.png",
      galleryImages: [
        "https://framerusercontent.com/images/uHQ7Baalyd8GmCy1Qj9jHVeKco.png",
        "https://framerusercontent.com/images/nOD5K6jwxcI0W7vPNHCV21wE.png"
      ]
    },
    {
      slug: "summer-melt",
      title: "Summer Melt",
      subtitle: "Tastes like the last days of summer",
      client: "LUNA Ice",
      year: "2025",
      category: "Creative Advertising / Concept",
      about: "Summer Melt is a playful AI-driven visual project created for LUNA Ice, a fictional ice cream brand. The concept celebrates the joy of late-summer gatherings with bright, colorful imagery and a touch of nostalgia. The central visual — ice cream in focus — becomes a symbol of carefree moments and shared fun.",
      overview: "The project was designed as a campaign for an end-of-summer party, capturing the sweet, fleeting mood of the season. Using AI, I generated imagery with vibrant palettes, melting textures, and playful details to evoke the feeling of sunshine, laughter, and music in the air. The visuals aim to blend product presentation with lifestyle storytelling.",
      what_i_did: "I created the campaign concept, generated and curated visuals through AI tools, and developed a cohesive narrative around Summer Melt. The focus was on delivering a set of images that could work across social media, posters, and event invitations, all tied together by a bold, summery energy.",
      deliverables: ["Product Moodboard", "Advertising Key Visuals", "Social Kit"],
      coverImage: "https://framerusercontent.com/images/5CanLGbeDQwv0xBeClNxnAtfM.jpg",
      galleryImages: [
        "https://framerusercontent.com/images/5CanLGbeDQwv0xBeClNxnAtfM.jpg",
        "https://framerusercontent.com/images/hm1VWYjGDkxBl6xfaocPHEmz4.jpg"
      ]
    },
    {
      slug: "luminous-shadows",
      title: "Luminous Shadows",
      subtitle: "Elegance illuminated",
      client: "VYRA Studio",
      year: "2026",
      category: "Avant-Garde Fashion / AI Rendering",
      about: "Luminous Shadows is a conceptual project for VYRA Studio, a fictional avant-garde fashion label. The central visual — a woman in black attire with glowing details — explores the tension between minimalism and spectacle, showing how clothing can exist both in the dark and as a source of light.",
      overview: "The project investigates how light can be treated as part of clothing. Instead of seeing garments only as material, Luminous Shadows frames fashion as an interaction with energy, glow, and movement. The dark base creates a canvas where neon accents transform into living details, making the silhouette both sharp and otherworldly.",
      what_i_did: "I developed the brand concept, generated and refined AI visuals, and built a narrative for a futuristic fashion line. Each image was curated to balance elegance and boldness, offering a vision of fashion that resonates with nightlife, digital culture, and performance aesthetics.",
      deliverables: ["Garment Concept Art", "Editorial Lookbook", "Runway Simulation Render"],
      coverImage: "https://framerusercontent.com/images/MbOULKEWtjVEIBlPX4m8LgzvUq4.png",
      galleryImages: [
        "https://framerusercontent.com/images/MbOULKEWtjVEIBlPX4m8LgzvUq4.png",
        "https://framerusercontent.com/images/AH65c4RP0KFjTJaj2iVkWH03I.png"
      ]
    },
    {
      slug: "frozen-echoes",
      title: "Frozen Echoes",
      subtitle: "Exploring the fragile beauty of silence",
      client: "Art Exhibition",
      year: "2025",
      category: "Fine Art / Fine Art AI Prints",
      about: "Frozen Echoes is an experimental AI-generated series exploring the aesthetics of silence and memory. The goal was to create visuals that feel both digital and organic, like frozen fragments of thought captured in time.",
      overview: "This project began as a study of textures and moods inspired by winter landscapes. Using AI tools, I generated hundreds of variations and then curated the most powerful ones into a cohesive visual story. The series emphasizes contrast: cold vs. warmth, static vs. motion, memory vs. presence.",
      what_i_did: "I developed the concept, generated and refined images with AI, and built a narrative flow around them. Each visual was selected to evoke emotion and carry forward the central theme of frozen echoes.",
      deliverables: ["Exhibition Prints", "Fine Art Gallery Catalog", "Digital Projection Loop"],
      coverImage: "https://framerusercontent.com/images/8bF2nQq9COJeBd7BfBPuMNZGFDI.png",
      galleryImages: [
        "https://framerusercontent.com/images/8bF2nQq9COJeBd7BfBPuMNZGFDI.png",
        "https://framerusercontent.com/images/04ElzjMSlf8Oo8AlU0B8DhEbcMs.png"
      ]
    },
    {
      slug: "virtual-threads",
      title: "Virtual Threads",
      subtitle: "Where fashion meets the future",
      client: "NEONWEAR",
      year: "2026",
      category: "Digital Streetwear / Campaign",
      about: "Virtual Threads is a conceptual project for NEONWEAR, a fictional fashion label that merges digital culture with contemporary streetwear. The key visual — a man in VR glasses — symbolizes how technology and fashion intersect, shaping new ways of seeing and being seen.",
      overview: "The project explores the idea of fashion as an immersive experience. Instead of presenting clothing as static objects, the concept frames them as part of a digital lifestyle. The VR headset becomes a gateway: fashion is no longer only about fabric, but also about presence, identity, and interaction in both real and virtual world.",
      what_i_did: "I developed the creative direction, generated AI-based visuals, and built a narrative around NEONWEAR’s futuristic brand identity. The result is a campaign concept that positions the brand as forward-thinking, daring, and deeply connected to digital culture.",
      deliverables: ["Streetwear Campaign Visuals", "Brand Assets", "Virtual Apparel Key Art"],
      coverImage: "https://framerusercontent.com/images/XtylORFik5i9NxvFVBcehS2NqL4.png",
      galleryImages: [
        "https://framerusercontent.com/images/XtylORFik5i9NxvFVBcehS2NqL4.png",
        "https://framerusercontent.com/images/XtylORFik5i9NxvFVBcehS2NqL4.png"
      ]
    },
    {
      slug: "timeless-motion",
      title: "Timeless Motion",
      subtitle: "A modern vision of elegance and precision",
      client: "AUREON Watches",
      year: "2026",
      category: "Luxury Campaign / AI Creative Direction",
      about: "Timeless Motion is a conceptual AI-driven project created for AUREON Watches — a fictional brand that blends classic watchmaking with futuristic aesthetics. The central visual — a man’s hand wearing a watch — serves as a metaphor for time as both personal ritual and universal rhythm.",
      overview: "The project reimagines how a luxury watch brand could present itself in the digital era. Using AI, I explored the interplay of materials, light, and detail to create visuals that emphasize craftsmanship while pointing toward the future of wearable design. The imagery focuses on subtle gestures — the weight of the wrist, the shine of the dial — highlighting how timepieces shape identity.",
      what_i_did: "I developed the concept, generated and curated AI imagery, and designed the narrative around AUREON Watches. The process combined mood exploration, visual refinement, and brand positioning, resulting in a story about elegance, innovation, and time.",
      deliverables: ["Visual Strategy", "AI Product Render Keys", "Social Campaign Assets"],
      coverImage: "https://framerusercontent.com/images/t8BMhN5B7yJHHEFLgkt83AQIjQ.png",
      galleryImages: [
        "https://framerusercontent.com/images/t8BMhN5B7yJHHEFLgkt83AQIjQ.png",
        "https://framerusercontent.com/images/XtylORFik5i9NxvFVBcehS2NqL4.png"
      ]
    },
    {
      slug: "into-the-virtual",
      title: "Into the Virtual",
      subtitle: "Blurring the line between reality and simulation",
      client: "INCOR",
      year: "2025",
      category: "Creative Direction / AI Art Direction",
      about: "Into the Virtual is an AI-generated visual project exploring the boundary between physical identity and digital immersion. The central image — a woman wearing VR glasses — symbolizes the merge of human presence with artificial environments. The project reflects on how technology reshapes our perception of self and space.",
      overview: "The project started with the question: What does it feel like to step into a world that is not real, yet deeply emotional? Using AI tools, I experimented with textures, lighting, and futuristic elements to capture the moment of transition. The visuals highlight contrast — the human warmth of the subject versus the cold glow of virtual interfaces.",
      what_i_did: "I created the initial concept, generated multiple variations through AI models, and curated the most striking results into a coherent story. The focus was on mood and symbolism: VR as both escape and expansion of human experience.",
      deliverables: ["Visual Narrative", "AI Concept Art Direction", "Interactive Asset Guidelines"],
      coverImage: "https://framerusercontent.com/images/1AdP1iiaPzcWCIFWfFgDApHvnZg.png",
      galleryImages: [
        "https://framerusercontent.com/images/1AdP1iiaPzcWCIFWfFgDApHvnZg.png",
        "https://framerusercontent.com/images/nOD5K6jwxcI0W7vPNHCV21wE.png"
      ]
    }
  ]
};
