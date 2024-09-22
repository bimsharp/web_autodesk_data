# web_autodesk_data

## Setup
1. Run `npm i` to install packages.
2. Create an `.env` file from `.env.example` and fill in the variables - all are needed for this project.
   - Autodesk App can be created and configured here: https://aps.autodesk.com/hubs/@personal/applications/
   - Autodesk Project can be connected via Account Admin -> Custom Integrations here: https://acc.autodesk.com/projects
3. Run `npm start` to access and interact with API.

## Testing
1. import collection into postman
2. configure collection variables `base_url` and `autodesk_user_id`

## ToDo
- implement an actual test project; postman is OK as a start, but tests should be automatable and run via CI/CD in the future.
- implement database integration - postgresql can be used via the existing `pg` package, this will be a good learning opportunity.
- implement & configure debugger; should be attachable to this API, or test project.