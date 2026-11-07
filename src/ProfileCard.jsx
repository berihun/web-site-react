function ProfileCard(props) {
  return (
    <div className="header">
      <button {...props}>Click Me</button>
    </div>
  );
}
// function ProfileCard({ name, age, isMember, hobbies, onHobbyClick }) {
//   return (
//     <div className="header">
//       <h3>Name: {name}</h3>
//       <h3>Age: {age}</h3>
//       <h3>Status: {isMember ? "Active Member" : "Guest Member"}</h3>
//       <h2>Hobbies:</h2>
//       <ul>
//         {hobbies.map((hobby, index) => (
//           <li key={index} onClick={() => onHobbyClick(hobby)}>
//             {hobby}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Fixed: changed PropTypes to propTypes (lowercase 'p')

export default ProfileCard;
