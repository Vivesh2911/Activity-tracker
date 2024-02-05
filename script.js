// Activity tracker functionality
let activities = [];

function addActivity() {
  let activityInput = document.getElementById('activity-name');
  let activityName = activityInput.value.trim();

  if (activityName === '') {
    alert('Please enter an activity name.');
    return;
  }

  activities.push(activityName);
  renderActivities();
  activityInput.value = '';
}

function removeActivity(index) {
  activities.splice(index, 1);
  renderActivities();
}

function renderActivities() {
  let activitiesList = document.getElementById('activities');
  activitiesList.innerHTML = '';

  activities.forEach((activity, index) => {
    let li = document.createElement('li');
    li.textContent = activity;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
      removeActivity(index);
    };

    li.appendChild(deleteBtn);
    activitiesList.appendChild(li);
  });
}
