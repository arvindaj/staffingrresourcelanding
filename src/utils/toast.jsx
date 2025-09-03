import { toast } from 'react-toastify';


// Reusable toast success function
export const toastSuccess = (message) => {
    toast.success(message, {
        position: "top-right",
        // position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
    });
};

// Reusable toast error function
export const toastError = (message) => {
    toast.error(message, {
        // position: toast.POSITION.TOP_RIGHT,
        position: "top-right",
        autoClose: 2000,
    });
};