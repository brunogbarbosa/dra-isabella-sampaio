export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export const site = {
  "name": "Isabella Sampaio",
  "monogram": "IS",
  "headline": "A sua melhor versão começa por aqui.",
  "cro": "",
  "bio": "Isabella Sampaio de Sousa. Biomédica Esteta e Patologia Clínica. Um olhar atento para a beleza que já é sua, com cuidado individualizado e respeito à sua essência.",
  "education": [],
  "specialties": [
    "Biomedicina Estética"
  ],
  "phone": "+55 (17) 99669-1310",
  "whatsapp": "5517996691310",
  "whatsappUrl": "",
  "address": "",
  "professionalPhilosophy": "",
  "instagram": "https://www.instagram.com/draisabellasampaio/",
  "instagramHandle": "@draisabellasampaio",
  "philosophy": [
    "SUA BELEZA.",
    "SUA ESSÊNCIA.",
    "SEU TEMPO."
  ],
  "colors": {
    "paper": "#faf6ef",
    "ink": "#38191d",
    "taupe": "#80534b",
    "champagne": "#d8bb75",
    "dark": "#38191d"
  },
  "images": {
    "hero": "/images/isabella-hero.webp",
    "about": "/images/isabella-sobre.webp",
    "beauty": "/images/isabella-hero.webp"
  },
  "procedures": [],
  "office": [],
  "testimonials": [] as Testimonial[],
  "results": {
    "enabled": true,
    "items": [
      {
        "image": "/images/resultado-1.webp",
        "label": "Harmonia do perfil",
        "alt": "Antes e depois: harmonia do perfil. Registro enviado para o site da Dra. Isabella Sampaio.",
        "orientation": "horizontal",
        "beforeShare": 0.4665109034267913,
        "comparisonRatio": 0.5385220125786163
      },
      {
        "image": "/images/resultado-2.webp",
        "label": "Contornos da face",
        "alt": "Antes e depois: contornos da face. Registro enviado para o site da Dra. Isabella Sampaio.",
        "orientation": "vertical",
        "beforeShare": 0.500625,
        "comparisonRatio": 1.595505617977528
      },
      {
        "image": "/images/resultado-3.webp",
        "label": "Um olhar para os detalhes",
        "alt": "Antes e depois: um olhar para os detalhes. Registro enviado para o site da Dra. Isabella Sampaio.",
        "orientation": "vertical",
        "beforeShare": 0.5078318219291014,
        "comparisonRatio": 2.0844155844155843
      },
      {
        "image": "/images/resultado-4.webp",
        "label": "Expressão e naturalidade",
        "alt": "Antes e depois: expressão e naturalidade. Registro enviado para o site da Dra. Isabella Sampaio.",
        "orientation": "horizontal",
        "beforeShare": 0.4992211838006231,
        "comparisonRatio": 0.5240423797881011
      },
      {
        "image": "/images/resultado-5.webp",
        "label": "Cuidado com a firmeza",
        "alt": "Antes e depois: cuidado com a firmeza. Registro enviado para o site da Dra. Isabella Sampaio.",
        "orientation": "vertical",
        "beforeShare": 0.4975,
        "comparisonRatio": 1.5522388059701493
      },
      {
        "image": "/images/resultado-6.webp",
        "label": "Pele em evidência",
        "alt": "Antes e depois: pele em evidência. Registro enviado para o site da Dra. Isabella Sampaio.",
        "orientation": "vertical",
        "beforeShare": 0.5095087163232963,
        "comparisonRatio": 1.9611197511664074
      },
      {
        "image": "/images/resultado-7.webp",
        "label": "Textura e uniformidade",
        "alt": "Antes e depois: textura e uniformidade. Registro enviado para o site da Dra. Isabella Sampaio.",
        "orientation": "horizontal",
        "beforeShare": 0.5101246105919003,
        "comparisonRatio": 0.41693189051559515
      },
      {
        "image": "/images/resultado-8.webp",
        "label": "Delicadeza nos lábios",
        "alt": "Antes e depois: delicadeza nos lábios. Registro enviado para o site da Dra. Isabella Sampaio.",
        "orientation": "vertical",
        "beforeShare": 0.5012610340479193,
        "comparisonRatio": 1.6150943396226416
      },
      {
        "image": "/images/resultado-9.webp",
        "label": "Cuidado capilar",
        "alt": "Antes e depois: cuidado capilar. Registro enviado para o site da Dra. Isabella Sampaio.",
        "orientation": "horizontal",
        "beforeShare": 0.50251677852349,
        "comparisonRatio": 0.374375
      }
    ]
  },
  "seo": {
    "title": "Dra. Isabella Sampaio | Biomedicina Estética",
    "description": "A sua melhor versão começa por aqui. Conheça a Dra. Isabella Sampaio, explore os resultados e agende sua avaliação pelo WhatsApp.",
    "url": ""
  }
};
export const appointmentUrl = 'https://wa.me/'+site.whatsapp+'?text='+encodeURIComponent('Olá, Dra. Isabella! Gostaria de agendar uma avaliação.');
