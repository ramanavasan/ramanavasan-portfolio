// Google Apps Script - Deploy as Web App
// This script handles form submissions from your Vercel portfolio

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the Google Sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName("Portfolio Contacts");
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet("Portfolio Contacts");
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone Number"]);
    }
    
    // Append the new row with data
    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone
    ]);
    
    // Send confirmation email to yourself
    sendNotificationEmail(data);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data received and stored successfully"
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log the error
    Logger.log("Error: " + error.toString());
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Failed to process request"
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendNotificationEmail(data) {
  const recipientEmail = "ramanavasanmanivannan@gmail.com"; // Your email
  const subject = `New Portfolio Contact: ${data.name}`;
  
  const message = `
    <h2>New Contact Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
    <hr>
    <p>View all submissions in your <a href="https://docs.google.com/spreadsheets">Google Sheet</a></p>
  `;
  
  try {
    GmailApp.sendEmail(recipientEmail, subject, "", {
      htmlBody: message
    });
  } catch (error) {
    Logger.log("Email sending failed: " + error.toString());
  }
}

// Test function to verify deployment
function doGet(e) {
  return ContentService.createTextOutput("Portfolio form receiver is active!")
    .setMimeType(ContentService.MimeType.TEXT);
}
