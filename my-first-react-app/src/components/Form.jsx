import React from "react";
import "../styles/Form.css";
import Photo from "../images/photo.png"

function Form(props) {
    return(
        <div className="formDiv">
            <div className="Formfill">
                <h3>Personal Information</h3>
                <form>
                    <input type="text"  placeholder='First Name' className='Forminputs' />
                    <input type="text"  placeholder='Last Name' className='Forminputs' />
                    <input type="text"  placeholder='Profession/Title' className='Forminputs' />
                    <div className="PhotoInput">   
                        <input type="image" alt="Photo Button" name="Uploadphoto" src={Photo}  placeholder='Photo' id="PhotoInput" className='Forminputs' />                        </div>
                    <input type="text"  placeholder='Address' className='Forminputs' />
                    <input type="text"  placeholder='Phone Number' className='Forminputs' />
                    <input type="email"  placeholder='Email' className='Forminputs' />
                    <div className="description"><textarea type="text"  placeholder='Description' className='Forminputs' /></div>

                </form>
            </div>
            <div className="Formdisplay">

            </div>
        </div>
    );
}

export default Form;