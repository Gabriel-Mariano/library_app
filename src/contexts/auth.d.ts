import React from 'react';
import { IUserProps } from '../@types/user';

interface IAuthProps {
   signed:boolean, 
   user:IUserProps | null, 
   setUser:React.Dispatch<React.SetStateAction<IUserProps | null >>;
   loading:boolean;
   signIn:(data:ISignInPros)=>Promise<void>;
    signOut:()=>void;
}

interface ISignInPros {
    email:string;
    password:string;
}


interface ISignInResponse {
    token:string;
    user:IUserProps;
}

export { 
    IAuthProps, 
    ISignInPros,  
    ISignInResponse,
};