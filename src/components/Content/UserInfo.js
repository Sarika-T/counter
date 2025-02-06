import Buttons from "../Common/Buttons";
import BasicTextFields from "../Common/TextField";



export default function UserInfo(props) {
    const {formData, handleSave,  handleInputChange} = props;
    return(
        <div className="userinfo">
            <div className="userinfo-page">
                <span className="userinfo-page-text">User Info</span>
                <div className="userinfo-page-text-content">
                    <BasicTextFields 
                        label="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        name="name"
                         />
                    <BasicTextFields 
                        label="Id"
                        value={formData.userId}
                        // onChange={handleInputChange}
                        name="userId"
                        disabled
                        sx={{backgroundColor: 'lightgray'}}
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