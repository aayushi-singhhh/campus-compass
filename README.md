# Contributor Task Document
---

## 1. Project Overview

### Description
Smart Campus Navigator is a web-based platform that helps users explore campus locations and visualize routes between them using an interactive map interface.

### Tech Stack
- **Frontend:** React (Vite), Leaflet.js, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Other Tools:** dotenv, Jest, Git & GitHub

### Current Features
Smart Campus Navigator currently supports:
- Interactive campus map with markers
- Basic route visualization between locations (mock)
- Location data fetched from backend API
- Sidebar for selecting start and end locations

### Target Users
This project is built for students, developers, and contributors interested in building smart campus solutions and learning full-stack development through open-source collaboration.

---

## 2. Architecture / Key Modules


## Module Overview

| Module/Component | Location | Purpose |
|------------------|----------|---------|
| **CampusMap** | `src/components/CampusMap.tsx` | Renders the interactive campus map using Leaflet.js and OpenStreetMap tiles. It initializes the map, sets the view to the campus center, and supports route visualization. |
| **Sidebar** | `src/components/Sidebar.tsx` | Provides a user interface for selecting start and end locations for route visualization. It dynamically updates based on available locations. |
| **API Services** | `src/services/api.ts` | Handles API calls for fetching location data and route information. Includes mock implementations for development and testing. |
| **Location Data** | `src/data/locations.ts` | Contains mock location data for the campus, including coordinates and metadata for each location. This is used to populate the map and sidebar. |
| **UI Components** | `src/components/ui/` | A collection of reusable UI components such as buttons, dialogs, forms, and modals. These components ensure consistency across the application. |
| **Custom Hooks** | `src/hooks/` | Contains reusable React hooks like `use-toast` for managing toast notifications and `use-mobile` for detecting mobile devices. |
| **Pages** | `src/pages/` | Includes page-level components like `Index.tsx` for the main application view and `NotFound.tsx` for handling 404 errors. |

### Example Architecture

```
project-root/
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── CampusMap.tsx  # Map rendering logic
│   │   ├── Sidebar.tsx    # Sidebar for location selection
│   │   └── ui/            # Reusable UI components
│   ├── data/              # Static and mock data
│   ├── services/          # API call handlers
│   ├── pages/             # Page-level components
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions
├── public/                # Static assets
├── tests/                 # Unit and integration tests
├── README.md              # Project documentation
├── package.json           # Project metadata and dependencies
├── vite.config.ts         # Vite configuration for development
└── tsconfig.json          # TypeScript configuration
```

---

## 3. New Feature Ideas

### Feature 1: Dark Mode for Map UI

**Problem it solves:**
Users may find bright UI uncomfortable during long usage, especially while navigating at night.

- **Difficulty Level:** Beginner
- **Estimated Effort:** 4–6 hours
- **Modules Affected:**
  - `client/src/components/` – Update UI styles
  - `client/src/utils/theme.js` – Theme handling
  - `client/src/App.js` – Add toggle

---

### Feature 2: Advanced Route Visualization

**Problem it solves:**
Current routing is basic and not visually informative.

- **Difficulty Level:** Intermediate
- **Estimated Effort:** 8–12 hours
- **Modules Affected:**
  - `client/src/components/CampusMap.tsx` – Improve route drawing
  - `client/src/services/api.ts` – Fetch route data
  - `server/routes/route.js` – Enhance route logic

---

### Feature 3: Accessibility-Friendly Navigation

**Problem it solves:**
Users with mobility challenges need routes avoiding stairs and difficult terrain.

- **Difficulty Level:** Advanced
- **Estimated Effort:** 14–18 hours
- **Modules Affected:**
  - `server/models/Location.js` – Add accessibility fields
  - `server/routes/route.js` – Filter accessible routes
  - `client/src/components/Sidebar.tsx` – Add toggle
  - `client/src/components/CampusMap.tsx` – Highlight routes

---

### Feature 4: Crowd Density Visualization

**Problem it solves:**
Users want to avoid crowded areas during peak hours.

- **Difficulty Level:** Intermediate
- **Estimated Effort:** 10–14 hours
- **Modules Affected:**
  - `client/src/components/CampusMap.tsx` – Heatmap layer
  - `server/models/Location.js` – Crowd data field
  - `server/routes/locations.js` – Provide data

---

### Feature 5: Mobile Responsive Design

**Problem it solves:**
The app may not function properly on smaller screens.

- **Difficulty Level:** Intermediate
- **Estimated Effort:** 12–16 hours
- **Modules Affected:**
  - `client/src/components/` – Responsive UI updates
  - `client/src/styles/` – Mobile-first styling

---

### Feature 6: Search and Filter Locations

**Problem it solves:**
Users cannot quickly find specific buildings or facilities.

- **Difficulty Level:** Intermediate
- **Estimated Effort:** 8–10 hours
- **Modules Affected:**
  - `server/routes/search.js` – Search API
  - `client/src/components/SearchBar.tsx` – Input UI
  - `client/src/components/FilterPanel.tsx` – Filters

---

## 4. Feature Implementation Pipeline

### Pipeline for Feature 1: Dark Mode for Map UI

1. **Setup Theme Context**
   - Create `client/src/context/ThemeContext.js`
   - Define light and dark theme color palettes (background, text, map UI elements)
   - Implement a toggle function to switch themes

2. **Create Theme Utility**
   - Build `client/src/utils/theme.js`
   - Use CSS variables or a theme object for styling
   - Store user preference in `localStorage`

3. **Update Component Styling**
   - Replace hardcoded colors in components with theme variables
   - Update key components:
     - `Sidebar.tsx`
     - `CampusMap.tsx`
     - Navbar / layout
   - Integrate with Map (Leaflet):
     - Adjust map tile layer (light/dark compatible tiles if possible)
     - Ensure markers and routes are visible in both themes

4. **Add Theme Toggle UI**
   - Add toggle button in navbar or sidebar
   - Use icons (sun/moon) for better UX

5. **Testing**
   - Verify UI consistency across all components
   - Test theme persistence after refresh
   - Ensure readability and contrast in both modes

---

### Pipeline for Feature 2: Advanced Route Visualization

1. **Improve Route Data Structure**
   - Update backend route response format
   - Include multiple coordinates

2. **Enhance Map Rendering**
   - Update `CampusMap.tsx`
   - Draw polylines instead of straight lines

3. **Add Route Styling**
   - Different colors for route types
   - Highlight selected route

4. **UI Integration**
   - Show route info in sidebar

5. **Testing**
   - Validate route display
   - Check edge cases

---

### Pipeline for Feature 3: Accessibility Navigation

1. **Update Location Schema**
   - Add fields like `isAccessible`, `hasRamp`, `hasElevator`

2. **Modify Routing Logic**
   - Filter routes based on accessibility

3. **Add UI Toggle**
   - Add switch in sidebar

4. **Visual Differentiation**
   - Highlight accessible paths

5. **Testing**
   - Validate correct route filtering

---

### Pipeline for Feature 4: Crowd Density

1. **Add Crowd Data Field**
   - Update location schema

2. **Create Mock Data**
   - Assign crowd levels

3. **Implement Heatmap Layer**
   - Integrate Leaflet heatmap plugin

4. **Add Toggle in UI**
   - Enable/disable heatmap

5. **Testing**
   - Verify visualization accuracy

---

## 5. Good First Issues

### Good First Issues (Smart Campus Navigator)

#### 1. Add Loading Spinner for Route Fetch

**Label:** good first issue, frontend

**Description:**
Currently, when users select start and end locations, there is no visual feedback while the route is being fetched. Add a loading spinner to improve user experience.

**Relevant Files:**
- `client/src/components/Sidebar.tsx`
- `client/src/components/CampusMap.tsx`

**Tasks:**
- Add a loading state
- Show spinner while API call is in progress
- Hide spinner after response

**Acceptance Criteria:**
- Spinner appears during route fetch
- Disappears after route is displayed
- UI remains responsive

---

#### 2. Prevent Same Start and End Selection

**Label:** good first issue, frontend

**Description:**
Users should not be able to select the same location as both start and end.

**Relevant Files:**
- `client/src/components/Sidebar.tsx`

**Tasks:**
- Add validation logic
- Show error message if same location selected

**Acceptance Criteria:**
- Error message displayed
- Route is not generated

---

#### 3. Add Tooltip on Map Markers

**Label:** good first issue, frontend

**Description:**
Show location name when user hovers over map markers.

**Relevant Files:**
- `client/src/components/CampusMap.tsx`

**Tasks:**
- Add hover event
- Display tooltip

**Acceptance Criteria:**
- Tooltip appears on hover
- Disappears smoothly

---

#### 4. Add Favicon and Dynamic Page Title

**Label:** good first issue, frontend

**Description:**
Replace default browser icon and add meaningful page titles.

**Relevant Files:**
- `client/public/index.html`
- `client/src/App.js`

**Tasks:**
- Add favicon
- Set page titles dynamically

**Acceptance Criteria:**
- Custom favicon visible
- Page title updates correctly

---

#### 5. Improve UI Text and Labels

**Label:** good first issue, frontend

**Description:**
Fix typos and improve clarity of UI text across the application.

**Relevant Files:**
- All frontend components

**Tasks:**
- Correct spelling mistakes
- Improve button labels

**Acceptance Criteria:**
- No typos
- Clear and consistent wording

---

#### 6. Add “Copy Coordinates” Button

**Label:** good first issue, frontend

**Description:**
Allow users to copy latitude and longitude of a location.

**Relevant Files:**
- `client/src/components/CampusMap.tsx`
- `client/src/utils/clipboard.js`

**Tasks:**
- Add copy button
- Implement clipboard logic

**Acceptance Criteria:**
- Button copies coordinates
- Shows “Copied!” feedback

---

## 6. Contributor Notes

### Getting Started

#### Prerequisites
Make sure you have the following installed on your system:
- **Node.js v18+ and npm**  
  - Check with: `node -v` and `npm -v`
- **Git** (for cloning and version control)
- A modern browser (Chrome, Firefox, Edge, etc.)

> Optional: If you prefer, you can also use **Bun** instead of npm, but all commands below use npm by default.

#### Setup Steps

1. **Fork and Clone the Repository**
   - On GitHub, click **Fork** on `aayushi-singhhh/campus-compass` to create your own copy.
   - Then clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/campus-compass.git
   cd campus-compass-main
   ```

2. **Install Dependencies**
   Using **npm** (recommended):
   ```bash
   npm install
   ```
   Or, if you use **Bun**:
   ```bash
   bun install
   ```

3. **Configure Environment Variables (optional for now)**
   This project currently runs as a **frontend-only** Vite + React app and does **not** require any environment variables out of the box.

   If you later connect it to a backend or external APIs:
   - Create a `.env` file in the project root.
   - Follow Vite's naming convention (`VITE_` prefix):
   ```bash
   # .env
   VITE_API_BASE_URL=http://localhost:4000/api
   ```

   **Example Variables (future extension):**
   - `VITE_API_BASE_URL` – Base URL for the backend API used to fetch locations/routes.

4. **Start the Development Server**
   Using **npm**:
   ```bash
   npm run dev
   ```
   Or with **Bun**:
   ```bash
   bun run dev
   ```

   Vite will print a local URL in the terminal, typically:
   - `http://localhost:5173/`

   Open this URL in your browser to see the **Smart Campus Navigator** app.

5. **Make Changes and See Live Reloads**
   - Edit files under `src/` (for example, `src/pages/Index.tsx`, `src/components/CampusMap.tsx`).
   - Vite will automatically reload the page when you save changes.

6. **Run Tests (Optional)**
   If you want to run the existing test suite:
   ```bash
   npm test
   ```
   or
   ```bash
   npm run test:watch
   ```

---

### Important Libraries & Tools

| Tool/Library        | Purpose                          | Documentation                         |
|---------------------|----------------------------------|---------------------------------------|
| React + TypeScript  | Frontend framework + typing      | https://react.dev                     |
| Vite                | Frontend build tool/dev server   | https://vitejs.dev                    |
| Leaflet.js          | Interactive maps                 | https://leafletjs.com                 |
| React Leaflet       | React bindings for Leaflet       | https://react-leaflet.js.org          |
| Tailwind CSS        | Utility-first CSS framework      | https://tailwindcss.com               |
| Vitest + Testing Lib| Unit/component testing           | https://vitest.dev                    |

---

### Tips for Beginners

1. **Start Small**  
   Pick a "Good First Issue" to get familiar with the codebase before tackling larger features.

2. **Read Existing Code**  
   Before adding a new feature, find similar existing functionality and use it as a reference.

3. **Ask Questions**  
   Don't hesitate to ask in Discord. We're here to help!

4. **Follow Code Style**  
   - We use [Prettier/ESLint/Black] for code formatting
   - Run `npm run lint` before committing
   - Follow existing naming conventions

5. **Write Tests**  
   Add tests for new features when possible. Check the `/tests` folder for examples.

6. **Commit Message Format**  
   ```
   type: brief description
   
   - More details if needed
   - What changed and why
   ```
   Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

7. **Pull Request Guidelines**  
   - Link the related issue
   - Describe what changed and why
   - Add screenshots for UI changes
   - Make sure all tests pass

8. **Development Workflow**
   ```bash
   # Create a feature branch
   git checkout -b feature/your-feature-name
   
   # Make your changes
   # ...
   
   # Test your changes
   npm test
   
   # Commit with clear message
   git add .
   git commit -m "feat: add dark mode toggle"
   
   # Push to your fork
   git push origin feature/your-feature-name
   
   # Open Pull Request on GitHub
   ```

---

### Common Issues & Solutions

**Issue:** Database connection fails  
**Solution:** Check that PostgreSQL/MongoDB is running and environment variables are correct

**Issue:** Port already in use  
**Solution:** Change `PORT` in `.env` or kill the process using `lsof -ti:3000 | xargs kill`

**Issue:** Module not found errors  
**Solution:** Delete `node_modules` and run `npm install` again

[Add project-specific troubleshooting]

---

### Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md). We're committed to providing a welcoming and inclusive environment for all contributors.

---

### Need Help?

- Check the [full documentation](src/backend-reference/README.md)
- Report bugs via [GitHub Issues]
- Email/phone number/discord handle: [aayushisingh239@gmail.com]

---

**Happy Contributing!**

We appreciate your interest in making this project better. Every contribution, no matter how small, makes a difference!