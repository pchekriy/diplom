# NFTPass API Documentation

This is the documentation for the NFTPass API, a simple Node.js application that verifies ownership of a specific NFT and provides access to exclusive content based on the verification result.

## Dependencies

- cors
- express
- ethers

## API Endpoints

### `GET /status`

**Description:** Endpoint to check if the API is up and running.

**Response:**

```json
{
  "status": "ok"
}
```

### `POST /verify`

**Description:** Endpoint to verify the NFT ownership for a given address and return the content.

**Request body:**

```json
{
  "signedMessage": "string",
  "address": "string"
}
```

**Response:**

```json
{
  "address": "string",
  "verified": "boolean",
  "error": "boolean",
  "content": "string"
}
```

## Functions

### `verify(signedMessage, addr)`

**Description:** Verifies if the provided signed message corresponds to the given address and if the address has the NFT.

**Parameters:**

- signedMessage: The signed message (string)
- addr: The address to verify (string)

**Returns:** A boolean indicating if the verification was successful.

### `getContent(isVerified)`

**Description:** Returns the content based on the verification result.

**Parameters:**

- isVerified: A boolean indicating if the address was verified (boolean)

**Returns:** A string containing the content.

## Server

The server listens on port 8549 using an HTTP server created with Express.

```javascript
const PORT = 8549;
const server = require('http').createServer(app);
server.listen(PORT, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${PORT}`)
});
```

