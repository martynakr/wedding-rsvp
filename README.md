# Wedding RSVP app

A wedding RSVP application with a serverless backend built using AWS. The application allows invited guests to securely access their invitations, wedding day details, and submit their RSVP and dietary requirements.

## Features

- Secure guest access using invitation codes and passwords
- JWT authentication with HTTP only cookie
- RSVP submission and management
- Serverless backend architecture
- Responsive, bilingual interface (English and Polish)

## Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- React Hook Form with zod validation

### Backend and infrastructure

- AWS Lambda
- API Gateway
- DynamoDB
- Serverless Framework

## Architecture

The React frontend communicates with a serverless backend through API Gateway. AWS Lambda handles application logic and authentication, while DynamoDB stores invitation and RSVP data. AWS SES provides email functionality.

## Database design

Example item stored in DynamoDB:

```json
{
    "inviteCode": "TEST2027",
    "password": "11122233",
    "hasResponded": false,
    "language": "EN",
    "respondedAt": null,
    "guests": [
        {
            "firstName": "Test",
            "lastName": "One",
            "dietaryRequirements": null,
            "email": null,
            "isAttending": null
        },
        {
            "firstName": "Test",
            "lastName": "Two",
            "dietaryRequirements": null,
            "email": null,
            "isAttending": null
        }
    ]
}
```

## Deployed website

Live website can be accessed [here](https://pierreandmartyna.com/)
