# Wezo - Weather App 🌦️🌍✨

Welcome to **Wezo**, an interactive weather app that provides accurate and up-to-date weather information for any location. Built with vanilla JavaScript, Wezo dynamically updates the screen based on user input. 🌟🌐💻

---

## Features ✨🚀

- **Search by Location**: Enter the name of any city to get real-time weather data.
- **Dynamic Updates**: The app fetches weather data from an API and updates the screen seamlessly.
- **Optimized Performance**: Cached data usage to minimize repeated API calls.
- **Responsive Design**: Optimized for various screen sizes and devices.

---

## Installation ⚙️📥🔧

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mostafafinal/Weather-App.git
   cd Weather-App
   ```

2. **Install Dependencies** (if applicable)

   ```bash
   npm install
   ```

3. **Run the App**
   ```bash
   npm run build && netlify dev
   ```
   The app will be accessible at `http://localhost:3999`. 🌐🚀📊

---

## Project Structure 🗂️📁🔍

```plaintext
Weather-App/
├── LICENSE
├── README.md
├── netlify
│   └── functions
├── netlify.toml
├── package.json
├── src
│   ├── assets
│   ├── fetch-data
│   ├── helpers
│   ├── index.html
│   ├── main.js
│   ├── render-data
│   └── style.css
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

### Detailed Breakdown 🧩🔬📘

- **`src` Directory**:

  - **`fetch-data`**: Modules for fetching weather data from the API.
  - **`helpers`**: Utility functions such as date formatting, handling loaders, and DOM element creation.
  - **`render-data`**: Modules for rendering dynamic components like current conditions, future forecasts, and location details.
  - **`index.html`**: The main HTML file for the app.
  - **`main.js`**: Entry point for JavaScript functionality.
  - **`style.css`**: Custom styles for the app.

- **Webpack Configuration**:
  - Common, development, and production configurations to optimize builds, minify CSS/JS, and enable efficient bundling. 🛠️📦⚡

---

## Key Design Principles 🎨📐💡

Wezo adheres to modern development principles for maintainability and scalability: 🌟🛠️🚀

- **Module Pattern**: Code is modularized into self-contained units.
- **Separation of Concerns**: Each module has a single responsibility, improving readability and testability.
- **Function Composition**: Small, reusable functions are composed to build complex features.
- **State Management**: Utilizes the Pub-Sub pattern for decoupling state changes and rendering logic.
- **CSS Modern Practices**: Employs container queries and custom properties for flexible styling.

---

## Technologies Used 🌐🔧🚀

- **Frontend**: HTML, CSS, JavaScript
- **API Integration**: Weather API for fetching current and future weather data.
- **Build Tools**: Node.js, Webpack (with plugins for CSS minification, HTML injection, Terser, and Compression using Brotli). 💻🔍✨

---

## Roadmap 🛣️✨🌟

- [x] Integrate weather API | Done with [Weather API](weatherapi.com)
- [ ] Integrate geolocation API for detecting user's location

---

## Contributing 🤝🌟💡

Contributions are welcome! If you’d like to contribute: 🛠️📜🚀

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and open a pull request.

---

## License 📜⚖️🔓

This project is licensed under the [MIT License](LICENSE). 🎉📜🌟

---

## Contact 📬🌍✨

- **Author**: Mostafa Hasan
- **LinkedIn**: [mostafa-final](https://linkedin.com/in/mostafa-final)
- **GitHub**: [mostafafinal](https://github.com/mostafafinal)
- **Issues**: [Submit Issues Here](https://github.com/mostafafinal/Weather-App/issues)

Feel free to reach out with any questions, feedback, or suggestions! 🌟📧🤝
