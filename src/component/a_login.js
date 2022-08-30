import Login from "../sub-EL/login";
function AdminLogin(){
    return(
        <div>
            {Login(true,'~ EC01-02 admin page ~','Administrator area')}
        </div>
    )
}

export default AdminLogin;