import {create} from 'zustand'
import {v4 } from 'uuid';

export const useUser = create((set)=>({
	id:'choco',
	email:'choco@naver.com',
	password:'1234',
	nickName:'초코',
	setUser:({email, password, nickName})=>set({id:v4(), email,password, nickName})
}))