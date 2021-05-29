import { ReactElement } from "react";

const LoadingSpinner = (): ReactElement => {
    return (
        <div style={{ marginTop: 100 }} className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
            <h3 style={{ paddingLeft: 20 }}>Loading...</h3>
        </div>
    );
}

export default LoadingSpinner;