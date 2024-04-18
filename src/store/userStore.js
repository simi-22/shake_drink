import {create} from 'zustand'
import {v4 } from 'uuid';

export const useUser = create((set)=>({
	id:'777',
	email:'choco@naver.com',
	password:'1234',
	nickName:'초코',
	setUser:({email, password, nickName})=>set({id:v4(), email,password, nickName}),
	editUser:({email, password, nickName}) =>set((state)=>({
		...state,
		email: email !== undefined ? email : state.email,
        password: password !== undefined ? password : state.password,
        nickName: nickName !== undefined ? nickName : state.nickName
	}))
}))