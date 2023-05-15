// Sample data for SpaceX launches
const launches = [
  {
    rocketImg: 'falcon1.png',

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
    
    launch: '1',
    launchyear: '2006: 1',
    recoveries: '1/0/0'
  },
  {
    rocketImg: 'falcon1.png',

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
    
    launch: '2',
    launchyear: '2007: 1',
    recoveries: '2/0/0'
  },
  {
    rocketImg: 'falcon1.png',

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
    
    launch: '3',
    launchyear: '2008: 1',
    recoveries: '3/0/0'
  },
  {
    rocketImg: 'falcon1.png',

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
    
    launch: '4',
    launchyear: '2008: 2',
    recoveries: '4/0/0'
  },
  {
    rocketImg: 'falcon1.png',

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
    
    launch: '5',
    launchyear: '2009: 1',
    recoveries: '5/0/0'
  },
  {
    rocketImg: 'falcon91.0.jpg',

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
    
    launch: '6',
    launchyear: '2010: 1',
    recoveries: '5/0/1'
  },
  {
    rocketImg: 'falcon91.0.jpg',

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
    
    launch: '7',
    launchyear: '2010: 2',
    recoveries: '5/0/2'
  },
  {
    rocketImg: 'falcon91.0.jpg',

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
    
    launch: '8',
    launchyear: '2012: 1',
    recoveries: '6/0/2'
  },
  {
    rocketImg: 'falcon91.0.jpg',

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
    
    launch: '9',
    launchyear: '2012: 2',
    recoveries: '7/0/2'
  },
  {
    rocketImg: 'falcon91.0.jpg',

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
    
    launch: '10',
    launchyear: '2013: 1',
    recoveries: '8/0/2'
  },
  {
    rocketImg: 'falcon91.1.jpg',

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
    
    launch: '11',
    launchyear: '2013: 2',
    recoveries: '9/0/2'
  },
  {
    rocketImg: 'falcon91.1.jpg',

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
    
    launch: '12',
    launchyear: '2013: 3',
    recoveries: '10/0/2'
  },
  {
    rocketImg: 'falcon91.1.jpg',

    mission: 'Thaicom 6',
    date: 'January 6, 2014',
    time: '22:06',

    
    cargo: 'Thaicom 6',
    result: 'Success',
    launchComplex: 'Space Launch Complex 40, Cape Canaveral',
    orbit: 'GTO',
    configuration: 'Falcon 9 v1.1',
    cost: '~$56.5M-61.2M',
    
    booster: 'B1004',
    landing: 'N/A',
    fairings: 'N/A',
    
    launch: '13',
    launchyear: '2014: 1',
    recoveries: '11/0/2'
  },
  
  ];
  
// Function to create a launch card element
function createLaunchCard(launch) {
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
      resultStatus.style.color = 'red';
  } else if (launch.result === 'Success') {
      resultStatus.style.color = 'lime';
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

  const booster = document.createElement('a');
  booster.href = `booster_${launch.booster}.html`; // Update the link URL here
  booster.textContent = `Booster: ${launch.booster}`;
  recovery.appendChild(booster);

  const fairings = document.createElement('a');
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
    landingStatus.style.color = 'red';
  } else if (launch.landing === 'Success') {
    landingStatus.style.color = 'lime';
  }
  landingP.appendChild(landingStatus);

  recovery.appendChild(landingP);

  //Statistics
  const statistics = document.createElement('div');
  statistics.className = 'statistics';

  const launchp = document.createElement('p');
  launchp.textContent = `Launch #: ${launch.launch}`;
  statistics.appendChild(launchp);

  const launchyear = document.createElement('p');
  launchyear.textContent = `Launches in ${launch.launchyear}`;
  statistics.appendChild(launchyear);

  const recoveries = document.createElement('p');
  recoveries.textContent = `Landings: ${launch.recoveries}`;
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
