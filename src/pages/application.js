import { createApplicationRequest } from "../requests/applicationService.js";

const appForm = document.getElementById("application-form");
export const allApplicationEventListeners = () => {
  appForm.addEventListener("submit", (event) => {
    sendApplication(event);
  });
};

const sendApplication = async (e) => {
  e.preventDefault();
  console.log("application");
  let name = document.getElementById("form-contact-name").value;
  let email = document.getElementById("form-contact-email").value;
  let subject = document.getElementById("form-contact-subject").value;
  let message = document.getElementById("form-contact-message").value;

  const applicationData = { name, email, subject, message };

  try {
    const response = await createApplicationRequest(applicationData);
    console.log("Application created:", response);

    alert(response.message);
  } catch (error) {
    console.error("Error creating application:", error);
    document.querySelector(".form-contact-status").innerText =
      "Failed to send message.";
  }
  name = "";
  email = "";
  subject = "";
  message = "";
};
