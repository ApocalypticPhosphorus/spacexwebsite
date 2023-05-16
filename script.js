// Sample data for SpaceX launches
const launches = [
  {
    rocketImg: 'images/FalconSAT-2.jpeg',

    mission: 'Falcon 1 Flight 1',
    date: 'March 24, 2006',
    time: '22:30',

    
    cargo: 'FalconSAT-2',
    result: 'Failure',
    launchComplex: 'Omelek Island Launch Facilities',
    orbit: 'LEO',
    configuration: 'Merlin A',
    cost: '~6.7M',
    
    booster: 'N/A',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2006: 1'
  },
  {
    rocketImg: 'images/falcon1.png',

    mission: 'Falcon 1 Flight 2',
    date: 'March 21, 2007',
    time: '01:10',

    
    cargo: 'DemoSat',
    result: 'Failure',
    launchComplex: 'Omelek Island Launch Facilities',
    orbit: 'LEO',
    configuration: 'Merlin A',
    cost: '~6.7M',
    
    booster: 'N/A',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2007: 1'
  },
  {
    rocketImg: 'images/falcon1.png',

    mission: 'Falcon 1 Flight 3',
    date: 'August 3, 2008',
    time: '03:34',

    
    cargo: 'Trailblazer, NanoSail-D, PREsat',
    result: 'Failure',
    launchComplex: 'Omelek Island Launch Facilities',
    orbit: 'LEO',
    configuration: 'Merlin C',
    cost: '~7M',
    
    booster: 'N/A',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2008: 1'
  },
  {
    rocketImg: 'images/falcon1.png',

    mission: 'Falcon 1 Flight 4',
    date: 'September 28, 2008',
    time: '23:15',

    
    cargo: 'RatSat',
    result: 'Success',
    launchComplex: 'Omelek Island Launch Facilities',
    orbit: 'LEO',
    configuration: 'Merlin C',
    cost: '~7M',
    
    booster: 'N/A',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2008: 2'
  },
  {
    rocketImg: 'images/falcon1.png',

    mission: 'Falcon 1 Flight 5',
    date: 'July 14, 2009',
    time: '03:35',

    
    cargo: 'RazakSat',
    result: 'Success',
    launchComplex: 'Omelek Island Launch Facilities',
    orbit: 'LEO',
    configuration: 'Merlin C',
    cost: '~7M',
    
    booster: 'N/A',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2009: 1'
  },
  {
    rocketImg: 'images/falcon91.0.jpg',

    mission: 'Falcon 9 Flight 1',
    date: 'June 4, 2010',
    time: '18:45',

    
    cargo: 'Dragon Spacecraft Qualification Unit',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'LEO',
    configuration: 'Falcon 9 v1.0',
    cost: '~$54-59.5M',
    
    booster: 'B0003',
    landing: 'Failure',
    fairings: 'N/A',
    
    launchyear: '2010: 1'
  },
  {
    rocketImg: 'images/falcon91.0.jpg',

    mission: 'Falcon 9 Flight 2',
    date: 'December 8, 2010',
    time: '15:43',

    
    cargo: 'SpaceX COTS Demo Flight 1 (Dragon C101)',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'LEO (ISS)',
    configuration: 'Falcon 9 v1.0',
    cost: '~$54-59.5M',
    
    booster: 'B0004',
    landing: 'Failure',
    fairings: 'N/A',
    
    launchyear: '2010: 2'
  },
  {
    rocketImg: 'images/falcon91.0.jpg',

    mission: 'Falcon 9 Flight 3',
    date: 'May 22, 2012',
    time: '07:44',

    
    cargo: 'SpaceX COTS Demo Flight 2 (Dragon C102)',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'LEO (ISS)',
    configuration: 'Falcon 9 v1.0',
    cost: '~$54-59.5M',
    
    booster: 'B0005',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2012: 1'
  },
  {
    rocketImg: 'images/CRS-1.jpg',

    mission: 'CRS-1',
    date: 'October 8, 2012',
    time: '00:35',

    
    cargo: 'SpaceX CRS-1 (Dragon C103), Orbcomm-OG2',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'LEO (ISS), LEO',
    configuration: 'Falcon 9 v1.0',
    cost: '~$54-59.5M',
    
    booster: 'B0006',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2012: 2'
  },
  {
    rocketImg: 'images/CRS-2.jpg',

    mission: 'CRS-2',
    date: 'March 1, 2013',
    time: '15:10',

    
    cargo: 'SpaceX CRS-2 (Dragon C104)',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'LEO (ISS)',
    configuration: 'Falcon 9 v1.0',
    cost: '~$54-59.5M',
    
    booster: 'B0007',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2013: 1'
  },
  {
    rocketImg: 'images/CASSIOPE.jpg',

    mission: 'Falcon 9 Demonstration Flight',
    date: 'September 29, 2013',
    time: '16:00',

    
    cargo: 'CASSIOPE',
    result: 'Success',
    launchComplex: 'Space Launch Complex 4E, Vandenburg Space Force Base',
    orbit: 'LEO (Polar)',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1003',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2013: 2'
  },
  {
    rocketImg: 'images/SES-8.jpg',

    mission: 'SES-8',
    date: 'December 3, 2013',
    time: '22:41',

    
    cargo: 'SES-8',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'GTO',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1004',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2013: 3'
  },
  {
    rocketImg: 'images/THAICOM 6.jpg',

    mission: 'Thaicom 6',
    date: 'January 6, 2014',
    time: '22:06',

    
    cargo: 'Thaicom 6',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'GTO',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1005',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2014: 1'
  },
  {
    rocketImg: 'images/THAICOM 6.jpg',

    mission: 'CRS-3',
    date: 'April 18, 2014',
    time: '19:25',

    
    cargo: 'SpaceX CRS-3 (Dragon C105)',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'LEO (ISS)',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1006',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2014: 2'
  },
  {
    rocketImg: 'images/THAICOM 6.jpg',

    mission: 'Orbcomm-0G2-1',
    date: 'July 14, 2014',
    time: '15:15',

    
    cargo: 'Orbcomm-0G2-1 (6 Satellites)',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'LEO',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1007',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2014: 3'
  },
  {
    rocketImg: 'images/THAICOM 6.jpg',

    mission: 'AsiaSat 8',
    date: 'August 5, 2014',
    time: '08:00',

    
    cargo: 'AsiaSat 8',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'GTO',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1008',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2014: 4'
  },
  {
    rocketImg: 'images/THAICOM 6.jpg',

    mission: 'AsiaSat 6',
    date: 'September 7, 2014',
    time: '05:00',

    
    cargo: 'AsiaSat 6',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'GTO',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1011',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2014: 5'
  },
  {
    rocketImg: 'images/THAICOM 6.jpg',

    mission: 'CRS-4',
    date: 'September 21, 2014',
    time: '05:52',

    
    cargo: 'SpaceX CRS-4 (Dragon C106)',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'LEO (ISS)',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1010',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2014: 6'
  },
  {
    rocketImg: 'images/THAICOM 6.jpg',

    mission: 'CRS-5',
    date: 'January 10, 2015',
    time: '09:47',

    
    cargo: 'SpaceX CRS-5 (Dragon C107)',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'LEO (ISS)',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1012',
    landing: 'Failure',
    fairings: 'N/A',
    
    launchyear: '2015: 1'
  },
  {
    rocketImg: 'images/THAICOM 6.jpg',

    mission: 'DSCOVR',
    date: 'Febuary 11, 2015',
    time: '23:03',

    
    cargo: 'DSCOVR',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'Sun-Earth L1',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1013',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2015: 2'
  },
  {
    rocketImg: 'images/THAICOM 6.jpg',

    mission: 'ABS/EutelSat-1',
    date: 'March 2, 2015',
    time: '03:50',

    
    cargo: 'ABS-3A, Eutelsat 115 West B',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'GTO',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1014',
    landing: 'N/A',
    fairings: 'N/A',
    
    launchyear: '2015: 3'
  },
  
];
  
launchNo = 0;
recoveriesNo = [0,0,0]

// Function to create a launch card element
function createLaunchCard(launch) {
  launchNo++;
  if (launch.landing === 'Failure') {
    recoveriesNo[2]++;
  } else if (launch.landing === 'Success') {
    recoveriesNo[1]++;
  }else{
    recoveriesNo[0]++;
  }

  const card = document.createElement('div');
  card.className = 'card';
  
  //Image
  const rocketImg = document.createElement('img');
  rocketImg.src = launch.rocketImg;
  card.appendChild(rocketImg);

  //Header
  const header = document.createElement('div');
  header.className = 'header';
  
  const missionHeading = document.createElement('h2');
  missionHeading.textContent = launch.mission;
  header.appendChild(missionHeading);

  const datePara = document.createElement('h3');
  //datePara.className = 'date';
  datePara.textContent = `${launch.date}`;
  header.appendChild(datePara);

  const timePara = document.createElement('h3');
  //datePara.className = 'date';
  timePara.textContent = `${launch.time}`;
  header.appendChild(timePara);

  card.append(header);

  //Info
  const info = document.createElement('div');
  info.className = 'info';

  const resultPara = document.createElement('p');
  const resultText = document.createElement('span');
  resultText.textContent = 'Result: ';
  resultPara.appendChild(resultText);
  
  const resultStatus = document.createElement('span');
  resultStatus.textContent = launch.result;
  if (launch.result === 'Failure') {
      resultStatus.style.color = '#d60000';
  } else if (launch.result === 'Success') {
      resultStatus.style.color = 'limegreen';
  }
  resultPara.appendChild(resultStatus);

  info.appendChild(resultPara);

  const cargo = document.createElement('p');
  cargo.textContent = `Cargo: ${launch.cargo}`;
  info.appendChild(cargo);

  const launchComplex = document.createElement('p');
  launchComplex.textContent = `Launch Complex: ${launch.launchComplex}`;
  info.appendChild(launchComplex);

  const orbit = document.createElement('p');
  orbit.textContent = `Orbit: ${launch.orbit}`;
  info.appendChild(orbit);

  const configuration = document.createElement('p');
  configuration.textContent = `Configuration: ${launch.configuration}`;
  info.appendChild(configuration);

  const cost = document.createElement('p');
  cost.textContent = `Cost: ${launch.cost}`;
  info.appendChild(cost);

  //Recovery
  const recovery = document.createElement('div');
  recovery.className = 'recovery';

  const recoveryTitle = document.createElement('h2');
  recoveryTitle.textContent = 'Recovery';
  recovery.appendChild(recoveryTitle);

  if(launchNo > 30){
    const booster = document.createElement('a');
    booster.classList.add("slide-bar");
    booster.href = `booster_${launch.booster}.html`; // Update the link URL here
    booster.textContent = `Booster: ${launch.booster}`;
    recovery.appendChild(booster);
  }else{
    const booster = document.createElement('p');
    booster.textContent = `Booster: ${launch.booster}`;
    recovery.appendChild(booster);
  }

  const fairings = document.createElement('a');
  fairings.classList.add("slide-bar");
  fairings.href = `fairing_${launch.fairings}.html`;
  fairings.textContent = `Fairings: ${launch.fairings}`;
  recovery.appendChild(fairings);

  const landingP = document.createElement('p');
  const landingText = document.createElement('span');
  landingText.textContent = 'Landing: ';
  landingP.appendChild(landingText);
  
  const landingStatus = document.createElement('span');
  landingStatus.textContent = launch.landing;
  if (launch.landing === 'Failure') {
    landingStatus.style.color = '#d60000';
  } else if (launch.landing === 'Success') {
    landingStatus.style.color = 'limegreen';
  }
  landingP.appendChild(landingStatus);

  recovery.appendChild(landingP);

  //Statistics
  const statistics = document.createElement('div');
  statistics.className = 'statistics';

  const launchp = document.createElement('p');
  launchp.textContent = `Launch #: ${launchNo}`;
  statistics.appendChild(launchp);

  const launchyear = document.createElement('p');
  launchyear.textContent = `Launches in ${launch.launchyear}`;
  statistics.appendChild(launchyear);

  const recoveries = document.createElement('p');
  recoveries.textContent = `Landings: ` + recoveriesNo[0] + `/` + recoveriesNo[1] + `/` + recoveriesNo[2];
  statistics.appendChild(recoveries);

  card.append(info);
  card.append(recovery);
  card.append(statistics);

  return card;
}

function initializeTimeline() {
  const launchesSection = document.getElementById('launches');
  const launchCards = document.getElementsByClassName('card');

  function checkVisibility() {
    for (let i = 0; i < launchCards.length; i++) {
      const launchCard = launchCards[i];
      const cardTop = launchCard.getBoundingClientRect().top;
      const cardBottom = launchCard.getBoundingClientRect().bottom;

      // Check if the card is partially visible
      const isVisible = cardTop < window.innerHeight && cardBottom >= 0;

      if (isVisible) {
        launchCard.classList.add('visible');
      }else{
        launchCard.classList.remove('visible');
      }
    }
  }

  // Create launch cards and append them to the launches section
  launches.forEach((launch) => {
    const launchCard = createLaunchCard(launch);
    launchesSection.appendChild(launchCard);
  });

  // Check card visibility on page load
  checkVisibility();

  // Check card visibility on scroll
  window.addEventListener('scroll', checkVisibility);
}



// Initialize the timeline when the page finishes loading
window.addEventListener('load', initializeTimeline);
