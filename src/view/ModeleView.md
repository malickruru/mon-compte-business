    const [user, setUser] = useState([{},""]);
  useEffect(() => {
    if (!getCookie("7cortex_user")) {
      window.location.href = './signup'
    }
    
    setUser(getCookie("7cortex_user"))
    console.log(user);

  }, []);
    return (
        <MainLayout activeLink={"Tableau de bord"}>
            
        </MainLayout>
    );