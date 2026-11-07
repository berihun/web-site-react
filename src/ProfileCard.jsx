function ProfileCard({ name, age, isMember, hobbies, onHobbyClick }) {
  return (
    <div className="header">
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Status: {isMember ? "Active Member" : "Guest Member"}</h3>
      <h2>Hobbies:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index} onClick={() => onHobbyClick(hobby)}>
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
