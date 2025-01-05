# React Project Documentation  
This project is built using **React.js**, **Tailwind CSS**, **Firebase** and a **third-party API**. <br>
The app is hosted locally on **http://localhost:3001**.  

---
## Steps to Set Up and Run the Project  

1. **Clone the Repository**  
   - Clone the project to your local machine:  
     ```bash
     git clone <repository-url>
     cd <project-folder>
     ```  

2. **Install Dependencies**  
   - Install the required Node.js packages:  
     ```bash
     npm install
     ```  

3. **Set Up Tailwind CSS**  
   - Verify or configure Tailwind CSS in the project:  
     - Add Tailwind directives in `src/index.css`:  
       ```css
       @tailwind base;  
       @tailwind components;  
       @tailwind utilities;  
       ```  

4. **Set the Localhost Port**  
   - By default, the app runs on **http://localhost:3000**.  
   - In this case, port **3000** was busy, so the app was configured to run on **http://localhost:3001**.  
   - You can update the `package.json` file to specify the port manually:  
     ```json
     "scripts": {
       "start": "PORT=3001 react-scripts start"
     }
     ```  
   - If your **3000** port is not busy, the app will run on it by default. Otherwise, it will run on **3001**.  

5. **Start the Development Server**  
   - Run the following command to start the app:  
     ```bash
     npm start
     ```  
   - Open your browser and navigate to **http://localhost:3001**.  

6. **Fetch API Integration**  
   - The application fetches data from a third-party API. Data fetching is implemented in the React app using the `fetch` API.  

7. **Test and Debug the App**  
   - Verify that the app runs without errors and the API data is displayed correctly.  

---

## Features  
- **React**: For building the user interface.  
- **Tailwind CSS**: For responsive and modern design.  
- **Fetch API**: For data integration with third-party APIs.  
- **Local Hosting**: Hosted on **http://localhost:3001** for development.  

---

## 🚀 Hosting the App Globally  

If you want to host the app globally:  

1. **Build the App**  
   - Run the following command:  
     ```bash
     npm run build
     ```  
   - This will create a production-ready `build` folder in your project directory.  

2. **Set Up Environment Variables for APIs**  
   - If your app uses APIs, make sure to configure environment variables during deployment.  
   - Create a `.env` file in your project for local development and add variables like:  
     ```env
     REACT_APP_API_URL=https://api.example.com
     ```  
   - For deployment, configure these variables in your hosting platform's environment settings.  
     - **Netlify**: Go to **Site Settings > Environment Variables** and add your API keys/URLs.  
     - **Vercel**: Use **Settings > Environment Variables** to set them.  

3. **Host the Build Folder**  
   - Upload the `build` folder to any web hosting service like:  
     - **Netlify**  
     - **Vercel**  
     - **Firebase Hosting**  
     - **GitHub Pages**  

4. **Deployment Example**  
   - For **Netlify**: Drag and drop the `build` folder into the Netlify dashboard. Configure your environment variables for API usage.  
   - For **Vercel**: Use the Vercel CLI or dashboard to upload your project and set up the environment variables.  

After deployment, your app will use the configured environment variables to interact with the APIs, and you’ll receive a global URL to access your app! 

---
Snapshots-

![1](https://github.com/user-attachments/assets/d4fd28c4-c983-45b8-bdec-3faecd41e0eb)
![2](https://github.com/user-attachments/assets/4638797e-d95a-43a1-9aca-bb23739208b8)
![3](https://github.com/user-attachments/assets/823a457b-4391-4ac5-9ea3-0c9aac1e4329)
![4](https://github.com/user-attachments/assets/d33023b0-ae83-4748-91b1-10c656150117)
![5](https://github.com/user-attachments/assets/2b0b7994-76f4-41a8-9c0e-a7a1414e907c)
![6](https://github.com/user-attachments/assets/a7efa82a-379a-469a-8cf1-83e0ce6eae84)

---
