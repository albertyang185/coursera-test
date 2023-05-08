Module 5 Coding Assignment

## Time to Complete
1 hours

### General Idea
Start code in `examples/Lecture59`.

First, change the 2 buttons at the top of the website to say `My Info` and `Sign Up` instead of `About` and `Awards`.

**Task 1:**
`Sign Up` button -> taken to a view that lets them "sign up" for the restaurant newsletter. 
The sign up form should ask for: 
    first name, 
    last name, 
    email address, 
    phone number. 

Ask the user to specify the 

    menu number (menu number=`short_name` of menu item)

that's their favorite dish. 

Validated all form input (except the `short_name`) through AngularJS validation. 

`Submit` button (after all other fields are validated)-> retrieve  menu item user specified as their favorite through https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{category_short_name}/menu_items/{menu_number}.json. 

For example, for menu item L1, you will have to construct the URL of [https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L/menu_items/0.json]. (Alternatively, retrieve entire menu with [https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json] traverse tree in JS ) 

Item specified invalid, server returns `null`-> display a `No such menu number exists` next to favorite choice (See bonus for more)

If everything is valid, save the user's preference in your client app such that you can retrieve it in another view/component/controller/etc. (Hint: think service). Once saved, display a message below the form saying `Your information has been saved`.

**Task 2:**
`My Info` button -> view shows user "registered" information, including favorite menu item picked. When showing favorite menu item, display picture of menu item, title, description.

If the user hasn't yet "registered" through the `Sign Up` button, simply display a message saying: `Not Signed Up Yet. Sign up Now!`. The words "Sign up Now!" should be a link to the same view as the `Sign Up` link points to.


## Bonus is required for JHU courese 

**Bonus Task 3:**
figure out how to setup the validation of the user's choice for the favorite item BEFORE the user hits the `Submit` button. This way, the message `No such menu number exists` should show up pretty soon after the user types something into the favorite menu item textbox and it loses focus.

**Bonus Task 4:**
Write a simple test which exercises the function that will determine if the favorite item exists in the menu or doesn't exist. Note, that you will need to use the $httpBackend service (and probably look up the docs for it as well) to achieve this test properly.

