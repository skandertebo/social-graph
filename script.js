function positionAvatars(circleId, numberOfAvatars) {
  const circle = document.getElementById(circleId);
  const radius = circle.offsetWidth / 2;
  const avatarRadius = 20; // Radius of the avatar (half of 40px)

  for (let i = 0; i < numberOfAvatars; i++) {
    let theta = (i / numberOfAvatars) * 2 * Math.PI;
    let x = radius + radius * Math.cos(theta) - avatarRadius; // Centering the avatar on the circle edge
    let y = radius + radius * Math.sin(theta) - avatarRadius; // Centering the avatar on the circle edge

    let avatar = document.createElement("img");
    avatar.src = `https://source.unsplash.com/user/c_v_r?sig=${Math.random()}`;
    avatar.classList.add("avatar");
    avatar.style.left = `${x}px`;
    avatar.style.top = `${y}px`;

    circle.appendChild(avatar);
  }
}

// Initialize the avatars
positionAvatars("circle1", 5);
positionAvatars("circle2", 10);
positionAvatars("circle3", 15);
