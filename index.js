"use strict";

const fastify = require("fastify")({
  logger: true,
});

fastify.addContentTypeParser(
  "application/vnd.macroE",
  { parseAs: "string" },
  async function (_req, payload) {
    return payload;
  }
);

fastify.route({
  method: "POST",
  url: "/test",
  handler: async (req, reply) => {
    return "howdy";
  },
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
