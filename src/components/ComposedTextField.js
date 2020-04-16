import React from "react"
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

 function ComposedTextField() {
    const [name, setName] = React.useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

     return (
        <>
             <h1 className="contact">Contact</h1>
             <h2 className="contact">Reach out to us about business opportunities, media inquiries, or just to talk. Looking for job opportunities? Head over to Careers.</h2>
        <form className="form" noValidate autoComplete="off">

            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                 </FormControl>
                 <br/>
                 <FormControl variant="outlined">
                     <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                     <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                 </FormControl>
                 <br />

                 <FormControl variant="outlined">
                     <InputLabel htmlFor="component-outlined">Company</InputLabel>
                     <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                 </FormControl>
                 <br />

                 <FormControl variant="outlined">
                     <InputLabel htmlFor="component-outlined">Email</InputLabel>
                     <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                 </FormControl>
                 <br />

                 <FormControl variant="outlined">
                     <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                     <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
                 </FormControl>

             </form>
             </>
    );
}

export default ComposedTextField