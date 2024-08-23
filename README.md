# Financial Data Platform

## Overview
The **Financial Data Platform** is a web application designed to help users manage their stock portfolios and conduct in-depth financial analysis. Built with a service-oriented architecture, the platform offers an intuitive user interface for portfolio management, access to real-time stock data, and essential financial metrics. The system retrieves data from a third-party financial API when stock information is not available in the local database.

## Features
- **Portfolio Management**: Add and remove stocks from your portfolio with ease.
- **Real-Time Stock Data**: Automatically fetches missing stock data from the Financial Modeling Prep API.
- **Financial Analysis**: View key metrics such as dividends, market capitalization, and more for detailed financial insights.
- **User-Friendly Interface**: Designed to be simple yet powerful, suitable for investors at any level.

## System Architecture
The platform uses a **service-oriented architecture**, ensuring a modular and scalable design:
- **Backend**: .NET Web API
- **Frontend**: React with TypeScript
- **Database**: Microsoft SQL Server
- **Authentication**: JWT (JSON Web Tokens) for secure authorization

## Technologies Used
- **.NET Web API**: Powers the backend services, handles business logic, and manages data.
- **React with TypeScript**: Creates a dynamic and responsive user interface.
- **Microsoft SQL Server**: Stores user portfolios, stock data, and financial metrics.
- **JWT Tokens**: Secures user data and manages authentication.

## Setup and Installation

### Prerequisites
- .NET SDK
- Node.js
- SQL Server
- API key from [Financial Modeling Prep](https://site.financialmodelingprep.com/developer/docs)

### Setup the Project
 Clone the repository:
   ```bash
   git clone https://github.com/ns29248/StocksProject

2. Configure the database connection string in `appsettings.json`.

3. Run the migrations to set up the database:

    ```bash
    dotnet ef database update
    ```

4. Start the backend server:

    ```bash
    dotnet run
    ```

 Install dependencies:

    ```bash
    npm install
    ```

 Create an `.env` file and add the backend API URL and the Financial Modeling Prep API key.

 Start the frontend development server:

    ```bash
    npm start
    ```

## Usage

Once both the backend and frontend servers are running, users can:
- Create and manage portfolios.
- Add and remove stocks from their portfolios.
- View real-time financial data for stocks.
- The system automatically fetches missing stock data from the Financial Modeling Prep API and stores it in the database.

## Limitations

- No user roles or differentiated permissions.
- Real-time stock price updates are not continuously provided after the initial retrieval.
- Limited to basic financial metrics and analysis.

## Future Work

- **User Roles and Permissions**: Introduce admin and premium user roles.
- **Real-Time Updates**: Implement continuous stock price updates.
- **Advanced Financial Tools**: Add predictive modeling and trend analysis features.
- **Mobile Application**: Develop a mobile app for easier access to the platform.

## Conclusion

The Financial Data Platform is a robust tool for managing stock portfolios and analyzing financial data. It simplifies portfolio management by offering real-time data and key financial metrics. With planned enhancements, the platform aims to become even more powerful and user-friendly for investors of all levels.

---

Feel free to adjust the repository links and add any additional information specific to your project. Let me know if you'd like any further changes!

