# Recipe and Meal Planner App

## Introduction

Welcome to Remplr - a Meal Planner platform - designed to help nutritionist in assist their clients meeting nutritional goals, and planning meals effectively.

### Motivation

In a fast-paced world, ensuring balanced nutrition and managing meals across the week can be a challenge. Remplr  bridges this gap by providing a seamless interface to discover, save, and plan meals.

## Features & Functionality

1. **User Authentication**: Nutritionists can register, log in, and manage their profiles.
2. **Recipe Discovery**: Explore a vast collection of recipes and view detailed information directly pulled from our own API.
3. **Save Recipes**: With a single click, users can save their favorite recipes.
4. **Meal Planning**: Users can effectively plan their meals, ensuring balanced nutrition.
5. **Ingredients List**: Each recipe provides a detailed list of ingredients required.
6. **Nutritional Information**: Insight into the nutrition value of each recipe.

## Technical Stack

### Frontend

- Library: React.js.
- State Management: React's context, useState hook.
- Key Libraries: React Router for navigation.

### Backend

- Framework: Express.js on Node.js

### Database

- Database: PostgreSQL

### Others

- Authentication: JWT
- Third-party APIs: Spoonacular API

## Architecture & Design

### High-Level System Architecture



### React Component Structure

| Directory | File/Component |
|:----------|:---------------|
| `helper/` | `api.js`       |
| `hooks/`  | `useLocalStorage.js` |
|          | `useSaveIngredients.js` |
|          | `useSaveRecipes.js` |
| `routes/` |                |
|   └─ `auth/`   | `login.js`   |
|          | `register.js`  |
|   └─ `common/` | `alert.js`   |
|          | `loading.js`   |
|          | `userContext.js`   |
|          | `[other common components]` |
|   └─ `homepage/`| `[homepage components]`|
|   └─ `ingredients/`| `[ingredients components]`|
|   └─ `recipes/`| `[recipes components]` |
|   └─ `mealPlans/`| `[mealPlan components]` |



### API Structure and Endpoints

Please find the backend API documentation here: [Remplr-API](https://coderhimanshu1.github.io/Remplr-backend/)

## Challenges & Solutions

### **1. Securing Environment Variables**

- **Challenge**: 
  Ensuring sensitive configuration and API keys are kept secure and not exposed in the code.
  
- **Solution**: 
  Utilized environment variables to store sensitive information, ensuring that they're not checked into version control and are securely managed in production environments.


### **2. Linking Nutritionists with Clients & Sharing Meal Plans**

- **Challenge**: 
  A major requirement was to connect nutritionists and clients in a way that allowed meal plans to be shared between them seamlessly.
  
- **Solution**: 
  - Introduced a new table and methods to facilitate the linking of a client to a nutritionist. Only nutritionists or admins have the capability to add a client, which in turn automatically establishes a link between the client and the nutritionist.
  - A separate relationship table was created to manage these connections efficiently.
  - Developed a method that lets nutritionists share meal plans. Once shared, clients can access these meal plans from the `shared_mealplans` table.

	*NOTE: Though the second feature is not implented on frontend yet, I have successfully solved this challange at backend.* 

## Demonstration

To be Posted!

## Future Enhancements

- Enhanced filtering for recipes based on dietary restrictions.
- Show nutritionists ingredients/ recipes liked by their clients.

***Features implented at backend, yet to be implented at Frontend:***

- Nutritionists can add their clients to system (they will be automatically connected).
- Share Meal Plans with the clients.


## Learnings

1. **React's Compositional Model**: React's approach to building UIs using a component-based architecture has made it clear that modularity and reusability are key. 

2. **Effective State Management**: Throughout the development process, it became evident how crucial state management is. Properly handling state ensures data integrity, provides a better user experience, and reduces the chance of unexpected bugs. State needs to be predictable, and tools like  React's context can help achieve that.

3. **Backend Design Architecture**: The importance of a well-structured backend cannot be overstated. A thoughtfully designed backend ensures scalable, maintainable, and efficient operations. It serves as the backbone of the application, handling everything from business logic to interactions with the database.

4. **Database Schema Design**: The structure and organization of the database play a pivotal role in the application's performance and scalability. A well-designed schema optimizes data retrieval times, ensures data integrity, and simplifies complex queries.

5. **Continuous Learning**: The tech landscape is ever-evolving. Embracing new tools, libraries, or methodologies, and adapting to them, is crucial for modern software development. The journey of building this application served as a reminder that continuous learning and adaptation are at the heart of a successful developer's journey.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\ If you want to run app locally, open [http://localhost:3000](http://localhost:3000) to view it in your browser.