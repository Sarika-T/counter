import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useNavigationBlocker(isFormModified, setShowModal, setPendingNavigation) {
    const navigate = useNavigate();
    const location = useLocation();

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

        window.addEventListener("popstate", handleNavigation);

        return () => {
            window.removeEventListener("popstate", handleNavigation);
        };
    }, [isFormModified, navigate, setShowModal, setPendingNavigation]);
}