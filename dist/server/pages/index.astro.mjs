import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, n as renderScript, o as renderComponent } from '../chunks/astro/server_BSoCfl4K.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { ssr, ssrHydrationKey, escape, createComponent as createComponent$1, ssrAttribute } from 'solid-js/web';
import { createSignal, For } from 'solid-js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="Hellbent on Boogie - A film by Vito Trupiano"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="text-white font-sans antialiased selection:bg-brand-yellow selection:text-white relative min-h-screen"> <!-- Global Background Gradient --> <div class="fixed inset-0 z-[-2] bg-gradient-to-b from-[#F3C969] via-[#D88279] to-[#8B4A75]"></div> <!-- Film Grain Overlay --> <div class="fixed inset-0 z-[-1] opacity-20 pointer-events-none mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/layouts/Layout.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full h-screen overflow-hidden" data-astro-cid-bbe6dxrz> <!-- Background Video Container --> <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none" data-astro-cid-bbe6dxrz> <div class="absolute top-0 left-0 w-full h-full" data-astro-cid-bbe6dxrz> <video autoplay muted loop playsinline class="w-full h-full object-cover scale-[1.35]" data-astro-cid-bbe6dxrz> <source src="/Banners/hero_teaser.mov" type="video/mp4" data-astro-cid-bbe6dxrz> <source src="/Banners/hero_teaser.mov" type="video/quicktime" data-astro-cid-bbe6dxrz>
Your browser does not support the video tag.
</video> </div> <!-- Overlay Gradient to ensure text readability if needed, though we want it gritty --> <div class="absolute inset-0 bg-black/20" data-astro-cid-bbe6dxrz></div> </div> <!-- Content Overlay --> <div id="hero-content" class="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300" data-astro-cid-bbe6dxrz> <!-- Title Image --> <img src="/assests/hellbent title1 copy.png" alt="Hellbent on Boogie Title" class="w-full max-w-4xl mb-12 drop-shadow-[0_0_25px_rgba(245,197,24,0.8)] animate-fade-in" data-astro-cid-bbe6dxrz> <!-- CTA Button --> <a href="#watch" class="inline-block bg-brand-yellow hover:bg-yellow-600 text-black font-heading text-2xl px-10 py-5 rounded uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(245,197,24,0.8)]" data-astro-cid-bbe6dxrz>
Watch Now
</a> </div> <!-- Scroll Indicator --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70 z-20" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-bbe6dxrz></path> </svg> </div> </section> ${renderScript($$result, "C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/components/Hero.astro", void 0);

const $$Synopsis = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-4 bg-black/40 text-white relative overflow-hidden isolate"> <!-- Decorative elements --> <div class="absolute top-0 left-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div> <div class="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div> <div class="container mx-auto px-4 relative z-10"> <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"> <!-- Left Banners --> <div class="hidden md:flex flex-col gap-12 w-1/4 items-center"> <img src="/Banners/New/banner_ciff.png" alt="CIFF Audience Award Winner" class="w-full max-w-[250px] opacity-90 hover:opacity-100 transition-opacity mix-blend-screen"> <img src="/Banners/New/banner_sarasota.png" alt="Sarasota Film Festival Selection" class="w-full max-w-[250px] opacity-90 hover:opacity-100 transition-opacity mix-blend-screen"> <img src="/Banners/New/banner_flickers.png" alt="Flickers Rhode Island Selection" class="w-full max-w-[250px] opacity-90 hover:opacity-100 transition-opacity mix-blend-screen"> </div> <!-- Center Text --> <div class="max-w-3xl text-center flex-1"> <h2 class="text-4xl md:text-5xl font-heading mb-8 text-brand-yellow italic">Just Keep Dancing</h2> <p class="text-lg md:text-xl leading-relaxed text-gray-300 mb-12 font-light">
Alan returns to his hometown and finds his autistic sister Quinn being sheltered by their overbearing mother. Determined to help her pursue her dream of becoming a dancer, Alan hatches a plan for them to run away together.
</p> <div class="aspect-video rounded-lg overflow-hidden shadow-2xl border border-gray-800 bg-black relative z-20" style="transform: translateZ(0);"> <iframe width="100%" height="100%" src="https://www.youtube.com/embed/noaPv8Ocd3U" title="Hellbent on Boogie Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> </div> <!-- Right Banners --> <div class="hidden md:flex flex-col gap-12 w-1/4 items-center"> <img src="/Banners/New/banner_rotterdam.png" alt="Rotterdam Independent Film Festival Winner" class="w-full max-w-[250px] opacity-90 hover:opacity-100 transition-opacity mix-blend-screen"> <img src="/Banners/New/banner_fortmyers.png" alt="Fort Myers Film Festival Winner" class="w-full max-w-[250px] opacity-90 hover:opacity-100 transition-opacity mix-blend-screen"> <img src="/Banners/New/banner_attachment.png" alt="Film Festival Selection" class="w-full max-w-[250px] opacity-90 hover:opacity-100 transition-opacity mix-blend-screen"> </div> </div> <!-- Mobile Banners --> <div class="md:hidden grid grid-cols-2 gap-6 mt-12 place-items-center"> <img src="/Banners/New/banner_ciff.png" alt="CIFF Audience Award Winner" class="w-full max-w-[140px] opacity-90 mix-blend-screen"> <img src="/Banners/New/banner_rotterdam.png" alt="Rotterdam Independent Film Festival Winner" class="w-full max-w-[140px] opacity-90 mix-blend-screen"> <img src="/Banners/New/banner_fortmyers.png" alt="Fort Myers Film Festival Winner" class="w-full max-w-[140px] opacity-90 mix-blend-screen"> <img src="/Banners/New/banner_sarasota.png" alt="Sarasota Film Festival Selection" class="w-full max-w-[140px] opacity-90 mix-blend-screen"> <img src="/Banners/New/banner_flickers.png" alt="Flickers Rhode Island Selection" class="w-full max-w-[140px] opacity-90 mix-blend-screen"> <img src="/Banners/New/banner_attachment.png" alt="Film Festival Selection" class="w-full max-w-[140px] opacity-90 mix-blend-screen"> </div> </div> </section>`;
}, "C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/components/Synopsis.astro", void 0);

const $$ReviewQuotes = createComponent(($$result, $$props, $$slots) => {
  const reviews = [
    {
      quote: "The portrayal of neurodivergence has an authenticity one doesn\u2019t see often in films like this, and Ruibal, who is on the spectrum herself, is amazing and natural in the role (extraordinary, since it is her first film). The exploration of neurodivergence in cinema has a pretty spotty history, although most of these films have good intentions. Hellbent on Boogie points the way forward.",
      author: "RogerEbert",
      publication: ""
    },
    {
      quote: "Hellbent on Boogie is a delightful film that makes audiences feel deeply for its eccentric but relatable characters. The film creates an uplifting, quirky humanistic story that is a celebration of life, with the passion to dance your way through, no matter what the obstacles.",
      author: "Take2indiereview",
      publication: ""
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-black/30 text-white relative overflow-hidden backdrop-blur-sm"> <div class="container mx-auto px-4 relative z-10"> <div class="grid md:grid-cols-3 gap-8">  <div class="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-brand-yellow/50 transition-colors duration-300 backdrop-blur-md flex flex-col h-full relative group"> <div class="text-brand-yellow text-4xl font-serif mb-4 opacity-50">“</div> <p class="text-gray-300 italic mb-6 flex-grow leading-relaxed relative z-10"> ${reviews[0].quote} </p> <div class="text-brand-yellow text-4xl font-serif mt-auto opacity-50 text-right leading-none -mb-4">”</div> <div class="mt-6 border-t border-white/10 pt-4"> <p class="font-heading text-lg text-brand-yellow tracking-wide">${reviews[0].author}</p> </div> </div>  <div class="bg-brand-gray/30 p-8 rounded-lg border border-brand-gray backdrop-blur-sm flex flex-col items-center justify-center text-center h-full"> <p class="text-2xl font-heading mb-4 text-white">Enjoyed the film?</p> <p class="mb-8 text-gray-400 text-lg">Please leave a review — it helps tremendously!</p> <button onclick="document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })" class="inline-block border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide cursor-pointer text-lg">
Leave a Review
</button> </div>  <div class="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-brand-yellow/50 transition-colors duration-300 backdrop-blur-md flex flex-col h-full relative group"> <div class="text-brand-yellow text-4xl font-serif mb-4 opacity-50">“</div> <p class="text-gray-300 italic mb-6 flex-grow leading-relaxed relative z-10"> ${reviews[1].quote} </p> <div class="text-brand-yellow text-4xl font-serif mt-auto opacity-50 text-right leading-none -mb-4">”</div> <div class="mt-6 border-t border-white/10 pt-4"> <p class="font-heading text-lg text-brand-yellow tracking-wide">${reviews[1].author}</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/components/ReviewQuotes.astro", void 0);

var _tmpl$ = ["<section", ' class="py-20 bg-black/20 overflow-hidden backdrop-blur-sm"><div class="container mx-auto px-4 mb-8"><h2 class="text-4xl md:text-5xl font-heading text-white">Gallery</h2></div><div class="w-full overflow-x-auto pb-8 px-4 scrollbar-custom"><div class="flex gap-4 min-w-max">', "</div></div><!--$-->", "<!--/--><style>\n          .scrollbar-custom::-webkit-scrollbar {\n            height: 8px;\n          }\n          .scrollbar-custom::-webkit-scrollbar-track {\n            background: #1a1a1a;\n            border-radius: 4px;\n          }\n          .scrollbar-custom::-webkit-scrollbar-thumb {\n            background: #333;\n            border-radius: 4px;\n          }\n          .scrollbar-custom::-webkit-scrollbar-thumb:hover {\n            background: #F5C518;\n          }\n        </style></section>"], _tmpl$2 = ["<div", ' class="relative group overflow-hidden cursor-pointer h-64 md:h-80 aspect-[3/2] md:aspect-[16/9] rounded-lg border border-gray-800 flex-shrink-0"><img', ' class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"><div class="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/20 transition-colors duration-300 flex items-center justify-center"><span class="opacity-0 group-hover:opacity-100 text-white font-heading text-xl tracking-widest transition-opacity duration-300 drop-shadow-lg">VIEW</span></div></div>'], _tmpl$3 = ["<div", ' class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"><div class="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"><img', ' alt="Gallery Fullscreen" class="max-w-full max-h-[90vh] object-contain shadow-2xl border border-gray-800 rounded-sm"><button class="absolute -top-12 right-0 text-white hover:text-brand-yellow text-4xl font-bold transition-colors">&times;</button></div></div>'];
const images = [{
  src: "/GallerySection/HOB Still.jpg",
  alt: "Hellbent on Boogie Still"
}, {
  src: "/GallerySection/HOB Still 2.jpg",
  alt: "Movie Still 2"
}, {
  src: "/GallerySection/HOB Still 7.jpg",
  alt: "Movie Still 7"
}, {
  src: "/GallerySection/HOB Still 9.jpg",
  alt: "Movie Still 9"
}, {
  src: "/GallerySection/HOB Still 12.jpg",
  alt: "Movie Still 12"
}, {
  src: "/GallerySection/HOB Still 14.jpg",
  alt: "Movie Still 14"
}, {
  src: "/GallerySection/HOB Still 16.jpg",
  alt: "Movie Still 16"
}, {
  src: "/GallerySection/_PAV0915 copy.jpg",
  alt: "Production Still 1"
}, {
  src: "/GallerySection/_PAV0948 copy.jpg",
  alt: "Production Still 2"
}, {
  src: "/GallerySection/_PAV1041 copy.jpg",
  alt: "Production Still 3"
}, {
  src: "/GallerySection/_PAV1652 copy.jpg",
  alt: "Production Still 4"
}, {
  src: "/GallerySection/_PAV1724 copy.jpg",
  alt: "Production Still 5"
}, {
  src: "/GallerySection/_PAV2012 copy.jpg",
  alt: "Production Still 6"
}];
function Gallery() {
  const [selectedImage, setSelectedImage] = createSignal(null);
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent$1(For, {
    each: images,
    children: (image) => ssr(_tmpl$2, ssrHydrationKey(), ssrAttribute("src", escape(image.src, true), false) + ssrAttribute("alt", escape(image.alt, true), false))
  })), selectedImage() && ssr(_tmpl$3, ssrHydrationKey(), ssrAttribute("src", escape(selectedImage(), true), false)));
}

const $$WhereToWatch = createComponent(($$result, $$props, $$slots) => {
  const platforms = [
    {
      name: "Tubi",
      url: "https://link.tubi.tv/TVhquMpcCYb",
      image: "/WhereToWatchImages/tubi.png"
    },
    {
      name: "Amazon Prime",
      url: "https://www.amazon.com/Hellbent-Boogie-Vito-Trupiano/dp/B0F31PSBLF",
      image: "/WhereToWatchImages/amazonPrimeVideo.png"
    },
    {
      name: "Apple TV",
      url: "https://tv.apple.com/us/movie/hellbent-on-boogie/umc.cmc.7c86cjrxm6z7oqhfpxi2fqwjt",
      image: "/WhereToWatchImages/appleTv.png"
    },
    {
      name: "Plex",
      url: "https://watch.plex.tv/movie/hellbent-on-boogie",
      image: "/WhereToWatchImages/plex.jpg"
    },
    {
      name: "YouTube Movies",
      url: "https://youtu.be/id2y_aXdFj0",
      image: "/WhereToWatchImages/youtube.png"
    },
    {
      name: "XUMO Play",
      url: "https://play.xumo.com/networks/gravitas-movies/99991312",
      image: "/WhereToWatchImages/xumo.jpg"
    },
    {
      name: "DVD / Blu-ray",
      url: "https://www.amazon.com/Hellbent-Boogie-DVD-Vito-Trupiano/dp/B0F2X3NL14",
      image: "/WhereToWatchImages/DVDPrime.jpg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="watch" class="py-20 bg-black/20 text-white backdrop-blur-sm"> <div class="container mx-auto px-4"> <h2 class="text-4xl md:text-5xl font-heading text-center mb-12 text-white">Where to Watch</h2> <!-- Streaming Platforms Grid --> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"> ${platforms.map((platform) => renderTemplate`<a${addAttribute(platform.url, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center p-6 rounded-lg border border-white/20 bg-black/40 hover:bg-white/10 hover:border-brand-yellow hover:scale-105 transition-all duration-300 group shadow-lg aspect-video"${addAttribute(platform.name, "aria-label")}> <img${addAttribute(platform.image, "src")}${addAttribute(platform.name, "alt")} class="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"> </a>`)} </div> </div> </section>`;
}, "C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/components/WhereToWatch.astro", void 0);

const $$Reviews = createComponent(($$result, $$props, $$slots) => {
  const reviews = [
    { name: "Rotten Tomatoes", url: "https://www.rottentomatoes.com/m/hellbent_on_boogie", color: "hover:text-[#FA320A]" },
    { name: "Letterboxd", url: "https://letterboxd.com/film/hellbent-on-boogie/", color: "hover:text-[#00E054]" },
    { name: "IMDb", url: "https://www.imdb.com/title/tt17500428/?ref_=ext_shr_lnk", color: "hover:text-[#F5C518]" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="reviews" class="py-20 bg-black/40 text-white border-t border-white/10 backdrop-blur-sm"> <div class="container mx-auto px-4 text-center"> <h2 class="text-4xl md:text-5xl font-heading mb-12">Reviews & Press</h2> <div class="flex flex-wrap justify-center gap-8 mb-16"> ${reviews.map((review) => renderTemplate`<a${addAttribute(review.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`text-2xl md:text-3xl font-bold text-gray-400 transition-colors ${review.color} underline decoration-2 underline-offset-8 decoration-gray-700 hover:decoration-current`, "class")}> ${review.name} </a>`)} </div> <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"> <!-- Director Interview --> <div> <h3 class="text-2xl font-heading mb-6 text-brand-yellow">Director Interview</h3> <div class="aspect-video rounded-lg overflow-hidden shadow-2xl border border-gray-800"> <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ka2TbjR_tTs" title="Director Interview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> </div> <!-- Podcast Interview --> <div> <h3 class="text-2xl font-heading mb-6 text-brand-yellow">Podcast Interview</h3> <div class="aspect-video rounded-lg overflow-hidden shadow-2xl border border-gray-800 bg-black/50 flex flex-col"> <iframe src="https://www.buzzsprout.com/1996398/18249282-sibling-bonds-autism-and-pure-heart-a-talk-with-the-cast-director-of-this-year-s-indie-gem-hellbent-on-boogie?client_source=small_player&iframe=true" loading="lazy" width="100%" height="200" frameborder="0" scrolling="no" title="Hellbent on Boogie Podcast Interview" class="w-full flex-grow"></iframe> <div class="p-4 text-center border-t border-white/10"> <a href="https://www.buzzsprout.com/1996398/episodes/18249282-sibling-bonds-autism-and-pure-heart-a-talk-with-the-cast-director-of-this-year-s-indie-gem-hellbent-on-boogie" target="_blank" rel="noopener noreferrer" class="text-brand-yellow hover:text-white transition-colors font-bold uppercase tracking-wider text-sm">
Listen on Buzzsprout
</a> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/components/Reviews.astro", void 0);

const $$Socials = createComponent(($$result, $$props, $$slots) => {
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/hellbentonboogiefilm?igsh=MTNiamtkMnJlc202Nw==",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    },
    {
      name: "X",
      url: "https://x.com/hellbentonboogiefilm",
      // Assuming X handle matches others or placeholder
      path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61578932908933&mibextid=wwXIfr",
      path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
    },
    {
      name: "YouTube",
      url: "https://youtu.be/ka2TbjR_tTs",
      // Linking to interview or channel
      path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="py-20 bg-black/60 text-white backdrop-blur-md"> <div class="container mx-auto px-4 flex flex-col items-center"> <h3 class="text-4xl font-heading mb-12 uppercase tracking-widest text-center">Follow the Boogie</h3> <div class="flex gap-12 mb-16"> ${socials.map((social) => renderTemplate`<a${addAttribute(social.url, "href")} target="_blank" rel="noopener noreferrer" class="group transition-transform duration-300 hover:scale-110"${addAttribute(social.name, "aria-label")}> <svg viewBox="0 0 24 24" class="w-10 h-10 fill-white transition-colors duration-300 group-hover:fill-brand-yellow" xmlns="http://www.w3.org/2000/svg"> <path${addAttribute(social.path, "d")}></path> </svg> </a>`)} </div> <!-- Distributed By --> <div class="mb-12"> <a href="https://www.radialentertainment.com/gravitas-ventures" target="_blank" rel="noopener noreferrer" class="block hover:opacity-80 transition-opacity duration-300" aria-label="Gravitas Ventures"> <img src="/WhereToWatchImages/gravitas_logo.png" alt="Gravitas Ventures" class="h-12 md:h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"> </a> </div> <p class="text-gray-600 text-sm font-light tracking-wide">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Hellbent on Boogie. All rights reserved.
</p> </div> </footer>`;
}, "C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/components/Socials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hellbent on Boogie | Official Movie Site" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Synopsis", $$Synopsis, {})} ${renderComponent($$result2, "ReviewQuotes", $$ReviewQuotes, {})} ${renderComponent($$result2, "Gallery", Gallery, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/components/Gallery", "client:component-export": "default" })} ${renderComponent($$result2, "WhereToWatch", $$WhereToWatch, {})} ${renderComponent($$result2, "Reviews", $$Reviews, {})} ${renderComponent($$result2, "Socials", $$Socials, {})} </main> ` })}`;
}, "C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/pages/index.astro", void 0);

const $$file = "C:/Users/giuse/OneDrive/Documents/MovieWebsite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
