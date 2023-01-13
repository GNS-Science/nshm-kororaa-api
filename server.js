require('dotenv').config()
const serverless = require('serverless-http');
const express = require("express");
const { createYoga } = require('graphql-yoga');
const { buildSubschemaConfigs, buildGatewaySchema } = require('./lib/schema_builder');
const { config } = require('./gateway_config');

const subschemaConfigs = buildSubschemaConfigs(config);
const stitched_schema = buildGatewaySchema(subschemaConfigs);

const yoga = createYoga({
   schema: stitched_schema,
   graphiql: { endpoint: `/${process.env.DEPLOYMENT_STAGE}/graphql` }
})

const app = express();

app.use('/graphql', yoga);

// app.listen(process.env.PORT || 4002, () => {
//   console.log("Server started!");
// });

module.exports.handler = serverless(app);