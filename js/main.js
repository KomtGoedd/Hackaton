async function prayerTimes() {
    try {
      const response = await fetch("https://api.aladhan.com/v1/calendar/2023/12?latitude=52.0907006&longitude=-5.1215634&method=2");
      const times = await response.json();
      console.log(times.data[0]);
  
    //   console.log('Fajr time:', times.data[0].timings.Fajr);
  
    
      const prayerTimesContainer = document.getElementById('prayer-times-container');
      prayerTimesContainer.innerHTML = ''; 
  

      console.log(times.data[0]);
    //   times.data[0].forEach(day => {
        const date = times.data[0].date.readable;
        const fajr = times.data[0].timings.Fajr;
        const dhuhr = times.data[0].timings.Dhuhr;
        const asr = times.data[0].timings.Asr;
        const maghrib = times.data[0].timings.Maghrib;
        const isha = times.data[0].timings.Isha;
  
    
        prayerTimesContainer.innerHTML += `
          <div>
            <p>Fajr: ${fajr}</p>
            <p>Dhuhr: ${dhuhr}</p>
            <p>Asr: ${asr}</p>
            <p>Maghrib: ${maghrib}</p>
            <p>Isha: ${isha}</p>
          </div>
        `;
    //   });
    } catch (error) {
      console.error('Er is een fout opgetreden bij het ophalen van de gegevens:', error);
    }
  }
  
  prayerTimes();

  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    var formattedTime = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').textContent = formattedTime;

    setTimeout(updateClock, 1000);
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}

updateClock();

  