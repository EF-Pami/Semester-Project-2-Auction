import { getStorage } from "../storage/getStorage.js";

/**
 * Checks if the user is logged in.
 * @returns {boolean} - Returns true if the user is logged in, false if not.
 */
export function checkIfLoggedIn() {
  const accessToken = getStorage("accessToken");

  if (accessToken) {
    return true;
  } else {
    return false;
  }
}
