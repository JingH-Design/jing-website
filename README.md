# Jing website

## Development set up notes

- Install [Homebrew](https://brew.sh/) firstly to install Ruby, nodejs, yarn if applicable.
- Install Ruby via homebrew
  ```
  brew install ruby
  echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
  ```
- Install Jekyll
  ```bash
  gem install -n /usr/local/bin bundler jekyll
  cd /path/to/jing-website
  bundle install
  ```
- Install nodejs via homebrew
  ```bash
  brew install nodejs
  ```
- Install yarn via homebrew
  ```bash
  brew install yarn
  ```
- Run website
  ```bash
  yarn install
  yarn start
  ```
