import React from "react"
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';


 function ComposedTextField() {
    const [name, setName] = React.useState('Composed TextField');

    const handleChange = (event) => {
        setName(event.target.value);
    };

     return (
        <>
             <h1>Contact</h1>
             <h2>Reach out to us about business opportunities, media inquiries, or just to talk. Looking for job opportunities? Head over to Careers.</h2>
        <form className="form" noValidate autoComplete="off">

            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Name</InputLabel>
                <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
            </FormControl>

             </form>
             </>
    );
}

export default ComposedTextField