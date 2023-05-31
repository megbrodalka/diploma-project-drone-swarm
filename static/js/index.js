document.addEventListener('DOMContentLoaded', function () { // Wait until the content is loaded

  const numberOfDrones = 8;

  // Get reference to the drone container element
  const droneContainer = document.getElementById('droneContainer');

  // Function to dynamically create new drone boxes
  function createDroneBox() {
    const newDroneBox = document.createElement('div');
    newDroneBox.className = 'drone w-40 h-40 bg-gray-200 border border-gray-400' +
                            ' rounded-md flex items-center justify-center mx-2 m-1';

    // Add content to the drone box
    const droneContent = document.createElement('p');
    droneContent.textContent = 'Drone Content';
    newDroneBox.appendChild(droneContent);

    return newDroneBox;
  }


  for (let i = 0; i < numberOfDrones; i++) {
    droneContainer.appendChild(createDroneBox());
  }

});