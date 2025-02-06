import Buttons from "../Common/Buttons";
import BasicTextFields from "../Common/TextField";



export default function ContactInfo(props) {

    const {formData, handleSave,  handleInputChange} = props;

    return(
        <div className="contactinfo">
            <div className="contactinfo-page">
                <div className="contactinfo-page-text">Contact Info</div>
                <div className="contactinfo-page-text-content">
                    <BasicTextFields 
                        label="Address"
                        value={formData.address}
                        onChange={ handleInputChange}
                        name="address"
                        />
                    <BasicTextFields 
                        label="Email"
                        value={formData.email}
                        onChange={ handleInputChange}
                        name="email"
                        />
                    <BasicTextFields 
                        label="Phone Number"
                        value={formData.phone}
                        onChange={ handleInputChange}
                        name="phone"
                        />
                    <Buttons 
                        name="Save" 
                        variant="contained" 
                        color="primary"
                        onClick={handleSave} 
                    />
                </div>
            </div>
        </div>
    )
}