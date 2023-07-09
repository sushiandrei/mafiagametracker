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
      button.textContent = buttons[i];
      button.className = 'status-btn';
      
      statusCell.appendChild(button);
    }
    
    row.appendChild(statusCell);
    
    document.querySelector('tbody').appendChild(row);
    
    // Add event listener to each status button
    var statusButtons = row.getElementsByClassName('status-btn');
    for (var j = 0; j < statusButtons.length; j++) {
      statusButtons[j].addEventListener('click', toggleStatus);
    }
  }
});

function toggleStatus() {
  var colors = ['red', 'yellow', 'green', 'blue'];
  var currentColor = this.style.backgroundColor;
  var index = colors.indexOf(currentColor);
  
  if (index === -1 || index === colors.length - 1) {
    // Set first color
    this.style.backgroundColor = colors[0];
  } else {
    // Set next color
    this.style.backgroundColor = colors[index + 1];
  }
}
