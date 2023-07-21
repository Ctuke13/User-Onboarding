import styled from "styled-components";

const UserDiv = styled.div`
  margin: 10px 50px;
  border-bottom: 1px dotted black;
`;
export default function Users({ users }) {
  return (
    <div id="" className="users-container">
      {users.map((user, idx) => {
        return (
          <UserDiv key={idx + 1}>
            <div style={{ fontStyle: "bold" }}>
              {user.fName}&nbsp;{user.lName}
            </div>
            <br />
            <br />
            <div>{user.role}</div>
            <br />
            <div>{user.email}</div>
            <br />
          </UserDiv>
        );
      })}
    </div>
  );
}
