# SkySync - Weather Research Web App

![SkySync Logo](/public/assets/relicon.svg)

SkySync is a web application designed for researching the current weather and forecasts in cities around the world.

## Features

- **Real-time Weather Data:** Get the latest weather updates for cities worldwide.
- **Forecast:** Access accurate weather forecasts to plan ahead.

## Technologies Used

- **React:** A popular JavaScript library for building user interfaces.
- **Vite:** A fast and efficient front-end build tool.
- **Stitches:** A utility-first CSS-in-JS library for styling React components.
- **Docker:** Simplify deployment and containerization of the application.
- **TypeScript:** Adds static typing to the JavaScript language.
- **Axios:** A promise-based HTTP client for making requests.
- **Dayjs:** A minimalist JavaScript library for date and time manipulation.
- **Phosphor icons:** A flexible icon set for web applications.
- **Cypress:** End-to-end testing framework.
- **Vitest:** A lightweight and fast testing library.

## Installation

To get started with SkySync, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:ThaSMorato/sky-sync.git
   cd sky-sync
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

After installation, you need to add an `.env` file with an api key from `weatherapi.com` then you can run the following commands:

- **Development Server:**
  ```bash
  npm run dev
  ```

- **Production Build:**
  ```bash
  npm run build
  ```

## Docker

To run the application using Docker, use the following commands:

1. **Build the Docker image:**
   ```bash
   docker build -t skysync-app .
   ```

2. **Run the Docker container:**
   ```bash
   docker run -p 8080:8080 skysync-app
   ```

The application will be accessible at `http://localhost:8080` in your browser.

## Docker Compose

To run the application using Docker compose, use the following commands:

1. **Run the Docker compose:**
   ```bash
   docker-compose up
   ```

The application will be accessible at `http://localhost:8080` in your browser.

## Testing

SkySync comes with end-to-end tests using Cypress and Vitest. Run the tests with the following command:

```bash
npm run test && npm run test:e2e
```

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to create an issue or submit a pull request.

## ToDos

- Responsive Design
