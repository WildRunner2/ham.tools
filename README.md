# SP3FCK Ham Tools

A React + TypeScript frontend application for amateur radio enthusiasts, featuring a photo gallery with QRZ.com iframe integration.

## Features

- 🏠 **Home Page** - Welcome page with feature overview
- 📸 **Photo Gallery** - Browse ham radio photos with database integration
- 🔗 **QRZ.com Integration** - Configure custom iframes for QRZ.com profiles
- 🔧 **Useful Links** - Curated amateur radio resources
- 🔐 **Authentication** - Login/Register system for advanced features
- 🌙 **Dark Theme** - Ham radio themed dark UI design
- 📱 **Responsive** - Mobile-friendly design

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS Custom Properties (CSS Variables)
- **Backend**: Vercel (planned)
- **Database**: MongoDB (planned)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/WildRunner2/ham.tools.git
cd ham.tools
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Gallery.tsx     # Photo gallery
│   ├── UsefulLinks.tsx # Links collection
│   ├── Login.tsx       # Authentication
│   ├── Register.tsx    # User registration
│   └── IframeConfig.tsx # Iframe configuration
├── styles/             # CSS files
│   ├── index.css       # Global styles
│   └── App.css         # App-specific styles
└── utils/              # Utility functions
```

## Features Overview

### Photo Gallery
- Display photos from MongoDB database via Vercel backend
- Photo selection for iframe configuration
- Responsive grid layout
- Photo metadata and tagging

### QRZ.com Integration
- Configure custom iframe dimensions
- Select multiple photos for slideshow
- Auto-play and manual controls
- Generate embed code for QRZ.com profiles
- Public access (no login required for viewing)

### Authentication System
- User registration with callsign validation
- Login/logout functionality
- Password reset capability
- Protected routes for configuration features

### Useful Links
- Curated amateur radio resources
- Organized by categories
- Direct links to external tools and websites

## Deployment

### Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Manual Build

```bash
npm run build
```

The `dist` folder contains the production build.

## Backend Integration

The frontend is designed to work with a Vercel backend API for:

- Photo storage and retrieval
- User authentication
- Iframe configuration management
- MongoDB database operations

API endpoints (to be implemented):
- `GET /api/photos` - Retrieve photos
- `POST /api/auth/login` - User authentication
- `POST /api/auth/register` - User registration
- `GET /api/iframe-config` - Get iframe configurations
- `POST /api/iframe-config` - Save iframe configurations

## Customization

### Theme Colors

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --accent-primary: #ff6b35;    /* Ham radio orange */
  --accent-secondary: #4dabf7;  /* Link blue */
  --bg-primary: #121212;        /* Dark background */
  --text-primary: #ffffff;      /* Primary text */
}
```

### Callsign Branding

Update the callsign in:
- `src/components/Header.tsx` - Navigation logo
- `src/components/Footer.tsx` - Footer contact info
- `src/pages/Home.tsx` - Hero section

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Callsign**: SP3FCK
- **QRZ**: [qrz.com/db/SP3FCK](https://www.qrz.com/db/SP3FCK)

## Acknowledgments

- Built for the amateur radio community
- Inspired by QRZ.com integration needs
- Dark theme optimized for ham shack environments

---

**73!** 📻
ham radio operator tools
