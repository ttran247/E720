import React from "react"
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox'

 function ComposedTextField() {
    const [name, setName] = React.useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

     return (
         <>
             <div className="contact-container">
             <h1 className="contact">Contact Us</h1>
             <h2 className="contact">Reach out to us about business opportunities, media inquiries, or just to talk. Looking for job opportunities? Head over to Careers.</h2>
             </div>
             <h1 className="Formh1"> Let's Get In Touch </h1>
        <form className="form" noValidate autoComplete="off">
            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                <OutlinedInput id="component-outlined"  label="Name" />
                 </FormControl>
                 <br/>
                 <FormControl variant="outlined">
                     <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                     <OutlinedInput id="component-outlined"label="Name" />
                 </FormControl>
                 <br />

                 <FormControl variant="outlined">
                     <InputLabel htmlFor="component-outlined">Company</InputLabel>
                     <OutlinedInput id="component-outlined" label="Name" />
                 </FormControl>
                 <br />

                 <FormControl variant="outlined">
                     <InputLabel htmlFor="component-outlined">Email</InputLabel>
                     <OutlinedInput id="component-outlined" label="Name" />
                 </FormControl>
                 <br />

                 <FormControl variant="outlined">
                     <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                     <OutlinedInput id="component-outlined"  label="Name" />
                 </FormControl>
             <form className="text-form">
                 <textarea className="textBox" id="text-area">Message</textarea>
             </form>
             </form>
             <h4 className="formh4">By clicking submit, you consent to us sending you the communications requested above in accordance with our privacy policy
                <Checkbox
                     disabled
                     color="primary"
                     inputProps={{ 'aria-label': 'secondary checkbox' }}
                 /> 
             </h4>
             <div className="subContainer">
                 <button className="SubmitButton">Submit</button>
                 
             </div>

             </>
    );
}

export default ComposedTextField