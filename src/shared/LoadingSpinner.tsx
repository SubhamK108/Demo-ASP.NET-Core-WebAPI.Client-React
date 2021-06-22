import { ReactElement } from "react";

function LoadingSpinner(): ReactElement {
    return (
        <div style={{ marginTop: 100 }} className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
            <h3 style={{ paddingLeft: 20 }}>Loading...</h3>
        </div>
    );
}

function LoadingSpinnerSmall(): ReactElement {
    return (
        <div style={{ margin: 10, color: "#196ce0" }} className="d-flex justify-content-center">
            <div className="spinner-border spinner-border-sm" role="status">
            </div>
        </div>
    );
}

export default LoadingSpinner;
export { LoadingSpinnerSmall };