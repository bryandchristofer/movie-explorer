# Movie Explorer

Movie Explorer is a responsive web application that allows users to search, browse, and view details about popular movies. Built using React.js, this project fetches movie data from The Movie Database (TMDb) API and displays it in an organized and visually appealing interface. The project includes robust error handling, loading states, and a user-friendly fallback UI for smooth navigation and a seamless user experience.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Components](#components)
- [Technologies Used](#technologies-used)

## Features

- **Search Functionality**: Users can search for movies by title and view related results.
- **Popular Movies Display**: The app showcases a list of popular movies fetched from TMDb.
- **Detailed Movie Modal**: Clicking on a movie opens a modal with details, including title, tagline, overview, genres, production companies, release date, runtime, box office, and rating.
- **Pagination with Loading State**: Navigate through multiple pages of movies with "Previous" and "Next" buttons. A loading indicator displays when fetching data for new pages.
- **Error Handling**: Robust error handling for network issues, API errors, and invalid user input, with descriptive notifications to guide users.
- **Fallback UI for Empty Results**: If no search results are found, a friendly notification displays below the search bar to inform the user.
  
## Screenshots

### Web View
<p align="center">
  <img src="./screenshots/Movie Explorer Web View.png" alt="Web View" width="400">
</p>

### Mobile View
<p align="center">
  <img src="./screenshots/Movie Explorer Mobile View.png" alt="Mobile View" width="400">
</p>

### Movie Modal
<p align="center">
  <img src="./screenshots/Movie Explorer Web Modal View.png" alt="Movie Modal" width="400">
</p>

## Usage

1. **Search**: Enter a movie title in the search bar to find specific movies.
2. **Browse Popular Movies**: Browse a list of popular movies by scrolling and navigating through pages.
3. **View Movie Details**: Click on any movie card to open a modal with detailed information.
4. **Pagination with Loading State**: Use the "Previous" and "Next" buttons at the bottom to navigate through pages. A loading message appears while movies are being fetched.
5. **Error Notifications**: If a network issue or API error occurs, or if an invalid search is submitted, descriptive messages will notify the user of the issue.
6. **Fallback UI for Empty Results**: If no results match the search, a notification displays below the search bar.

## API Reference

This project uses [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie data.

- **API Endpoints**: 
  - Popular Movies: `https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}&page={PAGE}`
  - Search Movies: `https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={QUERY}&page={PAGE}`
- **API Key**: `c754525c72e94b575c0d34013e3eedaa`

## Components

- **App**: The main component that holds the application structure, including the search bar, movie list, modal, and pagination.
- **MovieCard**: Displays individual movie cards with the movie poster and title.
- **MovieDetails**: Shows detailed information about a selected movie inside a modal.
- **MovieModal**: Handles the modal structure for displaying `MovieDetails`.
- **Pagination**: Allows users to navigate between different pages of movie results with loading states and error handling.

## Error Handling

- **Network Errors**: Notifies users of network issues or API rate limits.
- **Invalid API Key**: Displays a message if the API key is missing or incorrect.
- **Empty Search**: Alerts users when they attempt to search with an empty input.
- **Fallback for No Results**: Displays a message below the search bar if no movies are found.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **TMDb API**: Provides movie data for the application.
- **CSS Modules**: Component-specific styling for modularity and maintainability.
- **React Modal**: Library for creating accessible modals.
- **Custom Loading and Notification Components**: Provides visual feedback for loading and error states.