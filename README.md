# Movie Explorer

Movie Explorer is a responsive web application that allows users to search, browse, and view details about popular movies. Built using React.js, this project fetches movie data from The Movie Database (TMDb) API and displays it in an organized and visually appealing interface. The project features components for displaying movie cards, a modal for detailed information, and pagination for navigating between pages.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Components](#components)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- **Search Functionality**: Users can search for movies by title.
- **Popular Movies Display**: The app showcases a list of popular movies fetched from TMDb.
- **Detailed Movie Modal**: Clicking on a movie opens a modal with details, including title, tagline, overview, genres, production companies, release date, runtime, box office, and rating.
- **Pagination**: Navigate through multiple pages of movies with "Previous" and "Next" buttons.
- **Responsive Design**: Fully responsive design for an optimal user experience across different devices.
  
## Screenshots

![Web View](./screenshots/Movie%20Explorer%20Web%20View.png)
![Mobile View](./screenshots/Movie%20Explorer%20Mobile%20View.png)
![Movie Modal](./screenshots/Movie%20Explorer%20Web%20Modal%20View.png)

## Usage

1. **Search**: Enter a movie title in the search bar to find specific movies.
2. **Browse Popular Movies**: Browse a list of popular movies by scrolling and navigating through pages.
3. **View Movie Details**: Click on any movie card to open a modal with detailed information.
4. **Pagination**: Use the "Previous" and "Next" buttons at the bottom to navigate through pages.

## API Reference

This project uses [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie data.

- **API Endpoint**: 
  - Popular Movies: `https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}&page={PAGE}`
  - Search Movies: `https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={QUERY}&page={PAGE}`

## Components

- **App**: The main component that holds the application structure, including the search bar, movie list, modal, and pagination.
- **MovieCard**: Displays individual movie cards with the movie poster and title.
- **MovieDetails**: Shows detailed information about a selected movie inside a modal.
- **MovieModal**: Handles the modal structure for displaying `MovieDetails`.
- **Pagination**: Allows users to navigate between different pages of movie results.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **TMDb API**: Provides movie data for the application.
- **CSS Modules**: Component-specific styling using separate CSS files for modularity and maintainability.
- **React Modal**: Library for creating accessible modals.
