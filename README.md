
Task - Conference Ticket Generator

You will build and host a Conference Ticket Generator using React or any React Framework (e.g., Next.js, etc.). The ticket generator will allow users to fill out a form with their details, perform validations on the inputs, and generate a ticket upon successful submission.

Note: Only React or any React Framework is allowed.

Core Features

Form Elements:
- Full Name: Text input for the user's full name.
- Email Address: Email input field.
- Avatar Upload: Users should upload their avatar image and store it using Cloudinary or any image hosting service. The form should only accept and submit the image URL.
- Submit Button: Button to submit the form.

Form Validation:
- Ensure all required fields are filled in before submission.
- The email should have a valid format.
- The avatar upload should accept Cloudinary URLs or any image link.
- Provide clear error messages near the respective field if validation fails.

State Persistence
- The form should retain user inputs using IndexedDB or local storage so that the data is not lost on page refresh.

Accessibility
- Ensure all form fields, hints, and error messages are screen-reader accessible.
- All elements must be focusable, with clear hover and focus states.
- Users must be able to navigate the form and submit it using only the keyboard.

Ticket Generation

On successful submission, generate and display a Conference Ticket containing:
- Full Name
- Email Address
- Avatar (displayed as an image from the provided URL)

The ticket should only be generated if the form passes validation.

Responsive Design
- Ensure the form and ticket layout adjust seamlessly across different screen sizes .
- Optimize for small screens with proper spacing and stacking.

Acceptance Criteria

Form Validation:
- Users must provide all required details before submission.
- The email should be in a valid format.
- Avatar uploads should be handled via Cloudinary or any external image URL submission.
- Display relevant error messages near the respective fields.

State Persistence
- The form fields should persist user input using IndexedDB or local storage, ensuring data remains intact even if the page is refreshed.

Ticket Generation:
- The generated ticket should display the user’s full name, email, and avatar.
- The ticket should only appear when all form validations pass successfully.

Accessibility:
- All form elements and error messages must be fully accessible and announced by screen readers.
- The application must support complete keyboard navigation.

Responsive Design:
- The form and generated ticket must be fully responsive and visually optimized for all device sizes.
- Ensure the ticket is clearly visible immediately after submission on both mobile and desktop screens.

Code Quality:
- Write modular, well-structured, and readable code.
- Utilize appropriate React hooks (e.g., useState, useEffect) for state management and validation.

Implement proper form element types and validation techniques.

live link https://spectacular-souffle-0163eb.netlify.app/
figma: https://www.figma.com/design/mp5JeqDJJlb96k2Ggp6q0p/Event-Ticket-Booking-UI-%E2%80%93-Open-Source-Practice-Project-%F0%9F%8E%9F%EF%B8%8F-(Community)?node-id=5-3362&t=wzxsqEDgjUFDjyV9-0
