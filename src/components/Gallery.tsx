import { createSignal, For } from 'solid-js';

const images = [
    { src: '/GallerySection/HOB Still.jpg', alt: 'Hellbent on Boogie Still' },
    { src: '/GallerySection/HOB Still 2.jpg', alt: 'Movie Still 2' },
    { src: '/GallerySection/HOB Still 7.jpg', alt: 'Movie Still 7' },
    { src: '/GallerySection/HOB Still 9.jpg', alt: 'Movie Still 9' },
    { src: '/GallerySection/HOB Still 12.jpg', alt: 'Movie Still 12' },
    { src: '/GallerySection/HOB Still 14.jpg', alt: 'Movie Still 14' },
    { src: '/GallerySection/HOB Still 16.jpg', alt: 'Movie Still 16' },
    { src: '/GallerySection/_PAV0915 copy.jpg', alt: 'Production Still 1' },
    { src: '/GallerySection/_PAV0948 copy.jpg', alt: 'Production Still 2' },
    { src: '/GallerySection/_PAV1041 copy.jpg', alt: 'Production Still 3' },
    { src: '/GallerySection/_PAV1652 copy.jpg', alt: 'Production Still 4' },
    { src: '/GallerySection/_PAV1724 copy.jpg', alt: 'Production Still 5' },
    { src: '/GallerySection/_PAV2012 copy.jpg', alt: 'Production Still 6' },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = createSignal<string | null>(null);

    return (
        <section class="py-20 bg-black/20 overflow-hidden backdrop-blur-sm">
            <div class="container mx-auto px-4 mb-8">
                <h2 class="text-4xl md:text-5xl font-heading text-white">Gallery</h2>
            </div>

            {/* Horizontal Scroll Container */}
            <div class="w-full overflow-x-auto pb-8 px-4 scrollbar-custom">
                <div class="flex gap-4 min-w-max">
                    <For each={images}>
                        {(image) => (
                            <div
                                class="relative group overflow-hidden cursor-pointer h-64 md:h-80 aspect-[3/2] md:aspect-[16/9] rounded-lg border border-gray-800 flex-shrink-0"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div class="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/20 transition-colors duration-300 flex items-center justify-center">
                                    <span class="opacity-0 group-hover:opacity-100 text-white font-heading text-xl tracking-widest transition-opacity duration-300 drop-shadow-lg">VIEW</span>
                                </div>
                            </div>
                        )}
                    </For>
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage() && (
                <div
                    class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div class="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center">
                        <img
                            src={selectedImage()!}
                            alt="Gallery Fullscreen"
                            class="max-w-full max-h-[90vh] object-contain shadow-2xl border border-gray-800 rounded-sm"
                        />
                        <button
                            class="absolute -top-12 right-0 text-white hover:text-brand-yellow text-4xl font-bold transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            <style>
                {`
          .scrollbar-custom::-webkit-scrollbar {
            height: 8px;
          }
          .scrollbar-custom::-webkit-scrollbar-track {
            background: #1a1a1a;
            border-radius: 4px;
          }
          .scrollbar-custom::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 4px;
          }
          .scrollbar-custom::-webkit-scrollbar-thumb:hover {
            background: #F5C518;
          }
        `}
            </style>
        </section>
    );
}
