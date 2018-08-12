
## To get started

1) Install gatsby

    ```sh
    npm install --global gatsby-cli
    ```

2) Install packages

    ```sh
    yarn install
    ```

## Set env variables

- GATSBY_CREATE_SUBSCRIBER_URL='https://your-aws-lambda-endpoint'
- GATSBY_LIST_ID='emailoctopus-list-id'


## Run development server

```sh
gatsby develop
```
    
Before running the development server, make sure you've set the environment variables otherwise submitting an email address will cause an error.
