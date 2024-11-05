const welcomeMessage = `Indulge in the finest cuts of steak, perfected over an open flame, served with a touch of Norse-inspired elegance. Join us for an unforgettable dining experience that celebrates the art of steak in the heart of Toronto.`;
const hours = [
    {day: "Sunday", time: "11am - 8:30pm"},
    {day: "Monday", time: "10am - 10pm"},
    {day: "Tuesday", time: "10am - 10pm"},
    {day: "Wednesday", time: "10am - 10pm"},
    {day: "Thursday", time: "10am - 10pm"},
    {day: "Friday", time: "10am - 11pm"},
    {day: "Saturday", time: "10am - 11pm"},
];
const location = "123 King's Street, Toronto, Canada";

function loadHome() {
    const container = document.querySelector('#content');

    container.appendChild(createSection("", welcomeMessage, "intro"));

    const hoursSection = createSection("Hours", "", "open-times");
    hoursSection.appendChild(makeHoursList());
    container.appendChild(hoursSection);

    container.appendChild(createSection("Location", location, "location"));
}

function createSection(title, text, id) {
    const div = document.createElement('div');
    div.classList.add('section');
    div.setAttribute('id', id);
    
    if(title.length > 0) {
        const heading = document.createElement('h2');
        heading.textContent = title;
        div.appendChild(heading);
    }
    
    const para = document.createElement('p');
    para.textContent = text;
    div.appendChild(para);
    
    return div;
}

function makeHoursList() {
    const list = document.createElement('ul');

    for(let hour of hours) {
        const listItem = document.createElement('li');
        list.appendChild(listItem);

        const day = document.createElement('span');
        day.classList.add("day");
        day.textContent = `${hour.day}: `;

        const time = document.createElement('span');
        time.textContent = `${hour.time}`;
        time.classList.add("time");

        listItem.appendChild(day);
        listItem.appendChild(time);
    }
    return list;
}

export { loadHome };