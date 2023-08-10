import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../common/userContext";

const Features = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="home-features">
      <h1> FAVORITES</h1>
      <div className="home-features-cards">
        {currentUser ? (
          <>
            <Link to="/saved-ingredients">
              <div className="home-features-card1">
                <h3> Ingredients</h3>
                <small>Find your saved ingredients here...</small>
              </div>
            </Link>
            <Link to="/path-for-logged-in-user1">
              <div className="home-features-card1">
                <h3> Recipes</h3>
                <small>Find your saved recipes here...</small>
              </div>
            </Link>
            <Link to="/path-for-logged-in-user1">
              <div className="home-features-card1">
                <h3> MealPlans</h3>
                <small>Find your saved Meal plans here...</small>
              </div>
            </Link>
          </>
        ) : (
          <>
            <div className="home-features-card1">
              <h3>Ingredients Management</h3>
              <small>Get Ingredients information including its nutrition</small>
            </div>
            <div className="home-features-card2">
              <h3>Recipes Management</h3>
              <small>Get recipes information including its nutrition</small>
            </div>
            <div className="home-features-card3">
              <h3>Meal Plans Management</h3>
              <small>Create Meal Plans and share with your clients</small>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Features;
