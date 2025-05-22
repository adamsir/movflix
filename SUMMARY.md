## What is done

📄 Movie List & Pagination (SSR)  
🎬 Movie Detail Modal

## What is NOT done and **how I’d implement it**

I lost some time with Next.js image configuration and pagination routing.

### 🔍 Movie Filtering  
Refreshing the results would work the same way as pagination.  
I'd use `useState` for each filter (e.g., multiselect, range input).  
To apply filters, I’d use the `Link` component to update the query string—this would re-trigger the discovery endpoint with supported filter parameters.

### 🎬 Movie Detail Modal  
The data needed to render extra info is already available in the current state.

### ⏱ "Discovery Timer"  
This might conflict with pagination. For filtering adult content, I’d add a new query param (already supported by the API).

The simplest (though a bit hacky) approach is using `setInterval` inside a `useEffect`, and navigating to a new URL using `useRouter`. I’d update the `page` param directly to simulate rotation.

To support pause/resume, I’d store the `intervalId` in a `useRef`, and use `useState` to track the remaining countdown. On pause, I’d clear the interval and start a new one using the remaining time. It's a bit of a higher-level feature.

## Notes on process & decisions

- Overall, it went well—though I lost time on minor setup issues.
- Chose Tailwind and shadcn to speed up UI work.
- In hindsight, I should’ve used `react-query` for better data handling.

## POSTMORTEM changelog

- Improved dialog behavior  
- Movie detail modal could use its own URL (skipped for now)  
- Added `.env.example` files  
- Included similar movies in the detail view
