import { createContext, useReducer } from "react";
import { loginApi } from "../api/authApi";

export const AuthContext = createContext(null);

const initialState = {
    user : null,
    token: null,
    isAuthenticated : false,
    isLoading: false,
    error: "",
}

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START": return {
            ...state,
            isLoading: true,
            error: "",
        }
        case "LOGIN_SUCCESS": return {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            isAuthenticated: true,
            isLoading: false,
            error: "",
        }
        case "LOGIN_FAIL": return {
            ...state,
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
            error: action.payload,
        }
        case "LOGOUT": return {
            ...state,
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
            error: "",
        }

        default: 
            throw new Error (`처리되지 않은 action type :  ${action.type}`)
    }
}

export function AuthProvider ({ children }) {
    const  [state, dispatch] = useReducer(authReducer, initialState);

    const login = async ({ username, password}) => {
        dispatch({type: "LOGIN_START"});

        try {
            const data = await loginApi({ username, password});

            dispatch({
                type: "LOGIN_SUCCESS",
                payload: {
                    user: {
                        id: data.id,
                        username: data.username,
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        image: data.image,
                    },
                    token: data.accessToken,
                },
            });
        } catch (error) {
            const errorMessage = error?.response?.data?.message || "로그인에 실패 했습니다.";

            dispatch({
                type: "LOGIN_FAIL",
                payload: errorMessage,
            })
        }
    }

    const logout = () => {
        dispatch({type: "LOGOUT"});
    }

    return (
        <AuthContext.Provider 
            value={{
                ...state, 
                login, 
                logout
            }}
        >
            { children }
        </AuthContext.Provider>
    )

}