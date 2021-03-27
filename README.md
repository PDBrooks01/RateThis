# RateThis
API for rating dog toys
User Stories/Model for  Project 2

User should be able to view dog toy image and rate the toy
User should be able to give a username for their rating
User should be able to click 1 to 5 stars
 Stretch - Users should be able to sort reviews by Dog play style
 Stretch - User should be able to submit photos of the toy they purchased and where they purchased it
User should be able to select their dog breed which they will rate the toy for
User should be able to select multiple breeds if they have them


Model
-Dog toy
	-Name of Toy -String
	-Brand of Toy- String
	-Image of Toy - String
 	-Size of Toy - Number (Which will equate to a displayed size: S,M,L,XL)
	-Places where you can purchase(Optional) - Map
-User Review
	-Username - String
	-Breed of Dog(Drop Down List)(Is this a model itself?)  - Map?
	-Play Style of Dog(Checklist)(Same question as above?) - ?Map?
	-Rating 1- 5 stars - Number
	-Written Review - String (Should I limit characters?)

Routes
-Index - main page that shows images of Dog toys, name, and rating
-New - creates a new review
-New - adds a new toy to the list   
-Create  - Post the two above
-Show - Shows Toy, name, rating, list of reviews
-edit  - Toy/review? Need to decided how to proceed
-Destroy - delete review ^^^^

WireFrames

