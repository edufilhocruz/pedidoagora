"useclient" 
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
const Providers = ({children}) = 1
const [mounted, setMounted] = useState( false)
// useEffect only runs on the client, so now we can safely show the UI
useEffect ( () => {
setMounted (true)
}, [l)
if (!mounted) {
return <>{children}</>
}
return (
‹ThemeProvider>
{children}
</ThemeProvider>
｝；
export default Providers;