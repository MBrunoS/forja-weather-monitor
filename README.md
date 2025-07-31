# 🌤️ Weather Dashboard

A modern and interactive dashboard to monitor the real-time weather of your favorite cities. Developed with React as a practical project for a beginner's immersion.

![Weather Dashboard](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.11-38B2AC?logo=tailwind-css)
![API](https://img.shields.io/badge/API-OpenWeatherMap-orange)

## ✨ Features

- 🔍 **City Search**: Search and add cities to your dashboard
- 🌡️ **Temperature Conversion**: Switch between Celsius and Fahrenheit
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- 📊 **5-Day Forecast**: View the extended weather forecast
- 🎨 **Modern Interface**: Clean and intuitive design

## 🛠️ Technologies Used

- **React 19** - Main library
- **Tailwind CSS** - Utility-first styling
- **OpenWeatherMap API** - Weather data
- **Context API** - Global state management
- **Custom Hooks** - Reusable logic

## 🚀 React Concepts Covered

This project was developed to demonstrate the main concepts of React:

### Fundamentals

- ✅ Functional components and props
- ✅ Conditional rendering and lists
- ✅ State with `useState`
- ✅ Side effects with `useEffect`
- ✅ Component lifecycle
- ✅ Event and form handling

### Advanced Hooks

- ✅ `useMemo` for calculation optimization
- ✅ `useCallback` for function optimization
- ✅ Custom Hooks for reusable logic

### Context API

- ✅ `createContext` and `useContext`
- ✅ Providers for global state

### HTTP Requests

- ✅ Integration with external APIs
- ✅ Loading states and error handling
- ✅ Services pattern for organization

## 📦 Installation and Usage

### Prerequisites

- Node.js 20+
- npm, yarn or pnpm
- OpenWeatherMap account to get the API key

### Step by step

1. **Clone the repository**

```bash
git clone https://github.com/seu-usuario/weather-dashboard.git
cd weather-dashboard
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Configure environment variables**

```bash
cp .env.example .env
```

Edit the `.env` file and add your API key:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Access the project**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔑 Getting the API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Create a free account
3. Go to "API Keys" in your profile
4. Copy your key and add it to the `.env` file

## 🎯 Next Steps

### Suggested Improvements

- [ ] Temperature charts with Chart.js
- [ ] Temperature history
- [ ] Favorite specific cities
- [ ] Forecast sharing
- [ ] PWA (Progressive Web App)
- [ ] Unit tests with Jest/Testing Library

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📚 Learning Resources

### Official Documentation

- [React Docs](https://react.dev/) - Official React documentation
- [OpenWeatherMap API](https://openweathermap.org/api) - API documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - Tailwind documentation

### Related Tutorials

- [React Hooks Explained](https://react.dev/reference/react/hooks)
- [Context API Guide](https://react.dev/learn/passing-data-deeply-with-context)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

Developed during the **React Immersion for Beginners**

- **Instructor**: Maurício Bruno

---

⭐ If this project helped you, consider giving it a star!
