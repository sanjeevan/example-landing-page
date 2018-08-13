## Simple landing page to capture leads

This is a very simple landing page, built using gatbsy.js. See the full blog post at https://sanjeevan.co.uk/blog/setup-a-landing-page-for-your-mvp

## To get started

1) Install gatsby

    ```sh
    npm install --global gatsby-cli
    ```

2) Install packages

    ```sh
    cd <project folder>
    yarn install
    ```

## Set env variables

These env variables must be exported before you run the development server.

- GATSBY_CREATE_SUBSCRIBER_URL='https://your-aws-lambda-endpoint'
- GATSBY_LIST_ID='emailoctopus-list-id'


## Run development server

```sh
gatsby develop
```

