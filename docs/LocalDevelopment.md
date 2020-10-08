# Local Development
## Requeriments
The project is build with NodeJS v.12. In order to get the app working in local, we recomend to install `nvm`:  
In MacOS you can install it using [Homebrew](https://brew.sh/): 
```
brew update
brew install nvm
mkdir ~/.nvm
```
Now add these lines to `~/.bash_profile` ( or `~/.zshrc` for macOS Catalina or later)
```
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```
Run `nvm -v` to make sure you have access to `nvm`.

- Clone this repo to your local environment.
- `cd` into `api-funds-app`
- Run `nvm install 12` in order to get the NodeJS v.12
- Run `nvm use && npm i`.

### Environment Variables
We've provided a testing environment for local development with the following settings: 
```
NODE_ENV='development'
FUNDS_API_URL='http://localhost:8000/api'
FUNDS_API_USER_NAME=admin
FUNDS_API_USER_PASSWORD=manumac86

```
Just run `cp .env.dev.example .env` in the root dir and that's it.
Feel free to setup your own MongoDB and configure the API to use your data. See [API Local Development Docs](https://github.com/Manumac86/api-funds-app).

### Run the App locally
Once you have your configs in your `.env` file, you can run the App with the following command: 
- `npm run start:development` (development mode).
This will run the app in development mode with hot module replacement thanks to webpack.
- Go to http://localhost:3000 to see the App in your browser.
- Feel free to play with the app using the provided Testing data.

## Contribute
- Fork this repo
- Clone in to your local
- Run the app in development mode
- Make your awesome contributions
- Push to your remote repo
- Create a Pull Request against `master`
- Ask us for a code review.
