# How to get started #
## toggle node version ##
```
nvm use 20.10
```
## install dependencies ##
```
npm install
```
## add your novu API key into a .env.local, since this is spike testing and workflows are hardcoded into the novu app, I'll be giving the api key. ##

```
NOVU_API_KEY=<YOUR_API_KEY>
```
## run the app ##
```
npm run dev
```


# Usage guide #
## register a subscriber via the top form. ##
#### in production registration should be done via client and should be configured, aggregation by subscriber Id is possible so multiple registration is acceptable. ####


## choose your notification ##
#### for now the Slack and in-app is not supported, will work on that if desired. ####


