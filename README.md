# Cloud Pingr 🌍

A modern, interactive cloud latency measurement tool with a beautiful 3D globe interface. Measure and compare response times from your location to data centers of major cloud providers worldwide.

![Cloud Pingr](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- **Interactive 3D Globe**: Visualize all cloud provider regions on a rotating 3D globe
- **Real-time Latency Testing**: Measure ping times to 100+ cloud regions simultaneously
- **Multi-Provider Support**: Compare latency across major cloud providers:
  - Amazon Web Services (AWS)
  - Google Cloud Platform (GCP)
  - DigitalOcean
  - Hetzner
  - IBM Cloud
  - Linode
  - OVH Cloud
  - Scaleway
  - Vultr
  - CoreWeave
- **Smart Visualization**: Color-coded pins based on latency (green = fast, red = slow)
- **Filter & Sort**: Filter by provider and automatically sort regions by latency
- **Auto-Rotation**: Globe automatically rotates and focuses on selected regions
- **Minimal UI**: Clean, distraction-free interface with shadcn/ui components

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cloud-pingr.git
cd cloud-pingr
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[react-globe.gl](https://github.com/vasturiano/react-globe.gl)** - 3D globe visualization
- **[Three.js](https://threejs.org/)** - 3D graphics engine

## 📖 How It Works

Cloud Pingr measures latency by making HTTP requests to various cloud provider endpoints and measuring the round-trip time. The measurements are performed directly from your browser, so results reflect the actual latency from your current location.

### Latency Color Coding

- 🟢 **Green** (< 50ms): Excellent
- 🟢 **Lime** (50-100ms): Good  
- 🟡 **Yellow** (100-200ms): Moderate
- 🟠 **Orange** (200-300ms): Slow
- 🔴 **Red** (> 300ms): Very Slow
- ⚫ **Gray**: Not tested or unavailable

## 🎯 Usage

1. Click the **"Ping All Regions"** button to start measuring latency to all regions
2. Use the provider filter badges to focus on specific cloud providers
3. Click on any region card to focus the globe on that location
4. Click on pins on the globe to select regions
5. View statistics at the bottom showing reachable regions, average latency, and best latency

## 📝 Project Structure

```
cloud-pingr/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with UI logic
│   └── globals.css         # Global styles
├── components/
│   ├── Globe.tsx           # 3D globe component
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── regions.ts          # Cloud provider region data
│   ├── ping.ts             # Latency measurement logic
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by [cloudping.info](https://www.cloudping.info/)
- Globe textures from [three-globe](https://github.com/vasturiano/three-globe)
- Cloud provider data from official documentation

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This tool provides approximate latency measurements for educational and comparative purposes. Actual production latency may vary based on many factors including routing, load, and network conditions.
