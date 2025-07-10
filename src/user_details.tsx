import type { User } from "./models";


const UserDetails: React.FC<User> = (data: User) => {

    const render = () => {
        return (<>
        <div className="row">
            <div className="col-12 col-md-4 p-1 m-0" >
                <p>
                    {data.user_name}
                </p>
            </div>

            <div className="col-12 col-md-4 p-1 m-0">
                <p>
                    {data.user_phone}
                </p>
            </div>

            <div className="col-12 col-md-4 p-1 m-0" >
                <p>
                    {data.user_email}
                </p>
            </div>
        </div>
        </>);
    };

    return render();
};

export default UserDetails;