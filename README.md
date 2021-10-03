# Project - Claims Form

## Getting Started

An Application Security Project ——Claim form, where I worked with Pair to develop a more secure form app. I was responsible for Front-end development where I design and develop with React and its libraries and Hook up POST Request to API.

### Prerequisite

The app will run through **Docker**

### Installation

```sh
docker-compose up
```

or
for safe run

```sh
docker-compose up --build
```

## Brief of the Project

Our health insurer, enSURE, needs to create a form that can handle submissions of insurance claims from customers. You and the rest of the dev team will carry out the planning and documentation and implement a claims form securely.

<details>
  <summary>Health Insurer Company Profile - enSURE</summary>

![enSURE](/img/ensure-introduction.jpg)

  </details>

### Claims form Requirements

The claims form will be used by customers to apply for payment for a new claim (for example, say, the claimant has had some tooth decay recently which their insurance policy states that it will cover).

- The claims form requires the customer to submit the following information:
  - Policy number
  - Customer ID Number
  - What the condition is the claimant wishes to claim for
  - When did the claimant first have symptoms
  - Details of the symptoms
  - The type of medical service that is required eg. Dentistry
  - Name of the service provider/facility
  - Whether the claimant has a health policy with another health provider that they could claim on for this condition
  - The claimant must consent to this statement <i>
    - "As part of an insurance claim with enSURE, I consent and give authority to enSURE and any of its related entities and agents to collect, use and disclose, any medical, financial or other personal information about the life assured for the purposes of assessing and managing the insurance claim. I declare that all medical information pertaining to me and relevant to my insurance claim has been provided and disclosed to enSURE, and understand that making any false or fraudulent claim could result in cancellation of my policy and/or oblige me to repay any claims."</i>

---

## Group Component

---

<details>
  <summary>Implement the Insurance Claims Form (Group)</summary>

#### Work as a group to implement an Insurance Claims Form. You will be provided with the set of design documentation and tasks to work from for building the form.

1. Create the appropriate front end form.
2. Create and configure a POST route (or API endpoint).
   - This route should take the input from the front end form and store it in the database.
3. Design and create a database table to store submitted claims.
4. Demonstrate that your claim can be submitted and stored in the database using the components created above. You will do this by presenting a demo of your claims form at the end of the working week (Friday).
5. Submit the self-assessment form in the Google Classroom.
6. Make sure the recording of your demo is loaded to Google Classroom. Co-ordinate with the members of your team to make sure that one of you loads one copy of the demo to the Google Classroom assignment (group assignment). You are not required to submit any other video evidence of your group work or ceremonies.

Note: Example application
You have also been supplied with some boilerplate code to get you started - in this repo. A server, client, and database.

To spin up the example app, use the command:
`docker-compose up`

##### Acceptance Criteria

The form has been implemented to meet the Functional and Security requirements provided. Any requirements that have not been met or may need further remediation have been documented in the form of technical or security debt in the Jira/taskboard.

</details>

---
