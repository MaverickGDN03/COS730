# COS730-Assignment 2- Google Wave

## Project Description

In May 2009, Google Wave was introduced by Google as a cutting-edge real-time collaboration
platform. It was designed to transform corporate communication, which was reliant on
conventional email at that time. Google Wave aimed to optimize collaboration across teams
and organizations by providing a wide range of features within a unified platform.
Google Wave seamlessly integrated email, instant messaging, wiki functionality, online doc-
ument editing, and gadgets into one unified interface. This allowed users to engage in the
majority of their work in one unified platform, as opposed to using multiple tools.
It allowed users to engage in live conversations while collaborating in live document edit-
ing. The core component of Google Wave was the concept of Waves. Waves were hosted
XML documents that enabled real-time modifications. Waves had message threads, called
Wavelets, that allowed users to communicate within the document/Wave.
Google Wave aimed to revolutionize team communication and collaboration in the digital
world by utilizing the power of Waves and its associated features.

## Branching Strategy

### Gitflow Workflow

<img src="https://drive.google.com/uc?export=view&id=1TKgSLuJD9KCYU9L23a8lqqJI7czaaYFY"/>

## Project Management

I followed an agile methodology for this project. I used a kanban board to track the progress of the project. I used the following layout for my board.

<img src="https://drive.google.com/uc?export=view&id=12-ysM6IVAz8oQF4oKqu5X9_SQJeb8rkw"/>

## Software Architecture

### Microservices Architecture

This pattern structures the application as a collection of loosely coupled services, each of
which implements a specific business capability.
In the fast-paced development world we are in, adding additional functionality to an appli-
cation is crucial for keeping a user base happy and for expanding that user base. Therefore,
having the ability to independently scale and add new services to the application without
taking it down and redeploying is essential in the technology industry.

### Event-Driven Architecture

This pattern uses events to trigger and communicate between decoupled services This pro-
motes:

- Real time processing:
  - Events allow the system to react immediately to user actions or system changes,crucial for real-time collaboration and communication.
  - Users can see changes made by others in real-time without needing to refresh the page.
- Scalability:
  - The event-driven model easily supports scaling by adding more consumers to process events, thus handling increased loads efficiently.
  - Each service can operate independently, listening for and emitting events as needed,
which allows the system to scale individual components without affecting others

### MVC Architecture

This pattern separates the application into three main components: Model (data), View
(UI), and Controller (business logic). This promotes:

- Maintainability:
  - The clear separation of concerns makes understanding the code simple and thus improves code maintainability
    - Teams can work on the user interface, business logic, and data access independently, enhancing productivity and collaboration.
- Flexibility:
  - Creating different perspectives for the same model enables the development of diverse user interfaces without altering the fundamental logic. Especially helpful for varying devices,e.g. mobile and desktop.

### Layered Architecture

This architectural pattern divides the application into layers, each responsible for specific
tasks.
This promotes:

- Maintainability:

- Clear separation of concerns makes the system easier to manage and update.
- Scalability
  - Each layer can be scaled and worked on independently
- Security
  - Each layer in the application can have its own form of security thus ensuring a secure system throughout every point in the application.
