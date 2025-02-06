const homeBtn = (function() {
    const content = document.querySelector("#content");
    content.replaceChildren();
    
    const restaurantName = document.createElement("div");
    restaurantName.textContent = "Wanmin Restaurant";
    content.appendChild(restaurantName);

    const review = document.createElement("div");
    review.textContent = "A famous restaurant known in Chihu Rock. Some say that the goal of this restaurant is to keep everyone on earth well fed, while others believe that it strives to unify all the regional cuisines of the world. Either way, with its unique dishes, Wanmin Restaurant is surely a place worth visiting. If you really don't have time, why not grab some takeout?";
    content.appendChild(review);

    const hours = document.createElement("div");
    const sundayHours = document.createElement("div");
    sundayHours.textContent = "Sunday: 11am - 8pm";
    const mondayHours = document.createElement("div");
    mondayHours.textContent = "Monday: Closed";
    const tuesdayHours = document.createElement("div");
    tuesdayHours.textContent = "Tuesday: 9am - 9pm";
    const wednesdayHours = document.createElement("div");
    wednesdayHours.textContent = "Wednesday: 9am - 9pm";
    const thursdayHours = document.createElement("div");
    thursdayHours.textContent = "Thursday: 9am - 9pm";
    const fridayHours = document.createElement("div");
    fridayHours.textContent = "Friday: 9am - 10pm";
    const saturdayHours = document.createElement("div");
    saturdayHours.textContent = "Saturday: 10am - 10pm";
    hours.appendChild(sundayHours);
    hours.appendChild(mondayHours);
    hours.appendChild(tuesdayHours);
    hours.appendChild(wednesdayHours);
    hours.appendChild(thursdayHours);
    hours.appendChild(fridayHours);
    hours.appendChild(saturdayHours);
    content.append(hours);

    const location = document.createElement("div");
    location.textContent = "Chihu Rock, Liyue Harbor, Sea of Clouds, Liyue";
    content.append(location);
})();

const menuBtn = (function() {
    const content = document.querySelector("#content");
    content.replaceChildren();

    const menu = document.createElement("div");
    menu.textContent = "Menu";
    content.appendChild(menu);

    const itemOne = document.createElement("div");
    itemOne.textContent = "Grilled Tiger Fish";
    const itemOneImg = document.createElement("img");
    itemOneImg.src = "src/Grilled_Tiger_Fish.webp";
    const itemOneDesc = document.createElement("div");
    itemOneDesc.textContent = "A fish kebab grilled over an open flame.";
    const itemOnePrice = document.createElement("div");
    itemOnePrice.textContent = "$4.00";
    itemOne.appendChild(itemOneImg);
    itemOne.appendChild(itemOneDesc);
    itemOne.appendChild(itemOnePrice);
    content.appendChild(itemOne);

    const itemTwo = document.createElement("div");
    itemTwo.textContent = "Honey Char Siu";
    const itemTwoImg = document.createElement("img");
    itemTwoImg.src = "src/Honey_Char_Siu.webp";
    const itemTwoDesc = document.createElement("div");
    itemTwoDesc.textContent = "A type of roasted meat from Liyue.";
    const itemTwoPrice = document.createElement("div");
    itemTwoPrice.textContent = "$10.00";
    itemTwo.appendChild(itemTwoImg);
    itemTwo.appendChild(itemTwoDesc);
    itemTwo.appendChild(itemTwoPrice);
    content.appendChild(itemTwo);

    const itemThree = document.createElement("div");
    itemThree.textContent = "Jueyun Chili Chicken";
    const itemThreeImg = document.createElement("img");
    itemThreeImg.src = "src/Jueyun_Chili_Chicken.webp";
    const itemThreeDesc = document.createElement("div");
    itemThreeDesc.textContent = "Chicken in a dressing, served cold.";
    const itemThreePrice = document.createElement("div");
    itemThreePrice.textContent = "$8.00";
    itemThree.appendChild(itemThreeImg);
    itemThree.appendChild(itemThreeDesc);
    itemThree.appendChild(itemThreePrice);
    content.appendChild(itemThree);

    const itemFour = document.createElement("div");
    itemFour.textContent = "Rice Buns";
    const itemFourImg = document.createElement("img");
    itemFourImg.src = "src/Rice_Buns.webp";
    const itemFourDesc = document.createElement("div");
    itemFourDesc.textContent = "Soft and fluffy buns.";
    const itemFourPrice = document.createElement("div");
    itemFourPrice.textContent = "5.00";
    itemFour.appendChild(itemFourImg);
    itemFour.appendChild(itemFourDesc);
    itemFour.appendChild(itemFourPrice);
    content.appendChild(itemFour);

})();

const aboutBtn = (function() {
    const content = document.querySelector("#content");
    content.replaceChildren();
})();