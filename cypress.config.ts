// import { defineConfig } from 'cypress'

// export default defineConfig(
  
  
  
//   {
//     "e2e": {
//       "baseUrl": "http://localhost:4200"
//     },
//     "component": {
//       "devServer": {
//         "framework": "angular",
//         "bundler": "webpack"
//       },
//       "specPattern": "**/*.cy.ts"
//     }
//   }
//   )


  // Import the defineConfig function from Cypress
import { defineConfig } from 'cypress';

// Export the configuration using defineConfig
export default defineConfig({
  // Configuration options for the "e2e" environment
  e2e: {
    baseUrl: 'http://localhost:4200', // Base URL for your end-to-end tests
  },

  // Configuration options for the "component" environment
  component: {
    devServer: {
      framework: 'angular', // Framework used (Angular in this case)
      bundler: 'webpack',   // Bundler used (Webpack in this case)
    },
    specPattern: '**/*.cy.ts', // Pattern to match component test files
  },
});
