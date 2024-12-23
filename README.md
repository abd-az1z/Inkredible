Inkredible 

An end-to-end T-shirt e-commerce platform built using modern web development technologies. The project integrates both frontend and backend functionalities to deliver a seamless user experience.

Project Overview

This project is a fully functional e-commerce website designed to sell T-shirts. It features dynamic product display, cart management, and real-time inventory updates. The platform is scalable, responsive, and production-ready.

Features
	•	Dynamic Product Display: Products fetched directly from the backend.
	•	Cart Functionality: Add, remove, and update product quantities in real-time.
	•	Real-Time Inventory Tracking: Stock levels are updated dynamically using WebSockets.
	•	Responsive Design: Optimized for mobile, tablet, and desktop devices.
	•	State Management: Powered by Redux for global state handling.
	•	Backend APIs: Node.js and Express handle data fetching, user management, and order creation.

Tech Stack

Frontend
	•	React (Vite): Framework for building user interfaces.
	•	TailwindCSS: Utility-first CSS framework for styling.
	•	React Router: For seamless navigation between pages.
	•	Axios: For API calls to the backend.
	•	Framer Motion: For animations and transitions.

Backend
	•	Node.js: Runtime environment for building server-side logic.
	•	Express.js: Web framework for creating RESTful APIs.
	•	MongoDB: Database for storing product, user, and order information.
	•	WebSockets: For real-time inventory updates.

State Management
	•	Redux: To handle cart, user, and product states globally.

How to Run the Project

1. Clone the Repository

git clone https://github.com/your-username/tshirt-ecommerce-platform.git
cd tshirt-ecommerce-platform

2. Install Dependencies

Frontend

cd inkrediblefrontend
npm install

Backend

cd inkrediblebackend
npm install

3. Set Up Environment Variables

Create a .env file in the backend directory with the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

4. Start the Servers

Frontend

cd inkrediblefrontend
npm run dev

Backend

cd inkrediblebackend
npm start

5. Open in Browser

Frontend: http://localhost:5173
Backend API: http://localhost:5000

Key Functionalities

Frontend
	•	Homepage: Displays featured products and current offers.
	•	Product Page: Displays product details, available sizes, and “Add to Cart” button.
	•	Cart Page: Allows users to manage products in their cart.
	•	Responsive Design: Ensures a smooth experience on all devices.

Backend
	•	Product API: Fetch products dynamically.
	•	Order API: Create and manage orders.
	•	Authentication: JWT-based login/signup.

Future Enhancements

While the project is complete and functional, here are potential enhancements for future iterations:
	•	Payment Gateway Integration
	•	Deployment to production platforms
  •	Dashboard for the admin to track sales, product performance, and user behavior using Chart.js or Recharts.
  •	AI-Powered Recommendations 

Contributing

Feel free to fork this repository and submit pull requests for improvements or bug fixes.


Acknowledgments

Special thanks to online resources, mentors, and tutorials that helped shape this project.
