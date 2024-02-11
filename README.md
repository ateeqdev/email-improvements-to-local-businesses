# NestJS RapidAPI Scraper

This NestJS application utilizes RapidAPI to retrieve local business profiles of a specified region in the US. The scraped data is then stored in a MongoDB database. Additionally, it leverages Microsoft Copilot (ChatGPT 4 AI) to review the profiles and suggest improvements in a format suitable for outreach via email. The number of profiles to scrape can be configured in the `.env` file.

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Copy the .env.local file and rename it to .env:
4. Set the API key and other configuration in the .env file
5. Install dependencies using npm:

```bash
npm install
```

4. Set up your environment variables by creating a `.env` file. Ensure to include the required variables like `RAPIDAPI_KEY` for authentication.

## Usage

1. Start the NestJS server:

```bash
npm run start
```

2. Send a POST request to the `/copilot` endpoint with the necessary parameters in the request body. Here's an example using cURL:

```bash
curl --location 'http://127.0.0.1:3000/copilot' \
--header 'Content-Type: application/json' \
--data '{
    "query": "website developers in San Francisco, USA",
    "lat": "37.359428",
    "lng": "-121.925337"
}'
```

Replace the `query`, `lat`, and `lng` values with your desired search parameters.

## Configuration

You can customize the application behavior through the `.env` file. Make sure to configure the following variables:
```
 - RAPID_API_KEY=
 - GET_GOOGLE_BUSINESS_PROFILES_HOST=local-business-data.p.rapidapi.com
 - GET_GOOGLE_BUSINESS_PROFILES=https://local-business-data.p.rapidapi.com/search
 - RECORDS_LIMIT=2
 - PROFILE_OFFSET=0
 - COPILOT_HOST=copilot5.p.rapidapi.com
 - COPILOT_URL=https://copilot5.p.rapidapi.com/copilot
 - DB_CONNECTION=mongodb://localhost:27017/
 - DB_NAME=rapidapi
 - DB_TYPE=mongodb
 - DB_HOST=localhost
 - DB_PORT=27017
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
