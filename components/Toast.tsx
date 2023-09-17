import React from 'react';

import { ToastContainer, toast} from 'react-toastify';
import type { TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = (prop: {
  ToastType: TypeOptions
}, message: string | undefined) => {
  return (
    <div>
      <button onClick={() => toast(message, {
        type: prop.ToastType
        })}></button>
      <ToastContainer />
    </div>
  );
};

export default Toast;