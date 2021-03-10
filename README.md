## Micro Frontend setup

<pre>

</pre>

![Architectural Design](https://github.mpi-internal.com/pratap-dessai/microfe-ui/blob/master/ArchitecturalDesignDiagram_UI.png)

<br />
<br />

## MicroFrontend Architectures

<br />

### Implementation Details :-

Micro frontend architectures help us build maintainable and scalable Micro services of UI build, so each service can be independently written in the choice of technology the Team wants.
It also help use to have better separation of concern between these scalable components.
Each component will act like an independent App and can be developed and released independently.

<br />
<br />

#### 1. UI project structure

```
ui-container-app
```

This is the main project
There are four other microservices app

```
ui-ads-module
ui-messages-module
ui-rules-module
```

There is also sample component library

```
ui-components
```

No need to build this, as it's already been published to public npm registry
https://www.npmjs.com/package/@pratapdd/microfe-ui-components

<br />
<br />

#### 2. Gateway - Backend for frontend (BFF layer)

Here the final idea would be to implement Federation Apollo gateway (https://www.apollographql.com/docs/federation/). Due to time limitation, I am yet to implement this part of the setup. Currently only Single gateway endpoint is setup with all the different api schema

```
 product
 basket
 order
```

Project is available here -

```
<root>/server/product-graphql-gateway
```

Gateway will be available here
endpoint to graphiql schema -

```
http://localhost:4001/graphql
```

<br />
<br />

#### 3. API gateway - Backend Nodejs server

Here the final idea would be to implement of separate microservices for product, basket and order
Due to time limitation, I implemented single endpoint for all.
Project is available here

```
<root>/server/product-api-gateway
```

Note: I am using node-persist for persisting data

When you run the project, server endpoint would be

```
http://localhost:3000
```

swagger documentation

```
http://localhost:3000/dev/api-docs
```

## Setup Requirement:

Latest stable node v14.15.3

#### node setup (incase needed)

```
using volta - https://docs.volta.sh/guide/getting-started

/>curl https://get.volta.sh | bash

/>volta install node@14

/>volta pin node@14
```

<br />
<br />

Latest yarn v1.22.10

#### yarn setup (incase needed)

```
/>curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.10

/>export PATH=$HOME/.yarn/bin:$PATH

/>yarn --version
```

### As we see in the Diagram there are three main verticals.

#### 1. UI

#### 2. BFF -Backend for Frontend

#### 3. API gateway Layer

/_ We will start with Backend setup first and then BFF and then UI. _/

<br />
<br />

## How to Setup Project

Its not automated yet,so will have to start manually. Refer to ![Manual Setup](https://github.mpi-internal.com/pratap-dessai/microfe-ui/blob/master/manual.md) file

```
Service will accessible at this url http://localhost:8080
```
