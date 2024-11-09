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
- **Error Handling**: Robust error handling for network issues, and invalid user input, with descriptive notifications to guide users.
  
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

## API Reference

This project uses [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie data.

- **API Endpoints**: 
  - Popular Movies: `https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}&page={PAGE}`
  - Search Movies: `https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={QUERY}&page={PAGE}`

## Components

- **App**
- **MovieCard**
- **MovieDetails**
- **MovieModal**
- **Pagination**

## Error Handling

- **Network Errors**
- **Invalid API Key**
- **Empty Search**
- **Fallback for No Results**

## Technologies Used

- **React.js**
- **Axios**
- **TMDb API**
- **CSS Modules**
- **React Modal**
- **Custom Loading and Notification Components**