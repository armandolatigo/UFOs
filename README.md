# Overview of Project

This project served as an interactive website using JavaScript with D3, CSS, and bootstrap to filter through a database of UFO sightings that can be filtered through via user input. 

# Results

We've added four more Filter Search Criteria to Dana's website: city, state, country, and shape.
![Screen Shot 2022-01-16 at 12 41 36 PM](https://user-images.githubusercontent.com/92451164/149675133-bd31b2a8-e28a-4498-aa62-9d056b05fcc0.png)


## JavaScript
By adding the following to the JavaScript code:

![Screen Shot 2022-01-16 at 12 59 23 PM](https://user-images.githubusercontent.com/92451164/149675149-b20a0b97-0e28-4856-b0c8-a11b8b00ae32.png)

Continued:

![Screen Shot 2022-01-16 at 12 59 35 PM](https://user-images.githubusercontent.com/92451164/149675152-1ef70983-222b-4b1f-a7a5-6297205155e8.png)

## HTML
And the following was added to the html code:
![Screen Shot 2022-01-16 at 1 00 23 PM](https://user-images.githubusercontent.com/92451164/149675164-c1d2b2af-a897-4462-8971-f629aa55423c.png)


Now anyone who visits Dana's website is not just limited to filtering by date but by the new filtered search inputs as well which will return any matching datasets to the table. 

Any combination of multiple criteria input or single criteria input will populate the table from that provided data set.

# Summary


## Shape Description Discrepancy

One particular drawback is the "Shape" criteria as the dataset has pretty defined shapes and there have been multiple UFO sightings that do not fit the descriptions provided and are limited. A user may input "cluster" and the website will not recognize the description and it would fit under "formation".  

## Recommendations

-In the future I'd recommend adding more search criteria that's included in the data set: "duration" and "comments". 
Users could search by a certain comment made about a certain sighting and also search how long each sighting lasted. 


-Furthermore, some clean up of the data set itself.  There's Hypertext Markup scattered throughout such as "&#44' and '&39s', which after a quick Google search are supposed to be comma's and apostrophe's respectively.  
