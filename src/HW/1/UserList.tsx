import React from 'react';

type AddressType = {
    street?: string;
    city?: string;
};

type UserType = {
    id: number;
    name: string;
    age: number;
    address: AddressType;
};

type UserListPropsType = {
    users: Array<UserType>;
};

export const UserList = (props: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>
            <ul>asd
                {props.users.map((user)=>{
                    return(
                        <li key={user.id} id={`hw01-user-${user.id}`}>
                            {user.name}asd
                            (age: {user.age})
                            Address: {user.address.street}, {user.address.city}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};