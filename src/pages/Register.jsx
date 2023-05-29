import { Helmet } from 'react-helmet';

import { RegForm } from 'components/regForm/RegForm';

const Register = () => {
    return (
        <main>
            <Helmet>
                <title>Registration</title>
            </Helmet>

            <RegForm/>
        </main>
    );
};

export default Register;
