document.getElementById('add-player-btn').addEventListener('click', function() {
  var playerName = prompt('Enter player name:');
  
  if (playerName) {
    var row = document.createElement('tr');
    
    var nameCell = document.createElement('td');
    nameCell.textContent = playerName;
    row.appendChild(nameCell);
    
    var statusCell = document.createElement('td');
    
    var buttons = ['dead', 'killer', 'police', 'doctor'];
    for (var i = 0; i < buttons.length; i++) {
      var button = document.createElement('button');
      button.textContent = '';
      button.className = buttons[i] + '-btn';
      
      statusCell.appendChild(button);
    }
    
    row.appendChild(statusCell);
    
    document.querySelector('tbody').appendChild(row);
    
    // Add event listener to each status button
    var statusButtons = row.getElementsByTagName('button');
    for (var j = 0; j < statusButtons.length; j++) {
      statusButtons[j].addEventListener('click', toggleStatus);
    }
  }
});

function toggleStatus() {
  var currentColor = this.style.backgroundColor;
  var className = this.className.split('-')[0];
  
  if (currentColor === 'gray') {
    // Set corresponding color
    if (className === 'dead') {
      this.style.backgroundColor = 'red';
    } else if (className === 'killer') {
      this.style.backgroundColor = 'yellow';
    } else if (className === 'police') {
      this.style.backgroundColor = 'green';
    } else if (className === 'doctor') {
      this.style.backgroundColor = 'blue';
    }
  } else {
    // Set back to gray
    this.style.backgroundColor = 'gray';
  }
}
