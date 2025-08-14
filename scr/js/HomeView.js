import { createElement } from './utils';
import { getFeaturedRecipes } from './APIHandler';
//import heroImg from '../images/hero_path.jpg';
import heroImg from '../images/hero-path.jpg';


function HomeView() {
  const hero = createElement('img', {
    src: heroImg,
    alt: 'SmartRecipe Hero Image',
    className: 'hero',
  });
  const title = createElement('h2', {
    textContent: 'About US',
    className: 'title-heading',
  });
  const intro = createElement('p', {
    textContent:
      '🍽️ Welcome to SmartRecipeFinder — Your Personal Recipe Finder!, Tired of staring into your fridge wondering what to cook? SmartChef is here to turn your ingredients into delicious possibilities. Whether you’re working with a handful of pantry staples or planning a gourmet meal, our intelligent recipe engine helps you discover dishes tailored to what you already have. Just input your ingredients, set your preferences, and let SmartChef serve up ideas that are quick, healthy, and satisfying. Cooking smarter starts here!',
    className: 'intro-paragraph',
  });
  const invite = createElement('p', {
    textContent:
      'At SmartRecipeFinder, we’re passionate about making baking easy, joyful, and meaningful—a chance to connect with those you care about through every sweet creation. Join us to discover, bake, and spread the joy of pastries together!',
    className: 'intro-paragraph',
  });

  const featuredSection = createElement('div', {
    className: 'featured-section',
  });

  getFeaturedRecipes().then((recipes) => {
    // Randomly select up to 4 recipes
    const selectedRecipes = recipes.sort(() => 0.5 - Math.random()).slice(0, 4);
    const recipeList = selectedRecipes.map((recipe) =>
      createElement('div', { className: 'recipe-card' }, [
        createElement('h4', { textContent: recipe.strMeal }),
        createElement('img', { src: recipe.strMealThumb, alt: recipe.strMeal }),
        createElement('button', {
          textContent: 'Explore More',
          className: 'explore-button',
          onclick: () => {
            window.location.hash = '#/recipes';
          },
        }),
      ])
    );
    featuredSection.append(...recipeList);
  });

  return createElement('div', {}, [
    hero,
    title,
    intro,
    invite,
    featuredSection,
  ]);
}

export default HomeView;