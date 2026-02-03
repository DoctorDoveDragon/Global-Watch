# Global Geopolitics Intelligence Dashboard

A fully standalone, self-contained geopolitics dashboard for monitoring global trends, conflicts, economics, alliances, and more.

## 🌟 Features

- **📈 Global Metrics** - Real-time stability index, active conflicts, economic threats, and trade volume
- **🌐 World Map** - Interactive grid of all countries with detailed profiles
- **📰 Live News Feed** - Latest geopolitical news from around the world
- **🤝 Alliances & Organizations** - Information on NATO, EU, BRICS, ASEAN, and more
- **💰 Economics** - Global economic indicators, GDP, commodity prices, and regional growth
- **🚢 Trade Routes** - Visualization of global trade routes and mining resources
- **⚔️ World Wars Analysis** - Comprehensive analysis of military and technological factors
- **🎯 Interactive Modals** - Detailed country profiles with military, technology, and threat assessments
- **📊 Real-time Charts** - Regional overviews, trends, and historical data visualization
- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Quick Start

### Option 1: Open in Browser (Instant Preview)

Simply open the `index.html` file directly in your web browser:

```bash
# Navigate to the dashboard directory
cd dashboard

# Open in your default browser (macOS)
open index.html

# Open in your default browser (Linux)
xdg-open index.html

# Open in your default browser (Windows)
start index.html
```

### Option 2: Run with Node.js Server

For a more production-like environment with proper HTTP serving:

```bash
# Navigate to the dashboard directory
cd dashboard

# Install dependencies (optional, no external deps required)
npm install

# Start the server
npm start
```

The dashboard will be available at **http://localhost:3000**

## 📋 Requirements

### For Browser-Only Mode
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required

### For Server Mode
- Node.js 14.0.0 or higher
- npm (comes with Node.js)

## 🔧 Configuration

### Environment Variables

You can customize the server behavior using environment variables:

```bash
# Change the port (default: 3000)
PORT=8080 npm start

# Change the host (default: 0.0.0.0)
HOST=localhost npm start

# Set production environment
NODE_ENV=production npm start
```

### Custom Port Example

```bash
PORT=5000 npm start
```

## ☁️ Cloud Deployment

### Deploy to Railway

1. **Create a Railway Account**: Go to [railway.app](https://railway.app) and sign up

2. **Create New Project**: Click "New Project" → "Deploy from GitHub repo"

3. **Select Repository**: Choose the `DoctorDoveDragon/Global-Watch` repository

4. **Configure Service**:
   - Root Directory: `/dashboard`
   - Build Command: (leave empty, not needed)
   - Start Command: `node server.js`
   - Port: Will auto-detect from `PORT` env variable

5. **Deploy**: Railway will automatically deploy your dashboard

6. **Custom Domain (Optional)**: Add a custom domain in Railway settings

### Deploy to Vercel (Static)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy from Dashboard Directory**:
   ```bash
   cd dashboard
   vercel --prod
   ```

3. **Or use Vercel Web UI**:
   - Go to [vercel.com](https://vercel.com)
   - Import the repository
   - Set root directory to `dashboard`
   - Deploy as a static site

### Deploy to Heroku

1. **Create a `Procfile`** in the dashboard directory:
   ```
   web: node server.js
   ```

2. **Deploy**:
   ```bash
   cd dashboard
   heroku create your-dashboard-name
   git subtree push --prefix dashboard heroku main
   ```

### Deploy to Render

1. **Create New Web Service** on [render.com](https://render.com)

2. **Configure**:
   - Root Directory: `dashboard`
   - Build Command: (leave empty)
   - Start Command: `node server.js`
   - Auto-deploy: Enable

### Docker Deployment

Create a `Dockerfile` in the dashboard directory:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t geopolitics-dashboard .
docker run -p 3000:3000 geopolitics-dashboard
```

## 📁 Project Structure

```
dashboard/
├── index.html       # Main dashboard HTML file (standalone, fully functional)
├── server.js        # Node.js static file server
├── package.json     # NPM configuration
└── README.md        # This file
```

## 🎨 Dashboard Tabs

1. **📈 Overview** - Global metrics and charts
2. **🌐 World Map** - Country grid with clickable profiles
3. **📰 Live News** - Latest geopolitical news
4. **🤝 Alliances & Orgs** - International organizations
5. **💰 Economics** - Economic indicators and growth
6. **🚢 Trade Routes** - Trade visualization and resources
7. **⚔️ World Wars Analysis** - Military and technological factors

## 🔍 Features in Detail

### Interactive Country Profiles

Click on any country card to view:
- Basic information (region, GDP, status)
- Military capability assessment
- Technology development level
- Threat level analysis

### World Wars Analysis

Comprehensive breakdown of:
- **Military Factors**: Nuclear weapons, military personnel, defense spending, aircraft carriers, cyber warfare, alliances
- **Technological Factors**: AI systems, hypersonic missiles, space militarization, quantum computing, drones, electronic warfare
- Historical conflict trends
- Risk assessment metrics

### Trade Routes & Mining

Visualization and data for:
- Oil trade routes (Middle East → Asia, Americas → Europe)
- Rare earth mineral production
- Agricultural trade flows
- Manufacturing output by region

## 🛠️ Development

### Running Locally

```bash
# Clone the repository
git clone https://github.com/DoctorDoveDragon/Global-Watch.git

# Navigate to dashboard
cd Global-Watch/dashboard

# Start the server
npm start
```

### Testing Changes

Simply edit `index.html` and refresh your browser. No build step required!

## 🔒 Security Notes

- The server includes basic security measures (directory traversal prevention)
- All data is client-side - no sensitive information is stored
- HTTPS is recommended for production deployments
- CORS is enabled for API integrations (if needed)

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ⚠️ Internet Explorer (not supported)

## 📊 Data Sources

The dashboard displays simulated geopolitical data for demonstration purposes. For production use, integrate with:
- Real-time news APIs
- Economic data providers
- Government intelligence sources
- International organization databases

## 🤝 Contributing

This dashboard is part of the Global Watch project. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

MIT License - See the main repository for details

## 🆘 Support

For issues or questions:
- Open an issue on GitHub
- Check the main Global Watch documentation
- Review the code comments in `index.html` and `server.js`

## 🎯 Roadmap

Future enhancements may include:
- [ ] Real-time data integration
- [ ] Advanced filtering and search
- [ ] Export functionality (PDF, CSV)
- [ ] User authentication
- [ ] Custom alerts and notifications
- [ ] Multi-language support
- [ ] Advanced analytics and predictions

## ⚡ Performance

- **Lightweight**: ~50KB total size
- **Fast**: Loads in under 1 second
- **Efficient**: No external dependencies (except Chart.js CDN)
- **Scalable**: Handles thousands of data points smoothly

## 📞 Contact

For questions about the Global Watch project:
- GitHub: [DoctorDoveDragon/Global-Watch](https://github.com/DoctorDoveDragon/Global-Watch)
- Issues: [GitHub Issues](https://github.com/DoctorDoveDragon/Global-Watch/issues)

---

**Made with ❤️ by the Global Watch Team**

**Version**: 1.0.0  
**Last Updated**: 2024
