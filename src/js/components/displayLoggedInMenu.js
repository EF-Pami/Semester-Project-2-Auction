import { checkIfLoggedIn } from "../utils/checkIfLoggedIn.js";
import { getUserCredits } from "../api/fetch/getUserCredits.js";
import { getStorage } from "../storage/getStorage.js";

/**
 * Changes the navigation menu depending on if the user is logged in or not.
 * If the user is logged in, it displays the user's credits, hides the login/register button,
 * and shows the profile menu and add listing buttons. If the user is not logged in, it hides the profile
 * menu and add listing buttons and shows the login/register button.
 * @example
 * ```js
 * displayLoggedInMenu();
 * ```
 */
export async function displayLoggedInMenu() {
  const loginRegisterButton = document.querySelector("#not-logged-in");
  const headerProfile = document.querySelector("#header-profile");
  const myProfileLink = document.querySelectorAll(".my-profile-link");
  const addListingButton = document.querySelector("#add-listing-button");
  const profileMenu = document.querySelector("#nav-profile");
  const creditsContainer = document.querySelector("#creditsHeaderContainer");
  const userName = getStorage("name");

  try {
    const isUserLoggedIn = checkIfLoggedIn();
    if (isUserLoggedIn) {
      const userCredits = await getUserCredits(userName);

      creditsContainer.innerText = userCredits;
      loginRegisterButton.classList.add("d-none");
      headerProfile.classList.remove("d-none");
      addListingButton.classList.remove("d-none");
      profileMenu.classList.remove("d-none");
      myProfileLink.forEach((link) => {
        link.href = `/profile/index.html?name=${userName}`;
      });
    } else {
      loginRegisterButton.classList.remove("d-none");
      headerProfile.classList.add("d-none");
      addListingButton.classList.add("d-none");
      profileMenu.classList.add("d-none");
    }
  } catch (error) {
    console.log(error);
  }
}
displayLoggedInMenu();
