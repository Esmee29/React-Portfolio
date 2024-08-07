/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'sky-50': '#f0f9ff',
          'sky-100': '#e0f2fe',
          'sky-200': '#bae6fd',
          'sky-300': '#7dd3fc',
          'sky-400': '#38bdf8',
          'sky-500': '#0ea5e9',
          'sky-600': '#0284c7',
          'sky-700': '#0369a1',
          'sky-800': '#075985',
          'sky-900': '#0c4a6e',
          'blue-50': '#eff6ff',
          'blue-100': '#dbeafe',
          'blue-200': '#bfdbfe',
          'blue-300': '#93c5fd',
          'blue-400': '#60a5fa',
          'blue-500': '#3b82f6',
          'blue-600': '#2563eb',
          'blue-700': '#1d4ed8',
          'blue-800': '#1e40af',
          'blue-900': '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}
