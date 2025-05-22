## What is done

📄 Movie List & Pagination - SSR
🎬 Movie Detail Modal

## What is NOT done and **how I'd implement**
I lost some time with next image configuration and pagination routing

#### Movie filtering
The mechanism how to refresh the results will be the same as pagination.

I would use useState hook for each filter (multiselect, input[range]).
To submit the filtered state, i would use Link component and pass the filter query string, which will re-call the homepage discovery endpoint with added filter parameters which are supported, so it makes things easier. 

#### 🎬 Movie Detail Modal
In the current state of the implementation, those data required for rendering additional information is already there..

#### ⏱ "Discovery Timer"
This feature may collide with pagination of the main collection.
For filtering adult content, I would pass a new query param which is supported by the discovery endpoint

The most easiest way is to use a setInterval and use useRouter to visit a new url all wrapped in useEffect. I would change the page parameter(which is super-dirty) but it would make the trick..

To pause the interval, I need to use useRef to remember invervalId and useState for the remaining countdown time.. If the pause is going to be triggered, i would clear the interval and set new interval with remaining countdown time.. but thats kinda high level

## Notes on your process and decision making
- it went well, but I've lost some time on unnecessary details
- I picked tailwind and shadcn to speed up the delivery


## POSTMORTEM changelog
- better dialog
- movie detail would be great with own url, but I skipped that for now
- added .env.example filess
- added similar movies in movie detail
