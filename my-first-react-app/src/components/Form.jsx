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

                <h3>Experience</h3>
                <form >
                <input type="text"  placeholder='Profession/Title' className='Forminputs' />
                <input type="text"  placeholder='Company Name' className='Forminputs' />
                <input type="text"  placeholder='Company Location' className='Forminputs' />
                <input type="text"  placeholder='From' className='Forminputs' />
                <input type="text"  placeholder='To' className='Forminputs' />
                <input type='button' id="deleteBtn" value='Delete'/>
                <input type="button" id="addBtn" value="Add" />
                </form>

                <h3>Education</h3>
                <form>
                <input type="text"  placeholder='University Name' className='Forminputs' />
                <input type="text"  placeholder='Location' className='Forminputs' />
                <input type="text"  placeholder='Degree Level' className='Forminputs' />
                <input type="text"  placeholder='Subject/Program' className='Forminputs' />
                <input type="text"  placeholder='From' className='Forminputs' />
                <input type="text"  placeholder='To' className='Forminputs' />
                <input type='button' id="deleteBtn" value='Delete'/>
                <input type="button" id="addBtn" value="Add" />
                </form>
                <br />
            <div className="finalActionButtons">
                <input type="button" className="actionButtons" id="printCV" value="Print CV" />
                <input type="button" className="actionButtons" id="loadExample" value="Load Example"/>
                <input type="reset" className="actionButtons" id="reset" value="Reset" />
                </div>
            </div>
            <div className="Formdisplay">
                <div className="CVTitleBar">
                    <div><h1>User's Name</h1></div>
                </div>
                <div className="CVbody">
                        <div className="infoSection">
                            <h4>Description</h4>
                            <hr/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.
                            </p>
                            <h4>Experience</h4>
                            <hr />
                            <div className="experienceDiv">
                                <div className="experienceDetailDiv">
                                        <div className="yearsDiv">
                                            <div><h5>Start Year</h5>-<h5>End Year</h5></div>
                                        </div>
                                        <div className="companyDetail"> 
                                    
                                         <div>
                                          <h5>Position</h5>
                                         <p>Company Name <span>, Location</span></p>
                                        </div>   
                                    </div>
                                </div>
                                
                            </div>
                            {/* <div className="experienceDetailDiv">
                                        <div className="yearsDiv">
                                            <div><h5>From</h5>- <h5>To</h5></div>
                                        </div>
                                        <div className="companyDetail"> 
                                    
                                         <div>
                                          <h5>Position</h5>
                                         <p>Facebook Inc., Menlo Park</p>
                                        </div>   
                                    </div>
                                </div> */}

                            <h4>Education</h4>
                            <hr />
                            <div className="eductionDiv">
                                <div className="experienceDetailDiv">
                                        <div className="yearsDiv">
                                            <div><h5>Start Year</h5>-<h5>End Year</h5></div>
                                        </div>
                                        <div className="companyDetail"> 
                                    
                                         <div>
                                          <h5>University Name</h5>
                                         <p>Degree:<span> State Degree</span></p>
                                         <p>Subject: <span>State Program/Subject</span></p>
                                        </div>   
                                    </div>
                                </div>
                                
                            </div>
                                
                        </div>
                        <div className="personalDetailsDiv">
                            <div><img src="" alt="" /></div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Form;