// Replace checkForName with a function that checks the URL
import { chechForUrl } from "./urlChecker";

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = "http://localhost:8000/api";

if (typeof document !== "undefined") {
  const form = document.getElementById("urlForm");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
}

async function handleSubmit(event) {
  event.preventDefault();

  // Get the URL from the input field
  const formText = document.getElementById("name").value;

  // Check if the URL is valid
  if (chechForUrl(formText)) {
    const res = await fetch(serverURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: formText,
      }),
    });
    const data = await res.json();
    console.log(data);
    //Update UI

    try {
      let polarity = data.agreement;
      let subjectivity = data.subjectivity;
      let text = data.sentence_list[1].segment_list[0].text;

      polarityDiv.innerHTML = `Polarity: ${polarity}`;
      subjectivityDiv.innerHTML = `Subjectivity: ${subjectivity}`;
      textDiv.innerHTML = `Text snippet from the article: <br> ${text}`;
    } catch (error) {
      console.error("An error occurred while processing the data.:", error);
      alert(" Please use a valid Api key");
    }
  } else {
    alert("Invalid Url");
    // console.log("Invalid Url");
  }

  // If the URL is valid, send it to the server using the serverURL constant above
}

// Function to send data to the server

// Export the handleSubmit function
export { handleSubmit };
