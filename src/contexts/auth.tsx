import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback
} from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api.default';

import { IUserProps } from '../@types/user';
import { IAuthProps, ISignInPros } from './auth.d';

const AuthContext = createContext<IAuthProps>({} as IAuthProps);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<IUserProps | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStorageData = async () => {
            const storagedUser = await AsyncStorage.getItem('@user');
            const storagedToken = await AsyncStorage.getItem('@token');

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
            }
            setLoading(false);
        }

        loadStorageData();
    }, []);

    const signIn = useCallback(async({ email, password}:ISignInPros) => {
        try{
            const  { data, headers }  = await api.post('/auth/sign-in', { email, password });
            
            const { authorization } = headers;
            
            await AsyncStorage.setItem('@rentAuto:user',JSON.stringify(data));
            await AsyncStorage.setItem('@rentAuto:token',authorization);
            setUser(data);
        
            api.defaults.headers.common['Authorization'] = `Bearer ${authorization}`;
        
        }catch(err:any){
            
            if(err.response.status === 401){
                return Alert.alert("Ops",err.response.data.message || "Falha na autenticação"); 
            }
            Alert.alert("Ops","Houve uma falha. Tente novamente mais tarde!");
        }
        
    },[]);

    const signOut = () => {
        AsyncStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                setUser,
                signIn,
                signOut,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = (): IAuthProps => useContext(AuthContext);

export { useAuth, AuthProvider }