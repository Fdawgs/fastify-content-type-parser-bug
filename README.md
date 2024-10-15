# fastify-content-type-parser-bug

Run the following command to reproduce the bug:

```bash
curl -X POST http://localhost:3000/test -H "Content-Type: application/vnd.macroEnabled" -d "sup"
```

Compared to:

```bash
curl -X POST http://localhost:3000/test -H "Content-Type: application/vnd.macroenabled" -d "sup"
```
