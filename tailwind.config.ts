import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		spacing: {
  			xs: '4px',
  			sm: '8px',
  			md: '16px',
  			lg: '32px',
  			xl: '64px',
  			xxl: '128px'
  		},
  		fontFamily: {
  			sans: [
  				'Poppins',
  				'Arial',
  				'sans-serif'
  			],
  			serif: [
  				'Merriweather',
  				'serif'
  			],
  			mono: [
  				'Courier New',
  				'monospace'
  			]
  		},
  		fontSize: {
  			xs: '0.75rem',
  			sm: '0.875rem',
  			base: '1rem',
  			lg: '1.125rem',
  			xl: '1.25rem',
  			'2xl': '1.5rem',
  			'3xl': '1.875rem',
  			'4xl': '2.25rem',
  			'5xl': '3rem'
  		},
  		boxShadow: {
  			light: '0 2px 4px rgba(0, 0, 0, 0.1)',
  			medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
  			heavy: '0 10px 15px rgba(0, 0, 0, 0.2)'
  		},
  		backgroundColor: {
  			page: 'hsl(var(--background))',
  			card: 'hsl(var(--card))',
  			button: 'hsl(var(--primary))',
  			buttonHover: 'hsl(var(--primary-foreground))'
  		},
  		zIndex: {
  			top: 100,
  			middle: 50,
  			bottom: 10
  		},
  		transitionDuration: {
  			DEFAULT: '150ms',
  			fast: '75ms',
  			slow: '300ms'
  		},
  		animation: {
  			fadeIn: 'fadeIn 0.5s ease-out',
  			bounce: 'bounce 1s ease infinite',
  			pulse: 'pulse var(--duration) ease-out infinite',
  			rippling: 'rippling var(--duration) ease-out'
  		},
  		keyframes: {
  			pulse: {
  				'0%, 100%': {
  					boxShadow: '0 0 0 0 var(--pulse-color)'
  				},
  				'50%': {
  					boxShadow: '0 0 0 8px var(--pulse-color)'
  				}
  			},
  			rippling: {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'scale(2)',
  					opacity: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
