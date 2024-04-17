import {create} from 'zustand'
import {v4 } from 'uuid';

export const useUser = create((set)=>({
	id:'',
	email:'',
	password:'',
	nickName:'',
	setUser:({email, password, nickName})=>set({id:v4(), email,password, nickName})
}))