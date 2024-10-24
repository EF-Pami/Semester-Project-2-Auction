import { getStorage } from "../storage/getStorage.js";

/**
 * Enables the bid button if the user is logged in.
 * The function checks if an access token is stored to determine if the user is logged in.
 * @example
 * ```js
 * enableBidButton();
 * ```
 */
export function enableBidButton() {
  const isUserLoggedIn = getStorage("accessToken");
  const addBidButton = document.querySelector("#addBidButton");
  const addBidText = document.querySelector("#addBidText");

  if (isUserLoggedIn) {
    addBidButton.disabled = false;
    addBidText.classList.add("d-none");
  } else {
    addBidButton.disabled = true;
    addBidText.classList.remove("d-none");
  }
}
