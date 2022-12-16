
# `Introduction`

  * This project was created with next js with typescript, styled with module component formatting, and react-hook-form. hook-form was used for the conditionals of the email and password fields that the challenge required in the form. The styling was created with mobile first in mind. 


# `Development process`

* Read and analyze documentation (challenge)
* Sketch the application interface.
* Learn to use hooks form.
* Creating components, and home pages to structure the application with semantic HTML, all taking into account the Atomic Design methodology.
* Create the getTickers service for endpoint consumption and perform functional tests.
* We created the logic for each of the components, we created a context for the authentication logic to be global in the app, we also created custom Hook useTickers to separate the logic of the UI, this in order that if you change the technology or framework can easily reuse this logic or is required to migrate to mobile for example with react native.
* Two modals were created, one for authentication failure and another for endpoint request errors.
* The styles were used module css, this to make it more friendly to declare the className, all the design was made responsive design and the table was placed an overflow, to have a better aesthetic.
* Necessary tags were added to have a good SEO performance.
* A rendering test was made to the start button. This decision is concluded since it is the button that will start our application and rendering test is one of the most important since the purpose is to know if what we create is being displayed in the DOM, although the most valuable tests are the end to end rendering.


-Documentation of the whole process.



Available Scripts

* In the project directory, you can run:

 ## `Getting Started`

* First type on terminal

```bash
npm i
```

* Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.