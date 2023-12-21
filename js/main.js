async function prayerTimes() {
    try {
      const response = await fetch("https://api.aladhan.com/v1/calendar/2023/12?latitude=52.0907006&longitude=-5.1215634&method=2");
      const times = await response.json();
      console.log(times);
  
      console.log('Fajr time:', times.data[0].timings.Fajr);
  
    
      const prayerTimesContainer = document.getElementById('prayer-times-container');
      prayerTimesContainer.innerHTML = ''; 
  
      times.data.forEach(day => {
        const date = day.date.readable;
        const fajr = day.timings.Fajr;
        const dhuhr = day.timings.Dhuhr;
        const asr = day.timings.Asr;
        const maghrib = day.timings.Maghrib;
        const isha = day.timings.Isha;
  
    
        prayerTimesContainer.innerHTML += `
          <div>
            <p>Date: ${date}</p>
            <p>Fajr: ${fajr}</p>
            <p>Dhuhr: ${dhuhr}</p>
            <p>Asr: ${asr}</p>
            <p>Maghrib: ${maghrib}</p>
            <p>Isha: ${isha}</p>
          </div>
        `;
      });
    } catch (error) {
      console.error('Er is een fout opgetreden bij het ophalen van de gegevens:', error);
    }
  }
  
  prayerTimes();
  