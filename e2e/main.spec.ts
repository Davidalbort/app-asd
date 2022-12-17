import { test, expect } from "@playwright/test"

test("should navigate to the login page with click button start", async ({ page }) => {
	//Go to page main
	await page.goto("/")
	//Click the Start button  
	await page.getByRole("button",{name: "Start"}).click()
	//expect the url to contain login
	await expect(page).toHaveURL("http://localhost:3000/login")

})

9