/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'brand-yellow': '#F5C518', // Vibrant Movie Yellow
                'brand-dark': '#101010',
                'brand-gray': '#2b2d42',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Anton', 'sans-serif'], // Example bold font
            },
        },
    },
    plugins: [],
}
