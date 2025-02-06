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
})();

const aboutBtn = (function() {
    const content = document.querySelector("#content");
    content.replaceChildren();
})();