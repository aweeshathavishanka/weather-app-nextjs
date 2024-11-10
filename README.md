

---

# Weather Search App 🌦️

Welcome to the **Weather Search App**, a simple yet powerful tool that allows users to search for weather data by city. It leverages the **WeatherAPI** to provide real-time weather information, and comes with a sleek, intuitive user interface built with **React** and **Tailwind CSS**.

## 🌟 Features

- **Real-time Weather Search**: Users can type the name of a city to get weather suggestions.
- **Search Suggestions**: As you type, city name suggestions will appear to help you find the right city.
- **Weather Data**: Upon selecting a city, you will be able to submit the city and display the weather information for it.
- **Error Handling**: Clear error messages when the city input is invalid or when the API request fails.

## 🛠️ Technologies Used

- **React.js** – A powerful front-end library for building user interfaces.
- **Tailwind CSS** – A utility-first CSS framework for rapid UI development.
- **Axios** – A promise-based HTTP client for making API requests.
- **WeatherAPI** – A reliable weather data API that provides global weather forecasts and data.

## 🚀 Getting Started

To get started with the project locally, follow these steps:

### Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/weather-search-app.git
cd weather-search-app
```

2. **Install dependencies**:

```bash
npm install
```

3. **Create a `.env` file** in the root of the project directory and add your WeatherAPI key:

```bash
REACT_APP_WEATHER_API_KEY=your-weather-api-key-here
```

4. **Run the application**:

```bash
npm start
```

This will start the development server, and you can visit the app at [http://localhost:3000](http://localhost:3000).

## 🌍 How It Works

1. **User Input**: As the user types the name of a city, the app makes API calls to fetch city name suggestions from **WeatherAPI**.
2. **Suggestions Display**: If the input matches a valid city, the app shows the city names as suggestions.
3. **City Selection**: The user selects a city from the suggestions, and the app fetches the weather data for the selected city.
4. **Form Submission**: On form submission, the app hides suggestions and logs the city name.

### API Request

The API call is made to:

```bash
https://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}
```

This returns a list of cities matching the query, which are then displayed as suggestions.

## 🖼️ Screenshots

![Search Input](https://via.placeholder.com/800x400?text=Search+Input)
*Search for a city*

![Suggestions Dropdown](https://via.placeholder.com/800x400?text=Suggestions+Dropdown)
*City suggestions after typing*

## 💡 Future Enhancements

- **Detailed Weather Information**: Add more detailed weather information (temperature, humidity, forecast, etc.) for each city.
- **Weather Icons**: Display weather icons based on the current weather for the selected city.
- **Unit Toggle**: Allow users to toggle between Celsius and Fahrenheit.
- **Error Handling Enhancements**: Provide more specific error messages if the API request fails or if the user types an invalid city name.

## 📝 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 💬 Questions or Feedback?

If you have any questions, suggestions, or feedback, feel free to open an issue on GitHub or reach out to me directly!

---

### 🔧 Development Setup

To start developing on this project, follow these instructions:

1. **Fork the repository** to make your changes and submit pull requests.
2. **Run tests**: Add unit tests using libraries such as Jest to test your app.
3. **Push Changes**: After making improvements, push your changes to your fork and open a pull request for review.

---

## 🎨 Contributing

Contributions are welcome! If you'd like to contribute, feel free to fork the repo, create a new branch, and make your changes. When you're ready, submit a pull request.

---
