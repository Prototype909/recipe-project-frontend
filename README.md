Welcome to Recipe Book, a online recipe organizer for all your favorite reciepes!!

This application will allow you to add the name, image, ingredient list, and a link to your favorite online recipes!

This app was created using a rails as a API backend and a JavaScript frontend.

Installation:

This is a two part installation.

clone the respostory SSH at https://github.com/Prototype909/recipe-project-frontend by coping the link in your clipboard. Note: the link for this projects backend will be in the about secion of the frontend repostory.

Once cloned you will need to install it on your local machine from your terminal, it should look somehting like this: get clone git@github.com:Prototype909/recipe-project-frontend.git. Depending on your setup you may need to change directory or CD into the application.

Once in the directory, you will need to run 'bundle install' to make sure that all required gems are installed and able to run.

Now that the required gems are installed, you will need to create the database by typing in rake db:create in the terminal. Next you will need to migrate the tables by typing in rake db:migrate. Finally, you will need to seed the database with the writed seed data by typing in rake db:seed.

Further, the backend server will need to go live by typing 'rails s' in the console, and then opening the index.html on the frontend by right clicking on the index.html file, select 'reveal in explorer', then choose to open with your browser of choice, althought this application was only tested using google chrome.

Contributing Bug reports and pull requests are welcome on GitHub at https://github.com/Prototype909/recipe-project-frontend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

License The gem is available as open source under the terms of the MIT License. MIT license can be views here https://opensource.org/licenses/MIT

Code of Conduct Everyone interacting in the rails-film-library project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.