import Header from "./Header";
import "./Content.scss";
import Counter from "./Counter";
import CommentBox from "../Common/Wysiwyg";
import UserInfo from "./UserInfo";
import ContactInfo from "./ContactInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { saveUserData } from "../../utils/UserData";
import BasicModal from "../Common/ModelContainer";
import { useNavigate } from 'react-router-dom';
import { useSpring, useTrail, animated } from '@react-spring/web';



export default function Content() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.user.userData);
    const [formData, setFormData] = useState({});
    const [isFormModified, setIsFormModified] = useState(false);
    const [open, setOpen] = useState(false);
   const [showModal, setShowModal] = useState(false);
   const [pendingNavigation, setPendingNavigation] = useState(null);
   const [toggle, setToggle] = useState(false);
   const [order, setOrder] = useState([0, 1, 2]);



    useEffect(() => {
        if (userData) {
            setFormData(userData);
        }
    }, [userData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
          const updatedData = { ...prevData, [name]: value };
          setIsFormModified(true);
          return updatedData;
        });
    };

    const handleSave = () => {
        dispatch(saveUserData(formData));
        setIsFormModified(false);

    };
    
    useEffect(() => {
        if (!formData.userId) {
          const generatedUserId = `${Date.now()}`;
          setFormData((prevData) => ({
            ...prevData,
            userId: generatedUserId,
          }));
        }
    }, []);
    
    const handleOpen = () => setOpen(true);
    const handleStay = () => {
        setOpen(false);
        setShowModal(false);
    }

    const handleLeave = () => {
        setShowModal(false);
        setIsFormModified(false);
        if (pendingNavigation) {
            pendingNavigation();
        } else {
            window.location.reload();
        }
    };

    const handleBeforeUnload = (e) => {
        if (isFormModified) {
            setShowModal(true);
            e.preventDefault();
            e.returnValue = '';
        }
    };


    useEffect(() => {
        const handleNavigation = (e) => {
            if (isFormModified) {
                e.preventDefault();
                setShowModal(true);
                setPendingNavigation(() => () => {
                    navigate(e.target.href);
                });
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        window.addEventListener("popstate", handleNavigation);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            window.removeEventListener("popstate", handleNavigation);
        };
    }, [isFormModified, navigate]);




    const modules = {
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
             {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']                                         
        ],
    };

    const footerAnimation = useSpring({
        from: { transform: 'translateY(100px)' },
        to: { transform: 'translateY(0px)' },
        reset: true,
        reverse: toggle,
        // onRest: () => {
        //     setToggle(!toggle);
        //     setOrder((prevOrder) => {
        //         const newOrder = [...prevOrder];
        //         newOrder.push(newOrder.shift());
        //         return newOrder;
        //     });
        // },
        config: { tension: 170, friction: 26, easing: 'ease-in-out' },
    });

    const trail = useTrail(3, {
        from: { transform: 'translateX(0px)' },
        to: { transform: 'translateX(20px)' },
        reset: true,
        reverse: toggle,
        config: { tension: 170, friction: 26, easing: 'ease-in-out' },
    });

    return(
        <div className="content">
            <div className="content-page">
                <div className="content-page-header">
                    <Header />
                </div>
                <div className="content-page-body">
                    <div className="content-page-body-box">
                        <Counter />
                    </div>
                    <div className="content-page-body-box1">
                        <CommentBox
                            placeholder= "Short Description"
                            modules= {modules}
                        />
                    </div>
                    <div className="content-page-body-box">
                        <UserInfo  handleInputChange={handleInputChange} formData={formData} handleSave={handleSave}/>
                    </div>
                    <div className="content-page-body-box1">
                        <ContactInfo handleInputChange={handleInputChange} formData={formData} handleSave={handleSave} />
                    </div>
                </div>
                <animated.div style={footerAnimation} className="content-page-footer">
                    {trail.map((style, index) => (
                        <animated.div
                            key={index}
                            style={{
                                ...style,
                                width: '98%',
                                height: '20px',
                                backgroundColor: order[index] === 0 ? 'rgb(250, 10, 238)' : order[index] === 1 ? '#0933ee' : 'rgb(245, 38, 11)',
                                // margin: '10px',
                                borderRadius: '5px',
                            }}
                        />
                    ))}
                </animated.div>
            </div>
            <BasicModal 
                open={showModal} 
                handleStay={handleStay} 
                handleLeave={handleLeave} 
            />
        </div>
    )
}