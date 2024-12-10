import { google } from "googleapis";
import { getAuth } from "../config/sheets";

const SPREADSHEET_ID = "1uQ3BhcS1glbv2cZbD6n0xP4z7BkkOKkwUn1-cw_8YWk";

async function getGoogleSheet(auth: any) {
  const client = await auth.getClient();
  return google.sheets({ version: "v4", auth: client });
}
// Function to find row index by customerId
async function findRowByCustomerId(customerId: string): Promise<number | null> {
  const auth = getAuth();
  const sheets = await getGoogleSheet(auth);
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:A", // Only search in customer ID column
      valueRenderOption: "UNFORMATTED_VALUE",
    });

    const rows = response.data.values;
    if (!rows) return null;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i][0] == (customerId)) {
        return i + 1; 
      }
    }
    return null;
  } catch (error) {
    console.error("Error finding row:", error);
    throw error;
  }
}

const appendOrUpdateRow = async (values: any[][]): Promise<any> => {
  const auth = getAuth();
  const sheets = await getGoogleSheet(auth);
  try {
    const customerId = values[0][0]; // First element of first row is customerId
    const rowIndex = await findRowByCustomerId(customerId);

    if (rowIndex) {
      // Update existing row
      const request = {
        spreadsheetId: SPREADSHEET_ID,
        range: `Sheet1!A${rowIndex}`, // Start from the found row
        valueInputOption: "USER_ENTERED",
        resource: {
          values: values,
        },
      };

      const response = await sheets.spreadsheets.values.update(request);
      return response.data;
    } else {
      // Append new row
      const request = {
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A:Z",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: values,
        },
      };

      const response = await sheets.spreadsheets.values.append(request);
      return response.data;
    }
  } catch (error) {
    console.error("Append/Update error:", error);
    throw error;
  }
};

export {appendOrUpdateRow} 