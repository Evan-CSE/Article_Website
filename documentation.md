## Project title: Article Website

## used technology
react.js, css

## API Link
https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed'

## Short Summary
Axios was used here for fetching data from api. API returned excerpt as object. Inside that object , a property called 'rendered' contained the text. But it contained some html styling too. To preserve their format 'dangerouslySetInnerHTML' was used. But it should not be practiced this way. 
