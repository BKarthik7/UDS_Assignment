# UDS Assignment

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Run Storybook:
   ```bash
   npm run storybook
   ```
4. Run tests:
   ```bash
   npm test
   ```

## Approach

- **Component-Driven Development:** The project is structured using reusable React components for input fields, data tables, and tabs, promoting modularity and maintainability.
- **State Management:** React's built-in state and props are used for managing UI state and data flow between components.
- **Styling:** CSS is organized per component and uses CSS variables for theming, enabling easy customization and dark mode support.
- **Storybook Integration:** Storybook is used for isolated component development and documentation, making it easy to visualize and test UI components.
- **Testing:** Jest and React Testing Library are used for unit and integration tests, ensuring component reliability.
- **Data Handling:** User data is managed in a separate module for easy updates and scalability.
- **Accessibility:** Basic accessibility practices are followed, and Storybook's a11y addon is included for accessibility checks.
- **Extensibility:** The architecture allows for easy addition of new features or components.

This approach ensures the project is scalable, maintainable, and developer-friendly.
