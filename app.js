
const showDate = (day) => {
    const date = day.toDateString().slice(4);

    document.querySelector('.date')
        .innerHTML = date;
}

const setClock = () => {

    const day = new Date();
    const second = day.getSeconds();
    const minute = day.getMinutes();
    const hour = day.getHours();
    
    const secondDegree = second / 60;
    const minuteDegree = (secondDegree + minute) / 60;
    const hourDegree = (minuteDegree + hour) / 12;  
    
    const secondHand = document.querySelector('#second');
    const minuteHand = document.querySelector('#minute');
    const hourHand = document.querySelector('#hour');
    
    secondHand.style.transform = `rotate(${secondDegree * 360}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree * 360}deg)`;
    hourHand.style.transform = `rotate(${hourDegree * 360}deg)`;

    showDate(day);
    
};
  
setInterval(setClock, 1000)
  
setClock();

