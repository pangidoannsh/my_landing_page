import { useRouter } from "next/router";
import { createContext, useState } from "react"

export const NavigateContext = createContext({
    isNavigate: false,
    handleNavigate: () => { }
});
export default function NavigateProvider({ children }) {
    const router = useRouter();

    const [isNavigate, setIsNavigate] = useState(false);
    function handleNavigate(path) {
        if (path !== router.pathname) {
            setIsNavigate(true)
        }
        router.push(path)
        // setTimeout(() => , 500);
    }

    return <NavigateContext.Provider value={{ isNavigate, handleNavigate }}>
        {children}
    </NavigateContext.Provider>
}