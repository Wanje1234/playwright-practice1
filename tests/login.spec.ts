import {test,expect} from '@playwright/test';

test('login test',async ({page})=>{
    //open the practice website
    await page.goto('https://www.saucedemo.com/');
    
    //type username and password using placeholder text
    await page.getByPlaceholder('username').fill('standard_user');
    await page.getByPlaceholder('password').fill('secret_sauce');

    //click the login button
    await page.getByRole('button',{name: 'login'}).click();

    //verify the products page appears
    await expect (page.getByText('products')).toBeVisible();

                                                    


})
