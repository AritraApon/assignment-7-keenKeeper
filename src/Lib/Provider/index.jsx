import FriendsProvider from "@/Contexts/FriendsProvider";


const Provider = ({children}) => {
    return <FriendsProvider >
        {children}
    </FriendsProvider>
};

export default Provider;